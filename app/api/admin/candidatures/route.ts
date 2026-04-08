import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyAdmin, isAdminError } from "@/lib/admin";

export const runtime = "nodejs";

// GET /api/admin/candidatures - Lister toutes les candidatures
// Sécurisé par auth Supabase + vérification is_admin
export async function GET() {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("candidatures")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erreur récupération candidatures:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ candidatures: data });
}
