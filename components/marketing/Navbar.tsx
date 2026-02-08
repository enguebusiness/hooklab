"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-white">
              Hook<span className="gradient-text">Lab</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#methode"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Methode
            </a>
            <a
              href="#temoignages"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Resultats
            </a>
            <a
              href="#tarif"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              Tarif
            </a>
            <a
              href="#faq"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </a>
          </div>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Connexion
              </Button>
            </Link>
            <Link href="/candidature">
              <Button size="sm">Candidater</Button>
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-dark-border pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#methode"
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Methode
              </a>
              <a
                href="#temoignages"
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Resultats
              </a>
              <a
                href="#tarif"
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tarif
              </a>
              <a
                href="#faq"
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="w-full">
                    Connexion
                  </Button>
                </Link>
                <Link href="/candidature">
                  <Button size="sm" className="w-full">
                    Candidater
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
