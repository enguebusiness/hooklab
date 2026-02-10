import { redirect } from "next/navigation";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import AdminShell from "@/components/admin/AdminShell";
import type { Profile } from "@/types/database.types";

export const runtime = "nodejs";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  // Vérifier l'authentification
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/admin");
  }

  // Vérifier le statut admin via service role (pas de RLS)
  const adminClient = createAdminClient();
  const { data: profile } = await adminClient
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const typedProfile = profile as Profile | null;

  if (!typedProfile || !typedProfile.is_admin) {
    redirect("/");
  }

  return (
    <AdminShell
      adminName={typedProfile.full_name || "Admin"}
      adminEmail={typedProfile.email}
    >
      {children}
    </AdminShell>
  );
}
