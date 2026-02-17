"use client";

import { useEffect, useState } from "react";

interface SiteImage {
  key: string;
  url: string;
  label: string;
  updated_at: string | null;
}

export default function AdminImages() {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [editUrls, setEditUrls] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin/site-images")
      .then((r) => r.json())
      .then((data) => {
        setImages(data.images || []);
        const urls: Record<string, string> = {};
        for (const img of data.images || []) {
          urls[img.key] = img.url;
        }
        setEditUrls(urls);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (key: string) => {
    setSaving(key);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/site-images", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, url: editUrls[key] }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: `Image "${key}" mise à jour !` });
        setImages((prev) =>
          prev.map((img) =>
            img.key === key ? { ...img, url: editUrls[key], updated_at: new Date().toISOString() } : img
          )
        );
      } else {
        setMessage({ type: "error", text: data.error || "Erreur" });
      }
    } catch {
      setMessage({ type: "error", text: "Erreur réseau" });
    }
    setSaving(null);
  };

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
          Changez les URLs des images affichées sur le site. Collez un lien Noelshack, Unsplash, ou tout autre hébergeur d&apos;images.
        </p>
      </div>

      {message && (
        <div
          className={`mb-6 p-4 rounded-xl text-sm font-medium ${
            message.type === "success" ? "bg-success/10 text-success" : "bg-red-500/10 text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Info SQL */}
      <div className="mb-8 bg-dark-light border border-dark-border rounded-[20px] p-6">
        <p className="text-white/50 text-xs mb-2 font-medium">
          Si la sauvegarde échoue, créez la table dans Supabase (SQL Editor) :
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

      <div className="space-y-6">
        {images.map((img) => (
          <div key={img.key} className="bg-dark-light border border-dark-border rounded-[20px] p-6">
            <div className="flex items-start gap-6">
              {/* Preview */}
              <div className="w-32 h-24 rounded-xl overflow-hidden bg-black/30 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={editUrls[img.key] || img.url}
                  alt={img.label}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 24 24'%3E%3Cpath d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Form */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm">{img.label}</h3>
                  <span className="text-white/20 text-xs font-mono">{img.key}</span>
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
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={editUrls[img.key] || ""}
                    onChange={(e) => setEditUrls((prev) => ({ ...prev, [img.key]: e.target.value }))}
                    placeholder="https://..."
                    className="flex-1 px-4 py-2.5 bg-black/30 border border-dark-border rounded-xl text-white text-sm placeholder:text-white/20 focus:border-orange focus:ring-1 focus:ring-orange outline-none"
                  />
                  <button
                    onClick={() => handleSave(img.key)}
                    disabled={saving === img.key || editUrls[img.key] === img.url}
                    className="px-5 py-2.5 bg-orange hover:bg-orange/90 disabled:opacity-30 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed shrink-0"
                  >
                    {saving === img.key ? "..." : "Sauver"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
