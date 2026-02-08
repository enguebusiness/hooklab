import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { Module, UserProgress } from "@/types/database.types";

// GET /api/formations/[moduleId] - Récupérer un module
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ moduleId: string }> }
) {
  try {
    const { moduleId } = await params;
    const supabase = await createClient();

    // Vérifier l'authentification
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Non authentifie." },
        { status: 401 }
      );
    }

    // Vérifier l'abonnement actif
    const { data: profile } = await supabase
      .from("profiles")
      .select("subscription_status")
      .eq("id", user.id)
      .single() as { data: { subscription_status: string } | null };

    if (!profile || profile.subscription_status !== "active") {
      return NextResponse.json(
        { error: "Abonnement inactif." },
        { status: 403 }
      );
    }

    // Récupérer le module
    const { data: module, error } = await supabase
      .from("modules")
      .select("*")
      .eq("id", moduleId)
      .eq("is_published", true)
      .single() as { data: Module | null; error: unknown };

    if (error || !module) {
      return NextResponse.json(
        { error: "Module non trouve." },
        { status: 404 }
      );
    }

    // Récupérer la progression
    const { data: progress } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user.id)
      .eq("module_id", moduleId)
      .single() as { data: UserProgress | null };

    return NextResponse.json({ module, progress });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
