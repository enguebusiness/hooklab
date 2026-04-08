import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { verifyAdmin, isAdminError } from "@/lib/admin";

export const runtime = "nodejs";

// GET /api/admin/modules - Lister tous les modules (admin)
export async function GET() {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .order("week_number", { ascending: true })
    .order("order_index", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ modules: data });
}

// POST /api/admin/modules - Créer un nouveau module
export async function POST(request: Request) {
  const auth = await verifyAdmin();
  if (isAdminError(auth)) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const body = await request.json();
  const { title, description, week_number, order_index, content_type, content_url, duration_minutes, is_published } = body;

  if (!title || !week_number) {
    return NextResponse.json({ error: "Titre et semaine obligatoires." }, { status: 400 });
  }

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("modules")
    .insert({
      title,
      description: description || null,
      week_number,
      order_index: order_index ?? 0,
      content_type: content_type || null,
      content_url: content_url || null,
      duration_minutes: duration_minutes ?? null,
      is_published: is_published ?? false,
    } as never)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ module: data }, { status: 201 });
}
