"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";

interface MarkCompleteButtonProps {
  moduleId: string;
  userId: string;
  isCompleted: boolean;
}

export default function MarkCompleteButton({
  moduleId,
  userId,
  isCompleted: initialCompleted,
}: MarkCompleteButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(initialCompleted);

  const handleToggle = async () => {
    setLoading(true);

    try {
      const supabase = createClient();

      if (completed) {
        // Marquer comme non complété
        await (supabase
          .from("user_progress")
          .update({ completed: false, completed_at: null } as never)
          .eq("user_id", userId)
          .eq("module_id", moduleId));
      } else {
        // Marquer comme complété (upsert)
        await (supabase.from("user_progress").upsert({
          user_id: userId,
          module_id: moduleId,
          completed: true,
          completed_at: new Date().toISOString(),
        } as never));
      }

      setCompleted(!completed);
      router.refresh();
    } catch (err) {
      console.error("Erreur mise a jour progression:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleToggle}
      loading={loading}
      variant={completed ? "secondary" : "primary"}
    >
      {completed ? (
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-success"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Complete - Annuler
        </span>
      ) : (
        "Marquer comme complete"
      )}
    </Button>
  );
}
