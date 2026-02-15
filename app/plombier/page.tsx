import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "D\u00e9mo Site Plombier / \u00c9lectricien - Pack Urgence & Service",
  description:
    "D\u00e9couvrez le mod\u00e8le de site HookLab pour plombiers et \u00e9lectriciens. Chargement \u00e9clair, tarifs clairs, formulaire de diagnostic rapide.",
};

const tarifs = [
  { service: "D\u00e9pannage fuite", prix: "\u00c0 partir de 89\u20ac", urgence: true },
  { service: "Remplacement chauffe-eau", prix: "\u00c0 partir de 350\u20ac", urgence: false },
  { service: "D\u00e9bouchage canalisation", prix: "\u00c0 partir de 120\u20ac", urgence: true },
  { service: "Installation sanitaire", prix: "Sur devis", urgence: false },
];

export default function PlombierDemo() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Nav urgence */}
      <nav className="sticky top-0 z-50 bg-navy border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
              &larr; Retour HookLab
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-white font-bold text-sm">
              D\u00e9mo : <span className="text-orange">Pack Urgence</span>
            </span>
          </div>
          <a
            href="tel:+33600000000"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors animate-pulse flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            URGENCE 7j/7
          </a>
        </div>
      </nav>

      {/* Hero rapide */}
      <section className="py-16 md:py-24 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-xs font-semibold">Disponible 7j/7 &mdash; Intervention rapide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            [Votre Entreprise] &mdash; Plombier <span className="text-orange">dans le Nord</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Fuite, panne, urgence&nbsp;? Intervention rapide sur Douai, Orchies
            et Valenciennes. Tarifs transparents, devis gratuit.
          </p>
          <a
            href="tel:+33600000000"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler Maintenant
          </a>
        </div>
      </section>

      {/* Tarifs clairs */}
      <section className="py-16 md:py-24 bg-bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Tarifs <span className="text-orange">transparents</span>
            </h2>
            <p className="text-text-light">Pas de surprise. Vous savez ce que vous payez.</p>
          </div>

          <div className="space-y-3">
            {tarifs.map((t, i) => (
              <div key={i} className="flex items-center justify-between bg-bg border border-border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  {t.urgence && (
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" />
                  )}
                  <span className="text-navy font-semibold text-sm">{t.service}</span>
                  {t.urgence && (
                    <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">Urgence</span>
                  )}
                </div>
                <span className="text-orange font-bold text-sm">{t.prix}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic rapide */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Diagnostic <span className="text-orange">rapide</span>
            </h2>
            <p className="text-text-light">D\u00e9crivez votre probl\u00e8me en 30 secondes. On vous rappelle avec une solution.</p>
          </div>

          <div className="bg-bg-white border border-border rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">Type de probl\u00e8me</label>
                <select className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm focus:border-orange focus:ring-1 focus:ring-orange outline-none">
                  <option>Fuite d&apos;eau</option>
                  <option>Canalisation bouch\u00e9e</option>
                  <option>Panne chauffe-eau</option>
                  <option>Probl\u00e8me radiateur</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">Niveau d&apos;urgence</label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="border-2 border-red-300 bg-red-50 rounded-xl p-3 text-center cursor-pointer">
                    <p className="text-red-600 font-bold text-sm">Urgent</p>
                    <p className="text-text-muted text-xs">Fuite active</p>
                  </div>
                  <div className="border border-border rounded-xl p-3 text-center cursor-pointer hover:border-orange transition-colors">
                    <p className="text-navy font-bold text-sm">Mod\u00e9r\u00e9</p>
                    <p className="text-text-muted text-xs">Sous 48h</p>
                  </div>
                  <div className="border border-border rounded-xl p-3 text-center cursor-pointer hover:border-orange transition-colors">
                    <p className="text-navy font-bold text-sm">Planifi\u00e9</p>
                    <p className="text-text-muted text-xs">Travaux</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">Votre t\u00e9l\u00e9phone</label>
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none"
                />
              </div>
              <Button size="lg" className="w-full">
                Envoyer le Diagnostic
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-orange text-xs font-semibold uppercase tracking-wider mb-3">Ceci est une d\u00e9mo HookLab</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ce site peut &ecirc;tre le v&ocirc;tre demain.
          </h2>
          <p className="text-white/60 mb-6">
            Un site qui rassure, qui qualifie les urgences, et qui vous fait gagner du temps. C&rsquo;est ce que je construis pour les plombiers et \u00e9lectriciens du Nord.
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
