import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { getBaseUrl } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, candidatureId } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email requis." },
        { status: 400 }
      );
    }

    const baseUrl = getBaseUrl();

    // Créer ou récupérer le customer Stripe
    const customers = await stripe.customers.list({
      email,
      limit: 1,
    });

    let customerId: string;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    } else {
      const customer = await stripe.customers.create({
        email,
        metadata: { candidature_id: candidatureId || "" },
      });
      customerId = customer.id;
    }

    // Créer la session Checkout
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      metadata: {
        candidature_id: candidatureId || "",
        email,
      },
      success_url: `${baseUrl}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/candidature`,
      allow_promotion_codes: true,
      billing_address_collection: "required",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Erreur creation session Stripe:", err);
    return NextResponse.json(
      { error: "Erreur lors de la creation de la session de paiement." },
      { status: 500 }
    );
  }
}
