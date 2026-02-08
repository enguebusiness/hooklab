"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input, { Textarea } from "@/components/ui/Input";

// Étapes du formulaire
type Step = 1 | 2 | 3;

interface FormData {
  firstname: string;
  email: string;
  phone: string;
  persona: string;
  age: string;
  experience: string;
  time_daily: string;
  availability: string;
  start_date: string;
  motivation: string;
  monthly_goal: string;
  biggest_fear: string;
  tiktok_username: string;
}

const initialFormData: FormData = {
  firstname: "",
  email: "",
  phone: "",
  persona: "",
  age: "",
  experience: "",
  time_daily: "",
  availability: "",
  start_date: "",
  motivation: "",
  monthly_goal: "",
  biggest_fear: "",
  tiktok_username: "",
};

export default function CandidaturePage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canGoNext = (): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.firstname &&
          formData.email &&
          formData.phone &&
          formData.persona &&
          formData.age
        );
      case 2:
        return !!(
          formData.experience &&
          formData.time_daily &&
          formData.availability &&
          formData.start_date
        );
      case 3:
        return !!(
          formData.motivation &&
          formData.monthly_goal &&
          formData.biggest_fear
        );
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/candidature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age, 10),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      router.push("/merci");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-20 md:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-white">
              Hook<span className="gradient-text">Lab</span>
            </span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-3">
            Candidature <span className="gradient-text">HookLab</span>
          </h1>
          <p className="text-white/60">
            Réponds à quelques questions pour qu&apos;on puisse évaluer ton
            profil.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                s <= step ? "gradient-bg" : "bg-dark-lighter"
              }`}
            />
          ))}
        </div>

        {/* Formulaire */}
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6 md:p-8">
          {/* Étape 1 : Informations personnelles */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-white mb-6">
                Informations personnelles
              </h2>
              <Input
                id="firstname"
                label="Prénom"
                placeholder="Ton prénom"
                value={formData.firstname}
                onChange={(e) => updateField("firstname", e.target.value)}
              />
              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="ton@email.com"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              <Input
                id="phone"
                label="Téléphone"
                type="tel"
                placeholder="06 12 34 56 78"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
              <Input
                id="age"
                label="Âge"
                type="number"
                placeholder="25"
                min="18"
                max="65"
                value={formData.age}
                onChange={(e) => updateField("age", e.target.value)}
              />

              {/* Persona selection */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  Tu es plutôt...
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      id: "jeune",
                      label: "Étudiant / Jeune",
                      emoji: "🎓",
                    },
                    {
                      id: "parent",
                      label: "Parent / Reconversion",
                      emoji: "👨‍👩‍👧",
                    },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                        formData.persona === p.id
                          ? "border-primary bg-primary/10"
                          : "border-dark-border bg-dark-lighter hover:border-primary/30"
                      }`}
                      onClick={() => updateField("persona", p.id)}
                    >
                      <span className="text-2xl block mb-2">{p.emoji}</span>
                      <span className="text-white text-sm font-medium">
                        {p.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Étape 2 : Situation actuelle */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-white mb-6">
                Ta situation actuelle
              </h2>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  Expérience e-commerce / réseaux sociaux
                </label>
                <div className="space-y-2">
                  {[
                    "Débutant complet",
                    "J'ai déjà testé des choses",
                    "Je génère déjà des revenus en ligne",
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`w-full p-3 rounded-xl border text-left text-sm transition-all cursor-pointer ${
                        formData.experience === opt
                          ? "border-primary bg-primary/10 text-white"
                          : "border-dark-border bg-dark-lighter text-white/60 hover:border-primary/30"
                      }`}
                      onClick={() => updateField("experience", opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  Temps disponible par jour
                </label>
                <div className="space-y-2">
                  {["1-2 heures", "2-4 heures", "4+ heures", "Temps plein"].map(
                    (opt) => (
                      <button
                        key={opt}
                        type="button"
                        className={`w-full p-3 rounded-xl border text-left text-sm transition-all cursor-pointer ${
                          formData.time_daily === opt
                            ? "border-primary bg-primary/10 text-white"
                            : "border-dark-border bg-dark-lighter text-white/60 hover:border-primary/30"
                        }`}
                        onClick={() => updateField("time_daily", opt)}
                      >
                        {opt}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  Disponibilité pour commencer
                </label>
                <div className="space-y-2">
                  {[
                    "Immédiatement",
                    "Dans 1-2 semaines",
                    "Dans 1 mois",
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`w-full p-3 rounded-xl border text-left text-sm transition-all cursor-pointer ${
                        formData.availability === opt
                          ? "border-primary bg-primary/10 text-white"
                          : "border-dark-border bg-dark-lighter text-white/60 hover:border-primary/30"
                      }`}
                      onClick={() => updateField("availability", opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  Quand souhaites-tu commencer ?
                </label>
                <div className="space-y-2">
                  {[
                    "Cette semaine",
                    "La semaine prochaine",
                    "Ce mois-ci",
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`w-full p-3 rounded-xl border text-left text-sm transition-all cursor-pointer ${
                        formData.start_date === opt
                          ? "border-primary bg-primary/10 text-white"
                          : "border-dark-border bg-dark-lighter text-white/60 hover:border-primary/30"
                      }`}
                      onClick={() => updateField("start_date", opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Étape 3 : Motivation */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-white mb-6">
                Ta motivation
              </h2>

              <Textarea
                id="motivation"
                label="Pourquoi veux-tu rejoindre HookLab ?"
                placeholder="Parle-nous de tes objectifs, de ce qui te motive..."
                rows={4}
                value={formData.motivation}
                onChange={(e) => updateField("motivation", e.target.value)}
              />

              <Input
                id="monthly_goal"
                label="Objectif de revenus mensuels"
                placeholder="Ex: 1000€/mois"
                value={formData.monthly_goal}
                onChange={(e) => updateField("monthly_goal", e.target.value)}
              />

              <Textarea
                id="biggest_fear"
                label="Quelle est ta plus grande peur ?"
                placeholder="Qu'est-ce qui pourrait t'empêcher de réussir ?"
                rows={3}
                value={formData.biggest_fear}
                onChange={(e) => updateField("biggest_fear", e.target.value)}
              />

              <Input
                id="tiktok_username"
                label="Pseudo TikTok (optionnel)"
                placeholder="@tonpseudo"
                value={formData.tiktok_username}
                onChange={(e) => updateField("tiktok_username", e.target.value)}
              />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-4 p-3 bg-error/10 border border-error/20 rounded-xl">
              <p className="text-error text-sm">{error}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark-border">
            {step > 1 ? (
              <Button
                variant="ghost"
                onClick={() => setStep((step - 1) as Step)}
              >
                Retour
              </Button>
            ) : (
              <Link href="/">
                <Button variant="ghost">Annuler</Button>
              </Link>
            )}

            {step < 3 ? (
              <Button
                onClick={() => setStep((step + 1) as Step)}
                disabled={!canGoNext()}
              >
                Continuer
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                loading={loading}
                disabled={!canGoNext()}
              >
                Envoyer ma candidature
              </Button>
            )}
          </div>
        </div>

        {/* Step indicator text */}
        <p className="text-center text-white/30 text-sm mt-4">
          Étape {step} sur 3
        </p>
      </div>
    </main>
  );
}
