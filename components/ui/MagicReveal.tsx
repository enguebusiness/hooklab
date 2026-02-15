"use client";

import { useState, useRef, useCallback } from "react";

interface MagicRevealProps {
  avantLabel: string;
  apresLabel: string;
  avantColor?: string;
  apresColor?: string;
  height?: string;
}

export default function MagicReveal({
  avantLabel,
  apresLabel,
  avantColor = "bg-red-50",
  apresColor = "bg-green-50",
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
    <div
      ref={containerRef}
      className={`relative ${height} rounded-xl overflow-hidden cursor-col-resize select-none border border-border`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* Apr\u00e8s (fond complet) */}
      <div className={`absolute inset-0 ${apresColor} flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-green-600 font-bold text-sm uppercase tracking-wider mb-1">Apr\u00e8s</p>
          <p className="text-green-800 text-sm font-medium px-4">{apresLabel}</p>
        </div>
      </div>

      {/* Avant (clip\u00e9 \u00e0 gauche) */}
      <div
        className={`absolute inset-0 ${avantColor} flex items-center justify-center`}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="text-center">
          <p className="text-red-600 font-bold text-sm uppercase tracking-wider mb-1">Avant</p>
          <p className="text-red-800 text-sm font-medium px-4">{avantLabel}</p>
        </div>
      </div>

      {/* Barre de s\u00e9paration */}
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
      <div className="absolute top-2 right-3 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20">APR\u00c8S</div>
    </div>
  );
}
