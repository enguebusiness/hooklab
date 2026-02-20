import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { DEFAULT_IMAGES } from "@/lib/site-images";

export const dynamic = "force-dynamic";

const BUCKET = "private-gallery";
// Signed URL valide 1h côté Supabase
const SIGNED_URL_TTL = 3600;
// Le navigateur/CDN met en cache la redirection 55 min
// (légèrement inférieur au TTL pour éviter tout risque d'expiration)
const REDIRECT_CACHE_TTL = 3300;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;

  // Valider la clé (alphanumérique + underscores uniquement)
  if (!/^[a-z0-9_]+$/.test(key)) {
    return new NextResponse(null, { status: 400 });
  }

  const adminClient = createAdminClient();

  // Valeur par défaut
  let rawUrl: string = DEFAULT_IMAGES[key]?.url ?? "";

  // Valeur en BDD (prioritaire)
  try {
    const res = await adminClient
      .from("site_images")
      .select("url")
      .eq("key", key)
      .single();
    const row = res.data as { url: string } | null;
    if (row?.url) rawUrl = row.url;
  } catch {
    // Aucune ligne trouvée ou table absente → on garde le default
  }

  // Aucune image configurée (clé inconnue ou default vide)
  if (!rawUrl) {
    return new NextResponse(null, { status: 404 });
  }

  // ── URL externe (Unsplash, etc.) ──────────────────────────────────────────
  if (!rawUrl.startsWith("storage:")) {
    return NextResponse.redirect(rawUrl, {
      status: 302,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  }

  // ── Chemin bucket privé → générer une Signed URL fraîche ─────────────────
  const filePath = rawUrl.slice("storage:".length);
  const { data, error } = await adminClient.storage
    .from(BUCKET)
    .createSignedUrl(filePath, SIGNED_URL_TTL);

  if (error || !data?.signedUrl) {
    // Fallback sur l'image par défaut Unsplash si la génération échoue
    const fallback = DEFAULT_IMAGES[key]?.url;
    if (fallback) {
      return NextResponse.redirect(fallback, {
        status: 302,
        headers: { "Cache-Control": "public, max-age=60, s-maxage=60" },
      });
    }
    return new NextResponse(null, { status: 503 });
  }

  return NextResponse.redirect(data.signedUrl, {
    status: 302,
    headers: {
      "Cache-Control": `public, max-age=${REDIRECT_CACHE_TTL}, s-maxage=${REDIRECT_CACHE_TTL}, stale-while-revalidate=60`,
    },
  });
}
