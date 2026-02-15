import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 md:py-12 bg-bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3" aria-label="HookLab - Accueil">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-bold text-navy">
                Hook<span className="text-orange">Lab</span>
              </span>
            </Link>
            <p className="text-text-light text-sm leading-relaxed max-w-xs">
              Agence web sp&eacute;cialis&eacute;e dans la visibilit&eacute; locale des artisans
              du b&acirc;timent dans le Nord.
            </p>
            <p className="text-text-muted text-xs mt-3">
              Flines-lez-Raches, Nord (59)
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#systeme" className="text-text-light hover:text-navy text-sm transition-colors">
                  Le Syst&egrave;me
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-text-light hover:text-navy text-sm transition-colors">
                  R&eacute;alisations
                </a>
              </li>
              <li>
                <a href="#qui-suis-je" className="text-text-light hover:text-navy text-sm transition-colors">
                  Qui suis-je
                </a>
              </li>
              <li>
                <a href="#faq" className="text-text-light hover:text-navy text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-light hover:text-navy text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-navy font-semibold text-sm mb-4">L&eacute;gal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-text-light hover:text-navy text-sm transition-colors">
                  Mentions l&eacute;gales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-text-light hover:text-navy text-sm transition-colors">
                  Confidentialit&eacute;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} HookLab &mdash; Enguerrand Ozano &middot; SIREN 994 538 932
          </p>
          <p className="text-text-muted text-xs">
            Douai &middot; Orchies &middot; Valenciennes &middot; Arleux
          </p>
        </div>
      </div>
    </footer>
  );
}
