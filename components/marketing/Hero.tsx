"use client";

import Button from "@/components/ui/Button";
import FloatingElements from "@/components/animations/FloatingElements";

interface HeroProps {
  images?: Record<string, string>;
}

export default function Hero({ images }: HeroProps) {
  const portraitUrl = images?.hero_portrait;

  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center bg-navy overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(232,119,46,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <FloatingElements />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange/15 border border-orange/25 rounded-full text-orange text-xs font-semibold mb-8 animate-fade-in-down">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              Flines-lez-Raches, Nord (59)
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
              <span className="block animate-hero-text-1">
                Artisans du Nord :
              </span>
              <span className="block animate-hero-text-2">
                Transformez votre
              </span>
              <span className="block animate-hero-text-2">
                bouche-à-oreille en{" "}
              </span>
              <span className="block text-orange animate-hero-text-3 relative">
                machine à chantiers.
                <span className="absolute -bottom-2 left-0 h-1 bg-orange/40 rounded-full animate-underline-grow" />
              </span>
            </h1>

            <p className="text-white/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-600">
              Avis Google + Facebook + Site pro : le triptyque qui fait que vos
              futurs clients vous appellent <strong className="text-white/90">vous</strong>, et pas votre concurrent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto pulse-glow text-base group">
                  <span className="flex items-center gap-2">
                    DÉMARRER MON AUDIT GRATUIT
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Comment ça marche ?
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in-up animation-delay-1000">
              {["Réponse sous 24h", "100% Géré pour vous", "Pas de jargon"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/50 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange/20 rounded-3xl blur-2xl" />
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-white/10">
                {portraitUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={portraitUrl} alt="Enguerrand Ozano - HookLab" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-navy-light flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-10 h-10 text-orange/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-white/30 text-sm">Votre photo ici</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-3 -right-3 bg-orange text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
                Expert Nord (59)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
        <a href="#problematique" aria-label="Défiler vers le bas" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
