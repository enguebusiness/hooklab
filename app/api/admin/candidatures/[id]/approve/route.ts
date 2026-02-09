import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { stripe } from "@/lib/stripe/client";
import { getBaseUrl } from "@/lib/utils";

export const runtime = "nodejs";

// POST /api/admin/candidatures/[id]/approve - Approuver une candidature
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { secret } = body;

  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const supabase = createAdminClient();

  // Récupérer la candidature
  const { data: candidature, error: fetchError } = await supabase
    .from("candidatures")
    .select("*")
    .eq("id", id)
    .single();

  if (fetchError || !candidature) {
    return NextResponse.json({ error: "Candidature introuvable." }, { status: 404 });
  }

  // Mettre à jour le statut
  const { error: updateError } = await supabase
    .from("candidatures")
    .update({ status: "approved" } as never)
    .eq("id", id);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  // Générer le lien de paiement Stripe
  let checkoutUrl: string | null = null;
  if (process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID) {
    try {
      const baseUrl = getBaseUrl();
      const email = (candidature as Record<string, unknown>).email as string;
      const candidatureId = (candidature as Record<string, unknown>).id as string;

      // Créer ou récupérer le customer Stripe
      const customers = await stripe.customers.list({ email, limit: 1 });
      let customerId: string;
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      } else {
        const customer = await stripe.customers.create({
          email,
          metadata: { candidature_id: candidatureId },
        });
        customerId = customer.id;
      }

      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
        metadata: { candidature_id: candidatureId, email },
        success_url: `${baseUrl}/merci?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/candidature`,
        allow_promotion_codes: true,
        billing_address_collection: "required",
      });

      checkoutUrl = session.url;

      // Envoyer le lien par email si Resend est configuré
      if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_your-api-key") {
        try {
          const { Resend } = await import("resend");
          const resend = new Resend(process.env.RESEND_API_KEY);
          const firstname = (candidature as Record<string, unknown>).firstname as string;

          await resend.emails.send({
            from: "HookLab <noreply@hooklab.fr>",
            to: email,
            subject: "Ta candidature HookLab est acceptée !",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #6D5EF6;">Félicitations ${firstname} !</h1>
                <p>Ta candidature au programme HookLab a été <strong>acceptée</strong> !</p>
                <p>Pour finaliser ton inscription et accéder au programme, clique sur le bouton ci-dessous :</p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${checkoutUrl}" style="background: #6D5EF6; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: bold; display: inline-block;">
                    Finaliser mon inscription (490€/mois)
                  </a>
                </div>
                <p style="color: #888; font-size: 13px;">Le paiement est sécurisé via Stripe. Tu peux payer en 2 mensualités de 490€.</p>
                <p>À très vite,<br/>L'équipe HookLab</p>
              </div>
            `,
          });
        } catch (emailError) {
          console.error("Erreur envoi email approbation:", emailError);
        }
      }
    } catch (stripeError) {
      console.error("Erreur Stripe:", stripeError);
    }
  }

  return NextResponse.json({
    success: true,
    checkoutUrl,
    message: checkoutUrl
      ? "Candidature approuvée. Lien de paiement généré."
      : "Candidature approuvée. Stripe non configuré, pas de lien de paiement.",
  });
}
