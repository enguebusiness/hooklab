"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

interface ProcessProps {
  images?: Record<string, string>;
}

const steps = [
  {
    number: "01",
    title: "Avis Google Maps automatiques",
    subtitle: "Être trouvé par les bons clients",
    description:
      "Vos clients satisfaits laissent un avis en 30 secondes grâce à notre système automatisé. Plus d'avis = meilleur classement Google Maps = plus de clients qualifiés qui vous trouvent avant votre concurrent.",
    points: [
      "Système d'envoi automatique après chaque chantier",
      "QR Code personnalisé à montrer au client",
      "Vos avis montent, votre classement Google aussi",
    ],
    imageKey: "process_google",
    color: "orange",
  },
  {
    number: "02",
    title: "Facebook géré pour vous",
    subtitle: "Montrer votre savoir-faire au quotidien",
    description:
      "Je gère votre page Facebook avec vos photos de chantier. Vous prenez une photo, je la transforme en publication professionnelle qui donne envie. Micro-formation incluse pour prendre de belles photos sur le chantier.",
    points: [
      "Publications régulières avec vos réalisations",
      "Micro-formation : photos qui vendent",
      "Vos futurs clients voient votre travail avant de vous appeler",
    ],
    imageKey: "process_facebook",
    color: "orange",
  },
  {
    number: "03",
    title: "Site internet qui convertit",
    subtitle: "Transformer les visiteurs en devis qualifiés",
    description:
      "Un site pro qui met en avant votre travail, votre savoir-faire, votre plus-value. Avec un formulaire intelligent qui trie les curieux et augmente le nombre de devis qualifiés. Fini les appels pour « juste un prix ».",
    points: [
      "Design pro qui inspire confiance immédiate",
      "Formulaire intelligent : filtre les curieux",
      "Optimisé Google pour votre zone (Douai, Orchies, Valenciennes)",
    ],
    imageKey: "process_site",
    color: "orange",
  },
];

export default function Process({ images }: ProcessProps) {
  return (
    <section id="process" className="py-16 md:py-24 bg-bg" aria-label="Le processus">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-4">
              Le Triptyque HookLab
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
              3 piliers pour remplir votre{" "}
              <span className="text-orange">carnet de commandes.</span>
            </h2>
            <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto">
              Un système complet qui travaille pour vous 24h/24, même quand vous êtes sur le chantier.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps - Zigzag layout */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            const imageUrl = images?.[step.imageKey];

            return (
              <ScrollReveal key={step.number} direction={isEven ? "left" : "right"} delay={i * 100}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${!isEven ? "md:direction-rtl" : ""}`}>
                  {/* Image side */}
                  <div className={`relative ${!isEven ? "md:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl || ""}
                        alt={step.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-extrabold text-2xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Text side */}
                  <div className={!isEven ? "md:order-1" : ""}>
                    <span className="text-orange text-sm font-semibold uppercase tracking-wider">{step.subtitle}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-navy mt-2 mb-4">{step.title}</h3>
                    <p className="text-text-light text-base leading-relaxed mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-orange/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-text text-sm font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
