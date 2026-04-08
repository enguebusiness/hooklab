import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import MaconClient from "./MaconClient";

export const metadata: Metadata = {
  title: "D\u00e9mo Site Ma\u00e7on / Couvreur - L'Expertise Solide | HookLab",
  description:
    "Mod\u00e8le de site HookLab pour ma\u00e7ons, couvreurs et charpentiers. Slider Avant/Apr\u00e8s interactif, badges garanties, formulaire intelligent, bouton urgence.",
};

export default function MaconDemo() {
  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      {/* Nav avec badge dispo */}
      <nav className="sticky top-0 z-50 bg-[#1b2a4a] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
              &larr; HookLab
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-white font-bold text-sm">
              [Votre Entreprise] &mdash; <span className="text-orange">Ma\u00e7onnerie & Couverture</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Badge dispo */}
            <div className="hidden sm:flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-semibold">Dispo imm\u00e9diate</span>
            </div>
            <a
              href="tel:+33604408157"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Urgence Fuite</span>
              <span className="sm:hidden">Appeler</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Certifications en haut - immanquables */}
      <div className="bg-[#1b2a4a] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {["D\u00e9cennale", "Qualibat", "RGE"].map((cert) => (
            <MaconClient key={cert} certName={cert} />
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#1b2a4a] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1.5 bg-orange/20 border border-orange/30 rounded-full text-orange text-xs font-semibold mb-6">
            Ma\u00e7onnerie &middot; Couverture &middot; Charpente
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Vos chantiers parlent pour vous.{" "}
            <span className="text-orange">Votre site aussi.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
            Plus de 15 ans d&rsquo;exp&eacute;rience en ma&ccedil;onnerie, couverture et charpente.
            Chaque chantier est r&eacute;alis&eacute; dans les r&egrave;gles de l&rsquo;art, avec des garanties solides
            pour votre tranquillit&eacute;.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Intervention rapide sur Douai, Orchies, Valenciennes et environs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#devis">
              <Button size="lg" className="w-full sm:w-auto pulse-glow">
                Demander un Devis Toiture
              </Button>
            </a>
            <a
              href="tel:+33604408157"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              APPELER LE PATRON
            </a>
          </div>
        </div>
      </section>

      {/* Slider Magic Reveal - Avant/Apr\u00e8s */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b2a4a] mb-3">
              La preuve par l&rsquo;image &mdash; <span className="text-orange">Avant / Apr\u00e8s</span>
            </h2>
            <p className="text-gray-500">Glissez la barre pour voir la transformation. Impact visuel imm\u00e9diat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                avant: "Toiture v\u00e9tuste \u2014 Tuiles cass\u00e9es",
                apres: "R\u00e9fection compl\u00e8te en tuiles m\u00e9caniques",
                avantImg: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=800&q=80",
                apresImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
              },
              {
                avant: "Fa\u00e7ade fissur\u00e9e \u2014 Enduit d\u00e9grad\u00e9",
                apres: "Ravalement complet + isolation",
                avantImg: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&w=800&q=80",
                apresImg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
              },
              {
                avant: "Mur porteur ab\u00eem\u00e9 \u2014 Fissures",
                apres: "Reconstruction + renforcement",
                avantImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
                apresImg: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?auto=format&fit=crop&w=800&q=80",
              },
            ].map((item, i) => (
              <MaconClient key={i} type="slider" avantLabel={item.avant} apresLabel={item.apres} avantImage={item.avantImg} apresImage={item.apresImg} />
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-16 md:py-24 bg-[#f8f6f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b2a4a] mb-3">
              Vos <span className="text-orange">garanties</span>
            </h2>
            <p className="text-gray-500">Des certifications qui prot\u00e8gent votre investissement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Garantie D\u00e9cennale",
                desc: "Votre ouvrage est couvert pendant 10 ans. En cas de d\u00e9faut structurel, les r\u00e9parations sont prises en charge int\u00e9gralement.",
                icon: "\ud83d\udee1\ufe0f",
              },
              {
                name: "Qualibat RGE",
                desc: "Cette certification vous garantit des aides de l\u2019\u00c9tat (MaPrimeR\u00e9nov\u2019, CEE). Jusqu\u2019\u00e0 90% de vos travaux financ\u00e9s.",
                icon: "\u2705",
              },
              {
                name: "Assurance Responsabilit\u00e9",
                desc: "Chaque chantier est assur\u00e9. Vous ne prenez aucun risque financier, m\u00eame en cas d\u2019impr\u00e9vu.",
                icon: "\ud83d\udcbc",
              },
            ].map((g, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{g.icon}</div>
                <h3 className="text-[#1b2a4a] font-bold text-lg mb-2">{g.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b2a4a] mb-10">
            Ce que disent <span className="text-orange">nos clients</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Marc D.", ville: "Douai", text: "Toiture refaite en 3 jours. Propre, ponctuel, prix respect\u00e9. Je recommande \u00e0 100%.", note: 5 },
              { name: "Sophie L.", ville: "Orchies", text: "Fuite d\u2019urgence un dimanche. Ils sont venus en 2h. Travail impeccable et prix honn\u00eate.", note: 5 },
              { name: "Patrick M.", ville: "Valenciennes", text: "Ravalement fa\u00e7ade complet. R\u00e9sultat magnifique, les voisins nous demandent le contact !", note: 5 },
              { name: "Isabelle R.", ville: "Arleux", text: "Charpente trait\u00e9e et renforc\u00e9e. \u00c9quipe s\u00e9rieuse, devis respect\u00e9 au centime pr\u00e8s.", note: 5 },
            ].map((avis, i) => (
              <div key={i} className="bg-[#f8f6f3] border border-gray-200 rounded-xl p-6 text-left">
                <div className="flex gap-1 mb-3">
                  {[...Array(avis.note)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">&ldquo;{avis.text}&rdquo;</p>
                <p className="text-[#1b2a4a] font-semibold text-sm">{avis.name} &mdash; <span className="text-gray-400 font-normal">{avis.ville}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire intelligent */}
      <section id="devis" className="py-16 md:py-24 bg-[#1b2a4a]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Demander un <span className="text-orange">devis gratuit</span>
            </h2>
            <p className="text-white/60">Formulaire intelligent : on filtre pour ne recevoir que les vrais projets.</p>
          </div>
          <MaconClient type="form" />
        </div>
      </section>

      {/* CTA HookLab */}
      <section className="py-16 bg-orange text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-3">Ceci est une d\u00e9mo HookLab</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vous voulez le m\u00eame site pour votre entreprise ?
          </h2>
          <p className="text-white/80 mb-6">
            Imaginez votre logo, vos photos de chantier et votre num\u00e9ro \u00e0 la place. C&rsquo;est exactement ce que je construis pour vous.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-[#1b2a4a] hover:bg-[#1b2a4a]/90 border-[#1b2a4a]">
              Demander Mon Audit Gratuit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
