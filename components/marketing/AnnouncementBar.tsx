"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary-hover to-primary text-white text-center py-2.5 px-4 text-sm font-medium z-[60]">
      <Link href="/candidature" className="hover:underline">
        Places limit&eacute;es &mdash; Nouvelle session de formation TikTok Shop
        ouverte &rarr; <span className="underline font-bold">Candidater</span>
      </Link>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer"
        aria-label="Fermer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
