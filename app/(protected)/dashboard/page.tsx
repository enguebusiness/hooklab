import { createClient } from "@/lib/supabase/server";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/dashboard/ProgressBar";
import ModuleCard from "@/components/dashboard/ModuleCard";
import type { Module, UserProgress, Profile } from "@/types/database.types";

export const runtime = "nodejs";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Récupérer le profil
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user!.id)
    .single() as { data: Profile | null };

  // Récupérer les modules publiés
  const { data: modules } = await supabase
    .from("modules")
    .select("*")
    .eq("is_published", true)
    .order("week_number", { ascending: true })
    .order("order_index", { ascending: true }) as { data: Module[] | null };

  // Récupérer la progression
  const { data: progress } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user!.id) as { data: UserProgress[] | null };

  const totalModules = modules?.length || 0;
  const completedModules =
    progress?.filter((p) => p.completed).length || 0;
  const progressPercent =
    totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  // Prochain module non complété
  const completedIds = new Set(
    progress?.filter((p) => p.completed).map((p) => p.module_id)
  );
  const nextModules =
    modules?.filter((m) => !completedIds.has(m.id)).slice(0, 3) || [];

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Bonjour {profile?.full_name?.split(" ")[0] || "!"} 👋
        </h1>
        <p className="text-white/60">
          Voici un aperçu de ta progression dans le programme.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <Card>
          <p className="text-white/40 text-sm mb-1">Progression globale</p>
          <p className="text-2xl font-bold text-white mb-3">
            {Math.round(progressPercent)}%
          </p>
          <ProgressBar value={progressPercent} showPercentage={false} />
        </Card>
        <Card>
          <p className="text-white/40 text-sm mb-1">Modules complétés</p>
          <p className="text-2xl font-bold text-white">
            {completedModules}
            <span className="text-white/30 text-lg font-normal">
              /{totalModules}
            </span>
          </p>
        </Card>
        <Card>
          <p className="text-white/40 text-sm mb-1">Statut abonnement</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-success rounded-full" />
            <p className="text-success font-semibold">Actif</p>
          </div>
          {profile?.subscription_end_date && (
            <p className="text-white/30 text-xs mt-1">
              Jusqu&apos;au{" "}
              {new Date(profile.subscription_end_date).toLocaleDateString(
                "fr-FR"
              )}
            </p>
          )}
        </Card>
      </div>

      {/* Prochains modules */}
      {nextModules.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Continue ta formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nextModules.map((module) => {
              const moduleProgress = progress?.find(
                (p) => p.module_id === module.id
              );
              return (
                <ModuleCard
                  key={module.id}
                  module={module}
                  progress={moduleProgress}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Message si aucun module */}
      {totalModules === 0 && (
        <Card className="text-center py-12">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-white font-semibold text-lg mb-2">
            Le programme arrive bientôt !
          </h3>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Les modules de formation sont en cours de préparation. Tu seras
            notifié dès qu&apos;ils seront disponibles.
          </p>
        </Card>
      )}
    </div>
  );
}
