"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

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
                  Bas&eacute; &agrave; Flines-lez-Raches
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
                Enguerrand Ozano.{" "}
                <span className="text-navy">Votre voisin &agrave; Flines-lez-Raches.</span>
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-6">
                Oubliez les plateformes t&eacute;l&eacute;phoniques &agrave; l&rsquo;autre bout du monde.
                Je suis ici, dans le Nord (59). Je connais la r&eacute;alit&eacute; de vos m&eacute;tiers
                et vos contraintes g&eacute;ographiques.
              </p>

              <ul className="space-y-4 mb-6">
                {[
                  { strong: "Un interlocuteur unique", text: "C\u2019est moi qui g\u00e8re votre dossier du d\u00e9but \u00e0 la fin." },
                  { strong: "100% G\u00e9r\u00e9 pour vous", text: "Une fois le site lanc\u00e9, vous n\u2019avez rien \u00e0 faire. Si vous avez une nouvelle photo de chantier, vous me l\u2019envoyez, je la mets en ligne." },
                  { strong: "Pas de mauvaise surprise", text: "Tout est clair d\u00e8s le d\u00e9part." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-base leading-relaxed">
                      <strong className="text-white">{item.strong}&nbsp;:</strong> {item.text}
                    </p>
                  </li>
                ))}
              </ul>

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
