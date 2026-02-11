import Link from "next/link";
import Button from "@/components/ui/Button";

const features = [
  { label: "Programme structur\u00e9 semaine par semaine", hooklab: true, seul: false, autre: "Varie" },
  { label: "Coaching personnalis\u00e9 et appels de groupe", hooklab: true, seul: false, autre: false },
  { label: "Communaut\u00e9 priv\u00e9e d\u2019entrepreneurs", hooklab: true, seul: false, autre: true },
  { label: "Templates et scripts de contenu", hooklab: true, seul: false, autre: "Parfois" },
  { label: "Support WhatsApp illimit\u00e9", hooklab: true, seul: false, autre: false },
  { label: "Sp\u00e9cialis\u00e9 TikTok Shop (pas du g\u00e9n\u00e9rique)", hooklab: true, seul: false, autre: false },
  { label: "Mises \u00e0 jour \u00e0 vie du contenu", hooklab: true, seul: false, autre: "Varie" },
  { label: "R\u00e9sultats d\u00e8s les premi\u00e8res semaines", hooklab: true, seul: "Hasard", autre: "Varie" },
  { label: "Prix accessible en 2 mensualit\u00e9s", hooklab: true, seul: "Gratuit*", autre: false },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mx-auto">
        <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center mx-auto">
        <svg className="w-4 h-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    );
  }
  return <span className="text-warning text-xs font-medium">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-32 bg-dark-light/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium mb-4">
            Comparatif
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            HookLab vs. les <span className="gradient-text">alternatives</span>
          </h2>
          <p className="text-white/60 text-lg">
            Pourquoi choisir un accompagnement sp&eacute;cialis&eacute; plut&ocirc;t que de te lancer seul.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-white/40 text-sm font-medium pb-4 pr-4" />
                <th className="pb-4 px-4">
                  <div className="bg-primary/10 border border-primary/30 rounded-xl py-3 px-4">
                    <span className="text-primary font-bold text-sm">HookLab</span>
                  </div>
                </th>
                <th className="pb-4 px-4">
                  <div className="bg-dark-lighter border border-dark-border rounded-xl py-3 px-4">
                    <span className="text-white/50 font-medium text-sm">Se lancer seul</span>
                  </div>
                </th>
                <th className="pb-4 px-4">
                  <div className="bg-dark-lighter border border-dark-border rounded-xl py-3 px-4">
                    <span className="text-white/50 font-medium text-sm">Autre formation</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr
                  key={i}
                  className={i < features.length - 1 ? "border-b border-dark-border" : ""}
                >
                  <td className="py-4 pr-4 text-white/70 text-sm">{f.label}</td>
                  <td className="py-4 px-4 text-center">
                    <CellIcon value={f.hooklab} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellIcon value={f.seul} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellIcon value={f.autre} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="text-white/30 text-xs mt-4 text-center">
          * Se lancer seul est gratuit mais les erreurs co&ucirc;tent du temps (et souvent de l&apos;argent).
        </p>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/candidature">
            <Button size="lg">
              Choisir HookLab
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
