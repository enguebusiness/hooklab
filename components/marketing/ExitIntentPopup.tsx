"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const lastScrollY = useRef(0);
  const maxScrollY = useRef(0);

  useEffect(() => {
    if (dismissed) return;

    // Check if already shown this session
    if (typeof window !== "undefined" && sessionStorage.getItem("hooklab_exit_popup")) {
      setDismissed(true);
      return;
    }

    const triggerPopup = () => {
      if (!show && !dismissed) {
        setShow(true);
        sessionStorage.setItem("hooklab_exit_popup", "1");
      }
    };

    // Desktop: mouse leaves viewport at top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        triggerPopup();
      }
    };

    // Mobile: user scrolls back up fast after scrolling at least 60% of the page
    const handleScroll = () => {
      const currentY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = pageHeight > 0 ? currentY / pageHeight : 0;

      if (currentY > maxScrollY.current) {
        maxScrollY.current = currentY;
      }

      // Trigger if user scrolled past 60% of page and then scrolls up by 300px+
      const scrolledUpAmount = maxScrollY.current - currentY;
      const maxScrollPercent = pageHeight > 0 ? maxScrollY.current / pageHeight : 0;

      if (maxScrollPercent > 0.6 && scrolledUpAmount > 300 && scrollPercent < 0.4) {
        triggerPopup();
      }

      lastScrollY.current = currentY;
    };

    // Desktop: mouseleave
    document.addEventListener("mouseleave", handleMouseLeave);

    // Mobile: scroll-based trigger
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
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
      <div className="relative bg-dark-light border border-dark-border rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scale-in">
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
          <div className="w-14 h-14 sm:w-16 sm:h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
            Tu h&eacute;sites encore ?
          </h3>
          <p className="text-white/60 text-sm mb-5 sm:mb-6 leading-relaxed">
            TikTok Shop vient d&apos;arriver en France. Le march&eacute; n&apos;est pas
            encore satur&eacute; et les premiers cr&eacute;ateurs captent
            l&apos;essentiel des commissions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-5 sm:mb-6">
            <div className="bg-dark border border-dark-border rounded-xl p-3">
              <p className="text-lg sm:text-xl font-bold gradient-text">50,5M&euro;</p>
              <p className="text-white/40 text-xs">March&eacute; FR en 2 mois</p>
            </div>
            <div className="bg-dark border border-dark-border rounded-xl p-3">
              <p className="text-lg sm:text-xl font-bold gradient-text">10-30%</p>
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
            Non merci
          </button>
        </div>
      </div>
    </div>
  );
}
