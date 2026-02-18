"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const faqs = [
  {
    q: "Je n\u2019y connais rien en informatique, est-ce un probl\u00e8me\u00a0?",
    a: "Absolument pas. C\u2019est mon travail. Vous continuez \u00e0 g\u00e9rer vos chantiers, je m\u2019occupe de tout ce qui est technique (s\u00e9curit\u00e9, mise en ligne, affichage sur mobile).",
  },
  {
    q: "J\u2019ai d\u00e9j\u00e0 une page Facebook, \u00e7a suffit non\u00a0?",
    a: "Facebook est utile, mais ce n\u2019est pas \u00e0 vous. Un site internet est votre propri\u00e9t\u00e9 et inspire beaucoup plus confiance pour signer des devis importants. C\u2019est la diff\u00e9rence entre un bricoleur et une entreprise \u00e9tablie.",
  },
  {
    q: "Combien \u00e7a co\u00fbte\u00a0?",
    a: "Chaque artisan a des besoins diff\u00e9rents. Je propose des forfaits clairs et adapt\u00e9s aux TPE. Pas de frais cach\u00e9s. Nous en parlerons de vive voix lors de l\u2019audit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-bg" aria-label="Questions fréquentes">
      {/* JSON-LD for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1.5 bg-navy/5 border border-navy/10 rounded-full text-navy text-xs font-semibold mb-4">
              FAQ
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
              Questions Franches
            </h3>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 100}>
              <div className="bg-bg-white border border-border rounded-xl overflow-hidden hover:border-orange/20 transition-colors duration-300">
                <button
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-bg-muted/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-navy font-semibold text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-text-light text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
