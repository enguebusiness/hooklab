import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://hooklab.eu";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "HookLab | Formation TikTok Shop France - Deviens Cr\u00e9ateur Affili\u00e9",
    template: "%s | HookLab",
  },
  description:
    "Formation coaching TikTok Shop en 8 semaines. Deviens cr\u00e9ateur affili\u00e9 et g\u00e9n\u00e8re des revenus avec l\u2019affiliation TikTok Shop en France. Programme complet : strat\u00e9gie, contenu, mon\u00e9tisation.",
  keywords: [
    "formation TikTok Shop",
    "coaching TikTok Shop",
    "affiliation TikTok Shop France",
    "gagner de l'argent TikTok Shop",
    "cr\u00e9ateur TikTok Shop France",
    "commission TikTok Shop",
    "programme affiliation TikTok",
    "revenus TikTok Shop",
    "devenir affili\u00e9 TikTok Shop",
    "mon\u00e9tisation TikTok France",
    "tuto TikTok Shop d\u00e9butant",
    "revenus passifs TikTok",
  ],
  authors: [{ name: "HookLab" }],
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
      "HookLab | Formation TikTok Shop France - Deviens Cr\u00e9ateur Affili\u00e9",
    description:
      "Formation coaching TikTok Shop en 8 semaines. Deviens cr\u00e9ateur affili\u00e9 et g\u00e9n\u00e8re tes premiers revenus avec l\u2019affiliation TikTok Shop en France.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HookLab - Formation TikTok Shop France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HookLab | Formation TikTok Shop France",
    description:
      "Deviens cr\u00e9ateur affili\u00e9 TikTok Shop et g\u00e9n\u00e8re des revenus en 8 semaines de coaching.",
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
    "@type": "Organization",
    name: "HookLab",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Programme de coaching TikTok Shop pour devenir cr\u00e9ateur affili\u00e9 en France.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "French",
    },
  };

  const jsonLdCourse = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Formation TikTok Shop - HookLab",
    description:
      "Programme de coaching intensif de 8 semaines pour devenir cr\u00e9ateur affili\u00e9 TikTok Shop. Apprenez \u00e0 cr\u00e9er du contenu, s\u00e9lectionner des produits et g\u00e9n\u00e9rer des commissions.",
    provider: {
      "@type": "Organization",
      name: "HookLab",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "490",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P8W",
      inLanguage: "fr",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdCourse),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
