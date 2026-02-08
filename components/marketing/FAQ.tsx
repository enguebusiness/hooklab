"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Ai-je besoin d'expérience sur TikTok ?",
    answer:
      "Non, aucune expérience n'est requise. Notre programme part de zéro et t'accompagne étape par étape. Beaucoup de nos élèves n'avaient jamais posté de vidéo avant de commencer.",
  },
  {
    question: "Combien de temps dois-je consacrer par jour ?",
    answer:
      "Nous recommandons un minimum de 2 heures par jour pour des résultats optimaux. Le programme est conçu pour être flexible et s'adapter à ton emploi du temps, que tu sois étudiant ou parent.",
  },
  {
    question: "Quand vais-je voir mes premiers résultats ?",
    answer:
      "La plupart de nos élèves génèrent leurs premières commissions dans les 2 à 4 premières semaines. Les résultats varient selon ton implication et le temps consacré.",
  },
  {
    question: "Dois-je investir de l'argent en plus du programme ?",
    answer:
      "Non. L'affiliation TikTok Shop ne nécessite aucun stock ni investissement supplémentaire. Tu gagnes des commissions sur les ventes générées par tes vidéos.",
  },
  {
    question: "Le programme est-il adapté à tous les âges ?",
    answer:
      "Oui, nos élèves ont entre 18 et 55 ans. Le programme propose deux parcours adaptés : un pour les jeunes (18-25 ans) et un pour les parents/reconversion (25-45 ans).",
  },
  {
    question: "Comment se déroule le coaching ?",
    answer:
      "Le coaching comprend des modules vidéo hebdomadaires, des appels de groupe chaque semaine, un support WhatsApp illimité, et l'accès à une communauté privée d'entrepreneurs.",
  },
  {
    question: "Puis-je payer en plusieurs fois ?",
    answer:
      "Oui, le paiement se fait en 2 mensualités de 490€. Le premier paiement donne accès immédiat au programme, le second est prélevé automatiquement le mois suivant.",
  },
  {
    question: "Y a-t-il une garantie de remboursement ?",
    answer:
      "Oui, nous offrons une garantie satisfait ou remboursé de 14 jours. Si le programme ne te convient pas, tu es remboursé intégralement, sans condition.",
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
            Questions <span className="gradient-text">fréquentes</span>
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
