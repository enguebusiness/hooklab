import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "D\u00e9mo Site Ma\u00e7on / Couvreur - Pack Gros \u0152uvre",
  description:
    "D\u00e9couvrez le mod\u00e8le de site HookLab pour ma\u00e7ons et couvreurs. Galerie Avant/Apr\u00e8s, bouton Urgence Fuite, optimis\u00e9 SEO local.",
};

const avantApres = [
  { avant: "Toiture v\u00e9tuste - Tuiles cass\u00e9es", apres: "R\u00e9fection compl\u00e8te en tuiles m\u00e9caniques" },
  { avant: "Fa\u00e7ade fissur\u00e9e - Enduit d\u00e9grad\u00e9", apres: "Ravalement complet + isolation" },
  { avant: "Chemin\u00e9e en ruine", apres: "Reconstruction + \u00e9tanch\u00e9it\u00e9" },
];

export default function MaconDemo() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Nav simplifi\u00e9e */}
      <nav className="sticky top-0 z-50 bg-navy border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
              &larr; Retour HookLab
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-white font-bold text-sm">
              D\u00e9mo : <span className="text-orange">Pack Gros \u0152uvre</span>
            </span>
          </div>
          <a
            href="tel:+33600000000"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Urgence Fuite
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1.5 bg-orange/20 border border-orange/30 rounded-full text-orange text-xs font-semibold mb-6">
            Ma\u00e7onnerie & Couverture
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            [Votre Entreprise] &mdash; Ma\u00e7on Couvreur <span className="text-orange">dans le Nord</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Plus de 15 ans d&rsquo;exp\u00e9rience en ma\u00e7onnerie et couverture. Devis gratuit sous 24h.
            Intervention rapide sur Douai, Orchies et Valenciennes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="pulse-glow">
              Demander un Devis Gratuit
            </Button>
            <a
              href="tel:+33600000000"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Urgence Fuite : Appeler Maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Avant / Apr\u00e8s */}
      <section className="py-16 md:py-24 bg-bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Galerie <span className="text-orange">Avant / Apr\u00e8s</span>
            </h2>
            <p className="text-text-light">La preuve par l&rsquo;image. Nos chantiers parlent d&rsquo;eux-m\u00eames.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {avantApres.map((item, i) => (
              <div key={i} className="bg-bg border border-border rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="h-40 bg-red-50 flex items-center justify-center border-r border-border">
                    <div className="text-center p-3">
                      <p className="text-red-500 text-xs font-bold uppercase mb-1">Avant</p>
                      <p className="text-text-muted text-xs">{item.avant}</p>
                    </div>
                  </div>
                  <div className="h-40 bg-green-50 flex items-center justify-center">
                    <div className="text-center p-3">
                      <p className="text-green-600 text-xs font-bold uppercase mb-1">Apr\u00e8s</p>
                      <p className="text-text-muted text-xs">{item.apres}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">
            Ce que disent <span className="text-orange">nos clients</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Marc D.", ville: "Douai", text: "Toiture refaite en 3 jours. Propre, ponctuel, prix respect\u00e9. Je recommande \u00e0 100%." },
              { name: "Sophie L.", ville: "Orchies", text: "Fuite d\u2019urgence un dimanche. Ils sont venus en 2h. Travail impeccable." },
            ].map((avis, i) => (
              <div key={i} className="bg-bg-white border border-border rounded-xl p-6 text-left">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-light text-sm leading-relaxed mb-3">&ldquo;{avis.text}&rdquo;</p>
                <p className="text-navy font-semibold text-sm">{avis.name} &mdash; <span className="text-text-muted font-normal">{avis.ville}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-orange text-xs font-semibold uppercase tracking-wider mb-3">Ceci est une d\u00e9mo HookLab</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vous voulez le m\u00eame site pour votre entreprise&nbsp;?
          </h2>
          <p className="text-white/60 mb-6">
            Imaginez votre logo, vos photos et votre num\u00e9ro \u00e0 la place. C&rsquo;est exactement ce que je construis pour vous.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="pulse-glow">
              Demander Mon Audit Gratuit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
