import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const coachingFeatures = [
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

const suiviFeatures = [
  "R\u00e9ponses \u00e0 tes questions vid\u00e9os",
  "Id\u00e9es de concepts et tendances",
  "Coaching motivation au quotidien",
  "Acc\u00e8s aux nouvelles mises \u00e0 jour",
  "Groupe WhatsApp alumni",
];

export default function Pricing() {
  return (
    <section id="tarif" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            Tarifs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Investis dans ta{" "}
            <span className="gradient-text">formation TikTok Shop</span>
          </h2>
          <p className="text-white/60 text-lg">
            Un programme complet avec accompagnement personnalis&eacute;, et une
            option de suivi mensuel pour continuer &agrave; progresser.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Coaching card */}
          <Card className="relative overflow-hidden border-primary/30">
            {/* Popular badge */}
            <div className="absolute top-0 left-0 right-0 gradient-bg py-2.5 text-center">
              <span className="text-white text-sm font-semibold">
                Programme principal &mdash; Places limit&eacute;es
              </span>
            </div>

            <div className="pt-14">
              <h3 className="text-lg font-bold text-white mb-1">
                Formation + Coaching
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Programme intensif de 8 semaines
              </p>

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
                  {coachingFeatures.map((f, i) => (
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

          {/* Suivi card */}
          <Card className="relative overflow-hidden border-dark-border">
            <div className="absolute top-0 left-0 right-0 bg-dark-lighter py-2.5 text-center border-b border-dark-border">
              <span className="text-white/60 text-sm font-semibold">
                Apr&egrave;s la formation
              </span>
            </div>

            <div className="pt-14">
              <h3 className="text-lg font-bold text-white mb-1">
                Suivi continu
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Pour ceux qui ont termin&eacute; le programme
              </p>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    49&euro;
                  </span>
                  <span className="text-white/40 text-lg">/mois</span>
                </div>
                <p className="text-white/40 mt-2">
                  Sans engagement &mdash; Annulable &agrave; tout moment
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-dark-border my-6" />

              {/* Condition */}
              <div className="bg-warning/5 border border-warning/15 rounded-xl p-3 mb-6">
                <p className="text-warning text-xs font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Accessible uniquement apr&egrave;s avoir termin&eacute; les 8 semaines de coaching
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-4 font-medium">
                  Inclus dans le suivi
                </p>
                <ul className="space-y-3">
                  {suiviFeatures.map((f, i) => (
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

              {/* Info */}
              <div className="bg-dark border border-dark-border rounded-2xl p-4 mb-6">
                <p className="text-white/50 text-sm leading-relaxed">
                  Le suivi mensuel te permet de continuer &agrave; progresser
                  apr&egrave;s ta formation initiale. Pose tes questions, re&ccedil;ois
                  des id&eacute;es de contenus et reste motiv&eacute; avec la
                  communaut&eacute; d&apos;anciens &eacute;l&egrave;ves.
                </p>
              </div>

              {/* CTA disabled-style */}
              <div className="opacity-60">
                <Button size="lg" variant="secondary" className="w-full" disabled>
                  Disponible apr&egrave;s la formation
                </Button>
              </div>

              <p className="text-center text-white/25 text-xs mt-3">
                Le lien de souscription sera envoy&eacute; &agrave; la fin de
                tes 8 semaines.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
