"use client";

import Button from "@/components/ui/Button";
import ParallaxRocket from "@/components/animations/ParallaxRocket";
import FloatingElements from "@/components/animations/FloatingElements";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center bg-navy overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(232,119,46,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Parallax Rocket */}
      <ParallaxRocket />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge animé */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange/15 border border-orange/25 rounded-full text-orange text-xs font-semibold mb-8 animate-fade-in-down">
            <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
            Flines-lez-Raches, Nord (59)
          </span>

          {/* H1 avec animation staggered */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            <span className="block animate-hero-text-1">
              Artisans du Nord :
            </span>
            <span className="block animate-hero-text-2">
              Votre site web doit
            </span>
            <span className="block animate-hero-text-2">
              être aussi solide que{" "}
            </span>
            <span className="block text-orange animate-hero-text-3 relative">
              vos ouvrages.
              {/* Underline animée */}
              <span className="absolute -bottom-2 left-0 h-1 bg-orange/40 rounded-full animate-underline-grow" />
            </span>
          </h1>

          {/* Sous-titre avec fade in */}
          <p className="text-white/65 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-600">
            Un site professionnel à la hauteur de votre savoir-faire.
            Depuis Flines-lez-Raches, je conçois des vitrines numériques
            performantes qui inspirent confiance et génèrent des demandes
            qualifiées.
          </p>

          {/* CTA buttons avec animation */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto pulse-glow text-base group">
                <span className="flex items-center gap-2">
                  DÉMARRER MON AUDIT GRATUIT
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Button>
            </a>
            <a
              href="#demos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Découvrir nos réalisations
            </a>
          </div>

          {/* Trust line animée */}
          <div className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in-up animation-delay-1000">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/50 text-sm">Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/50 text-sm">Pas de jargon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/50 text-sm">100% Géré pour vous</span>
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
