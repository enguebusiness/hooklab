import type { MetadataRoute } from "next";

const BASE_URL = "https://www.hooklab.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Page d'accueil - priorit\u00e9 max
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // D\u00e9mos m\u00e9tiers - pages strat\u00e9giques SEO
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

    // Pages SEO locales - site internet artisan + ville
    // Douai
    {
      url: `${BASE_URL}/site-internet-artisan-douai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Orchies
    {
      url: `${BASE_URL}/site-internet-artisan-orchies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Valenciennes
    {
      url: `${BASE_URL}/site-internet-artisan-valenciennes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Saint-Amand-les-Eaux
    {
      url: `${BASE_URL}/site-internet-artisan-saint-amand-les-eaux`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Arleux
    {
      url: `${BASE_URL}/site-internet-artisan-arleux`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Denain
    {
      url: `${BASE_URL}/site-internet-artisan-denain`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // L\u00e9gal
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/plan-du-site`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
