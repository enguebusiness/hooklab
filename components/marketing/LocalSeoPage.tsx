import Link from "next/link";
import Button from "@/components/ui/Button";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

interface LocalSeoPageProps {
  ville: string;
  villeSlug: string;
  codePostal: string;
  voisines: string[];
}

export default function LocalSeoPage({ ville, codePostal, voisines }: LocalSeoPageProps) {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero local */}
      <section className="py-20 md:py-28 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1.5 bg-orange/20 border border-orange/30 rounded-full text-orange text-xs font-semibold mb-6">
            {ville} ({codePostal}) et environs
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Cr&eacute;ation de site internet pour{" "}
            <span className="text-orange">artisans &agrave; {ville}</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Vous &ecirc;tes artisan &agrave; {ville} ou dans le secteur de {voisines[0]} / {voisines[1]} ?
            Je cr&eacute;e votre site web professionnel et votre pr&eacute;sence Google pour g&eacute;n&eacute;rer
            des chantiers qualifi&eacute;s. Bas&eacute; &agrave; Flines-lez-Raches, je suis votre voisin.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="pulse-glow">
              D&Eacute;MARRER MON AUDIT GRATUIT
            </Button>
          </Link>
          <p className="mt-4 text-white/40 text-sm">
            R&eacute;ponse sous 24h &middot; 100% gratuit &middot; Sans engagement
          </p>
        </div>
      </section>

      {/* M\u00e9tiers couverts */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            Sites web pour <span className="text-orange">tous les m&eacute;tiers du b&acirc;timent</span> &agrave; {ville}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Couvreur", "Ma\u00e7on", "Paysagiste",
              "Plombier", "\u00c9lectricien", "Menuisier",
              "Charpentier", "Peintre", "Serrurier",
            ].map((metier) => (
              <div key={metier} className="bg-bg-white border border-border rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <p className="text-navy font-semibold text-sm">Site internet {metier}</p>
                <p className="text-text-muted text-xs mt-1">{ville} et environs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi HookLab */}
      <section className="py-16 md:py-24 bg-bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Pourquoi choisir <span className="text-orange">HookLab</span> &agrave; {ville} ?
          </h2>
          <div className="space-y-4 text-left">
            {[
              {
                title: "Proximit\u00e9 locale",
                desc: `Bas\u00e9 \u00e0 Flines-lez-Raches, je connais ${ville} et ses artisans. On peut se voir en vrai.`,
              },
              {
                title: "Technologie des g\u00e9ants",
                desc: "Sites ultra-rapides avec la m\u00eame technologie que Netflix. Google adore la vitesse.",
              },
              {
                title: "R\u00e9sultats concrets",
                desc: "Pas un site pour faire joli. Un syst\u00e8me qui fait sonner votre t\u00e9l\u00e9phone avec des vrais clients.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-bg border border-border rounded-xl p-5">
                <div className="w-8 h-8 bg-orange/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-bold text-base mb-1">{item.title}</p>
                  <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D\u00e9mos */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Testez nos <span className="text-orange">mod&egrave;les</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/macon" className="bg-navy text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors">
              D&eacute;mo Ma&ccedil;on / Couvreur
            </Link>
            <Link href="/paysagiste" className="bg-green-600 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-green-700 transition-colors">
              D&eacute;mo Paysagiste
            </Link>
            <Link href="/plombier" className="bg-[#3b82f6] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#2563eb] transition-colors">
              D&eacute;mo Plombier
            </Link>
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Aussi disponible &agrave; {voisines.join(", ")}
          </h2>
          <p className="text-white/60 mb-6">
            Je travaille avec des artisans dans tout le Douaisis, l&rsquo;Orch&eacute;sien et le Valenciennois.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="pulse-glow">
              R&eacute;server Mon Audit Gratuit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
