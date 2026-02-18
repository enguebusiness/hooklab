"use client";

import Card from "@/components/ui/Card";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

const demos = [
  {
    title: "Le Mod\u00e8le \u00ab\u00a0Gros \u0152uvre\u00a0\u00bb",
    subtitle: "Ma\u00e7ons, Couvreurs",
    description: "Id\u00e9al pour montrer la technique. Un site qui met en avant vos photos \u00ab\u00a0Avant / Apr\u00e8s\u00a0\u00bb pour prouver la qualit\u00e9 de vos finitions.",
    cta: "Voir un exemple Ma\u00e7onnerie",
    href: "/macon",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Le Mod\u00e8le \u00ab\u00a0Cr\u00e9ation\u00a0\u00bb",
    subtitle: "Paysagistes, Peintres",
    description: "Id\u00e9al pour vendre du r\u00eave. Un design \u00e9pur\u00e9 qui laisse toute la place \u00e0 la beaut\u00e9 de vos r\u00e9alisations.",
    cta: "Voir un exemple Paysagiste",
    href: "/paysagiste",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Le Mod\u00e8le \u00ab\u00a0Intervention\u00a0\u00bb",
    subtitle: "Plombiers, \u00c9lectriciens",
    description: "Id\u00e9al pour l\u2019urgence. Un site ultra-rapide avec votre num\u00e9ro de t\u00e9l\u00e9phone bien visible pour \u00eatre appel\u00e9 en un clic.",
    cta: "Voir un exemple Plombier",
    href: "/plombier",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

interface DemosLiveProps {
  images?: Record<string, string>;
}

export default function DemosLive(_props: DemosLiveProps) {
  return (
    <section id="exemples" className="py-16 md:py-24 bg-bg" aria-label="Exemples">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 bg-orange/10 border border-orange/20 rounded-full text-orange text-xs font-semibold mb-4">
              Exemples
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em] mb-3">
              Ne signez pas les yeux ferm&eacute;s.{" "}
              <span className="text-orange">Regardez ce que je peux faire pour vous.</span>
            </h2>
            <p className="text-text-light text-base md:text-lg max-w-2xl mx-auto">
              Je ne vous demande pas de me croire sur parole. J&rsquo;ai pr&eacute;par&eacute; des mod&egrave;les
              adapt&eacute;s &agrave; votre m&eacute;tier. Cliquez et imaginez votre logo &agrave; la place.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 200}>
              <Card hover className="flex flex-col p-0 overflow-hidden h-full">
                {/* Header visuel */}
                <div className="bg-navy p-6 text-center">
                  <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-3 text-orange">
                    {demo.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{demo.title}</h3>
                  <p className="text-orange text-sm font-semibold">{demo.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-text-light text-sm leading-relaxed">{demo.description}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={demo.href}
                    className="mt-5 flex items-center justify-center gap-2 bg-orange text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-orange/90 hover:scale-[1.02] transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {demo.cta}
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
