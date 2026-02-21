import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // ── X-Content-Type-Options ─────────────────────────────────────────────────
  // Empêche le navigateur de "deviner" le Content-Type (MIME-sniffing).
  // Sans ce header, un fichier .jpg contenant du HTML pourrait être exécuté.
  response.headers.set("X-Content-Type-Options", "nosniff");

  // ── X-Frame-Options ────────────────────────────────────────────────────────
  // Bloque l'intégration de la page dans une iframe externe (clickjacking).
  response.headers.set("X-Frame-Options", "SAMEORIGIN");

  // ── Referrer-Policy ────────────────────────────────────────────────────────
  // Limite les infos envoyées dans le header Referer aux requêtes cross-origin.
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // ── Permissions-Policy ─────────────────────────────────────────────────────
  // Désactive les APIs navigateur sensibles non utilisées par le site.
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(self)"
  );

  // ── Content-Security-Policy ────────────────────────────────────────────────
  // Whitelist explicite des origines autorisées pour chaque type de ressource.
  const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
    ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).host
    : "*.supabase.co";

  const csp = [
    "default-src 'self'",

    // Next.js 15 (App Router + RSC) nécessite 'unsafe-inline' et 'unsafe-eval'
    // pour le bundle client et l'hydration côté navigateur.
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://m.stripe.com",

    // Tailwind CSS + styles inline de composants React
    "style-src 'self' 'unsafe-inline'",

    // Images : self, data URIs (placeholders SVG), blob (prévisualisations upload),
    // Unsplash (images par défaut), Supabase Storage (signed URLs), Sanity CDN
    `img-src 'self' data: blob: https://images.unsplash.com https://${supabaseHost} https://cdn.sanity.io`,

    // API calls : Supabase (REST + WebSocket realtime), Stripe
    `connect-src 'self' https://${supabaseHost} wss://${supabaseHost} https://api.stripe.com https://r.stripe.com`,

    // Polices web : uniquement self (pas de Google Fonts)
    "font-src 'self'",

    // Iframes : uniquement Stripe (paiement sécurisé)
    "frame-src https://js.stripe.com",

    // Aucun plugin (Flash, Java, etc.)
    "object-src 'none'",

    // Empêche l'injection de <base> qui pourrait détourner les URLs relatives
    "base-uri 'self'",

    // Les formulaires ne peuvent soumettre qu'à l'origine actuelle
    "form-action 'self'",

    // Force HTTPS pour toutes les sous-ressources (utile si déployé en HTTP accidentellement)
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  // Appliquer sur toutes les routes sauf les assets statiques Next.js
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.svg|.*\\.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp|.*\\.gif).*)",
  ],
};
