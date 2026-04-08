import Link from "next/link";
import Button from "@/components/ui/Button";

const stats = [
  { value: "50,5M\u20ac", label: "G\u00e9n\u00e9r\u00e9s sur TikTok Shop France (Oct-Nov 2025)", source: true },
  { value: "23M+", label: "Utilisateurs TikTok en France chaque mois", source: true },
  { value: "10-30%", label: "Commission moyenne par vente pour les affili\u00e9s", source: true },
  { value: "1 500", label: "Followers minimum pour devenir affili\u00e9", source: true },
];

const milestones = [
  {
    week: "Semaine 1-2",
    title: "Premiers pas",
    description: "Cr\u00e9ation du compte, compr\u00e9hension de l\u2019algorithme, premi\u00e8res vid\u00e9os publi\u00e9es.",
    metric: "0 \u2192 premiers followers",
  },
  {
    week: "Semaine 3-4",
    title: "Premi\u00e8res commissions",
    description: "S\u00e9lection des produits gagnants, optimisation du contenu, premi\u00e8res ventes.",
    metric: "Premi\u00e8res commissions",
  },
  {
    week: "Semaine 5-6",
    title: "Acc\u00e9l\u00e9ration",
    description: "Strat\u00e9gie de contenu r\u00e9guli\u00e8re, analyse des performances, scaling.",
    metric: "Revenus r\u00e9guliers",
  },
  {
    week: "Semaine 7-8",
    title: "Autonomie",
    description: "Automatisation, diversification des produits, ind\u00e9pendance totale.",
    metric: "Activit\u00e9 p\u00e9renne",
  },
];

export default function ResultsShowcase() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1.5 bg-success/10 border border-success/20 rounded-full text-success text-xs font-medium mb-4">
            Le march&eacute; TikTok Shop explose en France
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Pourquoi l&apos;<span className="gradient-text">affiliation TikTok Shop</span> est
            l&apos;opportunit&eacute; de 2025-2026
          </h2>
          <p className="text-white/60 text-lg">
            TikTok Shop est arriv&eacute; en France et le march&eacute; est encore peu exploit&eacute;.
            Les premiers cr&eacute;ateurs qui se positionnent captent l&apos;essentiel des commissions.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-dark-light border border-dark-border rounded-2xl p-5 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-white/50 text-xs md:text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Ton parcours en <span className="gradient-text">8 semaines</span>
          </h3>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4 md:gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <span className="text-primary text-xs font-medium">{m.week}</span>
                  <h4 className="text-white font-bold text-lg mt-1">{m.title}</h4>
                  <p className="text-white/60 text-sm mt-1 leading-relaxed">{m.description}</p>
                  <span className="inline-flex items-center mt-2 px-2.5 py-1 bg-success/10 border border-success/20 rounded-lg text-success text-xs font-medium">
                    {m.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/candidature">
            <Button size="lg" className="pulse-glow">
              Je veux saisir cette opportunit&eacute;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
