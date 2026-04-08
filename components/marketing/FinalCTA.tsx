import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-6">
          Pr&ecirc;t &agrave; lancer ton business{" "}
          <span className="gradient-text">TikTok Shop</span> ?
        </h2>
        <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
          Chaque jour sans action est un jour de commissions perdues.
          Les places sont limit&eacute;es pour garantir un accompagnement de qualit&eacute;.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="/candidature">
            <Button size="lg" className="pulse-glow text-lg px-10">
              Candidater maintenant
            </Button>
          </Link>
          <a href="#tarif">
            <Button variant="secondary" size="lg">
              Voir le tarif
            </Button>
          </a>
        </div>

        {/* Trust elements */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            R&eacute;ponse sous 24h
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            14 jours satisfait ou rembours&eacute;
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Paiement en 2 fois
          </div>
        </div>
      </div>
    </section>
  );
}
