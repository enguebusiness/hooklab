"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import type { Profile } from "@/types/database.types";

export default function ProfilPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Changement de mot de passe
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single() as { data: Profile | null };

      if (data) {
        setProfile(data);
        setFullName(data.full_name || "");
      }
      setLoading(false);
    };

    loadProfile();
  }, []);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("profiles")
        .update({ full_name: fullName } as never)
        .eq("id", profile!.id);

      if (error) throw error;

      setMessage({ type: "success", text: "Profil mis a jour !" });
      router.refresh();
    } catch {
      setMessage({
        type: "error",
        text: "Erreur lors de la mise a jour du profil.",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordSaving(true);
    setMessage(null);

    if (newPassword !== confirmNewPassword) {
      setMessage({
        type: "error",
        text: "Les mots de passe ne correspondent pas.",
      });
      setPasswordSaving(false);
      return;
    }

    if (newPassword.length < 8) {
      setMessage({
        type: "error",
        text: "Le mot de passe doit contenir au moins 8 caracteres.",
      });
      setPasswordSaving(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      setMessage({ type: "success", text: "Mot de passe mis a jour !" });
      setNewPassword("");
      setConfirmNewPassword("");
    } catch {
      setMessage({
        type: "error",
        text: "Erreur lors du changement de mot de passe.",
      });
    } finally {
      setPasswordSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-white mb-2">Mon profil</h1>
      <p className="text-white/60 mb-10">
        Gere tes informations personnelles et ton abonnement.
      </p>

      {/* Message */}
      {message && (
        <div
          className={`mb-6 p-3 rounded-xl border ${
            message.type === "success"
              ? "bg-success/10 border-success/20 text-success"
              : "bg-error/10 border-error/20 text-error"
          }`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
      )}

      {/* Informations profil */}
      <Card className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-6">
          Informations personnelles
        </h2>
        <form onSubmit={handleSaveProfile} className="space-y-5">
          <Input
            id="email"
            label="Email"
            type="email"
            value={profile?.email || ""}
            disabled
            className="opacity-50"
          />
          <Input
            id="fullName"
            label="Nom complet"
            placeholder="Jean Dupont"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Button type="submit" loading={saving}>
            Sauvegarder
          </Button>
        </form>
      </Card>

      {/* Changement de mot de passe */}
      <Card className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-6">
          Changer le mot de passe
        </h2>
        <form onSubmit={handleChangePassword} className="space-y-5">
          <Input
            id="newPassword"
            label="Nouveau mot de passe"
            type="password"
            placeholder="Minimum 8 caracteres"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            id="confirmNewPassword"
            label="Confirmer le mot de passe"
            type="password"
            placeholder="Confirme ton nouveau mot de passe"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <Button type="submit" loading={passwordSaving} variant="secondary">
            Changer le mot de passe
          </Button>
        </form>
      </Card>

      {/* Abonnement */}
      <Card>
        <h2 className="text-lg font-semibold text-white mb-4">Abonnement</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-sm">Statut</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-success/10 rounded-lg text-success text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-success rounded-full" />
              {profile?.subscription_status === "active"
                ? "Actif"
                : "Inactif"}
            </span>
          </div>
          {profile?.subscription_end_date && (
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Valide jusqu&apos;au</span>
              <span className="text-white text-sm">
                {new Date(profile.subscription_end_date).toLocaleDateString(
                  "fr-FR",
                  { day: "numeric", month: "long", year: "numeric" }
                )}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-sm">Plan</span>
            <span className="text-white text-sm">
              HookLab - Programme 8 semaines
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
