import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { DEFAULT_IMAGES, updateSiteImage } from "@/lib/site-images";
import type { Profile } from "@/types/database.types";

interface SiteImageRow {
  key: string;
  url: string;
  label: string | null;
  updated_at: string;
}

const BUCKET = "private-gallery";
const SIGNED_URL_TTL = 3600; // 1 heure

async function checkAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const adminClient = createAdminClient();
  const { data: profile } = await adminClient
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  return (profile as Pick<Profile, "is_admin"> | null)?.is_admin === true;
}

/**
 * Génère une URL de prévisualisation pour l'admin.
 * Pour les chemins "storage:", crée une Signed URL temporaire.
 * Pour les URLs externes, retourne l'URL telle quelle.
 */
async function resolvePreviewUrl(rawUrl: string): Promise<string> {
  if (!rawUrl.startsWith("storage:")) return rawUrl;
  const filePath = rawUrl.slice("storage:".length);
  const adminClient = createAdminClient();
  const { data } = await adminClient.storage
    .from(BUCKET)
    .createSignedUrl(filePath, SIGNED_URL_TTL);
  return data?.signedUrl ?? rawUrl;
}

// GET - Récupérer toutes les images
export async function GET() {
  const isAdmin = await checkAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const adminClient = createAdminClient();
    const { data } = await adminClient.from("site_images").select("*");
    const rows = (data ?? []) as unknown as SiteImageRow[];

    // Merge defaults avec les valeurs en base, résoudre les signed URLs en parallèle
    const images = await Promise.all(
      Object.entries(DEFAULT_IMAGES).map(async ([key, def]) => {
        const saved = rows.find((d) => d.key === key);
        const rawUrl = saved?.url || def.url;
        const previewUrl = await resolvePreviewUrl(rawUrl);
        return {
          key,
          url: rawUrl,           // valeur brute stockée (ex: "storage:hero_portrait/image.jpg")
          previewUrl,            // URL résolvée pour l'affichage dans le navigateur
          label: def.label,
          updated_at: saved?.updated_at || null,
        };
      })
    );

    return NextResponse.json({ images });
  } catch {
    // Si la table n'existe pas, retourner les defaults
    const images = Object.entries(DEFAULT_IMAGES).map(([key, def]) => ({
      key,
      url: def.url,
      previewUrl: def.url,
      label: def.label,
      updated_at: null,
    }));
    return NextResponse.json({ images });
  }
}

// PUT - Mettre à jour une image
export async function PUT(request: NextRequest) {
  const isAdmin = await checkAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await request.json();
  const { key, url } = body;

  if (!key || !url) {
    return NextResponse.json({ error: "key et url requis" }, { status: 400 });
  }

  // Accepter soit une URL externe (https://...) soit un chemin storage (storage:...)
  const isStoragePath = url.startsWith("storage:");
  if (!isStoragePath) {
    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: "URL invalide" }, { status: 400 });
    }
  }

  const success = await updateSiteImage(key, url);
  if (!success) {
    return NextResponse.json(
      { error: "Erreur lors de la sauvegarde. Vérifiez que la table site_images existe dans Supabase." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
