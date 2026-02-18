"use client";

import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animations/ScrollReveal";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    step: "1",
    title: "ON VOUS TROUVE",
    subtitle: "Votre pr\u00e9sence Google",
    description:
      "Quand un client tape \u00ab\u00a0Couvreur Douai\u00a0\u00bb ou \u00ab\u00a0Menuisier Orchies\u00a0\u00bb, il doit tomber sur vous. Je g\u00e8re votre fiche Google et je m\u2019assure que vous soyez visible localement, l\u00e0 o\u00f9 sont vos clients.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    step: "2",
    title: "ON VOUS CHOISIT",
    subtitle: "Votre Site & Vos Avis",
    description:
      "Un client met moins de 10 secondes pour juger si vous \u00eates s\u00e9rieux. Je cr\u00e9e un site internet clair qui affiche vos labels (RGE, Qualibat), vos plus belles photos de r\u00e9alisations et les avis de vos clients satisfaits. C\u2019est votre classeur de chantier, mais en ligne.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    step: "3",
    title: "ON VOUS CONTACTE",
    subtitle: "Le Filtrage",
    description:
      "Fini les appels inutiles. Votre site est con\u00e7u pour filtrer les demandes. En affichant votre professionnalisme, vous \u00e9cartez les \u00ab\u00a0touristes\u00a0\u00bb et attirez les clients qui ont un vrai projet et le budget qui va avec.",
  },
];

export default function System() {
  return (
    <section id="methode" className="relative py-16 md:py-24 bg-navy" aria-label="Notre méthode">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 bg-orange/20 border border-orange/30 rounded-full text-orange text-xs font-semibold mb-4">
              Notre M&eacute;thode
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-[-0.02em] mb-3">
              3 &eacute;tapes pour transformer votre bouche-&agrave;-oreille en{" "}
              <span className="text-orange">syst&egrave;me automatique.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              Pas de jargon. Voici ce que je mets en place pour vous&nbsp;:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((f, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 200}>
              <Card hover className="text-center bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-extrabold text-xl">
                  {f.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-orange text-sm font-semibold mb-3">{f.subtitle}</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {f.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
