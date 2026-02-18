"use client";

import { useState } from "react";
import MagicReveal from "@/components/ui/MagicReveal";
import Button from "@/components/ui/Button";

interface MaconClientProps {
  type?: "slider" | "form" | "faq" | "floating";
  avantLabel?: string;
  apresLabel?: string;
  avantImage?: string;
  apresImage?: string;
  faqs?: { q: string; a: string }[];
}

export default function MaconClient({
  type,
  avantLabel,
  apresLabel,
  avantImage,
  apresImage,
  faqs,
}: MaconClientProps) {
  if (type === "slider") {
    return (
      <MagicReveal
        avantLabel={avantLabel || ""}
        apresLabel={apresLabel || ""}
        avantImage={avantImage || ""}
        apresImage={apresImage || ""}
        height="h-64"
      />
    );
  }

  if (type === "form") {
    return <DevisForm />;
  }

  if (type === "faq") {
    return <FaqAccordion faqs={faqs || []} />;
  }

  if (type === "floating") {
    return <FloatingCTA />;
  }

  return null;
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="bg-[#f8f6f3] border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            >
              <span className="text-navy font-semibold text-sm pr-4">{faq.q}</span>
              <svg
                className={`w-5 h-5 text-orange shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-1">
                <p className="text-text-light text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ============================================================
   SMART DEVIS FORM
   ============================================================ */
function DevisForm() {
  const [step, setStep] = useState<"type" | "details">("type");
  const [projectType, setProjectType] = useState("");

  if (step === "details") {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">2/2</span>
          <h3 className="text-navy font-bold text-lg">Vos coordonn&eacute;es</h3>
        </div>
        <p className="text-text-muted text-sm mb-5">
          Projet : <strong className="text-navy">{projectType}</strong>
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Votre nom</label>
            <input
              type="text"
              placeholder="Marc Dupont"
              className="w-full px-4 py-3 bg-[#f8f6f3] border border-gray-200 rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">T&eacute;l&eacute;phone</label>
            <input
              type="tel"
              placeholder="06 12 34 56 78"
              className="w-full px-4 py-3 bg-[#f8f6f3] border border-gray-200 rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Ville</label>
            <input
              type="text"
              placeholder="Orchies, Cysoing, Sam&eacute;on..."
              className="w-full px-4 py-3 bg-[#f8f6f3] border border-gray-200 rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">D&eacute;crivez votre projet (optionnel)</label>
            <textarea
              placeholder="Surface, type de travaux, d&eacute;lais souhait&eacute;s..."
              rows={3}
              className="w-full px-4 py-3 bg-[#f8f6f3] border border-gray-200 rounded-xl text-text text-sm placeholder:text-text-muted focus:border-orange focus:ring-1 focus:ring-orange outline-none resize-none"
            />
          </div>
          <Button size="lg" className="w-full">
            Envoyer ma demande de devis
          </Button>
          <button
            onClick={() => setStep("type")}
            className="w-full text-text-muted hover:text-text text-sm underline cursor-pointer"
          >
            &larr; Retour
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <span className="bg-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">1/2</span>
        <h3 className="text-navy font-bold text-lg">Quel type de projet&nbsp;?</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            label: "Projet Extension",
            desc: "Agrandissement, garage, sur\u00e9l\u00e9vation",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            ),
          },
          {
            label: "R\u00e9novation",
            desc: "Fa\u00e7ade, rejointoiement, murs",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
          },
          {
            label: "Petits Travaux",
            desc: "Terrasse, muret, dalle",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ),
          },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setProjectType(item.label);
              setStep("details");
            }}
            className="p-5 rounded-xl border-2 border-gray-200 bg-[#f8f6f3] hover:border-orange hover:shadow-md text-center transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <p className="font-semibold text-navy text-sm mb-1">{item.label}</p>
            <p className="text-text-muted text-xs">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   FLOATING MOBILE CTA
   ============================================================ */
function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <a
        href="tel:+33600000000"
        className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold text-sm py-3.5 rounded-xl shadow-lg transition-colors w-full"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Appeler maintenant
      </a>
    </div>
  );
}
