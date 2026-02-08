import Card from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    title: "Apprends les bases",
    description:
      "Maitrise les fondamentaux de TikTok Shop, l'algorithme, et les techniques de creation de contenu qui convertissent.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    weeks: "Semaines 1-2",
  },
  {
    number: "02",
    title: "Lance ton activite",
    description:
      "Configure ton shop, selectionne tes produits gagnants, et publie tes premieres videos avec notre methode eprouvee.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    weeks: "Semaines 3-5",
  },
  {
    number: "03",
    title: "Scale tes revenus",
    description:
      "Optimise tes performances, automatise tes process, et developpe une strategie de contenu rentable sur le long terme.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    weeks: "Semaines 6-8",
  },
];

export default function Method() {
  return (
    <section id="methode" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            La methode
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            3 etapes vers tes{" "}
            <span className="gradient-text">premiers revenus</span>
          </h2>
          <p className="text-white/60 text-lg">
            Un programme structure semaine par semaine pour te guider vers la
            rentabilite.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Card key={i} hover className="relative">
              {/* Step number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-white/5">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white mb-5">
                {step.icon}
              </div>

              {/* Weeks badge */}
              <span className="inline-block px-2.5 py-1 bg-primary/10 rounded-lg text-primary text-xs font-medium mb-3">
                {step.weeks}
              </span>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
