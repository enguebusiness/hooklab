"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SiteImage {
  key: string;
  url: string;        // valeur brute (ex: "storage:hero_portrait/image.jpg" ou "https://...")
  previewUrl: string; // URL résolvée pour l'affichage
  label: string;
  updated_at: string | null;
}

type UploadState = "idle" | "uploading" | "saving" | "done" | "error";

interface ImageCardState {
  editUrl: string;       // valeur brute en cours d'édition
  previewUrl: string;    // URL pour l'aperçu
  uploadState: UploadState;
  uploadError: string | null;
}

export default function AdminImages() {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [cardState, setCardState] = useState<Record<string, ImageCardState>>({});
  const [globalMessage, setGlobalMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [draggingOver, setDraggingOver] = useState<string | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    fetch("/api/admin/site-images")
      .then((r) => r.json())
      .then((data) => {
        const imgs: SiteImage[] = data.images || [];
        setImages(imgs);
        const state: Record<string, ImageCardState> = {};
        for (const img of imgs) {
          state[img.key] = {
            editUrl: img.url,
            previewUrl: img.previewUrl,
            uploadState: "idle",
            uploadError: null,
          };
        }
        setCardState(state);
      })
      .finally(() => setLoading(false));
  }, []);

  const updateCard = useCallback((key: string, patch: Partial<ImageCardState>) => {
    setCardState((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }));
  }, []);

  // Upload d'un fichier + sauvegarde automatique
  const handleFile = useCallback(
    async (key: string, file: File) => {
      updateCard(key, { uploadState: "uploading", uploadError: null });

      // Aperçu local immédiat (object URL)
      const localPreview = URL.createObjectURL(file);
      updateCard(key, { previewUrl: localPreview });

      try {
        const form = new FormData();
        form.append("file", file);
        form.append("key", key);

        const uploadRes = await fetch("/api/admin/upload", { method: "POST", body: form });
        const uploadData = await uploadRes.json();

        if (!uploadRes.ok) {
          updateCard(key, { uploadState: "error", uploadError: uploadData.error || "Erreur upload" });
          return;
        }

        const { storagePath } = uploadData as { storagePath: string };

        // Sauvegarde automatique en BDD
        updateCard(key, { uploadState: "saving" });
        const saveRes = await fetch("/api/admin/site-images", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key, url: storagePath }),
        });
        const saveData = await saveRes.json();

        if (!saveRes.ok) {
          updateCard(key, { uploadState: "error", uploadError: saveData.error || "Erreur sauvegarde" });
          return;
        }

        // Succès : mettre à jour l'état
        updateCard(key, { editUrl: storagePath, uploadState: "done", uploadError: null });
        setImages((prev) =>
          prev.map((img) =>
            img.key === key
              ? { ...img, url: storagePath, previewUrl: localPreview, updated_at: new Date().toISOString() }
              : img
          )
        );
        setGlobalMessage({ type: "success", text: `"${key}" uploadé et sauvegardé !` });
        setTimeout(() => updateCard(key, { uploadState: "idle" }), 3000);
      } catch {
        updateCard(key, { uploadState: "error", uploadError: "Erreur réseau" });
      }
    },
    [updateCard]
  );

  // Sauvegarde manuelle d'une URL externe
  const handleSaveUrl = useCallback(
    async (key: string) => {
      const url = cardState[key]?.editUrl;
      if (!url) return;

      updateCard(key, { uploadState: "saving", uploadError: null });
      setGlobalMessage(null);

      try {
        const res = await fetch("/api/admin/site-images", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key, url }),
        });
        const data = await res.json();

        if (res.ok) {
          updateCard(key, { previewUrl: url, uploadState: "done" });
          setImages((prev) =>
            prev.map((img) =>
              img.key === key
                ? { ...img, url, previewUrl: url, updated_at: new Date().toISOString() }
                : img
            )
          );
          setGlobalMessage({ type: "success", text: `"${key}" mis à jour !` });
          setTimeout(() => updateCard(key, { uploadState: "idle" }), 3000);
        } else {
          updateCard(key, { uploadState: "error", uploadError: data.error || "Erreur" });
        }
      } catch {
        updateCard(key, { uploadState: "error", uploadError: "Erreur réseau" });
      }
    },
    [cardState, updateCard]
  );

  const handleDrop = useCallback(
    (key: string, e: React.DragEvent) => {
      e.preventDefault();
      setDraggingOver(null);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(key, file);
    },
    [handleFile]
  );

  const handleFileInputChange = useCallback(
    (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(key, file);
      // Reset input pour permettre de re-sélectionner le même fichier
      e.target.value = "";
    },
    [handleFile]
  );

  if (loading) {
    return (
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-2">Images du site</h1>
        <p className="text-white/60">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Images du site</h1>
        <p className="text-white/60">
          Uploadez vos fichiers directement dans le bucket privé Supabase, ou collez une URL externe.
        </p>
      </div>

      {globalMessage && (
        <div
          className={`mb-6 p-4 rounded-xl text-sm font-medium ${
            globalMessage.type === "success" ? "bg-success/10 text-success" : "bg-red-500/10 text-red-400"
          }`}
        >
          {globalMessage.text}
        </div>
      )}

      {/* Info SQL */}
      <div className="mb-8 bg-dark-light border border-dark-border rounded-[20px] p-6 space-y-4">
        <div>
          <p className="text-white/50 text-xs mb-2 font-medium">
            1. Créer la table <code className="text-orange">site_images</code> dans Supabase (SQL Editor) :
          </p>
          <pre className="bg-black/30 rounded-lg p-3 text-xs text-green-400 overflow-x-auto">
{`CREATE TABLE site_images (
  key TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  label TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);`}
          </pre>
        </div>
        <div>
          <p className="text-white/50 text-xs mb-2 font-medium">
            2. Créer le bucket <code className="text-orange">private-gallery</code> (Storage → New bucket, décocher &quot;Public&quot;) puis appliquer cette policy :
          </p>
          <pre className="bg-black/30 rounded-lg p-3 text-xs text-green-400 overflow-x-auto">
{`-- Autoriser le service role à tout faire (uploads serveur)
CREATE POLICY "service_role_full_access"
  ON storage.objects FOR ALL
  TO service_role
  USING (bucket_id = 'private-gallery')
  WITH CHECK (bucket_id = 'private-gallery');`}
          </pre>
        </div>
      </div>

      <div className="space-y-6">
        {images.map((img) => {
          const state = cardState[img.key];
          if (!state) return null;
          const isUploading = state.uploadState === "uploading";
          const isSaving = state.uploadState === "saving";
          const isBusy = isUploading || isSaving;
          const isDone = state.uploadState === "done";
          const isError = state.uploadState === "error";
          const isStoredInBucket = state.editUrl.startsWith("storage:");
          const urlChanged = state.editUrl !== img.url;

          return (
            <div key={img.key} className="bg-dark-light border border-dark-border rounded-[20px] p-6">
              <div className="flex items-start gap-6">
                {/* Preview */}
                <div className="w-32 h-24 rounded-xl overflow-hidden bg-black/30 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={state.previewUrl}
                    alt={img.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 24 24'%3E%3Cpath d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold text-sm">{img.label}</h3>
                    <span className="text-white/20 text-xs font-mono">{img.key}</span>
                    {isStoredInBucket && (
                      <span className="text-xs bg-orange/10 text-orange border border-orange/20 rounded-full px-2 py-0.5">
                        bucket privé
                      </span>
                    )}
                  </div>

                  {img.updated_at && (
                    <p className="text-white/30 text-xs mb-3">
                      Modifié le{" "}
                      {new Date(img.updated_at).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  )}

                  {/* Zone drag & drop */}
                  <div
                    className={`mb-3 border-2 border-dashed rounded-xl p-4 text-center transition-colors cursor-pointer ${
                      draggingOver === img.key
                        ? "border-orange bg-orange/5"
                        : "border-dark-border hover:border-orange/40 hover:bg-white/2"
                    } ${isBusy ? "opacity-50 pointer-events-none" : ""}`}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDraggingOver(img.key);
                    }}
                    onDragLeave={() => setDraggingOver(null)}
                    onDrop={(e) => handleDrop(img.key, e)}
                    onClick={() => fileInputRefs.current[img.key]?.click()}
                  >
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                      className="hidden"
                      ref={(el) => { fileInputRefs.current[img.key] = el; }}
                      onChange={(e) => handleFileInputChange(img.key, e)}
                    />

                    {isUploading ? (
                      <p className="text-orange text-xs font-medium">Upload en cours...</p>
                    ) : isSaving ? (
                      <p className="text-orange text-xs font-medium">Sauvegarde...</p>
                    ) : isDone ? (
                      <p className="text-success text-xs font-medium">Fichier enregistré !</p>
                    ) : (
                      <div className="space-y-1">
                        <p className="text-white/50 text-xs">
                          <span className="text-white/80 font-medium">Glissez une image</span> ou{" "}
                          <span className="text-orange font-medium underline">parcourir</span>
                        </p>
                        <p className="text-white/25 text-xs">JPEG · PNG · WebP · GIF · AVIF — max 5 Mo</p>
                      </div>
                    )}
                  </div>

                  {isError && (
                    <p className="text-red-400 text-xs mb-2">{state.uploadError}</p>
                  )}

                  {/* URL externe (fallback) */}
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={state.editUrl.startsWith("storage:") ? "" : state.editUrl}
                      onChange={(e) =>
                        updateCard(img.key, { editUrl: e.target.value, previewUrl: e.target.value })
                      }
                      placeholder="Ou coller une URL externe (https://...)"
                      disabled={isBusy}
                      className="flex-1 px-4 py-2.5 bg-black/30 border border-dark-border rounded-xl text-white text-sm placeholder:text-white/20 focus:border-orange focus:ring-1 focus:ring-orange outline-none disabled:opacity-40"
                    />
                    <button
                      onClick={() => handleSaveUrl(img.key)}
                      disabled={
                        isBusy ||
                        !state.editUrl ||
                        state.editUrl.startsWith("storage:") ||
                        !urlChanged
                      }
                      className="px-5 py-2.5 bg-orange hover:bg-orange/90 disabled:opacity-30 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed shrink-0"
                    >
                      {isSaving ? "..." : "Sauver"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
