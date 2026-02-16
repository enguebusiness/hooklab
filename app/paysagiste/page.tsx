import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PaysagisteClient from "./PaysagisteClient";

export const metadata: Metadata = {
  title: "Démo Site Paysagiste / Peintre - L'Artisan Créateur",
  description:
    "Modèle de site HookLab pour paysagistes, peintres et décorateurs. Galerie filtrable, saisonnalité intelligente, bouton WhatsApp flottant.",
  alternates: {
    canonical: "https://hooklab.eu/paysagiste",
  },
};

const realisations = [
  { titre: "Jardin contemporain avec terrasse composite", type: "Terrasses", lieu: "Orchies", saison: "printemps", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" },
  { titre: "Aménagement complet piscine + clôture", type: "Terrasses", lieu: "Douai", saison: "printemps", image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=600&q=80" },
  { titre: "Création massif fleuri 4 saisons", type: "Plantations", lieu: "Valenciennes", saison: "printemps", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80" },
  { titre: "Haie brise-vue naturelle en bambou", type: "Plantations", lieu: "Arleux", saison: "automne", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=600&q=80" },
  { titre: "Allée carrossable en pavés anciens", type: "Allées", lieu: "Saint-Amand", saison: "automne", image: "https://images.unsplash.com/photo-1598902108854-d1446c81e20e?auto=format&fit=crop&w=600&q=80" },
  { titre: "Jardin japonais zen avec bassin", type: "Plantations", lieu: "Flines-lez-Raches", saison: "printemps", image: "https://images.unsplash.com/photo-1582547403609-4244e80be657?auto=format&fit=crop&w=600&q=80" },
  { titre: "Taille architecturale haies buis", type: "Entretien", lieu: "Denain", saison: "automne", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80" },
  { titre: "Entretien annuel parc 3000m²", type: "Entretien", lieu: "Douai", saison: "automne", image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=600&q=80" },
];

export default function PaysagisteDemo() {
  const currentMonth = new Date().getMonth();
  const isSpringSummer = currentMonth >= 2 && currentMonth <= 8;

  return (
    <main className="min-h-screen bg-white">
      {/* Nav épurée */}
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

      {/* Bannière saisonnière */}
      <div className={`text-center py-2 text-xs font-semibold ${isSpringSummer ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
        {isSpringSummer
          ? "C’est la saison ! Création de terrasses & plantations — Demandez votre devis maintenant"
          : "Préparez le printemps ! Taille, élagage & entretien d’automne — Planifiez vos travaux"
        }
      </div>

      {/* Hero épuré */}
      <section className="py-24 md:py-36 bg-[#f0f5ed] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(34,139,34,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1.5 bg-green-100 border border-green-200 rounded-full text-green-700 text-xs font-semibold mb-6">
            Paysagisme &middot; Espaces Verts &middot; Décoration
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Transformez votre extérieur en un{" "}
            <span className="text-green-600">espace de vie unique.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">
            Création de jardins, terrasses et aménagements paysagers sur-mesure.
            Chaque projet est conçu pour sublimer votre environnement et valoriser votre bien.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Créations à Douai, Orchies, Valenciennes, Saint-Amand et environs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#devis">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 border-green-600">
                Demander un Devis Création
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

      {/* Réalisations filtrables */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Nos <span className="text-green-600">réalisations</span>
            </h2>
            <p className="text-gray-500 mb-2">
              Des créations dans des lieux que vous connaissez. Projetez-vous.
            </p>
          </div>
          <PaysagisteClient realisations={realisations} />
        </div>
      </section>

      {/* Immersion locale */}
      <section className="py-16 md:py-24 bg-[#f0f5ed]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Des jardins près de <span className="text-green-600">chez vous</span>
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
                <p className="text-gray-800 font-semibold text-sm">Jardin à {ville}</p>
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
            <p className="text-white/60">Décrivez votre projet, on vous recontacte sous 24h.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Type de projet</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none">
                  <option>Création de jardin complet</option>
                  <option>Terrasse / Aménagement</option>
                  <option>Plantation / Massifs</option>
                  <option>Entretien régulier</option>
                  <option>Taille / Élagage</option>
                  <option>Clôture / Brise-vue</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Votre nom</label>
                <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                <input type="tel" placeholder="06 12 34 56 78" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Décrivez votre projet</label>
                <textarea rows={3} placeholder="Surface, style souhaité, budget approximatif..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none resize-none" />
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
          <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-3">Ceci est une démo HookLab</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ce design vous plaît ? Il peut être à vous.
          </h2>
          <p className="text-white/80 mb-6">
            Imaginez vos plus beaux jardins mis en valeur comme ça. C&rsquo;est ce que je crée pour les paysagistes du Nord.
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
