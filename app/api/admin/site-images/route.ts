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

// GET - Récupérer toutes les images
export async function GET() {
  const isAdmin = await checkAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const supabase = createAdminClient();
    const { data } = await supabase.from("site_images").select("*");
    const rows = (data ?? []) as unknown as SiteImageRow[];

    // Merge defaults avec les valeurs en base
    const images = Object.entries(DEFAULT_IMAGES).map(([key, def]) => {
      const saved = rows.find((d) => d.key === key);
      return {
        key,
        url: saved?.url || def.url,
        label: def.label,
        updated_at: saved?.updated_at || null,
      };
    });

    return NextResponse.json({ images });
  } catch {
    // Si la table n'existe pas, retourner les defaults
    const images = Object.entries(DEFAULT_IMAGES).map(([key, def]) => ({
      key,
      url: def.url,
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

  // Vérifier que l'URL est valide
  try {
    new URL(url);
  } catch {
    return NextResponse.json({ error: "URL invalide" }, { status: 400 });
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
