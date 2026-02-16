"use client";

import { useState, useRef, useCallback } from "react";

interface MagicRevealProps {
  avantLabel: string;
  apresLabel: string;
  avantImage: string;
  apresImage: string;
  height?: string;
}

export default function MagicReveal({
  avantLabel,
  apresLabel,
  avantImage,
  apresImage,
  height = "h-64",
}: MagicRevealProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div
        ref={containerRef}
        className={`relative ${height} cursor-col-resize select-none`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Après (fond complet) */}
        <img
          src={apresImage}
          alt={apresLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Avant (clipé à gauche) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={avantImage}
            alt={avantLabel}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Barre de séparation */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-orange">
            <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels gauche/droite */}
        <div className="absolute top-2 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20">AVANT</div>
        <div className="absolute top-2 right-3 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20">APR&Egrave;S</div>
      </div>

      {/* Légendes sous l'image */}
      <div className="flex justify-between bg-white px-4 py-2 text-xs">
        <span className="text-red-600 font-semibold">{avantLabel}</span>
        <span className="text-green-600 font-semibold">{apresLabel}</span>
      </div>
    </div>
  );
}
