import Card from "@/components/ui/Card";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Vitesse Supersonique",
    subtitle: "Google adore",
    description:
      "Votre site se charge instantan\u00e9ment sur mobile. C\u2019est crucial pour le r\u00e9f\u00e9rencement et pour vos clients press\u00e9s. La technologie des g\u00e9ants (Netflix, Airbnb) adapt\u00e9e aux artisans du Nord.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "S\u00e9curit\u00e9 Militaire",
    subtitle: "HTTPS inclus",
    description:
      "Pas de base de donn\u00e9es \u00e0 pirater. Votre site est statique, blind\u00e9 et s\u00e9curis\u00e9 par d\u00e9faut (cadenas vert HTTPS obligatoire). Vos clients sont rassur\u00e9s.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "100% Mobile First",
    subtitle: "Con\u00e7u pour le pouce",
    description:
      "Vos clients vous cherchent sur leur smartphone. Votre site est con\u00e7u pour le pouce, avec des boutons d\u2019appel \u00e9normes et accessibles.",
  },
];

export default function System() {
  return (
    <section id="systeme" className="relative py-16 md:py-24 bg-navy" aria-label="Le syst\u00e8me">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1.5 bg-orange/20 border border-orange/30 rounded-full text-orange text-xs font-semibold mb-4">
            La Solution HookLab
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-[-0.02em] mb-3">
            Le &laquo;&nbsp;Dossier de Confiance&nbsp;&raquo; :{" "}
            <span className="text-orange">Plus qu&rsquo;un site, une infrastructure.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Je ne fais pas de sites &laquo;&nbsp;bricol&eacute;s&nbsp;&raquo; sur WordPress qui plantent si on ne les
            met pas &agrave; jour. J&rsquo;utilise la technologie des g&eacute;ants adapt&eacute;e aux artisans du Nord.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} hover className="text-center bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-orange">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-orange text-sm font-semibold mb-3">{f.subtitle}</p>
              <p className="text-white/60 text-sm leading-relaxed">
                {f.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
