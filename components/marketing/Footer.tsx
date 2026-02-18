"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 md:py-12 bg-bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
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
                Cr&eacute;ation de sites internet pour artisans.
              </p>
              <p className="text-text-muted text-xs mt-3">
                59148 Flines-lez-Raches
              </p>
            </div>

            {/* Expertises SEO */}
            <div>
              <h4 className="text-navy font-semibold text-sm mb-4">
                Expertises
              </h4>
              <ul className="space-y-2 text-text-light text-sm">
                <li>Site internet Couvreur</li>
                <li>SEO Maçonnerie</li>
                <li>Webmaster Paysagiste</li>
                <li>Visibilité Menuisier</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-navy font-semibold text-sm mb-4">Légal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/mentions-legales" className="text-text-light hover:text-navy text-sm transition-colors">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/confidentialite" className="text-text-light hover:text-navy text-sm transition-colors">
                    Politique de Confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom SEO */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} HookLab &mdash; Enguerrand Ozano &middot; SIREN 994 538 932
          </p>
          <p className="text-text-muted text-xs text-center md:text-right">
            Intervention : Douai &middot; Orchies &middot; Arleux &middot; Valenciennes
          </p>
        </div>
      </div>
    </footer>
  );
}
