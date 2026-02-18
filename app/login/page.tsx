"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        if (authError.message.includes("Invalid login credentials")) {
          setError("Email ou mot de passe incorrect.");
        } else {
          setError(authError.message);
        }
        return;
      }

      // Si un redirect est spécifié dans l'URL, l'utiliser directement
      if (redirectTo) {
        router.push(redirectTo);
        router.refresh();
        return;
      }

      // Sinon, vérifier si l'utilisateur est admin
      if (authData.user) {
        try {
          const { data: profile } = await supabase
            .from("profiles")
            .select("is_admin, subscription_status")
            .eq("id", authData.user.id)
            .single();

          const p = profile as { is_admin?: boolean; subscription_status?: string } | null;

          if (p?.is_admin) {
            router.push("/admin");
            router.refresh();
            return;
          }
        } catch {
          // RLS peut bloquer, on continue vers dashboard
        }
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dark-light border border-dark-border rounded-[20px] p-6 md:p-8">
      <form onSubmit={handleLogin} className="space-y-5">
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
          placeholder="Ton mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <div className="p-3 bg-error/10 border border-error/20 rounded-xl">
            <p className="text-error text-sm">{error}</p>
          </div>
        )}

        <Button type="submit" loading={loading} className="w-full">
          Se connecter
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-white/40 text-sm">
          Pas encore de compte ?{" "}
          <Link
            href="/candidature"
            className="text-primary hover:text-primary-hover transition-colors"
          >
            Candidater
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-dark">
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
            Content de te revoir
          </h1>
          <p className="text-white/60 text-sm">
            Connecte-toi pour accéder à tes formations.
          </p>
        </div>

        <Suspense fallback={
          <div className="bg-dark-light border border-dark-border rounded-[20px] p-6 md:p-8 flex items-center justify-center py-12">
            <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full" />
          </div>
        }>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
