"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary-hover to-primary text-white text-center py-2 px-10 text-xs sm:text-sm font-medium">
      <Link href="/candidature" className="hover:underline">
        <span className="hidden sm:inline">
          Places limit&eacute;es &mdash; Nouvelle session de formation TikTok Shop ouverte &rarr;{" "}
          <span className="underline font-bold">Candidater</span>
        </span>
        <span className="sm:hidden">
          Places limit&eacute;es &mdash;{" "}
          <span className="underline font-bold">Candidater maintenant</span>
        </span>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setVisible(false);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer p-1"
        aria-label="Fermer"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
