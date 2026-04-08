"use client";

import { useState } from "react";

interface Realisation {
  titre: string;
  type: string;
  lieu: string;
  saison: string;
  image: string;
}

interface PaysagisteClientProps {
  realisations?: Realisation[];
  whatsapp?: boolean;
}

export default function PaysagisteClient({ realisations, whatsapp }: PaysagisteClientProps) {
  if (whatsapp) {
    return <WhatsAppButton />;
  }

  if (realisations) {
    return <GalerieFiltrable realisations={realisations} />;
  }

  return null;
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33604408157?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20jardin"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all group"
      aria-label="Contacter sur WhatsApp"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="absolute -top-2 -left-2 bg-white text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Je veux le m\u00eame jardin !
      </span>
    </a>
  );
}

function GalerieFiltrable({ realisations }: { realisations: Realisation[] }) {
  const [filter, setFilter] = useState("Tous");
  const types = ["Tous", "Terrasses", "Plantations", "All\u00e9es", "Entretien"];

  const filtered = filter === "Tous" ? realisations : realisations.filter((r) => r.type === filter);

  return (
    <>
      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
              filter === t
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((r, i) => (
          <div key={i} className="bg-[#f0f5ed] border border-gray-100 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-48 relative overflow-hidden">
              <img
                src={r.image}
                alt={r.titre}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Tag type */}
              <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full z-10 ${
                r.type === "Entretien" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
              }`}>
                {r.type}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-gray-800 font-bold text-sm mb-1">{r.titre}</h3>
              <p className="text-gray-400 text-xs flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {r.lieu}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
