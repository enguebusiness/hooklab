"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Problematique() {
  return (
    <section id="problematique" className="py-16 md:py-24 bg-bg" aria-label="La problématique">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-4">
              Chacun son m&eacute;tier.{" "}
              <span className="text-orange">Vous &ecirc;tes l&rsquo;expert du chantier, je suis l&rsquo;expert du num&eacute;rique.</span>
            </h3>
            <p className="text-text-light text-base md:text-lg">
              Marc, je sais ce que vous vivez au quotidien&nbsp;:
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-5 mb-12">
          {[
            {
              title: "Le temps perdu",
              text: "Vos soir\u00e9es passent \u00e0 faire des devis pour des curieux qui cherchent juste \u00ab\u00a0un prix\u00a0\u00bb et ne signent jamais.",
            },
            {
              title: "L\u2019invisibilit\u00e9",
              text: "Vous voyez des concurrents, parfois moins qualifi\u00e9s que vous, appara\u00eetre avant vous sur Google.",
            },
            {
              title: "La complexit\u00e9",
              text: "On vous parle de \u00ab\u00a0r\u00e9f\u00e9rencement\u00a0\u00bb, de \u00ab\u00a0mises \u00e0 jour\u00a0\u00bb\u2026 Pour vous, c\u2019est du chinois. Vous voulez un outil qui marche, pas une charge mentale suppl\u00e9mentaire.",
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
              <strong className="text-orange text-lg md:text-xl font-extrabold">Mon engagement&nbsp;:</strong>{" "}
              Je ne vous vends pas de la technologie pour le plaisir. Je mets en place un{" "}
              <strong className="text-orange">Dossier de Confiance</strong>{" "}
              qui prouve votre s&eacute;rieux aux clients qui vous cherchent.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
