import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import type { Profile } from "@/types/database.types";

const BUCKET = "private-gallery";

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

// POST - Upload un fichier dans le bucket private-gallery
export async function POST(request: NextRequest) {
  const isAdmin = await checkAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const file = formData.get("file") as File | null;
  const imageKey = formData.get("key") as string | null;

  if (!file || !imageKey) {
    return NextResponse.json({ error: "Champs 'file' et 'key' requis" }, { status: 400 });
  }

  // Valider le type MIME
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: "Type de fichier non supporté. Utilisez JPEG, PNG, WebP, GIF ou AVIF." },
      { status: 400 }
    );
  }

  // Limiter à 5 Mo
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Fichier trop volumineux (max 5 Mo)" }, { status: 400 });
  }

  // Construire le chemin : ex. "hero/image.jpg"
  const ext = file.name.split(".").pop() ?? "jpg";
  const sanitizedKey = imageKey.replace(/[^a-zA-Z0-9_-]/g, "_");
  const filePath = `${sanitizedKey}/image.${ext}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const adminClient = createAdminClient();
  const { error } = await adminClient.storage
    .from(BUCKET)
    .upload(filePath, buffer, {
      contentType: file.type,
      upsert: true,
    });

  if (error) {
    return NextResponse.json(
      { error: `Erreur upload Supabase : ${error.message}` },
      { status: 500 }
    );
  }

  // Retourner le chemin avec préfixe "storage:"
  const storagePath = `storage:${filePath}`;
  return NextResponse.json({ storagePath, filePath });
}
