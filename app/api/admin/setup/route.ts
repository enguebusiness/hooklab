import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

// POST /api/admin/setup - Créer le premier compte admin
// Ne fonctionne QUE s'il n'existe aucun admin dans la base
export async function POST(request: Request) {
  const supabase = createAdminClient();

  // Vérifier qu'aucun admin n'existe
  const { data: existingAdmins } = await supabase
    .from("profiles")
    .select("id")
    .eq("is_admin", true);

  if (existingAdmins && existingAdmins.length > 0) {
    return NextResponse.json(
      { error: "Un compte admin existe déjà. Cette route est désactivée." },
      { status: 403 }
    );
  }

  const body = await request.json();
  const { email, password, full_name } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Email et mot de passe requis." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Le mot de passe doit contenir au moins 8 caractères." }, { status: 400 });
  }

  // Créer le compte auth Supabase
  const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: full_name || "Admin" },
  });

  if (authError) {
    console.error("Erreur création admin:", authError);
    return NextResponse.json({ error: authError.message }, { status: 500 });
  }

  if (!authUser.user) {
    return NextResponse.json({ error: "Erreur lors de la création du compte." }, { status: 500 });
  }

  // Mettre à jour le profil en admin
  // Le profil est normalement créé par un trigger Supabase
  // On attend un instant puis on le met à jour
  // Si pas de trigger, on le crée manuellement
  const { data: existingProfile } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", authUser.user.id)
    .single();

  if (existingProfile) {
    await supabase
      .from("profiles")
      .update({
        is_admin: true,
        full_name: full_name || "Admin",
        subscription_status: "active",
      } as never)
      .eq("id", authUser.user.id);
  } else {
    // Créer le profil manuellement
    await supabase.from("profiles").insert({
      id: authUser.user.id,
      email,
      full_name: full_name || "Admin",
      is_admin: true,
      subscription_status: "active",
    } as never);
  }

  return NextResponse.json({
    success: true,
    message: "Compte admin créé avec succès ! Connecte-toi sur /login puis va sur /admin.",
  });
}
