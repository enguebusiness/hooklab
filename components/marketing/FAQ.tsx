"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Ai-je besoin d'experience sur TikTok ?",
    answer:
      "Non, aucune experience n'est requise. Notre programme part de zero et t'accompagne etape par etape. Beaucoup de nos eleves n'avaient jamais poste de video avant de commencer.",
  },
  {
    question: "Combien de temps dois-je consacrer par jour ?",
    answer:
      "Nous recommandons un minimum de 2 heures par jour pour des resultats optimaux. Le programme est concu pour etre flexible et s'adapter a ton emploi du temps, que tu sois etudiant ou parent.",
  },
  {
    question: "Quand vais-je voir mes premiers resultats ?",
    answer:
      "La plupart de nos eleves generent leurs premieres commissions dans les 2 a 4 premieres semaines. Les resultats varient selon ton implication et le temps consacre.",
  },
  {
    question: "Dois-je investir de l'argent en plus du programme ?",
    answer:
      "Non. L'affiliation TikTok Shop ne necessite aucun stock ni investissement supplementaire. Tu gagnes des commissions sur les ventes generees par tes videos.",
  },
  {
    question: "Le programme est-il adapte a tous les ages ?",
    answer:
      "Oui, nos eleves ont entre 18 et 55 ans. Le programme propose deux parcours adaptes : un pour les jeunes (18-25 ans) et un pour les parents/reconversion (25-45 ans).",
  },
  {
    question: "Comment se deroule le coaching ?",
    answer:
      "Le coaching comprend des modules video hebdomadaires, des appels de groupe chaque semaine, un support WhatsApp illimite, et l'acces a une communaute privee d'entrepreneurs.",
  },
  {
    question: "Puis-je payer en plusieurs fois ?",
    answer:
      "Oui, le paiement se fait en 2 mensualites de 490€. Le premier paiement donne acces immediat au programme, le second est preleve automatiquement le mois suivant.",
  },
  {
    question: "Y a-t-il une garantie de remboursement ?",
    answer:
      "Oui, nous offrons une garantie satisfait ou rembourse de 14 jours. Si le programme ne te convient pas, tu es rembourse integralement, sans condition.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-dark-light/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Questions <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-white/60 text-lg">
            Tout ce que tu dois savoir avant de te lancer.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-dark-light border border-dark-border rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-medium pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/60 text-sm leading-relaxed">
                    {faq.answer}
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
