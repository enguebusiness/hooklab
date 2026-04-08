import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah M.",
    role: "\u00c9tudiante, 22 ans",
    content:
      "En 4 semaines, j\u2019ai g\u00e9n\u00e9r\u00e9 mes premi\u00e8res commissions sur TikTok Shop. Le programme m\u2019a donn\u00e9 une m\u00e9thode claire pour choisir les bons produits. Avec 6 \u00e0 10\u20ac par vente, \u00e7a s\u2019accumule vite quand on poste r\u00e9guli\u00e8rement.",
    revenue: "350\u20ac/mois apr\u00e8s 2 mois",
    avatar: "S",
    stars: 5,
  },
  {
    name: "Thomas D.",
    role: "Ex-salari\u00e9, 34 ans",
    content:
      "J\u2019h\u00e9sitais \u00e0 me lancer, mais le coaching m\u2019a permis de structurer mon activit\u00e9 pas \u00e0 pas. Les appels de groupe et le support WhatsApp font vraiment la diff\u00e9rence. Aujourd\u2019hui je fais environ 50-60 ventes par mois.",
    revenue: "480\u20ac/mois apr\u00e8s 3 mois",
    avatar: "T",
    stars: 5,
  },
  {
    name: "Amina K.",
    role: "M\u00e8re au foyer, 29 ans",
    content:
      "Je cherchais un compl\u00e9ment de revenus flexible compatible avec mes enfants. Avec 2h par jour, j\u2019arrive \u00e0 sortir 2-3 vid\u00e9os par semaine et les commissions arrivent r\u00e9guli\u00e8rement. C\u2019est un vrai compl\u00e9ment.",
    revenue: "280\u20ac/mois apr\u00e8s 6 semaines",
    avatar: "A",
    stars: 5,
  },
  {
    name: "Mehdi L.",
    role: "\u00c9tudiant, 20 ans",
    content:
      "J\u2019avais z\u00e9ro exp\u00e9rience en e-commerce. Le programme m\u2019a appris \u00e0 choisir les bons produits et \u00e0 cr\u00e9er du contenu qui convertit. Avec 8\u20ac de commission moyenne, chaque vid\u00e9o virale fait la diff\u00e9rence.",
    revenue: "620\u20ac/mois apr\u00e8s 4 mois",
    avatar: "M",
    stars: 5,
  },
  {
    name: "Laura B.",
    role: "Freelance, 27 ans",
    content:
      "Ce qui m\u2019a convaincue c\u2019est la sp\u00e9cialisation TikTok Shop. Pas du g\u00e9n\u00e9rique, mais des strat\u00e9gies concr\u00e8tes. Les templates de scripts m\u2019ont fait gagner un temps fou. Je poste quasi tous les jours maintenant.",
    revenue: "750\u20ac/mois apr\u00e8s 5 mois",
    avatar: "L",
    stars: 4,
  },
  {
    name: "Yanis K.",
    role: "En reconversion, 31 ans",
    content:
      "Apr\u00e8s 8 semaines de formation, j\u2019ai vraiment pris le rythme. Les modules sont clairs, la communaut\u00e9 pousse \u00e0 se d\u00e9passer. Je vise les 100 ventes par mois maintenant, c\u2019est mon prochain objectif.",
    revenue: "900\u20ac/mois apr\u00e8s 6 mois",
    avatar: "Y",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            T&eacute;moignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Ils g&eacute;n&egrave;rent des{" "}
            <span className="gradient-text">revenus avec TikTok Shop</span>
          </h2>
          <p className="text-white/60 text-lg">
            D&eacute;couvre les retours de nos &eacute;l&egrave;ves apr&egrave;s le programme de coaching.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} hover>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
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
              <p className="text-white/80 mb-6 leading-relaxed text-sm">
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

        {/* Google-compliant disclaimer */}
        <p className="text-center text-white/25 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
          Les r&eacute;sultats pr&eacute;sent&eacute;s sont bas&eacute;s sur les retours individuels de nos
          &eacute;l&egrave;ves et ne constituent pas une garantie de revenus. Les commissions TikTok Shop
          varient g&eacute;n&eacute;ralement entre 6&euro; et 10&euro; par vente. Les revenus d&eacute;pendent
          du nombre de ventes g&eacute;n&eacute;r&eacute;es, de l&apos;implication et du temps consacr&eacute;
          par chaque participant.
        </p>
      </div>
    </section>
  );
}
