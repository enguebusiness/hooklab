import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "D\u00e9mo Site Paysagiste / Peintre - Pack Esth\u00e9tique",
  description:
    "D\u00e9couvrez le mod\u00e8le de site HookLab pour paysagistes et peintres. Design \u00e9pur\u00e9, galerie photo immersive, filtrage Cr\u00e9ation vs Entretien.",
};

const realisations = [
  { titre: "Jardin contemporain", type: "Cr\u00e9ation", lieu: "Douai" },
  { titre: "Terrasse bois & pergola", type: "Cr\u00e9ation", lieu: "Orchies" },
  { titre: "Entretien parc 2000m\u00b2", type: "Entretien", lieu: "Valenciennes" },
  { titre: "Am\u00e9nagement piscine", type: "Cr\u00e9ation", lieu: "Arleux" },
  { titre: "Taille de haies & \u00e9lagage", type: "Entretien", lieu: "Flines-lez-Raches" },
  { titre: "Jardin japonais", type: "Cr\u00e9ation", lieu: "Saint-Amand" },
];

export default function PaysagisteDemo() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Nav simplifi\u00e9e */}
      <nav className="sticky top-0 z-50 bg-bg-white/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-text-muted hover:text-navy text-sm transition-colors">
              &larr; Retour HookLab
            </Link>
            <span className="text-border">|</span>
            <span className="text-navy font-bold text-sm">
              D\u00e9mo : <span className="text-orange">Pack Esth\u00e9tique</span>
            </span>
          </div>
          <a
            href="tel:+33600000000"
            className="bg-orange hover:bg-orange/90 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Devis Gratuit
          </a>
        </div>
      </nav>

      {/* Hero \u00e9pur\u00e9 */}
      <section className="py-24 md:py-36 bg-[#1a2e1a] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(34,139,34,0.15),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold mb-6">
            Paysagisme & Espaces Verts
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            [Votre Entreprise] &mdash; Paysagiste <span className="text-green-400">dans le Nord</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Cr\u00e9ation de jardins d&rsquo;exception et entretien d&rsquo;espaces verts.
            La nature est notre m\u00e9tier, la beaut\u00e9 notre signature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 border-green-600">
              Demander un Devis Cr\u00e9ation
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Devis Entretien
            </Button>
          </div>
        </div>
      </section>

      {/* R\u00e9alisations avec filtrage */}
      <section className="py-16 md:py-24 bg-bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Nos <span className="text-orange">r\u00e9alisations</span>
            </h2>
            <p className="text-text-light mb-6">
              Filtrez par type de projet pour trouver l&rsquo;inspiration.
            </p>
            {/* Filtre visuel (d\u00e9mo statique) */}
            <div className="flex justify-center gap-3">
              <span className="px-4 py-2 bg-navy text-white text-sm font-semibold rounded-full">Tous</span>
              <span className="px-4 py-2 bg-bg border border-border text-text-light text-sm rounded-full cursor-pointer hover:border-navy transition-colors">Cr\u00e9ation</span>
              <span className="px-4 py-2 bg-bg border border-border text-text-light text-sm rounded-full cursor-pointer hover:border-navy transition-colors">Entretien</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((r, i) => (
              <div key={i} className="bg-bg border border-border rounded-2xl overflow-hidden group">
                <div className="h-48 bg-green-50 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-green-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <p className="text-text-muted text-xs">Photo du projet</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-navy font-bold text-sm">{r.titre}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      r.type === "Cr\u00e9ation" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    }`}>
                      {r.type}
                    </span>
                  </div>
                  <p className="text-text-muted text-xs">{r.lieu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2e1a] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-orange text-xs font-semibold uppercase tracking-wider mb-3">Ceci est une d\u00e9mo HookLab</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ce design vous pla\u00eet&nbsp;? Il peut &ecirc;tre &agrave; vous.
          </h2>
          <p className="text-white/60 mb-6">
            Imaginez vos plus beaux jardins mis en valeur comme \u00e7a. C&rsquo;est ce que je cr\u00e9e pour les paysagistes du Nord.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 border-green-600">
              Demander Mon Audit Gratuit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
