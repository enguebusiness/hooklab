import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";

export const runtime = "nodejs";

export default async function AdminDashboard() {
  const supabase = createAdminClient();

  // Récupérer les stats en parallèle
  const [candidaturesRes, modulesRes, profilesRes] = await Promise.all([
    supabase.from("candidatures").select("*"),
    supabase.from("modules").select("*"),
    supabase.from("profiles").select("*"),
  ]);

  const candidatures = (candidaturesRes.data || []) as { id: string; status: string; created_at: string }[];
  const modules = (modulesRes.data || []) as { id: string; is_published: boolean }[];
  const profiles = (profilesRes.data || []) as { id: string; subscription_status: string; created_at: string }[];

  const pendingCount = candidatures.filter((c) => c.status === "pending").length;
  const approvedCount = candidatures.filter((c) => c.status === "approved").length;
  const publishedModules = modules.filter((m) => m.is_published).length;
  const activeUsers = profiles.filter((p) => p.subscription_status === "active").length;

  // Candidatures récentes (5 dernières)
  const recentCandidatures = candidatures
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  return (
    <div className="max-w-6xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Admin</h1>
        <p className="text-white/60">Vue d&apos;ensemble de HookLab.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6">
          <p className="text-white/40 text-sm mb-1">Candidatures en attente</p>
          <p className="text-3xl font-bold text-warning">{pendingCount}</p>
          <p className="text-white/30 text-xs mt-1">{candidatures.length} au total</p>
        </div>
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6">
          <p className="text-white/40 text-sm mb-1">Candidatures approuvées</p>
          <p className="text-3xl font-bold text-success">{approvedCount}</p>
          <p className="text-white/30 text-xs mt-1">
            {candidatures.length > 0 ? Math.round((approvedCount / candidatures.length) * 100) : 0}% de conversion
          </p>
        </div>
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6">
          <p className="text-white/40 text-sm mb-1">Utilisateurs actifs</p>
          <p className="text-3xl font-bold text-primary">{activeUsers}</p>
          <p className="text-white/30 text-xs mt-1">{profiles.length} inscrits</p>
        </div>
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6">
          <p className="text-white/40 text-sm mb-1">Cours publiés</p>
          <p className="text-3xl font-bold text-white">{publishedModules}</p>
          <p className="text-white/30 text-xs mt-1">{modules.length} au total</p>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Candidatures récentes */}
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Candidatures récentes</h2>
            <Link href="/admin/candidatures" className="text-primary text-sm hover:underline">
              Tout voir
            </Link>
          </div>
          {recentCandidatures.length === 0 ? (
            <p className="text-white/30 text-sm">Aucune candidature.</p>
          ) : (
            <div className="space-y-3">
              {recentCandidatures.map((c) => (
                <div key={c.id} className="flex items-center justify-between">
                  <span className="text-white/60 text-sm truncate">
                    {new Date(c.created_at).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-lg text-xs font-medium ${
                      c.status === "pending"
                        ? "bg-warning/10 text-warning"
                        : c.status === "approved"
                          ? "bg-success/10 text-success"
                          : "bg-error/10 text-error"
                    }`}
                  >
                    {c.status === "pending" ? "En attente" : c.status === "approved" ? "Approuvée" : "Rejetée"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions rapides */}
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6">
          <h2 className="text-lg font-bold text-white mb-4">Actions rapides</h2>
          <div className="space-y-3">
            <Link
              href="/admin/candidatures"
              className="flex items-center gap-3 p-3 rounded-xl bg-dark-lighter hover:bg-dark-lighter/80 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-primary transition-colors">
                  Gérer les candidatures
                </p>
                <p className="text-white/30 text-xs">{pendingCount} en attente de traitement</p>
              </div>
            </Link>
            <Link
              href="/admin/cours"
              className="flex items-center gap-3 p-3 rounded-xl bg-dark-lighter hover:bg-dark-lighter/80 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-primary transition-colors">
                  Ajouter un cours
                </p>
                <p className="text-white/30 text-xs">{publishedModules} cours publiés</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
