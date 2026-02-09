"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Candidature {
  id: string;
  email: string;
  firstname: string;
  phone: string;
  persona: string;
  age: number;
  experience: string;
  time_daily: string;
  availability: string;
  start_date: string;
  motivation: string;
  monthly_goal: string;
  biggest_fear: string;
  tiktok_username: string | null;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

export default function AdminPage() {
  const [secret, setSecret] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [candidatures, setCandidatures] = useState<Candidature[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [checkoutUrls, setCheckoutUrls] = useState<Record<string, string>>({});
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCandidatures = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/candidatures?secret=${encodeURIComponent(secret)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setCandidatures(data.candidatures);
      setAuthenticated(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur de chargement");
    } finally {
      setLoading(false);
    }
  }, [secret]);

  useEffect(() => {
    // Vérifier si le secret est dans l'URL
    const params = new URLSearchParams(window.location.search);
    const urlSecret = params.get("secret");
    if (urlSecret) {
      setSecret(urlSecret);
    }
  }, []);

  useEffect(() => {
    if (secret && !authenticated) {
      fetchCandidatures();
    }
  }, [secret, authenticated, fetchCandidatures]);

  const handleApprove = async (id: string) => {
    setActionLoading(id);
    try {
      const res = await fetch(`/api/admin/candidatures/${id}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      if (data.checkoutUrl) {
        setCheckoutUrls((prev) => ({ ...prev, [id]: data.checkoutUrl }));
      }

      // Rafraîchir la liste
      await fetchCandidatures();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id: string) => {
    if (!confirm("Rejeter cette candidature ?")) return;
    setActionLoading(id);
    try {
      const res = await fetch(`/api/admin/candidatures/${id}/reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      await fetchCandidatures();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setActionLoading(null);
    }
  };

  const statusColors: Record<string, string> = {
    pending: "bg-warning/10 text-warning",
    approved: "bg-success/10 text-success",
    rejected: "bg-error/10 text-error",
  };

  const statusLabels: Record<string, string> = {
    pending: "En attente",
    approved: "Approuvée",
    rejected: "Rejetée",
  };

  // Login form
  if (!authenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-8 w-full max-w-sm">
          <h1 className="text-xl font-bold text-white mb-6 text-center">Admin HookLab</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchCandidatures();
            }}
          >
            <input
              type="password"
              placeholder="Clé secrète admin"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white placeholder-white/30 text-sm mb-4 focus:outline-none focus:border-primary"
            />
            {error && (
              <p className="text-error text-sm mb-4">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || !secret}
              className="w-full py-3 gradient-bg text-white font-semibold rounded-xl disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Connexion..." : "Accéder"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  const pending = candidatures.filter((c) => c.status === "pending");
  const approved = candidatures.filter((c) => c.status === "approved");
  const rejected = candidatures.filter((c) => c.status === "rejected");

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors mb-2 inline-block">
              &larr; Retour au site
            </Link>
            <h1 className="text-2xl font-bold text-white">Gestion des candidatures</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 bg-warning/10 text-warning rounded-lg">{pending.length} en attente</span>
              <span className="px-2 py-1 bg-success/10 text-success rounded-lg">{approved.length} approuvées</span>
              <span className="px-2 py-1 bg-error/10 text-error rounded-lg">{rejected.length} rejetées</span>
            </div>
            <button
              onClick={fetchCandidatures}
              className="px-3 py-1.5 bg-dark-lighter border border-dark-border rounded-lg text-white/60 text-sm hover:text-white transition-colors cursor-pointer"
            >
              Rafraîchir
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-error/10 border border-error/20 rounded-xl">
            <p className="text-error text-sm">{error}</p>
          </div>
        )}

        {/* Liste des candidatures */}
        {candidatures.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40">Aucune candidature pour le moment.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {candidatures.map((c) => (
              <div
                key={c.id}
                className="bg-dark-light border border-dark-border rounded-2xl overflow-hidden"
              >
                {/* Header row */}
                <div
                  className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-dark-lighter/50 transition-colors"
                  onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-white">
                      {c.firstname.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-white font-medium">{c.firstname}</p>
                      <p className="text-white/40 text-sm">{c.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white/30 text-xs">
                      {new Date(c.created_at).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${statusColors[c.status]}`}>
                      {statusLabels[c.status]}
                    </span>
                    <svg
                      className={`w-5 h-5 text-white/30 transition-transform ${expandedId === c.id ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expanded details */}
                {expandedId === c.id && (
                  <div className="px-6 pb-5 border-t border-dark-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                      <div>
                        <p className="text-white/40 text-xs mb-1">Téléphone</p>
                        <p className="text-white text-sm">{c.phone}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Âge</p>
                        <p className="text-white text-sm">{c.age} ans</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Profil</p>
                        <p className="text-white text-sm capitalize">{c.persona}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Expérience</p>
                        <p className="text-white text-sm">{c.experience}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Temps disponible</p>
                        <p className="text-white text-sm">{c.time_daily}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Disponibilité</p>
                        <p className="text-white text-sm">{c.availability}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Début souhaité</p>
                        <p className="text-white text-sm">{c.start_date}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Objectif mensuel</p>
                        <p className="text-white text-sm">{c.monthly_goal}</p>
                      </div>
                      {c.tiktok_username && (
                        <div>
                          <p className="text-white/40 text-xs mb-1">TikTok</p>
                          <p className="text-white text-sm">{c.tiktok_username}</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 py-3">
                      <div>
                        <p className="text-white/40 text-xs mb-1">Motivation</p>
                        <p className="text-white/80 text-sm bg-dark-lighter rounded-xl p-3">{c.motivation}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Plus grande peur</p>
                        <p className="text-white/80 text-sm bg-dark-lighter rounded-xl p-3">{c.biggest_fear}</p>
                      </div>
                    </div>

                    {/* Checkout URL si disponible */}
                    {checkoutUrls[c.id] && (
                      <div className="mt-3 p-3 bg-success/10 border border-success/20 rounded-xl">
                        <p className="text-success text-xs font-medium mb-1">Lien de paiement généré :</p>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            readOnly
                            value={checkoutUrls[c.id]}
                            className="flex-1 bg-dark-lighter border border-dark-border rounded-lg px-3 py-2 text-white text-xs"
                          />
                          <button
                            onClick={() => navigator.clipboard.writeText(checkoutUrls[c.id])}
                            className="px-3 py-2 bg-success/20 text-success rounded-lg text-xs font-medium hover:bg-success/30 transition-colors cursor-pointer"
                          >
                            Copier
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    {c.status === "pending" && (
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-dark-border">
                        <button
                          onClick={() => handleApprove(c.id)}
                          disabled={actionLoading === c.id}
                          className="px-4 py-2 bg-success/10 text-success border border-success/20 rounded-xl text-sm font-medium hover:bg-success/20 transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          {actionLoading === c.id ? "Approbation..." : "Approuver + Envoyer lien paiement"}
                        </button>
                        <button
                          onClick={() => handleReject(c.id)}
                          disabled={actionLoading === c.id}
                          className="px-4 py-2 bg-error/10 text-error border border-error/20 rounded-xl text-sm font-medium hover:bg-error/20 transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          Rejeter
                        </button>
                      </div>
                    )}

                    {c.status === "approved" && !checkoutUrls[c.id] && (
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-dark-border">
                        <button
                          onClick={() => handleApprove(c.id)}
                          disabled={actionLoading === c.id}
                          className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          {actionLoading === c.id ? "Génération..." : "Regénérer le lien de paiement"}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
