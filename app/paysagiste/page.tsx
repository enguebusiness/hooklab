import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PaysagisteClient from "./PaysagisteClient";
import { getSiteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Démo Site Paysagiste - Conception & Entretien Espaces Verts",
  description:
    "Modèle de site HookLab pour paysagistes. Design inspiré des meilleurs sites du secteur : hero immersif, services, valeurs métier, formulaire de contact.",
  alternates: {
    canonical: "https://hooklab.eu/paysagiste",
  },
};


const valeurs = [
  {
    titre: "Écoute & conseil",
    description: "Un accompagnement personnalisé du premier rendez-vous à la réception du chantier.",
    icon: "chat",
  },
  {
    titre: "Créativité sur-mesure",
    description: "Chaque jardin est unique. Nous concevons des espaces qui vous ressemblent.",
    icon: "paint",
  },
  {
    titre: "Plantes & matériaux choisis",
    description: "Sélection rigoureuse de végétaux adaptés au climat et de matériaux durables.",
    icon: "leaf",
  },
  {
    titre: "Expertise & savoir-faire",
    description: "Des années d'expérience au service de vos projets d'aménagement extérieur.",
    icon: "star",
  },
];

function ValeurIcon({ type }: { type: string }) {
  const cls = "w-8 h-8";
  switch (type) {
    case "chat":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      );
    case "paint":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      );
    case "leaf":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
        </svg>
      );
    case "star":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default async function PaysagisteDemo() {
  const images = await getSiteImages();

  const realisations = [
    { titre: "Jardin contemporain avec terrasse composite", type: "Terrasses", lieu: "Orchies", saison: "printemps", image: images.paysagiste_galerie_1 },
    { titre: "Aménagement complet piscine + clôture", type: "Terrasses", lieu: "Douai", saison: "printemps", image: images.paysagiste_galerie_2 },
    { titre: "Création massif fleuri 4 saisons", type: "Plantations", lieu: "Valenciennes", saison: "printemps", image: images.paysagiste_galerie_3 },
    { titre: "Haie brise-vue naturelle en bambou", type: "Plantations", lieu: "Arleux", saison: "automne", image: images.paysagiste_galerie_4 },
    { titre: "Allée carrossable en pavés anciens", type: "Allées", lieu: "Saint-Amand", saison: "automne", image: images.paysagiste_galerie_5 },
    { titre: "Jardin japonais zen avec bassin", type: "Plantations", lieu: "Flines-lez-Raches", saison: "printemps", image: images.paysagiste_galerie_6 },
    { titre: "Taille architecturale haies buis", type: "Entretien", lieu: "Denain", saison: "automne", image: images.paysagiste_galerie_7 },
    { titre: "Entretien annuel parc 3000m²", type: "Entretien", lieu: "Douai", saison: "automne", image: images.paysagiste_galerie_8 },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ===== NAV TRANSPARENTE SUR LE HERO ===== */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
              &larr; HookLab
            </Link>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>
              </div>
              <span className="text-white font-bold text-sm hidden sm:block">
                [Votre Entreprise] &mdash; <span className="text-green-400">Paysagiste</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#realisations" className="hidden md:inline text-white/70 hover:text-white text-sm font-medium transition-colors">Réalisations</a>
            <a href="#apropos" className="hidden md:inline text-white/70 hover:text-white text-sm font-medium transition-colors">L&rsquo;entreprise</a>
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO PLEIN ÉCRAN AVEC PHOTO ===== */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.paysagiste_hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-white/90 text-sm font-medium">Conception &middot; Réalisation &middot; Entretien</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Conception, réalisation et entretien{" "}
            <span className="text-green-400">d&rsquo;espaces paysagers</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Votre paysagiste de confiance autour de Douai, Orchies et Valenciennes.
            Du jardin d&rsquo;agrément à l&rsquo;espace professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
            >
              Demander un devis gratuit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </section>

      {/* ===== 2 GRANDES CARDS SERVICES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Création */}
            <div className="relative group rounded-2xl overflow-hidden h-80 md:h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.paysagiste_service_creation}
                alt="Création d'espaces verts"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Création d&rsquo;espaces verts
                </h3>
                <p className="text-white/70 mb-5 text-sm">
                  Jardins, terrasses, allées, bassins &mdash; nous donnons vie à vos envies.
                </p>
                <a
                  href="#realisations"
                  className="inline-flex items-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white hover:border-green-600 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors w-fit"
                >
                  En savoir +
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Entretien */}
            <div className="relative group rounded-2xl overflow-hidden h-80 md:h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.paysagiste_service_entretien}
                alt="Entretien d'espaces verts"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Entretien d&rsquo;espaces verts
                </h3>
                <p className="text-white/70 mb-5 text-sm">
                  Taille, tonte, élagage, débroussaillage &mdash; vos espaces restent impeccables.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white hover:border-green-600 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors w-fit"
                >
                  En savoir +
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESCRIPTION SERVICES ===== */}
      <section className="py-16 md:py-24 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block w-12 h-1 bg-green-600 rounded-full mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Un savoir-faire complet pour vos <span className="text-green-600">extérieurs</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Que vous souhaitiez transformer votre jardin, créer une terrasse de rêve ou simplement entretenir vos espaces verts, nous vous accompagnons à chaque étape.
              </p>
              <ul className="space-y-3">
                {[
                  "Conception et aménagement de jardins",
                  "Création de terrasses, allées et clôtures",
                  "Plantation de haies, massifs et arbres",
                  "Entretien régulier et ponctuel",
                  "Élagage et abattage",
                  "Engazonnement et arrosage automatique",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.paysagiste_services_photo}
                alt="Jardin contemporain réalisé"
                className="rounded-2xl shadow-xl w-full h-80 md:h-[420px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg text-sm">
                + de 10 ans d&rsquo;expérience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RÉALISATIONS FILTRABLES ===== */}
      <section id="realisations" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block w-12 h-1 bg-green-600 rounded-full mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Nos <span className="text-green-600">réalisations</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Des créations dans des lieux que vous connaissez. Projetez-vous.
            </p>
          </div>
          <PaysagisteClient realisations={realisations} />
        </div>
      </section>

      {/* ===== QUI SOMMES-NOUS ===== */}
      <section id="apropos" className="py-16 md:py-24 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.paysagiste_equipe}
                alt="Équipe de paysagistes au travail"
                className="rounded-2xl shadow-xl w-full h-80 md:h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block w-12 h-1 bg-green-600 rounded-full mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Qui <span className="text-green-600">sommes-nous ?</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Entreprise de paysagisme implantée dans le <strong>Nord (59)</strong>, nous intervenons autour de <strong>Douai, Orchies, Valenciennes</strong> et dans tout le Douaisis.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre équipe passionnée transforme vos extérieurs en véritables espaces de vie. De la <strong>conception</strong> à la <strong>réalisation</strong>, en passant par l&rsquo;<strong>entretien régulier</strong>, nous mettons notre savoir-faire à votre service.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-extrabold text-green-600">150+</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Jardins créés</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-extrabold text-green-600">10+</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Ans d&rsquo;exp.</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-extrabold text-green-600">100%</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">Satisfaits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOS VALEURS - FOND VERT FORÊT ===== */}
      <section className="py-16 md:py-24 bg-[#1a3c1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-white rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block w-12 h-1 bg-green-400 rounded-full mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Nos valeurs
            </h2>
            <p className="text-white/60 max-w-md mx-auto">
              Les principes qui guident chaque projet que nous réalisons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => (
              <div
                key={v.titre}
                className="bg-white rounded-t-[80px] rounded-b-2xl p-8 pt-10 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <ValeurIcon type={v.icon} />
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{v.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA + FORMULAIRE CONTACT ===== */}
      <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images.paysagiste_cta}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a3c1a]/85" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block w-12 h-1 bg-green-400 rounded-full mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Un projet d&rsquo;aménagement ?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Parlez-nous de votre projet. Nous vous recontactons sous 24h pour un rendez-vous et un devis gratuit, sans engagement.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-8 text-left max-w-lg mx-auto">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Votre nom</label>
                  <input type="text" placeholder="Jean Dupont" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                  <input type="tel" placeholder="06 12 34 56 78" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Décrivez votre projet</label>
                <textarea rows={3} placeholder="Surface, style souhaité, budget approximatif..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none resize-none" />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-base px-6 py-3.5 rounded-xl transition-colors cursor-pointer">
                Envoyer ma demande
              </button>
              <p className="text-xs text-gray-400 text-center">Réponse garantie sous 24h &middot; Devis 100% gratuit</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER VERT FORÊT ===== */}
      <footer className="bg-[#1a3c1a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                  </svg>
                </div>
                <span className="font-bold text-lg">[Votre Entreprise]</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Paysagiste dans le Nord (59). Conception, création et entretien d&rsquo;espaces verts autour de Douai.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-green-400">Nos prestations</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Création de jardins</li>
                <li>Aménagement de terrasses</li>
                <li>Plantation & engazonnement</li>
                <li>Entretien d&rsquo;espaces verts</li>
                <li>Élagage & abattage</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-green-400">Contact</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  06 04 40 81 57
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Douai, Orchies, Valenciennes
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Lun-Ven : 8h-18h
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              &copy; 2025 [Votre Entreprise] &mdash; Tous droits réservés
            </p>
            <p className="text-white/30 text-xs">
              Démo réalisée par{" "}
              <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
                HookLab
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flottant */}
      <PaysagisteClient whatsapp />

      {/* CTA HookLab sticky discret */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link
          href="/#contact"
          className="bg-gray-900/90 hover:bg-gray-900 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-orange rounded-full" />
          Démo HookLab &mdash; Ce site peut être le vôtre
        </Link>
      </div>
    </main>
  );
}
