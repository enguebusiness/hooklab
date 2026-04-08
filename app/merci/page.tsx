import Link from "next/link";
import Button from "@/components/ui/Button";

export default function MerciPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Success icon */}
        <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-white"
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
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
          Candidature <span className="gradient-text">envoyée !</span>
        </h1>

        <p className="text-white/60 text-lg mb-2">
          Merci pour ta candidature. Notre équipe va étudier ton profil
          attentivement.
        </p>

        <p className="text-white/40 mb-8">
          Tu recevras une réponse par email sous 24 heures. Pense à vérifier
          tes spams !
        </p>

        {/* Étapes suivantes */}
        <div className="bg-dark-light border border-dark-border rounded-[20px] p-6 mb-8 text-left">
          <h2 className="text-white font-semibold mb-4">Prochaines étapes</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Analyse de ton profil",
                desc: "Notre équipe évalue ta candidature",
              },
              {
                step: "2",
                title: "Email de confirmation",
                desc: "Tu reçois un email avec le lien de paiement",
              },
              {
                step: "3",
                title: "Accès au programme",
                desc: "Tu commences ta formation immédiatement",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="w-7 h-7 gradient-bg rounded-lg flex items-center justify-center shrink-0 text-xs font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/">
          <Button variant="secondary">Retour à l&apos;accueil</Button>
        </Link>
      </div>
    </main>
  );
}
