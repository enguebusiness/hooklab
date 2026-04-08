import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { createAdminClient } from "@/lib/supabase/server";
import Stripe from "stripe";

// Désactiver le body parser pour les webhooks Stripe
export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Signature manquante." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Erreur verification webhook:", err);
    return NextResponse.json(
      { error: "Signature invalide." },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();

  try {
    switch (event.type) {
      // Paiement initial réussi
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const email = session.metadata?.email || session.customer_email;
        const customerId = session.customer as string;

        if (!email) {
          console.error("Email manquant dans la session Stripe");
          break;
        }

        // Générer un mot de passe temporaire
        const tempPassword = generatePassword();

        // Créer le compte utilisateur Supabase
        const { data: authUser, error: authError } =
          await supabase.auth.admin.createUser({
            email,
            password: tempPassword,
            email_confirm: true,
            user_metadata: {
              full_name: email.split("@")[0],
            },
          });

        if (authError) {
          // L'utilisateur existe peut-être déjà
          console.error("Erreur creation user:", authError);

          // Mettre à jour le profil existant si l'utilisateur existe
          const { data: existingProfile } = await supabase
            .from("profiles")
            .select("id")
            .eq("email", email)
            .single() as { data: { id: string } | null };

          if (existingProfile) {
            await supabase
              .from("profiles")
              .update({
                subscription_status: "active",
                stripe_customer_id: customerId,
                subscription_end_date: new Date(
                  Date.now() + 60 * 24 * 60 * 60 * 1000 // 60 jours
                ).toISOString(),
              } as never)
              .eq("id", existingProfile.id);
          }
          break;
        }

        // Mettre à jour le profil avec les infos Stripe
        if (authUser.user) {
          await supabase
            .from("profiles")
            .update({
              subscription_status: "active",
              stripe_customer_id: customerId,
              subscription_end_date: new Date(
                Date.now() + 60 * 24 * 60 * 60 * 1000
              ).toISOString(),
            } as never)
            .eq("id", authUser.user.id);

          // Log du paiement
          await supabase.from("payments").insert({
            user_id: authUser.user.id,
            stripe_payment_intent_id:
              (session.payment_intent as string) || session.id,
            amount: session.amount_total || 49000,
            currency: session.currency || "eur",
            status: "succeeded",
            metadata: {
              checkout_session_id: session.id,
              candidature_id: session.metadata?.candidature_id,
            },
          } as never);
        }

        // Envoyer email de bienvenue avec credentials
        if (
          process.env.RESEND_API_KEY &&
          process.env.RESEND_API_KEY !== "re_your-api-key"
        ) {
          try {
            const { Resend } = await import("resend");
            const resend = new Resend(process.env.RESEND_API_KEY);

            await resend.emails.send({
              from: process.env.RESEND_FROM_EMAIL || "HookLab <onboarding@resend.dev>",
              to: email,
              subject: "Bienvenue dans HookLab ! Tes accès sont prêts",
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h1 style="color: #6D5EF6;">Bienvenue dans HookLab !</h1>
                  <p>Ton paiement a été confirmé. Voici tes accès :</p>
                  <div style="background: #1A1F2E; padding: 20px; border-radius: 12px; margin: 20px 0;">
                    <p style="color: #fff; margin: 5px 0;"><strong>Email :</strong> ${email}</p>
                    <p style="color: #fff; margin: 5px 0;"><strong>Mot de passe :</strong> ${tempPassword}</p>
                  </div>
                  <p>Connecte-toi sur <a href="${process.env.NEXT_PUBLIC_APP_URL}/login" style="color: #6D5EF6;">hooklab.fr/login</a> pour commencer.</p>
                  <p><strong>Pense à changer ton mot de passe après ta première connexion !</strong></p>
                  <p>À très vite,<br/>L'équipe HookLab</p>
                </div>
              `,
            });
          } catch (emailError) {
            console.error("Erreur envoi email welcome:", emailError);
          }
        }

        break;
      }

      // Renouvellement mensuel réussi
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        // Mettre à jour la date de fin d'abonnement
        const { data: profile } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customerId)
          .single() as { data: { id: string } | null };

        if (profile) {
          await supabase
            .from("profiles")
            .update({
              subscription_status: "active",
              subscription_end_date: new Date(
                Date.now() + 30 * 24 * 60 * 60 * 1000
              ).toISOString(),
            } as never)
            .eq("id", profile.id);

          // Log du paiement
          const invoicePI = (invoice as unknown as Record<string, unknown>).payment_intent;
          await supabase.from("payments").insert({
            user_id: profile.id,
            stripe_payment_intent_id:
              (invoicePI as string) || invoice.id,
            amount: invoice.amount_paid,
            currency: invoice.currency,
            status: "succeeded",
            metadata: { invoice_id: invoice.id },
          } as never);
        }

        break;
      }

      // Abonnement annulé
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        await supabase
          .from("profiles")
          .update({ subscription_status: "cancelled" } as never)
          .eq("stripe_customer_id", customerId);

        break;
      }

      default:
        console.log(`Webhook non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Erreur traitement webhook:", err);
    return NextResponse.json(
      { error: "Erreur traitement webhook." },
      { status: 500 }
    );
  }
}

// Générateur de mot de passe temporaire
function generatePassword(): string {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
