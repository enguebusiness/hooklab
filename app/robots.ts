import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://hooklab.eu";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/setup-admin/", "/dashboard/", "/profil/", "/formations/", "/login/", "/register/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
