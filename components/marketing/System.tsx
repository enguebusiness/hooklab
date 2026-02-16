"use client";

import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animations/ScrollReveal";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Vitesse Supersonique",
    subtitle: "Google adore",
    description:
      "Votre site se charge instantanément sur mobile. C\u2019est crucial pour le référencement et pour vos clients pressés. La technologie des géants (Netflix, Airbnb) adaptée aux artisans du Nord.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Sécurité Militaire",
    subtitle: "HTTPS inclus",
    description:
      "Pas de base de données à pirater. Votre site est statique, blindé et sécurisé par défaut (cadenas vert HTTPS obligatoire). Vos clients sont rassurés.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "100% Mobile First",
    subtitle: "Conçu pour le pouce",
    description:
      "Vos clients vous cherchent sur leur smartphone. Votre site est conçu pour le pouce, avec des boutons d\u2019appel énormes et accessibles.",
  },
];

export default function System() {
  return (
    <section id="systeme" className="relative py-16 md:py-24 bg-navy" aria-label="Le système">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 bg-orange/20 border border-orange/30 rounded-full text-orange text-xs font-semibold mb-4">
              La Solution HookLab
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-[-0.02em] mb-3">
              Le «&nbsp;Dossier de Confiance&nbsp;» :{" "}
              <span className="text-orange">Plus qu&rsquo;un site, une infrastructure.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              Je ne fais pas de sites «&nbsp;bricolés&nbsp;» sur WordPress qui plantent si on ne les
              met pas à jour. J&rsquo;utilise la technologie des géants adaptée aux artisans du Nord.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 200}>
              <Card hover className="text-center bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-orange">
                  {f.icon}
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
