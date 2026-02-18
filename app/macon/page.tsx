import type { Metadata } from "next";
import Link from "next/link";
import MaconClient from "./MaconClient";

export const metadata: Metadata = {
  title:
    "Ma\u00e7onnerie & Extension de Maison \u00e0 Orchies, Cysoing, Saint-Amand-les-Eaux | Artisan Ma\u00e7on Nord (59)",
  description:
    "Artisan ma\u00e7on depuis 10 ans. Extension de maison, gros \u0153uvre, r\u00e9novation, rejointoiement de briques, terrasse. Devis gratuit sous 24h. Orchies, Cysoing, Saint-Amand-les-Eaux, Sam\u00e9on et P\u00e9v\u00e8le.",
  keywords: [
    "ma\u00e7on Orchies",
    "ma\u00e7onnerie Cysoing",
    "extension maison Nord",
    "agrandissement maison 59",
    "ma\u00e7on Saint-Amand-les-Eaux",
    "artisan ma\u00e7on P\u00e9v\u00e8le",
    "gros \u0153uvre Nord",
    "r\u00e9novation fa\u00e7ade",
    "rejointoiement briques",
    "terrasse carrel\u00e9e",
    "dalle b\u00e9ton",
    "ouverture mur porteur IPN",
    "ma\u00e7on Sam\u00e9on",
    "ma\u00e7on Landas",
    "ma\u00e7on Nomain",
  ],
  alternates: {
    canonical: "https://hooklab.eu/macon",
  },
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Extension de maison & Garage",
    desc: "Agrandissez votre surface habitable : extension en parpaing ou brique, garage, toit plat ou traditionnel. Nous g\u00e9rons le gros \u0153uvre de A \u00e0 Z.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Ma\u00e7onnerie G\u00e9n\u00e9rale",
    desc: "Murs de cl\u00f4ture, fondations, ouverture de murs porteurs avec pose d\u2019IPN. Construction neuve ou reprise de ma\u00e7onnerie ancienne.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "R\u00e9novation & Fa\u00e7ade",
    desc: "Rejointoiement de briques, ravalement de fa\u00e7ade, dalle b\u00e9ton, reprise d\u2019enduit. Redonner vie \u00e0 votre b\u00e2ti sans compromis.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Am\u00e9nagement Ext\u00e9rieur",
    desc: "Terrasse carrel\u00e9e, all\u00e9es, pavage, muret. Cr\u00e9ez un ext\u00e9rieur qui met en valeur votre maison et votre terrain.",
  },
];

const faqs = [
  {
    q: "Combien de temps pour un devis\u00a0?",
    a: "Nous nous d\u00e9pla\u00e7ons pour une visite technique sous 48h, et le devis d\u00e9taill\u00e9 vous est remis dans la foul\u00e9e. Gratuit et sans engagement.",
  },
  {
    q: "Vous avez la d\u00e9cennale\u00a0?",
    a: "Oui, bien s\u00fbr. L\u2019attestation de garantie d\u00e9cennale est syst\u00e9matiquement fournie avec chaque devis. Votre ouvrage est couvert pendant 10 ans.",
  },
  {
    q: "Vous faites l\u2019\u00e9vacuation des gravats\u00a0?",
    a: "Oui. Chantier propre garanti. Nous g\u00e9rons l\u2019\u00e9vacuation des gravats et le nettoyage en fin de chantier. Vous n\u2019avez rien \u00e0 faire.",
  },
];

export default function MaconPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      {/* ============================================================
          SECTION 1 : HERO
          ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b2a4a]/95 via-[#1b2a4a]/85 to-[#1b2a4a]/70" />

        {/* Nav bar */}
        <nav className="absolute top-0 left-0 right-0 z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
                &larr; HookLab
              </Link>
              <span className="text-white/30">|</span>
              <span className="text-white font-bold text-sm">
                [Votre Entreprise] &mdash; <span className="text-orange">Ma&ccedil;onnerie</span>
              </span>
            </div>
            <a
              href="tel:+33600000000"
              className="bg-orange hover:bg-orange-hover text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">06 XX XX XX XX</span>
              <span className="sm:hidden">Appeler</span>
            </a>
          </div>
        </nav>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          {/* Google badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-sm font-semibold">4.9/5 sur Google</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6 max-w-3xl">
            Ma&ccedil;onnerie &amp; Extension de Maison &agrave;{" "}
            <span className="text-orange">Orchies, Cysoing et Saint-Amand-les-Eaux.</span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mb-4 leading-relaxed">
            Artisan ma&ccedil;on depuis 10 ans. Sp&eacute;cialiste agrandissement, gros &oelig;uvre
            et r&eacute;novation dans le P&eacute;v&egrave;le.
          </p>

          <p className="text-white/40 text-sm mb-8">
            Garantie d&eacute;cennale &middot; Devis gratuit &middot; Intervention sur tout le secteur Nord (59)
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#devis"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold text-base px-8 py-4 rounded-xl transition-colors pulse-glow"
            >
              Obtenir mon devis sous 24h
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:+33600000000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold text-sm px-6 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler directement
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 : REASSURANCE
          ============================================================ */}
      <section className="py-14 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Garantie D\u00e9cennale incluse",
                desc: "Votre ouvrage est couvert 10 ans. Attestation fournie avec le devis.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Devis gratuit & d\u00e9taill\u00e9",
                desc: "Pas de mauvaise surprise. Chaque poste est d\u00e9taill\u00e9 et expliqu\u00e9 clairement.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Intervention rapide",
                desc: "Sur Orchies, Cysoing, Saint-Amand-les-Eaux et dans un rayon de 25\u00a0km.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
                <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center text-orange">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-navy font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 : SERVICES (SEO + EXPERTISE)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#f8f6f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-4">
              Nos Prestations
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
              Tous vos travaux de <span className="text-orange">ma&ccedil;onnerie</span> dans le Nord
            </h2>
            <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto">
              Du gros &oelig;uvre &agrave; la finition, nous intervenons sur tous types de projets
              pour les particuliers et professionnels du P&eacute;v&egrave;le.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center text-orange mb-4">
                  {s.icon}
                </div>
                <h3 className="text-navy font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 : AVANT / APRES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-4">
              R&eacute;alisations
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-3">
              Vos voisins nous font <span className="text-orange">confiance</span>
            </h2>
            <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto">
              Glissez la barre pour voir la transformation. Ce sont de vrais chantiers r&eacute;alis&eacute;s dans le secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                avant: "Maison dans son jus",
                apres: "Extension moderne 30m\u00b2 + terrasse",
                avantImg: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=800&q=80",
                apresImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                legend: "Extension 30m\u00b2 \u00e0 Cysoing \u2014 R\u00e9alis\u00e9 en 4 semaines.",
              },
              {
                avant: "Fa\u00e7ade fissur\u00e9e",
                apres: "Ravalement complet",
                avantImg: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&w=800&q=80",
                apresImg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                legend: "Rejointoiement briques \u00e0 Orchies.",
              },
              {
                avant: "Terrain nu",
                apres: "Terrasse carrel\u00e9e + muret",
                avantImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
                apresImg: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?auto=format&fit=crop&w=800&q=80",
                legend: "Am\u00e9nagement ext\u00e9rieur \u00e0 Sam\u00e9on.",
              },
            ].map((item, i) => (
              <div key={i}>
                <MaconClient
                  type="slider"
                  avantLabel={item.avant}
                  apresLabel={item.apres}
                  avantImage={item.avantImg}
                  apresImage={item.apresImg}
                />
                <p className="text-text-light text-xs mt-2 text-center italic">{item.legend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 : ZONE D'INTERVENTION (SEO LOCAL)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#f8f6f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[350px] md:h-[420px]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.05%2C50.38%2C3.45%2C50.52&layer=mapnik&marker=50.4567%2C3.2300"
                className="w-full h-full border-0"
                title="Zone d'intervention ma\u00e7onnerie Nord"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div>
              <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-4">
                Proximit&eacute;
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Votre ma&ccedil;on de proximit&eacute; dans le <span className="text-orange">Nord (59)</span>
              </h2>
              <p className="text-text-light text-base leading-relaxed mb-4">
                Bas&eacute;s &agrave; <strong className="text-navy">Sam&eacute;on</strong>, nous sommes rapidement
                sur vos chantiers &agrave; <strong className="text-navy">Orchies</strong>,{" "}
                <strong className="text-navy">Cysoing</strong> ou{" "}
                <strong className="text-navy">Saint-Amand-les-Eaux</strong>.
              </p>
              <p className="text-text-light text-sm leading-relaxed mb-6">
                Nous intervenons pour tous vos travaux de ma&ccedil;onnerie &agrave;{" "}
                <strong>Orchies</strong>, <strong>Cysoing</strong>, <strong>Saint-Amand-les-Eaux</strong>,{" "}
                <strong>Sam&eacute;on</strong>, <strong>Landas</strong>, <strong>Beuvry-la-For&ecirc;t</strong>,{" "}
                <strong>Nomain</strong>, <strong>Genech</strong>, <strong>Templeuve</strong> et dans
                tout le secteur du P&eacute;v&egrave;le et du Douaisis.
              </p>
              <a
                href="#devis"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                Demander un devis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 : QUI SUIS-JE ?
          ============================================================ */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-orange/20 rounded-3xl blur-xl" />
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-white/10">
                  <div className="w-full h-full bg-navy-light flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-10 h-10 text-orange/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-white/30 text-sm">Photo de Cyprien</p>
                      <p className="text-white/20 text-xs mt-1">(sur le chantier)</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-orange text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
                  Artisan depuis 10 ans
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="inline-block px-3 py-1.5 bg-white/10 rounded-full text-orange text-xs font-semibold mb-4">
                L&rsquo;artisan derri&egrave;re les chantiers
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-[-0.02em] mb-4">
                Je suis Cyprien,{" "}
                <span className="text-orange">artisan ma&ccedil;on passionn&eacute;.</span>
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-4">
                Pas de commerciaux, pas de sous-traitance. Je suis votre interlocuteur unique
                du devis &agrave; la fin du chantier. Quand vous m&rsquo;appelez, c&rsquo;est moi qui r&eacute;ponds.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Apr&egrave;s 10 ans &agrave; b&acirc;tir dans le P&eacute;v&egrave;le, je connais chaque type de terrain,
                chaque contrainte locale. Mon engagement : un travail propre, dans les d&eacute;lais,
                au prix annonc&eacute;. Sans mauvaise surprise.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Interlocuteur unique",
                  "Z\u00e9ro sous-traitance",
                  "Chantier propre garanti",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-orange/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 : FAQ
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Questions <span className="text-orange">fr&eacute;quentes</span>
            </h2>
          </div>
          <MaconClient type="faq" faqs={faqs} />
        </div>
      </section>

      {/* ============================================================
          SECTION 8 : FORMULAIRE INTELLIGENT (DEVIS)
          ============================================================ */}
      <section id="devis" className="py-16 md:py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Demander un <span className="text-orange">devis gratuit</span>
            </h2>
            <p className="text-white/60">
              S&eacute;lectionnez votre type de projet. Devis d&eacute;taill&eacute; sous 48h.
            </p>
          </div>
          <MaconClient type="form" />
        </div>
      </section>

      {/* ============================================================
          CTA HookLab
          ============================================================ */}
      <section className="py-12 bg-orange text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-3">
            Ceci est un mod&egrave;le HookLab
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Vous voulez le m&ecirc;me site pour votre entreprise&nbsp;?
          </h2>
          <p className="text-white/80 text-sm mb-6">
            Imaginez votre logo, vos photos de chantier et votre num&eacute;ro &agrave; la place.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Demander Mon Diagnostic Gratuit
          </Link>
        </div>
      </section>

      {/* ============================================================
          FOOTER SEO
          ============================================================ */}
      <footer className="bg-navy-dark border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* NAP */}
            <div>
              <h4 className="text-white font-semibold mb-3">Coordonn&eacute;es</h4>
              <ul className="space-y-1 text-white/50">
                <li className="font-semibold text-white">[Votre Entreprise]</li>
                <li>Sam&eacute;on, 59310</li>
                <li>T&eacute;l : 06 XX XX XX XX</li>
                <li>SIRET : XXX XXX XXX XXXXX</li>
              </ul>
            </div>

            {/* Expertises SEO */}
            <div>
              <h4 className="text-white font-semibold mb-3">Expertises</h4>
              <ul className="space-y-1 text-white/50">
                <li>Ma&ccedil;on Orchies</li>
                <li>Ma&ccedil;on Cysoing</li>
                <li>Ma&ccedil;on Saint-Amand-les-Eaux</li>
                <li>Extension maison P&eacute;v&egrave;le</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-3">L&eacute;gal</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/mentions-legales" className="text-white/50 hover:text-white text-sm transition-colors">
                    Mentions l&eacute;gales
                  </Link>
                </li>
                <li>
                  <Link href="/confidentialite" className="text-white/50 hover:text-white text-sm transition-colors">
                    Politique de confidentialit&eacute;
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-6 text-center">
            <p className="text-white/30 text-xs">
              Site cr&eacute;&eacute; par{" "}
              <Link href="/" className="text-orange hover:underline">HookLab</Link>{" "}
              &mdash; Cr&eacute;ation de sites internet pour artisans du b&acirc;timent.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating mobile CTA */}
      <MaconClient type="floating" />
    </main>
  );
}
