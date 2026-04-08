import Card from "@/components/ui/Card";

const personas = [
  {
    id: "jeune",
    emoji: "🎓",
    title: "Étudiant / Jeune actif",
    subtitle: "18-25 ans",
    description:
      "Tu veux générer tes premiers revenus en ligne tout en étudiant ou en début de carrière. TikTok Shop est le levier parfait.",
    benefits: [
      "Flexibilité totale, travaille quand tu veux",
      "Pas besoin de stock ni d'investissement",
      "Compétences marketing valorisables sur ton CV",
      "Communauté de jeunes entrepreneurs motivés",
    ],
  },
  {
    id: "parent",
    emoji: "👨‍👩‍👧",
    title: "Parent / Reconversion",
    subtitle: "25-45 ans",
    description:
      "Tu cherches un complément de revenus ou une reconversion flexible depuis chez toi. TikTok Shop s'adapte à ton emploi du temps.",
    benefits: [
      "2h par jour suffisent pour démarrer",
      "Travaille depuis chez toi, à ton rythme",
      "Revenus complémentaires dès le premier mois",
      "Accompagnement personnalisé et bienveillant",
    ],
  },
];

export default function PersonaCards() {
  return (
    <section className="py-20 md:py-32 bg-dark-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            Pour qui ?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Un programme adapté à{" "}
            <span className="gradient-text">ton profil</span>
          </h2>
          <p className="text-white/60 text-lg">
            Que tu sois étudiant ou parent, notre méthode s&apos;adapte à toi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {personas.map((p) => (
            <Card key={p.id} hover className="relative overflow-hidden">
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />

              <div className="pt-2">
                {/* Emoji + Title */}
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {p.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {p.subtitle}
                </p>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {p.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {p.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-success mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/70 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
