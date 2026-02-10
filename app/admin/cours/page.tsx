"use client";

import { useState, useEffect, useCallback } from "react";

interface Module {
  id: string;
  title: string;
  description: string | null;
  week_number: number;
  order_index: number;
  content_type: "video" | "pdf" | "text" | "quiz" | null;
  content_url: string | null;
  duration_minutes: number | null;
  is_published: boolean;
  created_at: string;
}

type FormData = {
  title: string;
  description: string;
  week_number: number;
  order_index: number;
  content_type: "video" | "pdf" | "text" | "quiz" | "";
  content_url: string;
  duration_minutes: number | "";
  is_published: boolean;
};

const emptyForm: FormData = {
  title: "",
  description: "",
  week_number: 1,
  order_index: 0,
  content_type: "video",
  content_url: "",
  duration_minutes: "",
  is_published: false,
};

export default function AdminCoursPage() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Vue : "list" ou "form"
  const [view, setView] = useState<"list" | "form">("list");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const fetchModules = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/modules");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setModules(data.modules);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur de chargement");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  // Auto-clear success message
  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(null), 3000);
      return () => clearTimeout(t);
    }
  }, [success]);

  const openNew = () => {
    // Calculer automatiquement le prochain order_index
    const maxOrder = modules.reduce((max, m) => Math.max(max, m.order_index), -1);
    setForm({ ...emptyForm, order_index: maxOrder + 1 });
    setEditingId(null);
    setView("form");
    setError(null);
  };

  const openEdit = (mod: Module) => {
    setForm({
      title: mod.title,
      description: mod.description || "",
      week_number: mod.week_number,
      order_index: mod.order_index,
      content_type: mod.content_type || "",
      content_url: mod.content_url || "",
      duration_minutes: mod.duration_minutes ?? "",
      is_published: mod.is_published,
    });
    setEditingId(mod.id);
    setView("form");
    setError(null);
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      setError("Le titre est obligatoire.");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim() || null,
        week_number: form.week_number,
        order_index: form.order_index,
        content_type: form.content_type || null,
        content_url: form.content_url.trim() || null,
        duration_minutes: form.duration_minutes === "" ? null : Number(form.duration_minutes),
        is_published: form.is_published,
      };

      let res: Response;
      if (editingId) {
        res = await fetch(`/api/admin/modules/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/admin/modules", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSuccess(editingId ? "Cours mis à jour !" : "Cours créé !");
      setView("list");
      await fetchModules();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/modules/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSuccess("Cours supprimé !");
      setDeleteConfirm(null);
      await fetchModules();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    }
  };

  const handleTogglePublish = async (mod: Module) => {
    try {
      const res = await fetch(`/api/admin/modules/${mod.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_published: !mod.is_published }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      await fetchModules();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    }
  };

  const contentTypeLabels: Record<string, string> = {
    video: "Vidéo",
    pdf: "PDF",
    text: "Texte",
    quiz: "Quiz",
  };

  // Grouper par semaine pour l'affichage liste
  const modulesByWeek = modules.reduce(
    (acc, mod) => {
      const w = mod.week_number;
      if (!acc[w]) acc[w] = [];
      acc[w].push(mod);
      return acc;
    },
    {} as Record<number, Module[]>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  // ========== FORMULAIRE ==========
  if (view === "form") {
    return (
      <div className="max-w-2xl">
        <button
          onClick={() => setView("list")}
          className="text-white/40 hover:text-white text-sm transition-colors mb-6 flex items-center gap-1 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à la liste
        </button>

        <h1 className="text-2xl font-bold text-white mb-8">
          {editingId ? "Modifier le cours" : "Nouveau cours"}
        </h1>

        {error && (
          <div className="mb-6 p-3 bg-error/10 border border-error/20 rounded-xl">
            <p className="text-error text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-6">
          {/* Titre */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">
              Titre du cours *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Ex : Introduction au TikTok Shop"
              className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              placeholder="Description courte du module..."
              className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary resize-none"
            />
          </div>

          {/* Semaine + Ordre */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Semaine
              </label>
              <select
                value={form.week_number}
                onChange={(e) => setForm({ ...form, week_number: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white text-sm focus:outline-none focus:border-primary"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((w) => (
                  <option key={w} value={w}>
                    Semaine {w}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Ordre d&apos;affichage
              </label>
              <input
                type="number"
                value={form.order_index}
                onChange={(e) => setForm({ ...form, order_index: Number(e.target.value) })}
                min={0}
                className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Type de contenu */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">
              Type de contenu
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(["video", "pdf", "text", "quiz"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setForm({ ...form, content_type: type })}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    form.content_type === type
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "bg-dark-lighter text-white/40 border border-dark-border hover:text-white"
                  }`}
                >
                  {contentTypeLabels[type]}
                </button>
              ))}
            </div>
          </div>

          {/* URL du contenu */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">
              URL du contenu
            </label>
            <input
              type="url"
              value={form.content_url}
              onChange={(e) => setForm({ ...form, content_url: e.target.value })}
              placeholder={
                form.content_type === "video"
                  ? "https://www.youtube.com/embed/..."
                  : form.content_type === "pdf"
                    ? "https://drive.google.com/file/..."
                    : "https://..."
              }
              className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary"
            />
            <p className="text-white/20 text-xs mt-1">
              {form.content_type === "video"
                ? "Utilise l'URL d'intégration YouTube (embed). Ex : https://www.youtube.com/embed/VIDEO_ID"
                : "Lien direct vers le fichier ou la page."}
            </p>
          </div>

          {/* Durée */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-1.5">
              Durée (minutes)
            </label>
            <input
              type="number"
              value={form.duration_minutes}
              onChange={(e) =>
                setForm({
                  ...form,
                  duration_minutes: e.target.value === "" ? "" : Number(e.target.value),
                })
              }
              min={0}
              placeholder="15"
              className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          {/* Publié */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setForm({ ...form, is_published: !form.is_published })}
              className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                form.is_published ? "bg-success" : "bg-dark-lighter"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  form.is_published ? "translate-x-6.5" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className="text-white/80 text-sm">
              {form.is_published ? "Publié (visible par les élèves)" : "Brouillon (non visible)"}
            </span>
          </div>

          {/* Boutons */}
          <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-3 gradient-bg text-white font-semibold rounded-xl disabled:opacity-50 cursor-pointer"
            >
              {saving ? "Enregistrement..." : editingId ? "Mettre à jour" : "Créer le cours"}
            </button>
            <button
              onClick={() => setView("list")}
              className="px-6 py-3 bg-dark-lighter text-white/60 rounded-xl hover:text-white transition-colors cursor-pointer"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========== LISTE ==========
  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestion des cours</h1>
          <p className="text-white/40 text-sm mt-1">
            {modules.length} cours · {modules.filter((m) => m.is_published).length} publiés
          </p>
        </div>
        <button
          onClick={openNew}
          className="px-4 py-2.5 gradient-bg text-white font-semibold rounded-xl text-sm flex items-center gap-2 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Nouveau cours
        </button>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-error/10 border border-error/20 rounded-xl">
          <p className="text-error text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-6 p-3 bg-success/10 border border-success/20 rounded-xl">
          <p className="text-success text-sm">{success}</p>
        </div>
      )}

      {modules.length === 0 ? (
        <div className="text-center py-20 bg-dark-light border border-dark-border rounded-[20px]">
          <div className="text-5xl mb-4">📚</div>
          <h3 className="text-white font-semibold text-lg mb-2">Aucun cours</h3>
          <p className="text-white/40 text-sm mb-6">Crée ton premier cours pour commencer.</p>
          <button
            onClick={openNew}
            className="px-6 py-3 gradient-bg text-white font-semibold rounded-xl cursor-pointer"
          >
            Créer un cours
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(modulesByWeek)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([week, weekModules]) => (
              <div key={week}>
                <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                    Semaine {week}
                  </span>
                  <span className="text-white/30 text-xs font-normal">
                    {weekModules.length} cours
                  </span>
                </h2>
                <div className="space-y-2">
                  {weekModules
                    .sort((a, b) => a.order_index - b.order_index)
                    .map((mod) => (
                      <div
                        key={mod.id}
                        className="bg-dark-light border border-dark-border rounded-xl px-5 py-4 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          {/* Grip handle (visuel) */}
                          <span className="text-white/15 group-hover:text-white/30 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M7 2a2 2 0 10.001 4.001A2 2 0 007 2zm0 6a2 2 0 10.001 4.001A2 2 0 007 8zm0 6a2 2 0 10.001 4.001A2 2 0 007 14zm6-8a2 2 0 10-.001-4.001A2 2 0 0013 6zm0 2a2 2 0 10.001 4.001A2 2 0 0013 8zm0 6a2 2 0 10.001 4.001A2 2 0 0013 14z" />
                            </svg>
                          </span>

                          {/* Status dot */}
                          <span
                            className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                              mod.is_published ? "bg-success" : "bg-white/20"
                            }`}
                          />

                          {/* Info */}
                          <div className="min-w-0 flex-1">
                            <p className="text-white font-medium text-sm truncate">{mod.title}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              {mod.content_type && (
                                <span className="text-white/30 text-xs uppercase">
                                  {contentTypeLabels[mod.content_type] || mod.content_type}
                                </span>
                              )}
                              {mod.duration_minutes && (
                                <span className="text-white/20 text-xs">{mod.duration_minutes} min</span>
                              )}
                              <span className="text-white/20 text-xs">
                                #{mod.order_index}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 ml-4">
                          {/* Toggle publish */}
                          <button
                            onClick={() => handleTogglePublish(mod)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                              mod.is_published
                                ? "bg-success/10 text-success hover:bg-success/20"
                                : "bg-white/5 text-white/30 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {mod.is_published ? "Publié" : "Brouillon"}
                          </button>

                          {/* Edit */}
                          <button
                            onClick={() => openEdit(mod)}
                            className="p-2 text-white/30 hover:text-primary transition-colors cursor-pointer rounded-lg hover:bg-primary/5"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>

                          {/* Delete */}
                          {deleteConfirm === mod.id ? (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleDelete(mod.id)}
                                className="px-2 py-1 bg-error/10 text-error rounded-lg text-xs font-medium cursor-pointer hover:bg-error/20"
                              >
                                Confirmer
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="px-2 py-1 text-white/30 text-xs cursor-pointer hover:text-white"
                              >
                                Annuler
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirm(mod.id)}
                              className="p-2 text-white/30 hover:text-error transition-colors cursor-pointer rounded-lg hover:bg-error/5"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
