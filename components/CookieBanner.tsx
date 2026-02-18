"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hooklab_cookie_consent");
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hooklab_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("hooklab_cookie_consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-fade-in-up"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-border p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Text */}
          <div className="flex-1">
            <p className="text-navy text-sm font-semibold mb-1">
              Ce site utilise des cookies
            </p>
            <p className="text-text-light text-xs leading-relaxed">
              Nous utilisons uniquement des <strong className="text-text">cookies techniques</strong> n&eacute;cessaires
              au bon fonctionnement du site (authentification, pr&eacute;f&eacute;rences de session).
              Aucun cookie publicitaire ou de tra&ccedil;age n&rsquo;est utilis&eacute;.
              Conform&eacute;ment au RGPD, vous pouvez accepter ou refuser leur utilisation.{" "}
              <Link
                href="/confidentialite"
                className="text-orange hover:underline font-medium"
              >
                En savoir plus
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleRefuse}
              className="px-4 py-2.5 text-text-light hover:text-text text-sm font-medium rounded-xl border border-border hover:bg-bg-muted transition-colors cursor-pointer"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 bg-orange hover:bg-orange-hover text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
