import Card from "@/components/ui/Card";
import Link from "next/link";

const demos = [
  {
    title: "Le Pack \u00ab\u00a0Gros \u0152uvre\u00a0\u00bb",
    subtitle: "Ma\u00e7on / Couvreur",
    pourQui: "Ma\u00e7ons, Couvreurs, Charpentiers.",
    pointFort: "La galerie \u00ab\u00a0Avant / Apr\u00e8s\u00a0\u00bb qui prouve votre technique et justifie vos devis.",
    fonctionnalite: "Bouton \u00ab\u00a0Urgence Fuite\u00a0\u00bb qui d\u00e9clenche l\u2019appel imm\u00e9diat.",
    cta: "Voir la D\u00e9mo Ma\u00e7onnerie",
    href: "/macon",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Le Pack \u00ab\u00a0Esth\u00e9tique\u00a0\u00bb",
    subtitle: "Paysagiste / Peintre",
    pourQui: "Paysagistes, Peintres, D\u00e9corateurs.",
    pointFort: "Un design \u00e9pur\u00e9 qui laisse toute la place \u00e0 la beaut\u00e9 de vos r\u00e9alisations.",
    fonctionnalite: "Filtrage \u00ab\u00a0Cr\u00e9ation vs Entretien\u00a0\u00bb pour ne recevoir que les projets \u00e0 forte valeur.",
    cta: "Voir la D\u00e9mo Paysagiste",
    href: "/paysagiste",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Le Pack \u00ab\u00a0Urgence & Service\u00a0\u00bb",
    subtitle: "Plombier / \u00c9lec",
    pourQui: "Plombiers, \u00c9lectriciens, Serruriers.",
    pointFort: "Vitesse de chargement \u00e9clair et rassurance imm\u00e9diate (Avis + Tarifs clairs).",
    fonctionnalite: "Formulaire de diagnostic rapide pour qualifier la panne avant de vous d\u00e9placer.",
    cta: "Voir la D\u00e9mo Plombier",
    href: "/plombier",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function DemosLive() {
  return (
    <section id="demos" className="py-16 md:py-24 bg-bg" aria-label="D\u00e9mos live">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-4">
            D&eacute;mos Live
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
            Ne signez pas sans voir.{" "}
            <span className="text-orange">Testez votre futur site maintenant.</span>
          </h2>
          <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto">
            Je ne vous demande pas de me croire sur parole. J&rsquo;ai construit 3 mod&egrave;les
            de &laquo;&nbsp;Dossiers de Confiance&nbsp;&raquo; optimis&eacute;s pour vos m&eacute;tiers.
            Cliquez, naviguez, et imaginez votre logo &agrave; la place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo, i) => (
            <Card key={i} hover className="flex flex-col p-0 overflow-hidden">
              {/* Header visuel */}
              <div className="bg-navy p-6 text-center">
                <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-3 text-orange">
                  {demo.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{demo.title}</h3>
                <p className="text-orange text-sm font-semibold">{demo.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div>
                    <p className="text-navy font-semibold text-xs uppercase tracking-wider mb-1">Pour qui ?</p>
                    <p className="text-text-light text-sm">{demo.pourQui}</p>
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-xs uppercase tracking-wider mb-1">Le point fort</p>
                    <p className="text-text-light text-sm">{demo.pointFort}</p>
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-xs uppercase tracking-wider mb-1">Fonctionnalit&eacute; cl&eacute;</p>
                    <p className="text-text-light text-sm">{demo.fonctionnalite}</p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={demo.href}
                  className="mt-5 flex items-center justify-center gap-2 bg-orange text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-orange/90 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {demo.cta}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
