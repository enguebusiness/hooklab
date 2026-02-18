import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Sidebar from "@/components/dashboard/Sidebar";
import type { Profile } from "@/types/database.types";

export const runtime = "nodejs";

export default async function DashboardLayout({
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
    redirect("/login");
  }

  // Récupérer le profil
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single() as { data: Profile | null };

  if (!profile) {
    redirect("/login");
  }

  // Vérifier l'abonnement actif
  if (profile.subscription_status !== "active") {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-dark">
      <Sidebar user={profile} />
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
