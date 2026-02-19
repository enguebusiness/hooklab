import { createAdminClient } from "@/lib/supabase/server";

export interface SiteImage {
  key: string;
  url: string;
  label: string;
  updated_at?: string;
}

// Images par défaut (utilisées si la table n'existe pas ou si l'image n'est pas configurée)
export const DEFAULT_IMAGES: Record<string, { url: string; label: string }> = {
  // ── Page d'accueil HookLab ──────────────────────────────────────────────────
  hero_portrait: {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    label: "Accueil — Photo portrait (Hero)",
  },
  about_photo: {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    label: "Accueil — Photo Enguerrand (Qui suis-je)",
  },
  process_google: {
    url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    label: "Accueil — Image Avis Google (étape 1)",
  },
  process_facebook: {
    url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80",
    label: "Accueil — Image Facebook (étape 2)",
  },
  process_site: {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    label: "Accueil — Image Site Internet (étape 3)",
  },
  demo_macon: {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    label: "Accueil — Image démo Maçon",
  },
  demo_paysagiste: {
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    label: "Accueil — Image démo Paysagiste",
  },
  demo_plombier: {
    url: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80",
    label: "Accueil — Image démo Plombier",
  },

  // ── Démo Maçon ─────────────────────────────────────────────────────────────
  macon_photo_cyprien: {
    url: "",
    label: "Maçon — Photo de Cyprien (sur le chantier)",
  },
  macon_hero: {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    label: "Maçon — Photo fond Hero",
  },
  macon_slider1_gauche: {
    url: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=800&q=80",
    label: "Maçon — Slider 1 photo gauche (avant : maison dans son jus)",
  },
  macon_slider1_droite: {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    label: "Maçon — Slider 1 photo droite (après : extension 30m²)",
  },
  macon_slider2_gauche: {
    url: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&w=800&q=80",
    label: "Maçon — Slider 2 photo gauche (avant : façade fissurée)",
  },
  macon_slider2_droite: {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    label: "Maçon — Slider 2 photo droite (après : ravalement complet)",
  },
  macon_slider3_gauche: {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    label: "Maçon — Slider 3 photo gauche (avant : terrain nu)",
  },
  macon_slider3_droite: {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?auto=format&fit=crop&w=800&q=80",
    label: "Maçon — Slider 3 photo droite (après : terrasse carrelée)",
  },

  // ── Démo Paysagiste ────────────────────────────────────────────────────────
  paysagiste_hero: {
    url: "https://images.unsplash.com/photo-1564429238961-bf8ad08feabb?auto=format&fit=crop&w=1920&q=80",
    label: "Paysagiste — Photo fond Hero",
  },
  paysagiste_service_creation: {
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    label: "Paysagiste — Card service Création espaces verts",
  },
  paysagiste_service_entretien: {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    label: "Paysagiste — Card service Entretien espaces verts",
  },
  paysagiste_services_photo: {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    label: "Paysagiste — Photo section savoir-faire",
  },
  paysagiste_equipe: {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
    label: "Paysagiste — Photo équipe (Qui sommes-nous)",
  },
  paysagiste_cta: {
    url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1920&q=80",
    label: "Paysagiste — Photo fond section contact/CTA",
  },
  paysagiste_galerie_1: {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    label: "Paysagiste — Galerie photo 1 (terrasse composite)",
  },
  paysagiste_galerie_2: {
    url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=600&q=80",
    label: "Paysagiste — Galerie photo 2 (piscine + clôture)",
  },
  paysagiste_galerie_3: {
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    label: "Paysagiste — Galerie photo 3 (massif fleuri)",
  },
  paysagiste_galerie_4: {
    url: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=600&q=80",
    label: "Paysagiste — Galerie photo 4 (haie bambou)",
  },
  paysagiste_galerie_5: {
    url: "https://images.unsplash.com/photo-1598902108854-d1446c81e20e?auto=format&fit=crop&w=600&q=80",
    label: "Paysagiste — Galerie photo 5 (allée pavés anciens)",
  },
  paysagiste_galerie_6: {
    url: "https://images.unsplash.com/photo-1582547403609-4244e80be657?auto=format&fit=crop&w=600&q=80",
    label: "Paysagiste — Galerie photo 6 (jardin japonais)",
  },
  paysagiste_galerie_7: {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    label: "Paysagiste — Galerie photo 7 (taille haies buis)",
  },
  paysagiste_galerie_8: {
    url: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=600&q=80",
    label: "Paysagiste — Galerie photo 8 (entretien parc 3000m²)",
  },
};

const STORAGE_PREFIX = "storage:";
const BUCKET = "private-gallery";
// Durée de validité des Signed URLs : 1 heure
const SIGNED_URL_TTL = 3600;

/**
 * Résout une valeur stockée en BDD vers une URL publique.
 * Si la valeur commence par "storage:", génère une Signed URL temporaire (60 min)
 * depuis le bucket privé Supabase.
 * Sinon, retourne la valeur telle quelle (URL externe).
 */
async function resolveUrl(raw: string): Promise<string> {
  if (!raw.startsWith(STORAGE_PREFIX)) return raw;

  const filePath = raw.slice(STORAGE_PREFIX.length); // ex: "hero_portrait/image.jpg"
  const supabase = createAdminClient();
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(filePath, SIGNED_URL_TTL);

  if (error || !data?.signedUrl) {
    // En cas d'erreur, on renvoie l'URL brute (le placeholder s'affichera)
    return raw;
  }
  return data.signedUrl;
}

/**
 * Récupère toutes les images du site depuis Supabase.
 * Les valeurs "storage:..." sont converties en Signed URLs à la volée.
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
      // Résoudre toutes les URLs en parallèle (signed URLs pour les paths storage:)
      await Promise.all(
        rows.map(async (row) => {
          if (row.url) {
            result[row.key] = await resolveUrl(row.url);
          }
        })
      );
    }
  } catch {
    // Table n'existe pas encore, on utilise les defaults
  }

  return result;
}

/**
 * Met à jour une image du site.
 * Accepte une URL externe (https://...) ou un chemin storage (storage:...).
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
