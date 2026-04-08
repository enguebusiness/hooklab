import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyAdmin, isAdminError } from "@/lib/admin";

export const runtime = "nodejs";

// GET /api/admin/modules/[id] - Récupérer un module
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Module introuvable." }, { status: 404 });
  }

  return NextResponse.json({ module: data });
}

// PUT /api/admin/modules/[id] - Mettre à jour un module
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
  const body = await request.json();

  // Construire l'objet de mise à jour (seulement les champs fournis)
  const updates: Record<string, unknown> = {};
  if (body.title !== undefined) updates.title = body.title;
  if (body.description !== undefined) updates.description = body.description;
  if (body.week_number !== undefined) updates.week_number = body.week_number;
  if (body.order_index !== undefined) updates.order_index = body.order_index;
  if (body.content_type !== undefined) updates.content_type = body.content_type;
  if (body.content_url !== undefined) updates.content_url = body.content_url;
  if (body.duration_minutes !== undefined) updates.duration_minutes = body.duration_minutes;
  if (body.is_published !== undefined) updates.is_published = body.is_published;

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "Aucune modification fournie." }, { status: 400 });
  }

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("modules")
    .update(updates as never)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ module: data });
}

// DELETE /api/admin/modules/[id] - Supprimer un module
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
  const supabase = createAdminClient();

  // D'abord supprimer les progressions liées
  await supabase.from("user_progress").delete().eq("module_id", id);

  // Puis supprimer le module
  const { error } = await supabase
    .from("modules")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: "Module supprimé." });
}
