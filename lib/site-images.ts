import { createAdminClient } from "@/lib/supabase/server";

export interface SiteImage {
  key: string;
  url: string;
  label: string;
  updated_at?: string;
}

// Images par défaut (utilisées si la table n'existe pas ou si l'image n'est pas configurée)
export const DEFAULT_IMAGES: Record<string, { url: string; label: string }> = {
  hero_portrait: {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    label: "Photo portrait (Hero)",
  },
  about_photo: {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    label: "Photo Enguerrand (Qui suis-je)",
  },
  process_google: {
    url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    label: "Image Avis Google (étape 1)",
  },
  process_facebook: {
    url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80",
    label: "Image Facebook (étape 2)",
  },
  process_site: {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    label: "Image Site Internet (étape 3)",
  },
  demo_macon: {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    label: "Image démo Maçon",
  },
  demo_paysagiste: {
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    label: "Image démo Paysagiste",
  },
  demo_plombier: {
    url: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80",
    label: "Image démo Plombier",
  },
};

/**
 * Récupère toutes les images du site depuis Supabase.
 * Fallback sur les valeurs par défaut si la table n'existe pas.
 */
export async function getSiteImages(): Promise<Record<string, string>> {
  const result: Record<string, string> = {};

  // Mettre les defaults d'abord
  for (const [key, val] of Object.entries(DEFAULT_IMAGES)) {
    result[key] = val.url;
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase.from("site_images").select("key, url");
    const rows = (data ?? []) as unknown as Pick<SiteImage, "key" | "url">[];

    if (!error) {
      for (const row of rows) {
        if (row.url) {
          result[row.key] = row.url;
        }
      }
    }
  } catch {
    // Table n'existe pas encore, on utilise les defaults
  }

  return result;
}

/**
 * Met à jour une image du site.
 */
export async function updateSiteImage(key: string, url: string): Promise<boolean> {
  try {
    const supabase = createAdminClient();
    const label = DEFAULT_IMAGES[key]?.label || key;

    const { error } = await (supabase.from("site_images") as ReturnType<typeof supabase.from>).upsert(
      { key, url, label, updated_at: new Date().toISOString() } as Record<string, unknown>,
      { onConflict: "key" }
    );

    return !error;
  } catch {
    return false;
  }
}
