import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import type { Profile } from "@/types/database.types";
import sharp from "sharp";

const BUCKET = "private-gallery";

// Taille cible : entre 300 Ko et 1 Mo
const TARGET_MAX_BYTES = 1_000_000;       // 1 Mo
const TARGET_MIN_BYTES =   300_000;       // 300 Ko (indicatif — on ne force pas l'inflation)

// Paliers de qualité WebP : on descend jusqu'à rentrer sous 1 Mo
const QUALITY_STEPS = [82, 72, 62, 50];

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

/**
 * Optimise l'image :
 * – Conversion en WebP (meilleur ratio qualité/poids sur le web)
 * – Auto-rotation via l'orientation EXIF (corrige les photos de téléphone)
 * – Strip de toutes les métadonnées (GPS, modèle appareil, EXIF) — les navigateurs assument sRGB
 * – Compression adaptative : démarre à q82, descend par paliers si > 1 Mo
 *
 * Retourne le buffer WebP optimisé et les stats (pour logging).
 */
async function optimizeToWebP(
  input: Buffer
): Promise<{ buffer: Buffer; quality: number; originalBytes: number; finalBytes: number }> {
  const originalBytes = input.length;

  for (const quality of QUALITY_STEPS) {
    const output = await sharp(input)
      .rotate()                     // Auto-rotation EXIF (corrige portrait/paysage)
      // withMetadata() non appelé → Sharp strip tout par défaut :
      // GPS, modèle appareil, IPTC… supprimés. Navigateurs assument sRGB.
      .webp({ quality, effort: 4 }) // effort 4 = bon compromis vitesse/compression
      .toBuffer();

    // On s'arrête dès qu'on passe sous 1 Mo
    // ou si on est déjà au dernier palier (on prend quoi qu'il en soit)
    if (output.length <= TARGET_MAX_BYTES || quality === QUALITY_STEPS.at(-1)) {
      return { buffer: output, quality, originalBytes, finalBytes: output.length };
    }
  }

  // Ne devrait jamais être atteint — TypeScript exige un return exhaustif
  throw new Error("Optimisation impossible");
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

// POST — Upload + optimisation automatique vers Supabase Storage
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

  // ── 1. Limite de taille brute (avant optimisation) ────────────────────────
  if (file.size > 20 * 1024 * 1024) {
    return NextResponse.json({ error: "Fichier trop volumineux (max 20 Mo avant optimisation)" }, { status: 400 });
  }

  // ── 2. Lire le contenu binaire ────────────────────────────────────────────
  const arrayBuffer = await file.arrayBuffer();
  const rawBuffer = new Uint8Array(arrayBuffer);

  // ── 3. Valider les magic bytes (anti-MIME spoofing) ───────────────────────
  const detectedMime = detectMimeFromBytes(rawBuffer);
  if (!detectedMime) {
    return NextResponse.json(
      { error: "Le fichier ne correspond pas à un format image valide (JPEG, PNG, WebP, AVIF, GIF)." },
      { status: 400 }
    );
  }

  // ── 4. Optimisation : conversion WebP + compression adaptative ────────────
  let optimized: Awaited<ReturnType<typeof optimizeToWebP>>;
  try {
    optimized = await optimizeToWebP(Buffer.from(rawBuffer));
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'optimisation de l'image." },
      { status: 500 }
    );
  }

  const { buffer, quality, originalBytes, finalBytes } = optimized;

  // ── 5. Construire le chemin de stockage ───────────────────────────────────
  // Toujours .webp quelle que soit l'entrée (JPEG, PNG, AVIF…)
  const sanitizedKey = imageKey.replace(/[^a-z0-9_-]/gi, "_");
  const filePath = `${sanitizedKey}/image.webp`;

  // ── 6. Upload vers Supabase Storage ──────────────────────────────────────
  const adminClient = createAdminClient();
  const { error } = await adminClient.storage
    .from(BUCKET)
    .upload(filePath, buffer, {
      contentType: "image/webp",
      upsert: true,
      cacheControl: "public, max-age=31536000", // 1 an (CDN Supabase)
    });

  if (error) {
    return NextResponse.json(
      { error: `Erreur upload Supabase : ${error.message}` },
      { status: 500 }
    );
  }

  const storagePath = `storage:${filePath}`;

  // Infos retournées pour le feedback admin
  const originalKb = Math.round(originalBytes / 1024);
  const finalKb    = Math.round(finalBytes / 1024);
  const inRange    = finalBytes >= TARGET_MIN_BYTES && finalBytes <= TARGET_MAX_BYTES;

  return NextResponse.json({
    storagePath,
    filePath,
    optimization: {
      originalKb,
      finalKb,
      quality,
      inRange,
      // Message lisible en fr pour l'UI
      summary: `${originalKb} Ko → ${finalKb} Ko (WebP q${quality})`,
    },
  });
}
