"use client";

import Card from "@/components/ui/Card";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

const demos = [
  {
    title: "L\u2019Expertise Solide",
    subtitle: "Pour ceux dont le travail doit durer 100 ans.",
    pourQui: "Maçons, Couvreurs, Charpentiers.",
    pointFort: "Slider «\u00a0Avant / Après\u00a0» interactif + badges garanties (Décennale, Qualibat, RGE) immanquables.",
    fonctionnalite: "Formulaire intelligent : si Urgence Fuite \u2192 bouton rouge «\u00a0APPELER LE PATRON\u00a0».",
    cta: "Voir la Démo Maçonnerie",
    href: "/macon",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "L\u2019Artisan Créateur",
    subtitle: "Pour ceux qui vendent du beau et du confort.",
    pourQui: "Paysagistes, Peintres, Décorateurs.",
    pointFort: "Galerie filtrable par type + saisonnalité intelligente (le site change selon la saison).",
    fonctionnalite: "Bouton WhatsApp flottant «\u00a0Je veux le même jardin\u00a0» + immersion locale par ville.",
    cta: "Voir la Démo Paysagiste",
    href: "/paysagiste",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "L\u2019Intervention Éclair",
    subtitle: "Pour ceux qui sauvent la mise (et veulent être payés vite).",
    pourQui: "Plombiers, Électriciens, Serruriers.",
    pointFort: "Avis Google en haut + tarifs transparents + bouton d\u2019appel sticky sur mobile.",
    fonctionnalite: "Diagnostic en 3 clics : qualifie la panne + détecte si hors zone.",
    cta: "Voir la Démo Plombier",
    href: "/plombier",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function DemosLive() {
  return (
    <section id="demos" className="py-16 md:py-24 bg-bg" aria-label="Démos live">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-4">
              Démos Live
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
              Ne signez pas sans voir.{" "}
              <span className="text-orange">Testez votre futur site maintenant.</span>
            </h2>
            <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto">
              Je ne vous demande pas de me croire sur parole. J&rsquo;ai construit 3 modèles
              de «&nbsp;Dossiers de Confiance&nbsp;» optimisés pour vos métiers.
              Cliquez, naviguez, et imaginez votre logo à la place.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 200}>
              <Card hover className="flex flex-col p-0 overflow-hidden h-full">
                {/* Header visuel */}
                <div className="bg-navy p-6 text-center">
                  <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-3 text-orange">
                    {demo.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{demo.title}</h3>
                  <p className="text-orange text-sm font-semibold">{demo.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div>
                      <p className="text-navy font-semibold text-xs uppercase tracking-wider mb-1">Pour qui ?</p>
                      <p className="text-text-light text-sm">{demo.pourQui}</p>
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-xs uppercase tracking-wider mb-1">Le point fort</p>
                      <p className="text-text-light text-sm">{demo.pointFort}</p>
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-xs uppercase tracking-wider mb-1">Fonctionnalité clé</p>
                      <p className="text-text-light text-sm">{demo.fonctionnalite}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={demo.href}
                    className="mt-5 flex items-center justify-center gap-2 bg-orange text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-orange/90 hover:scale-[1.02] transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {demo.cta}
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
