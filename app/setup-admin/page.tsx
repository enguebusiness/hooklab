"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminSetupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, full_name: fullName }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de la création.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-dark-light border border-dark-border rounded-[20px] p-8">
            <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Compte admin créé !</h1>
            <p className="text-white/60 text-sm mb-6">
              Ton compte admin a été créé avec succès. Connecte-toi pour accéder au panel d&apos;administration.
            </p>
            <Link
              href="/login"
              className="inline-block px-6 py-3 gradient-bg text-white font-semibold rounded-xl"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-2xl font-bold text-white">
              Hook<span className="gradient-text">Lab</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Configuration admin</h1>
          <p className="text-white/60 text-sm">
            Crée ton compte administrateur. Cette page ne fonctionne qu&apos;une seule fois.
          </p>
        </div>

        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6 md:p-8">
          <form onSubmit={handleSetup} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-1.5">
                Nom complet
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enguerrand Ozano"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="ton@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1.5">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="Minimum 8 caractères"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-dark-lighter border border-dark-border rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary"
              />
            </div>

            {error && (
              <div className="p-3 bg-error/10 border border-error/20 rounded-xl">
                <p className="text-error text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 gradient-bg text-white font-semibold rounded-xl disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Création en cours..." : "Créer le compte admin"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
