import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const features = [
  "8 semaines de coaching intensif",
  "Acces a tous les modules video",
  "Templates et scripts de contenu",
  "Appels de groupe hebdomadaires",
  "Support WhatsApp illimite",
  "Communaute privee d'entrepreneurs",
  "Mises a jour a vie du contenu",
  "Certification HookLab",
];

export default function Pricing() {
  return (
    <section id="tarif" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            Tarif
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Investis dans ton{" "}
            <span className="gradient-text">futur business</span>
          </h2>
          <p className="text-white/60 text-lg">
            Un seul programme, tout inclus. Paiement en 2 fois possible.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-lg mx-auto">
          <Card className="relative overflow-hidden border-primary/30">
            {/* Popular badge */}
            <div className="absolute top-0 left-0 right-0 gradient-bg py-2 text-center">
              <span className="text-white text-sm font-semibold">
                Offre de lancement - Places limitees
              </span>
            </div>

            <div className="pt-12">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-white">
                    490€
                  </span>
                  <span className="text-white/40 text-lg">/mois</span>
                </div>
                <p className="text-white/40 mt-2">
                  x2 mois (980€ total) - Paiement securise via Stripe
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-dark-border my-6" />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-success"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/candidature">
                <Button size="lg" className="w-full pulse-glow">
                  Rejoindre HookLab
                </Button>
              </Link>

              {/* Disclaimer */}
              <p className="text-center text-white/30 text-xs mt-4">
                Candidature soumise a validation. Reponse sous 24h.
                <br />
                Satisfait ou rembourse pendant 14 jours.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
