"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (authError) {
        if (authError.message.includes("already registered")) {
          setError("Un compte avec cet email existe déjà.");
        } else {
          setError(authError.message);
        }
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Erreur lors de l'inscription. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-dark">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-2xl font-bold text-white">
              Hook<span className="gradient-text">Lab</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">
            Créer ton compte
          </h1>
          <p className="text-white/60 text-sm">
            Inscris-toi pour accéder au programme.
          </p>
        </div>

        {/* Form */}
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6 md:p-8">
          <form onSubmit={handleRegister} className="space-y-5">
            <Input
              id="fullName"
              label="Nom complet"
              placeholder="Jean Dupont"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="ton@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="password"
              label="Mot de passe"
              type="password"
              placeholder="Minimum 8 caractères"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              id="confirmPassword"
              label="Confirmer le mot de passe"
              type="password"
              placeholder="Confirme ton mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {error && (
              <div className="p-3 bg-error/10 border border-error/20 rounded-xl">
                <p className="text-error text-sm">{error}</p>
              </div>
            )}

            <Button type="submit" loading={loading} className="w-full">
              Créer mon compte
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/40 text-sm">
              Déjà un compte ?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
