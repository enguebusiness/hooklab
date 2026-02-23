"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Problematique() {
  return (
    <section id="problematique" className="py-16 md:py-24 bg-bg" aria-label="La problématique">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-4">
              Mon r&ocirc;le&nbsp;?{" "}
              <span className="text-orange">Faire savoir que vous &ecirc;tes le meilleur.</span>
            </h3>
            <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto">
              Vous avez l&rsquo;expertise terrain, j&rsquo;ai les outils pour la valoriser. Mon travail est simple&nbsp;: m&rsquo;assurer que la qualit&eacute; de votre travail se voit aussi bien sur Google que sur vos chantiers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <p className="text-navy font-bold text-lg mb-5">Ce que je r&egrave;gle pour vous&nbsp;:</p>
        </ScrollReveal>

        <div className="space-y-5 mb-12">
          {[
            {
              title: "Fini les \u00ab\u00a0touristes\u00a0\u00bb",
              text: "Votre site filtre les demandes. Ceux qui vous appellent ont d\u00e9j\u00e0 vu vos r\u00e9alisations et votre s\u00e9rieux. Ils ne cherchent pas \u00ab\u00a0un prix\u00a0\u00bb, ils cherchent votre qualit\u00e9.",
            },
            {
              title: "Devant les concurrents",
              text: "Quand un client tape \u00ab\u00a0Terrassement\u00a0\u00bb ou \u00ab\u00a0Sol \u00e9questre\u00a0\u00bb dans le secteur, c\u2019est votre entreprise qui doit s\u2019afficher en premier. Pas celle du voisin moins \u00e9quip\u00e9.",
            },
            {
              title: "Z\u00e9ro jargon, 100\u00a0% efficace",
              text: "Pas de baratin technique. Je m\u2019occupe de toute la m\u00e9canique (r\u00e9f\u00e9rencement, mises \u00e0 jour, s\u00e9curit\u00e9). Vous, vous avez juste un outil qui tourne et qui remplit le planning.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} direction="left" delay={i * 150}>
              <div className="flex items-start gap-4 bg-bg-white border border-border rounded-xl p-5 hover:border-orange/30 transition-colors duration-300">
                <div className="w-8 h-8 bg-orange/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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

        {/* Engagement */}
        <ScrollReveal direction="none">
          <div className="bg-navy rounded-2xl p-6 md:p-8 text-center">
            <p className="text-white text-base md:text-lg leading-relaxed">
              <strong className="text-orange text-lg md:text-xl font-extrabold">Mon engagement&nbsp;:</strong>{" "}
              Je ne suis pas là pour vous vendre du &laquo;&nbsp;rêve digital&nbsp;&raquo;. Je construis votre{" "}
              <strong className="text-orange">Dossier de Confiance</strong>{" "}
              numérique pour que vos devis soient signés plus vite, et plus souvent.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
