import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://hooklab.eu";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Cr\u00e9ation Site Internet Artisan & BTP Nord (59) | HookLab Flines-lez-Raches",
    template: "%s | HookLab",
  },
  description:
    "Sp\u00e9cialiste web pour artisans du b\u00e2timent et paysagistes \u00e0 Douai, Orchies, Valenciennes. Site ultra-rapide, s\u00e9curis\u00e9 et con\u00e7u pour g\u00e9n\u00e9rer des chantiers qualifi\u00e9s. Audit offert.",
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
    "HookLab",
    "hooklab.eu",
    "cr\u00e9ation site internet Nord",
    "site internet artisan 59",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
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
  // Schema.org LocalBusiness
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    name: "HookLab",
    url: BASE_URL,
    logo: `${BASE_URL}/icon-512.svg`,
    image: `${BASE_URL}/og-image.png`,
    description:
      "Agence web sp\u00e9cialis\u00e9e dans la cr\u00e9ation de sites et la visibilit\u00e9 Google pour les artisans du b\u00e2timent dans le Nord.",
    telephone: "+33604408157",
    email: "contact@hooklab.eu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 rue Mo\u00efse Lambert",
      addressLocality: "Flines-lez-Raches",
      postalCode: "59148",
      addressRegion: "Hauts-de-France",
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
      { "@type": "City", name: "Saint-Amand-les-Eaux" },
      { "@type": "City", name: "Denain" },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33604408157",
      contactType: "customer service",
      availableLanguage: "French",
    },
    sameAs: [],
  };

  // Schema.org WebSite - aide Google à afficher le nom du site et les sitelinks
  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "HookLab",
    alternateName: "HookLab Tech",
    url: BASE_URL,
    description:
      "Cr\u00e9ation de sites internet et r\u00e9f\u00e9rencement Google pour artisans du b\u00e2timent dans le Nord (59).",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Schema.org SiteNavigationElement - signale les pages principales à Google
  const jsonLdNavigation = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "@id": `${BASE_URL}/#navigation`,
    name: "Navigation principale",
    hasPart: [
      {
        "@type": "WebPage",
        name: "Accueil",
        url: BASE_URL,
      },
      {
        "@type": "WebPage",
        name: "D\u00e9mo Ma\u00e7on / Couvreur",
        url: `${BASE_URL}/macon`,
      },
      {
        "@type": "WebPage",
        name: "D\u00e9mo Paysagiste",
        url: `${BASE_URL}/paysagiste`,
      },
      {
        "@type": "WebPage",
        name: "D\u00e9mo Plombier",
        url: `${BASE_URL}/plombier`,
      },
      {
        "@type": "WebPage",
        name: "Mentions L\u00e9gales",
        url: `${BASE_URL}/mentions-legales`,
      },
      {
        "@type": "WebPage",
        name: "Politique de Confidentialit\u00e9",
        url: `${BASE_URL}/confidentialite`,
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#1B2A4A" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdOrganization, jsonLdWebSite, jsonLdNavigation]),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
