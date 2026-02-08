import { createClient } from "@/lib/supabase/server";
import ModuleCard from "@/components/dashboard/ModuleCard";
import ProgressBar from "@/components/dashboard/ProgressBar";
import type { Module, UserProgress } from "@/types/database.types";

export const runtime = "nodejs";

export default async function FormationsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

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

  // Grouper les modules par semaine
  const modulesByWeek = (modules || []).reduce(
    (acc, module) => {
      const week = module.week_number;
      if (!acc[week]) acc[week] = [];
      acc[week].push(module);
      return acc;
    },
    {} as Record<number, Module[]>
  );

  const totalModules = modules?.length || 0;
  const completedModules =
    progress?.filter((p) => p.completed).length || 0;
  const progressPercent =
    totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Formations</h1>
        <p className="text-white/60 mb-6">
          Progression dans le programme HookLab - 8 semaines.
        </p>
        <ProgressBar
          value={progressPercent}
          label={`${completedModules} modules completes sur ${totalModules}`}
        />
      </div>

      {/* Modules par semaine */}
      {Object.entries(modulesByWeek).map(([week, weekModules]) => {
        const weekCompleted =
          weekModules?.filter((m) =>
            progress?.find((p) => p.module_id === m.id && p.completed)
          ).length || 0;
        const weekTotal = weekModules?.length || 0;

        return (
          <div key={week} className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                Semaine {week}
              </h2>
              <span className="text-white/30 text-sm">
                {weekCompleted}/{weekTotal} completes
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {weekModules?.map((module) => {
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
        );
      })}

      {/* Message si aucun module */}
      {totalModules === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">📚</div>
          <h3 className="text-white font-semibold text-lg mb-2">
            Aucun module disponible
          </h3>
          <p className="text-white/40 text-sm">
            Les modules de formation seront bientot disponibles.
          </p>
        </div>
      )}
    </div>
  );
}
