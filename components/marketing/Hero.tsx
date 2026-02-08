import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              Places limitees - Promo en cours
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dark-light border border-dark-border rounded-full text-white/60 text-xs font-medium">
              Programme 8 semaines
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.1] mb-6">
            Lance ton business{" "}
            <span className="gradient-text">TikTok Shop</span> en 8 semaines
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Le programme de coaching complet pour devenir createur affilie
            TikTok Shop et generer tes premiers revenus en ligne.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/candidature">
              <Button size="lg" className="pulse-glow text-lg px-10">
                Candidater maintenant
              </Button>
            </Link>
            <a href="#methode">
              <Button variant="secondary" size="lg">
                Decouvrir la methode
              </Button>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              {/* Avatars empilés */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full gradient-bg border-2 border-dark flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-white/60">
                <span className="text-white font-semibold">+120</span> eleves
                formes
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-warning"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-white/60 ml-1">
                <span className="text-white font-semibold">4.9/5</span> de
                satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
