"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hooklab_cookie_consent");
    if (!consent) {
      setVisible(true);
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
      className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <div className="max-w-2xl mx-auto bg-dark-light border border-dark-border rounded-2xl p-4 sm:p-6 shadow-2xl">
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          Ce site utilise uniquement des <strong className="text-white">cookies techniques</strong> n&eacute;cessaires
          au fonctionnement de la plateforme (authentification, session). Aucun cookie publicitaire
          ou de tra&ccedil;age n&rsquo;est utilis&eacute;.{" "}
          <Link href="/confidentialite" className="text-primary hover:underline">
            Politique de confidentialit&eacute;
          </Link>
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 gradient-bg text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
          >
            Accepter
          </button>
          <button
            onClick={handleRefuse}
            className="px-5 py-2.5 bg-dark-lighter border border-dark-border text-white/60 text-sm font-medium rounded-xl hover:text-white transition-colors cursor-pointer"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
