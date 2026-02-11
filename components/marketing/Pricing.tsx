import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const features = [
  "8 semaines de coaching intensif",
  "Acc\u00e8s \u00e0 tous les modules vid\u00e9o",
  "Templates et scripts de contenu",
  "Appels de groupe hebdomadaires",
  "Support WhatsApp illimit\u00e9",
  "Communaut\u00e9 priv\u00e9e d\u2019entrepreneurs",
  "Mises \u00e0 jour \u00e0 vie du contenu",
  "Certification HookLab",
];

const bonuses = [
  "Liste de 50 produits gagnants TikTok Shop",
  "Guide de l\u2019algorithme TikTok 2025-2026",
  "Templates Canva pour miniatures",
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
            Investis dans ta{" "}
            <span className="gradient-text">formation TikTok Shop</span>
          </h2>
          <p className="text-white/60 text-lg">
            Un programme tout inclus avec accompagnement personnalis&eacute;.
            Paiement en 2 fois.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-lg mx-auto">
          <Card className="relative overflow-hidden border-primary/30">
            {/* Popular badge */}
            <div className="absolute top-0 left-0 right-0 gradient-bg py-2.5 text-center">
              <span className="text-white text-sm font-semibold">
                Offre de lancement &mdash; Places limit&eacute;es
              </span>
            </div>

            <div className="pt-14">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-white/40 text-2xl line-through">
                    690&euro;
                  </span>
                  <span className="text-5xl md:text-6xl font-bold text-white">
                    490&euro;
                  </span>
                  <span className="text-white/40 text-lg">/mois</span>
                </div>
                <p className="text-white/40 mt-2">
                  x2 mois (980&euro; total) &mdash; Paiement s&eacute;curis&eacute;
                  via Stripe
                </p>
                <div className="inline-flex items-center mt-3 px-3 py-1 bg-success/10 border border-success/20 rounded-full">
                  <span className="text-success text-sm font-medium">
                    &Eacute;conomise 400&euro; avec l&apos;offre de lancement
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-dark-border my-6" />

              {/* Features */}
              <div className="mb-6">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-4 font-medium">
                  Inclus dans le programme
                </p>
                <ul className="space-y-3">
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
              </div>

              {/* Bonus */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-6">
                <p className="text-primary text-xs uppercase tracking-wider mb-3 font-medium">
                  Bonus inclus
                </p>
                <ul className="space-y-2">
                  {bonuses.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-primary shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                        />
                      </svg>
                      <span className="text-white/70 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link href="/candidature">
                <Button size="lg" className="w-full pulse-glow">
                  Candidater pour rejoindre HookLab
                </Button>
              </Link>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 mt-5">
                <svg
                  className="w-5 h-5 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-white/40 text-sm">
                  Garantie satisfait ou rembours&eacute; 14 jours
                </span>
              </div>

              <p className="text-center text-white/25 text-xs mt-3">
                Candidature soumise &agrave; validation. R&eacute;ponse sous
                24h.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
