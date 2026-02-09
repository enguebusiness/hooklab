import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

// GET /api/admin/candidatures - Lister toutes les candidatures
// Protégé par ADMIN_SECRET en query param
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
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
