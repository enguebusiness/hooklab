"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Check if already shown this session
    if (sessionStorage.getItem("hooklab_exit_popup")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !show && !dismissed) {
        setShow(true);
        sessionStorage.setItem("hooklab_exit_popup", "1");
      }
    };

    // Only on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [show, dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-dark-light border border-dark-border rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white cursor-pointer"
          aria-label="Fermer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            Attends ! Tu passes &agrave; c&ocirc;t&eacute; d&apos;une opportunit&eacute;
          </h3>
          <p className="text-white/60 text-sm mb-6 leading-relaxed">
            TikTok Shop vient d&apos;arriver en France et le march&eacute; n&apos;est pas encore satur&eacute;.
            Les premiers cr&eacute;ateurs sont ceux qui gagnent le plus. Ne laisse pas passer ta chance.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-dark border border-dark-border rounded-xl p-3">
              <p className="text-xl font-bold gradient-text">50,5M&euro;</p>
              <p className="text-white/40 text-xs">March&eacute; FR en 2 mois</p>
            </div>
            <div className="bg-dark border border-dark-border rounded-xl p-3">
              <p className="text-xl font-bold gradient-text">10-30%</p>
              <p className="text-white/40 text-xs">Commission par vente</p>
            </div>
          </div>

          <Link href="/candidature" onClick={handleClose}>
            <Button size="lg" className="w-full pulse-glow mb-3">
              D&eacute;couvrir le programme
            </Button>
          </Link>
          <button
            onClick={handleClose}
            className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-pointer"
          >
            Non merci, je pr&eacute;f&egrave;re me lancer seul
          </button>
        </div>
      </div>
    </div>
  );
}
