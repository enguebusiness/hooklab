import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import type { Profile } from "@/types/database.types";

const BUCKET = "private-gallery";

// ── Types MIME autorisés → extension de stockage ───────────────────────────
// L'extension est dérivée du MIME validé côté serveur, jamais du nom de fichier.
const MIME_TO_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png":  "png",
  "image/webp": "webp",
  "image/gif":  "gif",
  "image/avif": "avif",
};

// ── Signatures magic bytes ──────────────────────────────────────────────────
// Permet de détecter le vrai format binaire indépendamment du Content-Type
// déclaré par le client (qui peut être forgé).
const MAGIC_SIGNATURES: Array<{
  mime: string;
  check: (b: Uint8Array) => boolean;
}> = [
  {
    mime: "image/jpeg",
    check: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
  },
  {
    mime: "image/png",
    check: (b) =>
      b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47 &&
      b[4] === 0x0d && b[5] === 0x0a && b[6] === 0x1a && b[7] === 0x0a,
  },
  {
    mime: "image/gif",
    // GIF87a ou GIF89a
    check: (b) => b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38,
  },
  {
    mime: "image/webp",
    // RIFF....WEBP
    check: (b) =>
      b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
      b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50,
  },
  {
    mime: "image/avif",
    // ftyp box à l'offset 4 (structure ISOBMFF)
    check: (b) => b[4] === 0x66 && b[5] === 0x74 && b[6] === 0x79 && b[7] === 0x70,
  },
];

/**
 * Détecte le MIME réel du fichier via ses magic bytes.
 * Retourne null si aucune signature connue ne correspond.
 */
function detectMimeFromBytes(buffer: Uint8Array): string | null {
  for (const sig of MAGIC_SIGNATURES) {
    if (buffer.length >= 12 && sig.check(buffer)) return sig.mime;
  }
  return null;
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

  // ── 1. Vérifier le type MIME déclaré ──────────────────────────────────────
  if (!Object.hasOwn(MIME_TO_EXT, file.type)) {
    return NextResponse.json(
      { error: "Type de fichier non supporté. Utilisez JPEG, PNG, WebP, GIF ou AVIF." },
      { status: 400 }
    );
  }

  // ── 2. Limite de taille ───────────────────────────────────────────────────
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Fichier trop volumineux (max 5 Mo)" }, { status: 400 });
  }

  // ── 3. Lire le contenu binaire ────────────────────────────────────────────
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  // ── 4. Valider les magic bytes (anti-MIME spoofing) ───────────────────────
  // On détecte le vrai format à partir des octets du fichier, pas du Content-Type
  // envoyé par le client.
  const detectedMime = detectMimeFromBytes(buffer);
  if (!detectedMime) {
    return NextResponse.json(
      { error: "Le fichier ne correspond pas à un format image valide." },
      { status: 400 }
    );
  }
  // Le MIME réel doit correspondre au MIME déclaré
  if (detectedMime !== file.type) {
    return NextResponse.json(
      { error: "Le type du fichier ne correspond pas à son contenu." },
      { status: 400 }
    );
  }

  // ── 5. Construire le chemin de stockage ───────────────────────────────────
  // Extension toujours dérivée du MIME validé, jamais du nom de fichier fourni.
  const ext = MIME_TO_EXT[detectedMime];
  const sanitizedKey = imageKey.replace(/[^a-z0-9_-]/gi, "_");
  const filePath = `${sanitizedKey}/image.${ext}`;

  // ── 6. Upload vers Supabase Storage ──────────────────────────────────────
  const adminClient = createAdminClient();
  const { error } = await adminClient.storage
    .from(BUCKET)
    .upload(filePath, buffer, {
      contentType: detectedMime,
      upsert: true,
    });

  if (error) {
    return NextResponse.json(
      { error: `Erreur upload Supabase : ${error.message}` },
      { status: 500 }
    );
  }

  const storagePath = `storage:${filePath}`;
  return NextResponse.json({ storagePath, filePath });
}
