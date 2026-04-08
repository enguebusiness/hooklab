import Link from "next/link";
import Card from "@/components/ui/Card";
import type { Module, UserProgress } from "@/types/database.types";

interface ModuleCardProps {
  module: Module;
  progress?: UserProgress;
}

const contentTypeIcons: Record<string, React.ReactNode> = {
  video: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  pdf: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  text: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  ),
  quiz: (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

export default function ModuleCard({ module, progress }: ModuleCardProps) {
  const isCompleted = progress?.completed;

  return (
    <Link href={`/formations/${module.id}`}>
      <Card hover className="relative overflow-hidden group">
        {/* Status indicator */}
        {isCompleted && (
          <div className="absolute top-4 right-4">
            <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
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
            </div>
          </div>
        )}

        {/* Content type + Duration */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${
              isCompleted
                ? "bg-success/10 text-success"
                : "bg-primary/10 text-primary"
            }`}
          >
            {module.content_type && contentTypeIcons[module.content_type]}
            {module.content_type?.toUpperCase() || "CONTENU"}
          </span>
          {module.duration_minutes && (
            <span className="text-white/30 text-xs">
              {module.duration_minutes} min
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors">
          {module.title}
        </h3>

        {/* Description */}
        {module.description && (
          <p className="text-white/50 text-sm line-clamp-2">
            {module.description}
          </p>
        )}

        {/* Week badge */}
        <div className="mt-4 pt-3 border-t border-dark-border">
          <span className="text-white/30 text-xs">
            Semaine {module.week_number}
          </span>
        </div>
      </Card>
    </Link>
  );
}
