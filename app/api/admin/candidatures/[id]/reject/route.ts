import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyAdmin, isAdminError } from "@/lib/admin";

export const runtime = "nodejs";

// POST /api/admin/candidatures/[id]/reject - Rejeter une candidature
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("candidatures")
    .update({ status: "rejected" } as never)
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: "Candidature rejetée." });
}
