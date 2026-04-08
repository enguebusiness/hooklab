"use client";

import { useState } from "react";

const faqs = [
  {
    q: "J\u2019ai d\u00e9j\u00e0 une page Facebook, \u00e7a suffit non\u00a0?",
    a: "Facebook, c\u2019est pour les amis. Google, c\u2019est pour les clients qui ont un carnet de ch\u00e8ques et une urgence. Un site professionnel inspire 56% plus de confiance qu\u2019une simple page sociale.",
  },
  {
    q: "Est-ce que je pourrai changer mes photos moi-m\u00eame\u00a0?",
    a: "Oui. Je vous donne acc\u00e8s \u00e0 une interface simplifi\u00e9e (Sanity). C\u2019est aussi simple que d\u2019envoyer un SMS. Vous changez une photo, le site se met \u00e0 jour tout seul.",
  },
  {
    q: "C\u2019est quoi la diff\u00e9rence avec un site gratuit\u00a0?",
    a: "Un site gratuit, c\u2019est comme construire une maison sans fondations. \u00c7a ne tient pas, Google ne le voit pas, et \u00e7a fait fuir les gros chantiers. Je vous construis un actif num\u00e9rique durable.",
  },
  {
    q: "Combien co\u00fbte un site avec HookLab\u00a0?",
    a: "Chaque projet est diff\u00e9rent. Je propose un audit gratuit pour comprendre votre situation et vous faire une proposition adapt\u00e9e \u00e0 votre activit\u00e9. Pas d\u2019abonnement cach\u00e9, pas de surprise.",
  },
  {
    q: "Combien de temps pour avoir des r\u00e9sultats\u00a0?",
    a: "Le site est en ligne en 2-3 semaines. Les premiers r\u00e9sultats Google arrivent en 4 \u00e0 8 semaines selon votre zone et votre m\u00e9tier. Mais le site commence \u00e0 travailler pour vous d\u00e8s le jour 1.",
  },
  {
    q: "J\u2019y connais rien en informatique, c\u2019est un probl\u00e8me\u00a0?",
    a: "C\u2019est justement mon m\u00e9tier. Je m\u2019occupe de tout\u00a0: cr\u00e9ation, mise en ligne, r\u00e9f\u00e9rencement. Vous, vous continuez vos chantiers. Et si vous voulez modifier quelque chose, un simple message suffit.",
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
    <section id="faq" className="py-16 md:py-24 bg-bg" aria-label="Questions fr\u00e9quentes">
      {/* JSON-LD for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 bg-navy/5 border border-navy/10 rounded-full text-navy text-xs font-semibold mb-4">
            FAQ
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
            Questions Franches
          </h3>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-bg-white border border-border rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-navy font-semibold text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-text-light text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
