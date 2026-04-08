"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-navy" aria-label="Contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <span className="inline-block px-3 py-1.5 bg-white/10 rounded-full text-orange text-xs font-semibold mb-4">
              Audit gratuit
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-[-0.02em] mb-4">
              Pr&ecirc;t &agrave; arr&ecirc;ter de courir apr&egrave;s les chantiers ?
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              R&eacute;servez votre audit gratuit. Je regarde votre situation Google,
              votre visibilit&eacute; actuelle, et je vous dis concr&egrave;tement ce
              qu&rsquo;on peut am&eacute;liorer. Sans engagement, sans jargon.
            </p>

            <ul className="space-y-3">
              {[
                "Audit de votre pr\u00e9sence Google actuelle",
                "Analyse de vos concurrents locaux",
                "Plan d\u2019action concret et chiffr\u00e9",
                "R\u00e9ponse sous 24h",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-orange/20 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-navy font-bold text-xl mb-2">Demande envoy&eacute;e !</h3>
                <p className="text-text-light text-sm">
                  Je vous recontacte sous 24h pour planifier votre audit.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-navy font-bold text-xl mb-1">
                  R&eacute;server mon audit gratuit
                </h3>
                <p className="text-text-light text-sm mb-6">
                  Remplissez le formulaire, je vous recontacte rapidement.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-text mb-1.5">
                      Votre nom
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Marc Dupont"
                      className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-text mb-1.5">
                      T&eacute;l&eacute;phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-metier" className="block text-sm font-medium text-text mb-1.5">
                      Votre m&eacute;tier
                    </label>
                    <input
                      id="contact-metier"
                      type="text"
                      required
                      placeholder="Couvreur, Menuisier, Paysagiste..."
                      className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-ville" className="block text-sm font-medium text-text mb-1.5">
                      Ville / Zone
                    </label>
                    <input
                      id="contact-ville"
                      type="text"
                      required
                      placeholder="Douai, Valenciennes, Orchies..."
                      className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    R&eacute;server mon Audit Gratuit
                  </Button>
                  <p className="text-text-muted text-xs text-center">
                    Gratuit &middot; Sans engagement &middot; R&eacute;ponse sous 24h
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
