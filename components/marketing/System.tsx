import Card from "@/components/ui/Card";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    step: "01",
    title: "On vous trouve",
    subtitle: "Visibilit\u00e9 Google",
    description:
      "Votre fiche Google optimis\u00e9e + un site r\u00e9f\u00e9renc\u00e9 sur les bons mots-cl\u00e9s locaux. Quand quelqu\u2019un cherche \u00ab couvreur Douai \u00bb ou \u00ab menuisier Orchies \u00bb, c\u2019est vous qui sortez.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    step: "02",
    title: "On vous choisit",
    subtitle: "Site rassurant",
    description:
      "Un site pro qui montre vos r\u00e9alisations, vos avis clients et votre s\u00e9rieux. Le visiteur se dit \u00ab c\u2019est lui qu\u2019il me faut \u00bb en 10 secondes, pas \u00ab c\u2019est quoi ce site bricol\u00e9 \u00bb.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    step: "03",
    title: "On vous contacte",
    subtitle: "Filtrage intelligent",
    description:
      "Fini les devis pour des \u00ab touristes \u00bb. Le site filtre naturellement : seuls les gens s\u00e9rieux, avec le bon budget et le bon projet, d\u00e9crochent le t\u00e9l\u00e9phone.",
  },
];

export default function System() {
  return (
    <section id="systeme" className="py-16 md:py-24 bg-bg" aria-label="Le syst\u00e8me">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-4">
            Le Syst&egrave;me
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
            Pas juste un site vitrine.{" "}
            <span className="text-orange">Un dossier de confiance.</span>
          </h2>
          <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto">
            Je ne vous vends pas &ldquo;un beau site&rdquo;. Je construis un syst&egrave;me
            qui filtre les demandes inutiles et transforme votre r&eacute;putation en
            machine &agrave; clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Card key={i} hover className="text-center relative pt-10">
              <div className="absolute top-4 right-4 text-text-muted/20 text-4xl font-black">
                {s.step}
              </div>
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-orange">
                {s.icon}
              </div>
              <h3 className="text-navy font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-orange text-sm font-semibold mb-3">{s.subtitle}</p>
              <p className="text-text-light text-sm leading-relaxed">
                {s.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-3 bg-navy/5 border border-navy/10 rounded-full px-6 py-3">
            <span className="text-navy font-semibold text-sm">Trouv&eacute;</span>
            <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-navy font-semibold text-sm">Choisi</span>
            <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-navy font-semibold text-sm">Contact&eacute;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
