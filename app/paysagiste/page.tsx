import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PaysagisteClient from "./PaysagisteClient";

export const metadata: Metadata = {
  title: "D\u00e9mo Site Paysagiste / Peintre - L'Artisan Cr\u00e9ateur | HookLab",
  description:
    "Mod\u00e8le de site HookLab pour paysagistes, peintres et d\u00e9corateurs. Galerie filtrable, saisonnalit\u00e9 intelligente, bouton WhatsApp flottant.",
};

const realisations = [
  { titre: "Jardin contemporain avec terrasse composite", type: "Terrasses", lieu: "Orchies", saison: "printemps" },
  { titre: "Am\u00e9nagement complet piscine + cl\u00f4ture", type: "Terrasses", lieu: "Douai", saison: "printemps" },
  { titre: "Cr\u00e9ation massif fleuri 4 saisons", type: "Plantations", lieu: "Valenciennes", saison: "printemps" },
  { titre: "Haie brise-vue naturelle en bambou", type: "Plantations", lieu: "Arleux", saison: "automne" },
  { titre: "All\u00e9e carrossable en pav\u00e9s anciens", type: "All\u00e9es", lieu: "Saint-Amand", saison: "automne" },
  { titre: "Jardin japonais zen avec bassin", type: "Plantations", lieu: "Flines-lez-Raches", saison: "printemps" },
  { titre: "Taille architecturale haies buis", type: "Entretien", lieu: "Denain", saison: "automne" },
  { titre: "Entretien annuel parc 3000m\u00b2", type: "Entretien", lieu: "Douai", saison: "automne" },
];

export default function PaysagisteDemo() {
  const currentMonth = new Date().getMonth();
  const isSpringSummer = currentMonth >= 2 && currentMonth <= 8;

  return (
    <main className="min-h-screen bg-white">
      {/* Nav \u00e9pur\u00e9e */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">
              &larr; HookLab
            </Link>
            <span className="text-gray-200">|</span>
            <span className="text-gray-800 font-bold text-sm">
              [Votre Entreprise] &mdash; <span className="text-green-600">Paysagiste</span>
            </span>
          </div>
          <a
            href="tel:+33604408157"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2 rounded-lg transition-colors"
          >
            Devis Gratuit
          </a>
        </div>
      </nav>

      {/* Banni\u00e8re saisonni\u00e8re */}
      <div className={`text-center py-2 text-xs font-semibold ${isSpringSummer ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
        {isSpringSummer
          ? "C\u2019est la saison ! Cr\u00e9ation de terrasses & plantations \u2014 Demandez votre devis maintenant"
          : "Pr\u00e9parez le printemps ! Taille, \u00e9lagage & entretien d\u2019automne \u2014 Planifiez vos travaux"
        }
      </div>

      {/* Hero \u00e9pur\u00e9 */}
      <section className="py-24 md:py-36 bg-[#f0f5ed] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(34,139,34,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1.5 bg-green-100 border border-green-200 rounded-full text-green-700 text-xs font-semibold mb-6">
            Paysagisme &middot; Espaces Verts &middot; D\u00e9coration
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Ne vendez pas des travaux,{" "}
            <span className="text-green-600">vendez du r\u00eave.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">
            Pour un jardin ou un int\u00e9rieur, votre client n&rsquo;ach\u00e8te pas de la technique,
            il ach\u00e8te une &laquo;&nbsp;ambiance&nbsp;&raquo;. Ce site est votre galerie d&rsquo;art.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Cr\u00e9ations &agrave; Douai, Orchies, Valenciennes, Saint-Amand et environs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#devis">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 border-green-600">
                Demander un Devis Cr\u00e9ation
              </Button>
            </a>
            <a href="#devis">
              <Button size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                Devis Entretien
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* R\u00e9alisations filtrables */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Nos <span className="text-green-600">r\u00e9alisations</span>
            </h2>
            <p className="text-gray-500 mb-2">
              Des cr\u00e9ations dans des lieux que vous connaissez. Projetez-vous.
            </p>
          </div>
          <PaysagisteClient realisations={realisations} />
        </div>
      </section>

      {/* Immersion locale */}
      <section className="py-16 md:py-24 bg-[#f0f5ed]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Des jardins pr\u00e8s de <span className="text-green-600">chez vous</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Douai", "Orchies", "Valenciennes", "Arleux", "Saint-Amand", "Denain"].map((ville) => (
              <div key={ville} className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-800 font-semibold text-sm">Jardin \u00e0 {ville}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="devis" className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Demander un <span className="text-green-400">devis gratuit</span>
            </h2>
            <p className="text-white/60">D\u00e9crivez votre projet, on vous recontacte sous 24h.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Type de projet</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none">
                  <option>Cr\u00e9ation de jardin complet</option>
                  <option>Terrasse / Am\u00e9nagement</option>
                  <option>Plantation / Massifs</option>
                  <option>Entretien r\u00e9gulier</option>
                  <option>Taille / \u00c9lagage</option>
                  <option>Cl\u00f4ture / Brise-vue</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Votre nom</label>
                <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">T\u00e9l\u00e9phone</label>
                <input type="tel" placeholder="06 12 34 56 78" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">D\u00e9crivez votre projet</label>
                <textarea rows={3} placeholder="Surface, style souhait\u00e9, budget approximatif..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none resize-none" />
              </div>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 border-green-600">
                Envoyer ma demande
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp flottant */}
      <PaysagisteClient whatsapp />

      {/* CTA HookLab */}
      <section className="py-16 bg-green-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-3">Ceci est une d\u00e9mo HookLab</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ce design vous pla\u00eet ? Il peut \u00eatre \u00e0 vous.
          </h2>
          <p className="text-white/80 mb-6">
            Imaginez vos plus beaux jardins mis en valeur comme \u00e7a. C&rsquo;est ce que je cr\u00e9e pour les paysagistes du Nord.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 border-gray-900">
              Demander Mon Audit Gratuit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
