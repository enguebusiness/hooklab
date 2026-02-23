import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { DEFAULT_IMAGES } from "@/lib/site-images";

export const dynamic = "force-dynamic";

const BUCKET = "private-gallery";
// Signed URL valide 1h côté Supabase (sert uniquement pour le fetch interne)
const SIGNED_URL_TTL = 3600;
// Le navigateur/CDN met en cache la réponse 55 min
const PROXY_CACHE_TTL = 3300;

async function proxyImage(
  url: string,
  cacheMaxAge: number
): Promise<NextResponse> {
  const upstream = await fetch(url, { redirect: "follow" });

  if (!upstream.ok) {
    return new NextResponse(null, { status: 502 });
  }

  const contentType =
    upstream.headers.get("content-type") ?? "application/octet-stream";

  return new NextResponse(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": `public, max-age=${cacheMaxAge}, s-maxage=${cacheMaxAge}, stale-while-revalidate=60`,
      // Empêche Google d'indexer cette route technique
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

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

  // ── URL externe (Unsplash, etc.) → proxy direct ───────────────────────────
  if (!rawUrl.startsWith("storage:")) {
    return proxyImage(rawUrl, 86400);
  }

  // ── Chemin bucket privé → générer une Signed URL puis proxifier ───────────
  const filePath = rawUrl.slice("storage:".length);
  const { data, error } = await adminClient.storage
    .from(BUCKET)
    .createSignedUrl(filePath, SIGNED_URL_TTL);

  if (error || !data?.signedUrl) {
    // Fallback sur l'image par défaut si la génération échoue
    const fallback = DEFAULT_IMAGES[key]?.url;
    if (fallback) {
      return proxyImage(fallback, 60);
    }
    return new NextResponse(null, { status: 503 });
  }

  return proxyImage(data.signedUrl, PROXY_CACHE_TTL);
}
