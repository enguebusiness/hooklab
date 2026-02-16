"use client";

import { useEffect, useState } from "react";

export default function ParallaxRocket() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rocket descends as user scrolls, with slight rotation
  const translateY = scrollY * 0.6;
  const rotate = Math.min(scrollY * 0.02, 15);
  const opacity = Math.max(1 - scrollY / 1200, 0);

  return (
    <div
      className="absolute right-4 md:right-12 lg:right-24 top-16 md:top-20 z-10 pointer-events-none"
      style={{
        transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
        opacity,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Rocket SVG */}
      <svg
        width="120"
        height="200"
        viewBox="0 0 120 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-32 md:w-28 md:h-48 lg:w-32 lg:h-52 drop-shadow-2xl"
      >
        {/* Flammes (animées) */}
        <g className="animate-flame">
          <path
            d="M45 160 L60 195 L75 160"
            fill="#E8772E"
            opacity="0.9"
          />
          <path
            d="M50 160 L60 185 L70 160"
            fill="#F5A623"
            opacity="0.8"
          />
          <path
            d="M54 160 L60 175 L66 160"
            fill="#FFD700"
            opacity="0.7"
          />
        </g>

        {/* Corps principal de la fusée */}
        <path
          d="M40 140 L40 80 Q40 30 60 10 Q80 30 80 80 L80 140 Z"
          fill="#1B2A4A"
          stroke="#2A3D66"
          strokeWidth="1"
        />

        {/* Reflet sur le corps */}
        <path
          d="M50 130 L50 70 Q50 35 60 18 Q62 35 62 70 L62 130 Z"
          fill="white"
          opacity="0.08"
        />

        {/* Fenêtre hublot */}
        <circle cx="60" cy="70" r="12" fill="#2A3D66" stroke="#E8772E" strokeWidth="2" />
        <circle cx="60" cy="70" r="8" fill="#111D36" />
        <circle cx="56" cy="67" r="3" fill="white" opacity="0.3" />

        {/* Ailerons gauche */}
        <path
          d="M40 120 L20 155 L40 145 Z"
          fill="#E8772E"
        />
        {/* Ailerons droit */}
        <path
          d="M80 120 L100 155 L80 145 Z"
          fill="#E8772E"
        />

        {/* Détails - lignes sur le corps */}
        <line x1="40" y1="100" x2="80" y2="100" stroke="#2A3D66" strokeWidth="1" opacity="0.5" />
        <line x1="40" y1="130" x2="80" y2="130" stroke="#2A3D66" strokeWidth="1" opacity="0.5" />

        {/* Nez de la fusée - highlight */}
        <path
          d="M55 20 Q60 10 65 20"
          fill="white"
          opacity="0.15"
        />

        {/* Logo H sur la fusée */}
        <text
          x="60"
          y="108"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Inter, sans-serif"
        >
          H
        </text>
      </svg>

      {/* Particules / traînée */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        <div className="w-1.5 h-1.5 bg-orange rounded-full animate-particle-1 opacity-60" />
        <div className="w-1 h-1 bg-orange-light rounded-full animate-particle-2 opacity-40" />
        <div className="w-1.5 h-1.5 bg-orange rounded-full animate-particle-3 opacity-50" />
      </div>
    </div>
  );
}
