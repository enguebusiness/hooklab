import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Etudiante, 22 ans",
    content:
      "En 4 semaines, j'ai genere mes premiers 800€ sur TikTok Shop. Le programme m'a donne une methode claire et un accompagnement top.",
    revenue: "2 400€/mois",
    avatar: "S",
  },
  {
    name: "Thomas D.",
    role: "Ex-salarie, 34 ans",
    content:
      "J'hesitais a me lancer, mais le coaching m'a permis de structurer mon activite. Aujourd'hui je vis de TikTok Shop a plein temps.",
    revenue: "4 200€/mois",
    avatar: "T",
  },
  {
    name: "Amina K.",
    role: "Mere au foyer, 29 ans",
    content:
      "Je cherchais un complement de revenus flexible. Grace a HookLab, je gagne un SMIC supplementaire en travaillant 2h par jour.",
    revenue: "1 600€/mois",
    avatar: "A",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            Temoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Ils ont <span className="gradient-text">transforme</span> leur vie
          </h2>
          <p className="text-white/60 text-lg">
            Decouvre les resultats de nos eleves apres le programme.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} hover>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 mb-6 leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Revenue badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-success/10 border border-success/20 rounded-full text-success text-sm font-medium mb-6">
                {t.revenue}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
