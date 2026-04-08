"use client";

import { useState } from "react";
import MagicReveal from "@/components/ui/MagicReveal";
import Button from "@/components/ui/Button";

interface MaconClientProps {
  type?: "slider" | "form" | "cert";
  certName?: string;
  avantLabel?: string;
  apresLabel?: string;
  avantImage?: string;
  apresImage?: string;
}

export default function MaconClient({ type, certName, avantLabel, apresLabel, avantImage, apresImage }: MaconClientProps) {
  // Cert badge with popup
  if (!type || type === "cert") {
    return <CertBadge name={certName || ""} />;
  }

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

  return null;
}

function CertBadge({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  const infos: Record<string, string> = {
    "D\u00e9cennale": "La garantie d\u00e9cennale couvre tous les dommages compromettant la solidit\u00e9 de l\u2019ouvrage pendant 10 ans apr\u00e8s la r\u00e9ception des travaux.",
    "Qualibat": "Qualibat est l\u2019organisme de r\u00e9f\u00e9rence pour la qualification des entreprises du b\u00e2timent. Gage de comp\u00e9tence et de s\u00e9rieux.",
    "RGE": "Le label RGE (Reconnu Garant de l\u2019Environnement) vous permet de b\u00e9n\u00e9ficier des aides de l\u2019\u00c9tat : MaPrimeR\u00e9nov\u2019, CEE, \u00e9co-PTZ.",
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-1.5 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="text-white text-xs font-semibold">{name}</span>
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-[#1b2a4a] font-bold text-lg">{name}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              {infos[name] || "Certification professionnelle v\u00e9rifi\u00e9e."}
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full bg-[#1b2a4a] text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-[#1b2a4a]/90 transition-colors cursor-pointer"
            >
              Compris
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function DevisForm() {
  const [step, setStep] = useState<"type" | "details" | "urgence">("type");
  const [projectType, setProjectType] = useState("");

  if (step === "urgence") {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-[#1b2a4a] font-bold text-xl mb-2">Urgence d&eacute;tect&eacute;e !</h3>
        <p className="text-gray-500 text-sm mb-6">Pour une intervention rapide, appelez directement le patron :</p>
        <a
          href="tel:+33604408157"
          className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors w-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          APPELER LE PATRON
        </a>
        <p className="text-gray-400 text-xs mt-3">Disponible 7j/7 pour les urgences</p>
        <button onClick={() => setStep("type")} className="text-gray-400 hover:text-gray-600 text-sm mt-4 underline cursor-pointer">
          &larr; Retour au formulaire
        </button>
      </div>
    );
  }

  if (step === "details") {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">2/2</span>
          <h3 className="text-[#1b2a4a] font-bold text-lg">D&eacute;tails du projet</h3>
        </div>
        <p className="text-gray-400 text-sm mb-5">Type : <strong className="text-[#1b2a4a]">{projectType}</strong></p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Surface approximative</label>
            <select className="w-full px-4 py-3 bg-[#f8f6f3] border border-gray-200 rounded-xl text-gray-800 text-sm focus:border-orange focus:ring-1 focus:ring-orange outline-none">
              <option>Moins de 50m&sup2;</option>
              <option>50 &agrave; 100m&sup2;</option>
              <option>100 &agrave; 200m&sup2;</option>
              <option>Plus de 200m&sup2;</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Votre nom</label>
            <input type="text" placeholder="Marc Dupont" className="w-full px-4 py-3 bg-[#f8f6f3] border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-orange focus:ring-1 focus:ring-orange outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">T&eacute;l&eacute;phone</label>
            <input type="tel" placeholder="06 12 34 56 78" className="w-full px-4 py-3 bg-[#f8f6f3] border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-orange focus:ring-1 focus:ring-orange outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Ville</label>
            <input type="text" placeholder="Douai, Orchies, Valenciennes..." className="w-full px-4 py-3 bg-[#f8f6f3] border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-orange focus:ring-1 focus:ring-orange outline-none" />
          </div>
          <Button size="lg" className="w-full">Envoyer ma demande de devis</Button>
          <button onClick={() => setStep("type")} className="w-full text-gray-400 hover:text-gray-600 text-sm underline cursor-pointer">
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
        <h3 className="text-[#1b2a4a] font-bold text-lg">Quel type de projet ?</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "Urgence fuite / d\u00e9g\u00e2t", urgent: true },
          { label: "R\u00e9novation toiture", urgent: false },
          { label: "Ravalement fa\u00e7ade", urgent: false },
          { label: "Ma\u00e7onnerie neuve", urgent: false },
          { label: "Charpente / Isolation", urgent: false },
          { label: "Autre projet", urgent: false },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setProjectType(item.label);
              if (item.urgent) {
                setStep("urgence");
              } else {
                setStep("details");
              }
            }}
            className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer hover:shadow-md ${
              item.urgent
                ? "border-red-300 bg-red-50 hover:border-red-500"
                : "border-gray-200 bg-[#f8f6f3] hover:border-orange"
            }`}
          >
            <p className={`font-semibold text-sm ${item.urgent ? "text-red-600" : "text-[#1b2a4a]"}`}>
              {item.urgent && "\u26a0\ufe0f "}{item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
