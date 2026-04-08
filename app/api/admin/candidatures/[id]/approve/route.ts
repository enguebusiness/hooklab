import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyAdmin, isAdminError } from "@/lib/admin";
import { stripe } from "@/lib/stripe/client";
import { getBaseUrl } from "@/lib/utils";

export const runtime = "nodejs";

// POST /api/admin/candidatures/[id]/approve - Approuver une candidature
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
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

  const email = (candidature as Record<string, unknown>).email as string;
  const firstname = (candidature as Record<string, unknown>).firstname as string;
  const candidatureId = (candidature as Record<string, unknown>).id as string;

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
  let stripeError: string | null = null;

  if (process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID) {
    try {
      const baseUrl = getBaseUrl();

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
    } catch (err) {
      stripeError = err instanceof Error ? err.message : "Erreur Stripe inconnue";
      console.error("Erreur Stripe:", err);
    }
  } else {
    stripeError = "STRIPE_SECRET_KEY ou STRIPE_PRICE_ID non configuré.";
  }

  // Envoyer l'email (indépendamment de Stripe)
  let emailSent = false;
  let emailError: string | null = null;

  if (!process.env.RESEND_API_KEY) {
    emailError = "RESEND_API_KEY non configuré sur Vercel.";
  } else {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.RESEND_FROM_EMAIL || "HookLab <onboarding@hooklab.eu>";

      const paymentButton = checkoutUrl
        ? `<a href="${checkoutUrl}" style="display:inline-block;background:linear-gradient(135deg,#6D5EF6,#9D8FF9);color:#ffffff;padding:16px 40px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;margin:10px 0;">Finaliser mon inscription</a>`
        : `<p style="color:#F59E0B;font-weight:600;">Le lien de paiement sera envoyé séparément.</p>`;

      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: `${firstname}, ta candidature HookLab est acceptée !`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#0B0F19;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:40px;">
      <div style="display:inline-block;background:linear-gradient(135deg,#6D5EF6,#9D8FF9);width:48px;height:48px;border-radius:12px;line-height:48px;color:#fff;font-weight:800;font-size:20px;">H</div>
      <span style="display:inline-block;vertical-align:top;margin-left:10px;line-height:48px;font-size:24px;font-weight:800;color:#ffffff;">Hook<span style="color:#6D5EF6;">Lab</span></span>
    </div>

    <!-- Card -->
    <div style="background:#1A1F2E;border:1px solid #2A2F3F;border-radius:20px;padding:40px 32px;">
      <h1 style="color:#ffffff;font-size:24px;margin:0 0 8px 0;">Félicitations ${firstname} !</h1>
      <p style="color:#10B981;font-size:14px;font-weight:600;margin:0 0 24px 0;">Ta candidature a été acceptée</p>

      <p style="color:#ffffffcc;font-size:15px;line-height:1.6;margin:0 0 16px 0;">
        On a étudié ton profil et on pense que tu as le potentiel pour réussir sur TikTok Shop.
      </p>
      <p style="color:#ffffffcc;font-size:15px;line-height:1.6;margin:0 0 32px 0;">
        Pour accéder au programme et commencer ta formation, il te reste une dernière étape :
      </p>

      <!-- CTA -->
      <div style="text-align:center;margin:32px 0;">
        ${paymentButton}
      </div>

      <!-- Détails -->
      <div style="background:#252A3A;border-radius:12px;padding:20px;margin:24px 0;">
        <p style="color:#ffffff99;font-size:13px;margin:0 0 8px 0;">Ce qui t'attend :</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="color:#ffffffcc;font-size:14px;padding:6px 0;">Programme complet de 8 semaines</td></tr>
          <tr><td style="color:#ffffffcc;font-size:14px;padding:6px 0;">Accompagnement personnalisé</td></tr>
          <tr><td style="color:#ffffffcc;font-size:14px;padding:6px 0;">Accès à la communauté HookLab</td></tr>
          <tr><td style="color:#ffffffcc;font-size:14px;padding:6px 0;">Stratégies TikTok Shop éprouvées</td></tr>
        </table>
      </div>

      <p style="color:#ffffff66;font-size:13px;line-height:1.5;margin:24px 0 0 0;">
        Le paiement est 100% sécurisé via Stripe. Tu peux payer en 2 mensualités de 490€.
        Si tu as des questions, réponds directement à cet email.
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:32px;">
      <p style="color:#ffffff40;font-size:12px;margin:0;">HookLab - Programme TikTok Shop</p>
      <p style="color:#ffffff30;font-size:11px;margin:8px 0 0 0;">Enguerrand Ozano · SIREN 994538932</p>
    </div>

  </div>
</body>
</html>
        `,
      });

      emailSent = true;
    } catch (err) {
      emailError = err instanceof Error ? err.message : "Erreur envoi email";
      console.error("Erreur envoi email approbation:", err);
    }
  }

  return NextResponse.json({
    success: true,
    checkoutUrl,
    emailSent,
    emailError,
    stripeError,
    message: [
      "Candidature approuvée.",
      checkoutUrl ? "Lien de paiement généré." : (stripeError || "Stripe non configuré."),
      emailSent ? "Email envoyé." : (emailError || "Email non envoyé."),
    ].join(" "),
  });
}
