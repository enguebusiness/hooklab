import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://hooklab.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Page d'accueil - priorité max
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Démos métiers - pages stratégiques SEO
    {
      url: `${BASE_URL}/macon`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/paysagiste`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/plombier`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Candidature - page importante
    {
      url: `${BASE_URL}/candidature`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Pages SEO locales - site internet artisan + ville
    {
      url: `${BASE_URL}/site-internet-artisan-douai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/site-internet-artisan-orchies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/site-internet-artisan-valenciennes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/site-internet-artisan-saint-amand-les-eaux`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/site-internet-artisan-arleux`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/site-internet-artisan-denain`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Légal
    {
      url: `${BASE_URL}/cgv`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
