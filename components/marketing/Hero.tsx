import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-bg-white" aria-label="Introduction">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-6">
            Agence web locale &mdash; Flines-lez-Raches, Nord (59)
          </span>

          {/* H1 SEO */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-navy leading-tight tracking-[-0.02em] mb-6">
            Artisans du Nord : Transformez votre bouche-&agrave;-oreille en{" "}
            <span className="text-orange">syst&egrave;me automatique</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-text-light text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Arr&ecirc;tez de courir apr&egrave;s les chantiers. Laissez votre site
            filtrer et convaincre les bons clients pour vous.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto pulse-glow">
                R&eacute;server mon Audit &agrave; Flines-lez-Raches
              </Button>
            </a>
            <a href="#systeme">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                D&eacute;couvrir le syst&egrave;me
              </Button>
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-text-muted text-sm">
            Audit gratuit &middot; Sans engagement &middot; R&eacute;ponse sous 24h
          </p>
        </div>
      </div>
    </section>
  );
}
