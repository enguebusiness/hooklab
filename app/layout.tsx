import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://hooklab.eu";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "HookLab | Cr\u00e9ation de sites web pour artisans du b\u00e2timent dans le Nord",
    template: "%s | HookLab",
  },
  description:
    "Agence web locale sp\u00e9cialis\u00e9e dans la visibilit\u00e9 Google des artisans du b\u00e2timent dans le Nord (Douai, Orchies, Valenciennes). Sites web, r\u00e9f\u00e9rencement local, syst\u00e8me de confiance.",
  keywords: [
    "site web artisan",
    "cr\u00e9ation site artisan b\u00e2timent",
    "r\u00e9f\u00e9rencement local artisan",
    "agence web Nord",
    "site internet couvreur",
    "site internet menuisier",
    "site internet paysagiste",
    "visibilit\u00e9 Google artisan",
    "site web Douai",
    "site web Valenciennes",
    "agence web Orchies",
    "site pro artisan Nord",
  ],
  authors: [{ name: "HookLab - Enguerrand Ozano" }],
  creator: "HookLab",
  publisher: "HookLab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "HookLab",
    title:
      "HookLab | Sites web pour artisans du b\u00e2timent dans le Nord",
    description:
      "Transformez votre bouche-\u00e0-oreille en syst\u00e8me automatique. Sites web et r\u00e9f\u00e9rencement Google pour artisans \u00e0 Douai, Orchies, Valenciennes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HookLab - Sites web pour artisans du Nord",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HookLab | Sites web pour artisans du Nord",
    description:
      "Agence web locale pour artisans du b\u00e2timent. Douai, Orchies, Valenciennes.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HookLab",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Agence web sp\u00e9cialis\u00e9e dans la cr\u00e9ation de sites et la visibilit\u00e9 Google pour les artisans du b\u00e2timent dans le Nord.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 rue Mo\u00efse Lambert",
      addressLocality: "Flines-lez-Raches",
      postalCode: "59148",
      addressRegion: "Nord",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.4267,
      longitude: 3.2372,
    },
    areaServed: [
      { "@type": "City", name: "Douai" },
      { "@type": "City", name: "Orchies" },
      { "@type": "City", name: "Valenciennes" },
      { "@type": "City", name: "Arleux" },
      { "@type": "City", name: "Flines-lez-Raches" },
    ],
    priceRange: "$$",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "French",
    },
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
