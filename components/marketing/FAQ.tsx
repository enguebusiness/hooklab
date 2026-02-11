"use client";

import { useState } from "react";

const faqs = [
  {
    question: "C\u2019est quoi l\u2019affiliation TikTok Shop exactement ?",
    answer:
      "L\u2019affiliation TikTok Shop te permet de gagner des commissions en faisant la promotion de produits dans tes vid\u00e9os TikTok. Tu n\u2019as pas besoin de stock ni d\u2019investissement : tu cr\u00e9es du contenu, les gens ach\u00e8tent via ton lien, et tu touches entre 10% et 30% de commission sur chaque vente.",
  },
  {
    question: "Ai-je besoin d\u2019exp\u00e9rience sur TikTok pour commencer ?",
    answer:
      "Non, aucune exp\u00e9rience n\u2019est requise. Notre programme part de z\u00e9ro et t\u2019accompagne \u00e9tape par \u00e9tape. Beaucoup de nos \u00e9l\u00e8ves n\u2019avaient jamais post\u00e9 de vid\u00e9o avant de commencer. On t\u2019apprend tout : la cr\u00e9ation de contenu, l\u2019algorithme, la s\u00e9lection de produits.",
  },
  {
    question: "Combien faut-il de followers pour d\u00e9marrer l\u2019affiliation TikTok Shop ?",
    answer:
      "TikTok Shop demande un minimum de 1 500 followers pour acc\u00e9der au programme d\u2019affiliation. Si tu ne les as pas encore, notre formation t\u2019apprend \u00e0 les atteindre rapidement gr\u00e2ce \u00e0 des strat\u00e9gies de contenu \u00e9prouv\u00e9es.",
  },
  {
    question: "Combien de temps dois-je consacrer par jour ?",
    answer:
      "Nous recommandons un minimum de 2 heures par jour pour des r\u00e9sultats optimaux. Le programme est con\u00e7u pour \u00eatre flexible et s\u2019adapter \u00e0 ton emploi du temps, que tu sois \u00e9tudiant, salari\u00e9 ou parent.",
  },
  {
    question: "Quand vais-je voir mes premi\u00e8res commissions TikTok Shop ?",
    answer:
      "La plupart de nos \u00e9l\u00e8ves g\u00e9n\u00e8rent leurs premi\u00e8res commissions dans les 2 \u00e0 4 premi\u00e8res semaines. Les r\u00e9sultats varient selon ton implication et le temps consacr\u00e9. Ce n\u2019est pas un sch\u00e9ma d\u2019argent facile mais un vrai business qui demande du travail.",
  },
  {
    question: "Dois-je investir de l\u2019argent en plus du programme ?",
    answer:
      "Non. L\u2019affiliation TikTok Shop ne n\u00e9cessite aucun stock ni investissement suppl\u00e9mentaire. Tu gagnes des commissions sur les ventes g\u00e9n\u00e9r\u00e9es par tes vid\u00e9os. Tout ce qu\u2019il te faut c\u2019est un smartphone et une connexion internet.",
  },
  {
    question: "Comment se d\u00e9roule le coaching HookLab ?",
    answer:
      "Le coaching comprend des modules vid\u00e9o hebdomadaires, des appels de groupe chaque semaine, un support WhatsApp illimit\u00e9, et l\u2019acc\u00e8s \u00e0 une communaut\u00e9 priv\u00e9e d\u2019entrepreneurs. Tu avances \u00e0 ton rythme avec un suivi personnalis\u00e9.",
  },
  {
    question: "Puis-je payer la formation en plusieurs fois ?",
    answer:
      "Oui, le paiement se fait en 2 mensualit\u00e9s de 490\u20ac. Le premier paiement donne acc\u00e8s imm\u00e9diat au programme, le second est pr\u00e9lev\u00e9 automatiquement le mois suivant. Le paiement est s\u00e9curis\u00e9 via Stripe.",
  },
  {
    question: "Y a-t-il une garantie de remboursement ?",
    answer:
      "Oui, nous offrons une garantie satisfait ou rembours\u00e9 de 14 jours. Si le programme ne te convient pas, tu es rembours\u00e9 int\u00e9gralement, sans condition. Nous croyons en la qualit\u00e9 de notre formation.",
  },
  {
    question: "TikTok Shop est-il disponible en France ?",
    answer:
      "Oui ! TikTok Shop a \u00e9t\u00e9 lanc\u00e9 en France et le programme d\u2019affiliation est ouvert aux cr\u00e9ateurs fran\u00e7ais. Le march\u00e9 fran\u00e7ais a g\u00e9n\u00e9r\u00e9 plus de 50 millions d\u2019euros en seulement 2 mois fin 2025, ce qui montre le potentiel \u00e9norme de cette plateforme.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-dark-light/30">
      {/* FAQ Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Questions sur la{" "}
            <span className="gradient-text">formation TikTok Shop</span>
          </h2>
          <p className="text-white/60 text-lg">
            Tout ce que tu dois savoir sur l&apos;affiliation TikTok Shop et
            notre programme de coaching.
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
