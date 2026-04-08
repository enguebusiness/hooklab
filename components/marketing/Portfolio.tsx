import Card from "@/components/ui/Card";

const fallbackPortfolio = [
  {
    _id: "1",
    title: "Couvreur \u00e0 Arleux",
    result: "+30% de devis en 3 mois",
    slug: "couvreur-arleux",
  },
  {
    _id: "2",
    title: "Menuisier \u00e0 Douai",
    result: "15 appels qualifi\u00e9s/mois",
    slug: "menuisier-douai",
  },
  {
    _id: "3",
    title: "Paysagiste \u00e0 Orchies",
    result: "1\u00e8re page Google en 6 semaines",
    slug: "paysagiste-orchies",
  },
];

interface PortfolioProps {
  items?: {
    _id: string;
    title: string;
    result: string;
    slug: string;
    image?: unknown;
  }[];
}

export default function Portfolio({ items }: PortfolioProps) {
  const portfolio = items && items.length > 0 ? items : fallbackPortfolio;

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-bg-white" aria-label="R\u00e9alisations">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 bg-navy/5 border border-navy/10 rounded-full text-navy text-xs font-semibold mb-4">
            R&eacute;alisations
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
            Des artisans qui{" "}
            <span className="text-orange">re&ccedil;oivent des appels</span>
          </h2>
          <p className="text-text-light text-base md:text-lg max-w-xl mx-auto">
            Pas des maquettes qui font joli. Des sites qui am&egrave;nent des chantiers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item) => (
            <Card key={item._id} hover className="overflow-hidden p-0">
              <div className="h-48 bg-bg-muted flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <svg className="w-12 h-12 text-text-muted/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-text-muted text-xs">Mockup du site</p>
                  <p className="text-text-muted text-[10px]">(image via Sanity)</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-navy font-bold text-base mb-2">
                  {item.title}
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-success/10 border border-success/20 rounded-full">
                  <svg className="w-3.5 h-3.5 text-success mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-success text-sm font-semibold">{item.result}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
