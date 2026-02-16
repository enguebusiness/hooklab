"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

export default function Problematique() {
  return (
    <section id="problematique" className="py-16 md:py-24 bg-bg" aria-label="La problématique">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-4">
              Vous êtes un pro sur le chantier.{" "}
              <span className="text-orange">Pourquoi votre présence en ligne dit-elle le contraire&nbsp;?</span>
            </h3>
            <p className="text-text-light text-base md:text-lg">
              Marc, je sais ce que vous vivez&nbsp;:
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-5 mb-12">
          {[
            {
              title: "Le temps perdu",
              text: "Vos soirées passent à faire des devis pour des gens qui cherchent «\u00a0le moins cher\u00a0» sur Leboncoin.",
            },
            {
              title: "L\u2019invisibilité",
              text: "Des concurrents moins qualifiés que vous sortent avant vous sur Google Maps.",
            },
            {
              title: "La peur de la technique",
              text: "On vous a parlé de WordPress, de mises à jour, de piratage\u2026 Vous voulez un outil, pas un deuxième travail.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} direction="left" delay={i * 150}>
              <div className="flex items-start gap-4 bg-bg-white border border-border rounded-xl p-5 hover:border-orange/30 transition-colors duration-300">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-bold text-base mb-1">{item.title}</p>
                  <p className="text-text-light text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stat choc */}
        <ScrollReveal direction="none">
          <div className="bg-navy rounded-2xl p-6 md:p-8 text-center">
            <p className="text-white text-base md:text-lg leading-relaxed">
              <strong className="text-orange text-2xl md:text-3xl font-extrabold block mb-2 animate-stat-glow">
                <AnimatedCounter end={93} suffix="%" />
              </strong>
              des acheteurs jugent votre crédibilité sur le design de votre site.{" "}
              <span className="text-white/70">
                Si votre site est lent ou «&nbsp;moche&nbsp;», le client pense que votre travail l&rsquo;est aussi.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
