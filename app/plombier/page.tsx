import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PlombierClient from "./PlombierClient";

export const metadata: Metadata = {
  title: "Démo Site Plombier / Électricien - L'Intervention Éclair",
  description:
    "Modèle de site HookLab pour plombiers, électriciens et serruriers. Bouton d'appel sticky, diagnostic en ligne, zone d'intervention, tarifs clairs.",
  alternates: {
    canonical: "https://hooklab.eu/plombier",
  },
};

const tarifs = [
  { service: "Dépannage fuite", prix: "À partir de 89€", urgence: true },
  { service: "Débouchage canalisation", prix: "À partir de 120€", urgence: true },
  { service: "Remplacement chauffe-eau", prix: "À partir de 350€", urgence: false },
  { service: "Installation sanitaire complète", prix: "Sur devis", urgence: false },
  { service: "Recherche de fuite", prix: "À partir de 150€", urgence: true },
  { service: "Rénovation salle de bain", prix: "Sur devis", urgence: false },
];

const avis = [
  { name: "Laurent P.", ville: "Douai", text: "Fuite à 22h un samedi. Intervention en 45 min. Prix correct, travail pro. Merci !", note: 5 },
  { name: "Marie C.", ville: "Orchies", text: "Chauffe-eau en panne en plein hiver. Remplacé le lendemain matin. Service impeccable.", note: 5 },
  { name: "Jean-Marc B.", ville: "Valenciennes", text: "Canalisation bouchée, devis clair au téléphone, pas de surprise à la facture. Rare !", note: 5 },
];

export default function PlombierDemo() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      {/* Nav avec avis + tél */}
      <nav className="sticky top-0 z-50 bg-[#0a1628] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/50 hover:text-white text-sm transition-colors">
              &larr; HookLab
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-white font-bold text-sm">
              [Votre Entreprise] &mdash; <span className="text-[#3b82f6]">Plombier</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Avis Google */}
            <div className="hidden sm:flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-yellow-300 text-xs font-semibold">4.9/5</span>
            </div>
            <a
              href="tel:+33604408157"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 04 40 81 57
            </a>
          </div>
        </div>
      </nav>

      {/* Hero ultra-direct */}
      <section className="py-16 md:py-24 bg-[#0a1628] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-xs font-semibold">Disponible 7j/7 &mdash; Intervention rapide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Votre plombier{" "}
            <span className="text-[#facc15]">réactif et transparent.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-4">
            Fuite d’eau, panne de chauffe-eau, canalisation bouchée ?
            Intervention rapide avec devis gratuit. Disponible 7j/7 dans le Douaisis.
          </p>
          <p className="text-white/30 text-sm mb-8">
            Dépannage Douai &middot; Orchies &middot; Valenciennes &middot; Denain &middot; Saint-Amand &middot; Arleux
          </p>
          <a
            href="tel:+33604408157"
            className="inline-flex items-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-xl px-10 py-5 rounded-2xl transition-colors shadow-lg shadow-blue-500/20"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler Maintenant
          </a>
          <p className="text-white/40 text-sm mt-3">Pas de surprise : devis gratuit avant intervention</p>
        </div>
      </section>

      {/* Tarifs clairs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Tarifs <span className="text-[#3b82f6]">transparents</span>
            </h2>
            <p className="text-gray-500">Pas de surprise. Vous savez ce que vous payez avant qu’on se déplace.</p>
          </div>

          <div className="space-y-3">
            {tarifs.map((t, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3">
                  {t.urgence && <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" />}
                  <span className="text-gray-900 font-semibold text-sm">{t.service}</span>
                  {t.urgence && <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">Urgence</span>}
                </div>
                <span className="text-[#3b82f6] font-bold text-sm">{t.prix}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic en ligne */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Diagnostic <span className="text-[#3b82f6]">en ligne</span>
            </h2>
            <p className="text-gray-500">3 questions simples. On qualifie la panne avant de décrocher.</p>
          </div>
          <PlombierClient type="diagnostic" />
        </div>
      </section>

      {/* Avis */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Avis <span className="text-[#facc15]">Google</span> vérifiés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {avis.map((a, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">“{a.text}”</p>
                <p className="text-gray-900 font-semibold text-sm">{a.name} — <span className="text-gray-400 font-normal">{a.ville}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention avec carte */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Zone <span className="text-[#3b82f6]">d’intervention</span>
            </h2>
            <p className="text-gray-500">Douai + 25km. Dépannage rapide dans tout le secteur.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="relative h-64 sm:h-80">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.6%2C50.2%2C3.8%2C50.55&layer=mapnik&marker=50.4267%2C3.2372"
                className="absolute inset-0 w-full h-full border-0"
                title="Zone d'intervention plombier"
                loading="lazy"
              />
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 justify-center">
                {["Douai", "Orchies", "Valenciennes", "Denain", "Saint-Amand", "Arleux", "Flines-lez-Raches"].map((v) => (
                  <span key={v} className="bg-blue-50 text-[#3b82f6] text-xs font-semibold px-3 py-1 rounded-full">{v}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs text-center mt-4">
            Vous êtes hors zone ? Contactez-nous, on trouvera une solution.
          </p>
        </div>
      </section>

      {/* Sticky Call Mobile */}
      <PlombierClient type="sticky" />

      {/* CTA HookLab */}
      <section className="py-16 bg-[#3b82f6] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-3">Ceci est une démo HookLab</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ce site peut être le vôtre demain.
          </h2>
          <p className="text-white/80 mb-6">
            Un site qui rassure, qui qualifie les urgences, et qui vous fait gagner du temps.
            C’est ce que je construis pour les plombiers et électriciens du Nord.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-[#0a1628] hover:bg-[#0a1628]/90 border-[#0a1628]">
              Demander Mon Audit Gratuit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
