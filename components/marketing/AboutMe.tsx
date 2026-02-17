"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

interface AboutMeProps {
  images?: Record<string, string>;
}

export default function AboutMe({ images }: AboutMeProps) {
  const photoUrl = images?.about_photo;

  return (
    <section id="qui-suis-je" className="py-16 md:py-24 bg-orange relative overflow-hidden" aria-label="Qui suis-je">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 left-10 w-60 h-60 border-2 border-white rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats top row */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { value: 100, suffix: "%", label: "Local Nord" },
              { value: 24, suffix: "h", label: "Délai de réponse" },
              { value: 0, suffix: "€", label: "L'audit" },
              { value: 3, suffix: "", label: "Piliers du système" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-white">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/70 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <ScrollReveal direction="left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 sm:w-72 sm:h-[22rem] rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl">
                  {photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photoUrl} alt="Enguerrand Ozano" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-orange-hover flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-white/60 text-sm">Votre photo ici</p>
                        <p className="text-white/40 text-xs mt-1">(modifiable dans Admin &gt; Images)</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-navy text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                  Basé à Flines-lez-Raches
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right">
            <div>
              <span className="inline-block px-3 py-1.5 bg-white/15 rounded-full text-white text-xs font-semibold mb-4">
                Votre expert local
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-[-0.02em] mb-4">
                Pas une plateforme anonyme.{" "}
                <span className="text-navy">Un voisin.</span>
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-4">
                Je suis <strong className="text-white">Enguerrand</strong>, spécialisé dans la
                visibilité locale et la construction de{" "}
                <strong className="text-white">systèmes de confiance en ligne</strong>{" "}
                pour les artisans du Nord.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-4">
                Je ne suis pas un call center parisien. Je connais la réalité de vos
                chantiers à Douai, Orchies ou Valenciennes. Je sais que vous n&rsquo;avez pas
                le temps de gérer &ldquo;un truc internet&rdquo; et que vous voulez des résultats
                concrets : des appels de <strong className="text-white">vrais</strong> clients.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                Mon approche : je vous construis un <strong className="text-white">système complet</strong>{" "}
                (Google + Facebook + Site) qui transforme votre bouche-à-oreille en système
                permanent. Pas de jargon, pas de blabla &mdash; du concret.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                Discutons de votre situation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
