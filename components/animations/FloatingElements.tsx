"use client";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particules flottantes */}
      <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-orange/20 rounded-full animate-float-slow" />
      <div className="absolute top-1/3 left-[25%] w-3 h-3 bg-white/5 rounded-full animate-float-medium" />
      <div className="absolute top-1/2 left-[70%] w-2.5 h-2.5 bg-orange/15 rounded-full animate-float-fast" />
      <div className="absolute top-[20%] left-[80%] w-1.5 h-1.5 bg-white/10 rounded-full animate-float-slow" />
      <div className="absolute top-[60%] left-[15%] w-2 h-2 bg-orange/10 rounded-full animate-float-medium" />
      <div className="absolute top-[70%] left-[50%] w-1 h-1 bg-white/15 rounded-full animate-float-fast" />

      {/* Cercles décoratifs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 border border-white/5 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-orange/5 rounded-full" />
      <div className="absolute top-1/4 right-[30%] w-48 h-48 border border-white/3 rounded-full" />
    </div>
  );
}
