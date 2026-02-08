import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import type { Database } from "@/types/database.types";

// Client Supabase côté serveur (Server Components, Route Handlers)
// Lit le token d'auth depuis les cookies pour maintenir la session
export const createClient = async () => {
  const cookieStore = await cookies();

  // Récupérer le token d'accès depuis les cookies Supabase
  const accessToken = cookieStore.get("sb-access-token")?.value
    || cookieStore.get(`sb-${new URL(process.env.NEXT_PUBLIC_SUPABASE_URL!).hostname.split(".")[0]}-auth-token`)?.value;

  const client = createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
      },
    }
  );

  // Essayer de restaurer la session depuis les cookies
  const allCookies = cookieStore.getAll();

  // Chercher le cookie de session complet (format chunked ou simple)
  const projectRef = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL!).hostname.split(".")[0];
  const authCookieName = `sb-${projectRef}-auth-token`;

  // Reassembler les chunks si nécessaire
  let sessionData: string | null = null;
  const baseCookie = allCookies.find(c => c.name === authCookieName);
  if (baseCookie) {
    sessionData = baseCookie.value;
  } else {
    // Chercher les chunks (sb-xxx-auth-token.0, sb-xxx-auth-token.1, etc.)
    const chunks: string[] = [];
    for (let i = 0; i < 10; i++) {
      const chunk = allCookies.find(c => c.name === `${authCookieName}.${i}`);
      if (chunk) {
        chunks.push(chunk.value);
      } else {
        break;
      }
    }
    if (chunks.length > 0) {
      sessionData = chunks.join("");
    }
  }

  if (sessionData) {
    try {
      const parsed = JSON.parse(sessionData);
      if (parsed?.access_token && parsed?.refresh_token) {
        await client.auth.setSession({
          access_token: parsed.access_token,
          refresh_token: parsed.refresh_token,
        });
      }
    } catch {
      // Cookie invalide, on continue sans session
    }
  }

  return client;
};

// Client admin avec service role (webhooks, opérations admin)
export const createAdminClient = () => {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
};
