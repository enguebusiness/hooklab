import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Card from "@/components/ui/Card";
import MarkCompleteButton from "./MarkCompleteButton";
import type { Module, UserProgress } from "@/types/database.types";

export const runtime = "nodejs";

interface ModulePageProps {
  params: Promise<{ moduleId: string }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { moduleId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Récupérer le module
  const { data: module } = await supabase
    .from("modules")
    .select("*")
    .eq("id", moduleId)
    .eq("is_published", true)
    .single() as { data: Module | null };

  if (!module) {
    redirect("/formations");
  }

  // Récupérer la progression pour ce module
  const { data: progress } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user!.id)
    .eq("module_id", moduleId)
    .single() as { data: UserProgress | null };

  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8">
        <Link
          href="/formations"
          className="text-white/40 hover:text-white transition-colors"
        >
          Formations
        </Link>
        <span className="text-white/20">/</span>
        <span className="text-white/40">Semaine {module.week_number}</span>
        <span className="text-white/20">/</span>
        <span className="text-white">{module.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 bg-primary/10 rounded-lg text-primary text-xs font-medium">
            Semaine {module.week_number}
          </span>
          {module.content_type && (
            <span className="inline-flex items-center px-2.5 py-1 bg-dark-lighter rounded-lg text-white/40 text-xs font-medium uppercase">
              {module.content_type}
            </span>
          )}
          {module.duration_minutes && (
            <span className="text-white/30 text-xs">
              {module.duration_minutes} min
            </span>
          )}
          {progress?.completed && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-success/10 rounded-lg text-success text-xs font-medium">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Complété
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">{module.title}</h1>
        {module.description && (
          <p className="text-white/60 text-lg">{module.description}</p>
        )}
      </div>

      {/* Contenu du module */}
      <Card className="mb-8">
        {/* Video */}
        {module.content_type === "video" && module.content_url && (
          <div className="aspect-video bg-dark-lighter rounded-2xl overflow-hidden mb-6">
            <iframe
              src={module.content_url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={module.title}
            />
          </div>
        )}

        {/* PDF */}
        {module.content_type === "pdf" && module.content_url && (
          <div className="mb-6">
            <a
              href={module.content_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Télécharger le PDF
            </a>
          </div>
        )}

        {/* Placeholder si pas de contenu */}
        {!module.content_url && (
          <div className="aspect-video bg-dark-lighter rounded-2xl flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎬</div>
              <p className="text-white/40 text-sm">
                Le contenu sera bientôt disponible
              </p>
            </div>
          </div>
        )}
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Link
          href="/formations"
          className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Retour aux formations
        </Link>

        <MarkCompleteButton
          moduleId={moduleId}
          userId={user!.id}
          isCompleted={progress?.completed || false}
        />
      </div>
    </div>
  );
}
