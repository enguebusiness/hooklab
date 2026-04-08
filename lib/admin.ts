import { createClient, createAdminClient } from "@/lib/supabase/server";
import type { Profile } from "@/types/database.types";

// Vérifie que l'utilisateur connecté est admin
// Utilisé dans les API routes admin
export async function verifyAdmin(): Promise<{ admin: Profile } | { error: string; status: number }> {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return { error: "Non authentifié.", status: 401 };
  }

  // Utiliser le client admin pour lire le profil (pas de RLS)
  const adminClient = createAdminClient();
  const { data: profile, error: profileError } = await adminClient
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    return { error: "Profil introuvable.", status: 404 };
  }

  if (!(profile as Profile).is_admin) {
    return { error: "Accès refusé.", status: 403 };
  }

  return { admin: profile as Profile };
}

// Helper pour répondre avec erreur si non-admin
export function isAdminError(result: { admin: Profile } | { error: string; status: number }): result is { error: string; status: number } {
  return "error" in result;
}
