import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-navy overflow-hidden" aria-label="Introduction">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block px-3 py-1.5 bg-orange/20 border border-orange/30 rounded-full text-orange text-xs font-semibold mb-6">
            Flines-lez-Raches, Nord (59)
          </span>

          {/* H1 SEO */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight tracking-[-0.02em] mb-6">
            Artisans du Nord : Votre site web doit &ecirc;tre aussi solide que{" "}
            <span className="text-orange">vos ouvrages.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Un site professionnel &agrave; la hauteur de votre savoir-faire.
            Depuis Flines-lez-Raches, je con&ccedil;ois des vitrines num&eacute;riques
            performantes qui inspirent confiance et g&eacute;n&egrave;rent des demandes
            qualifi&eacute;es &agrave; Douai, Orchies et Valenciennes.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto pulse-glow text-base">
                D&Eacute;MARRER MON AUDIT GRATUIT
              </Button>
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-5 text-white/50 text-sm">
            R&eacute;ponse sous 24h &middot; Pas de jargon &middot; 100% G&eacute;r&eacute; pour vous.
          </p>
        </div>
      </div>
    </section>
  );
}
