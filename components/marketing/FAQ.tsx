"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Combien co\u00fbte un site avec HookLab ?",
    a: "Chaque projet est diff\u00e9rent. Je propose un audit gratuit pour comprendre votre situation et vous faire une proposition adapt\u00e9e \u00e0 votre activit\u00e9. Pas d\u2019abonnement cach\u00e9, pas de surprise.",
  },
  {
    q: "C\u2019est quoi la diff\u00e9rence avec une \u00ab agence web \u00bb classique ?",
    a: "Je ne vous vends pas un site pour faire joli. Je construis un syst\u00e8me complet : site + Google + preuves sociales. L\u2019objectif : que votre t\u00e9l\u00e9phone sonne avec des vrais clients, pas des curieux.",
  },
  {
    q: "Je me suis d\u00e9j\u00e0 fait avoir par un call center, pourquoi vous faire confiance ?",
    a: "Je suis bas\u00e9 \u00e0 Flines-lez-Raches, pas dans un bureau \u00e0 Paris. On peut se voir en vrai. Je travaille avec des artisans du coin, vous pouvez v\u00e9rifier mes r\u00e9alisations et appeler mes clients.",
  },
  {
    q: "J\u2019ai d\u00e9j\u00e0 une page Facebook, c\u2019est pas suffisant ?",
    a: "Facebook c\u2019est bien pour montrer vos chantiers, mais personne ne cherche \u00ab couvreur Douai \u00bb sur Facebook. 90% des gens passent par Google. Sans site optimis\u00e9, vos concurrents r\u00e9cup\u00e8rent vos clients.",
  },
  {
    q: "Combien de temps pour avoir des r\u00e9sultats ?",
    a: "Le site est en ligne en 2-3 semaines. Les premiers r\u00e9sultats Google arrivent en 4 \u00e0 8 semaines selon votre zone et votre m\u00e9tier. Mais le site commence \u00e0 travailler pour vous d\u00e8s le jour 1.",
  },
  {
    q: "J\u2019y connais rien en informatique, c\u2019est un probl\u00e8me ?",
    a: "C\u2019est justement mon m\u00e9tier. Je m\u2019occupe de tout : cr\u00e9ation, mise en ligne, r\u00e9f\u00e9rencement. Vous, vous continuez vos chantiers. Et si vous voulez modifier quelque chose, un simple message suffit.",
  },
  {
    q: "Est-ce que je pourrai modifier le site moi-m\u00eame ?",
    a: "Oui. J\u2019utilise un syst\u00e8me de gestion de contenu (CMS) simple. Vous pouvez ajouter des photos de chantier ou modifier un texte aussi facilement qu\u2019un post Facebook.",
  },
  {
    q: "Vous intervenez uniquement dans le Nord ?",
    a: "Ma zone principale c\u2019est le Douaisis, l\u2019Orch\u00e9sien, le Valenciennois et l\u2019Arrageois. Mais je peux travailler avec des artisans partout en Hauts-de-France.",
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
            Questions fr&eacute;quentes
          </h2>
          <p className="text-text-light text-base">
            Les questions que les artisans me posent le plus souvent.
          </p>
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
