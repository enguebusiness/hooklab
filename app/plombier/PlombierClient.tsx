"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface PlombierClientProps {
  type: "diagnostic" | "sticky";
}

export default function PlombierClient({ type }: PlombierClientProps) {
  if (type === "sticky") return <StickyCall />;
  if (type === "diagnostic") return <Diagnostic />;
  return null;
}

function StickyCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a1628] border-t border-white/10 p-3 safe-area-bottom">
      <a
        href="tel:+33604408157"
        className="flex items-center justify-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-base py-3.5 rounded-xl w-full transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Appeler maintenant &mdash; 06 04 40 81 57
      </a>
      <p className="text-white/40 text-[10px] text-center mt-1">Devis gratuit &middot; Pas de surprise</p>
    </div>
  );
}

function Diagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "Quel est le probl\u00e8me ?",
      options: [
        { icon: "\ud83d\udca7", label: "Fuite d\u2019eau" },
        { icon: "\ud83d\udebd", label: "Canalisation bouch\u00e9e" },
        { icon: "\ud83d\udd25", label: "Panne chauffe-eau" },
        { icon: "\ud83d\udee0\ufe0f", label: "Autre probl\u00e8me" },
      ],
    },
    {
      question: "Quel niveau d\u2019urgence ?",
      options: [
        { icon: "\ud83d\udea8", label: "Urgent (fuite active)" },
        { icon: "\u23f0", label: "Sous 48h" },
        { icon: "\ud83d\udcc5", label: "Travaux planifi\u00e9s" },
      ],
    },
    {
      question: "O\u00f9 \u00eates-vous situ\u00e9 ?",
      options: [
        { icon: "\ud83d\udccd", label: "Douai / Environs" },
        { icon: "\ud83d\udccd", label: "Orchies / Environs" },
        { icon: "\ud83d\udccd", label: "Valenciennes / Environs" },
        { icon: "\ud83d\udccd", label: "Autre secteur" },
      ],
    },
  ];

  if (step >= questions.length) {
    const isUrgent = answers[1]?.includes("Urgent");
    const isOutOfZone = answers[2]?.includes("Autre");

    if (isOutOfZone) {
      return (
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">\ud83d\udccd</span>
          </div>
          <h3 className="text-gray-900 font-bold text-xl mb-2">Vous \u00eates hors de notre zone principale</h3>
          <p className="text-gray-500 text-sm mb-6">
            Notre rayon d&rsquo;action est Douai + 25km. Appelez-nous quand m\u00eame,
            on trouvera peut-\u00eatre une solution !
          </p>
          <a
            href="tel:+33604408157"
            className="inline-flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Appeler quand m\u00eame
          </a>
          <button onClick={() => { setStep(0); setAnswers([]); }} className="block mx-auto mt-4 text-gray-400 hover:text-gray-600 text-sm underline cursor-pointer">
            Recommencer le diagnostic
          </button>
        </div>
      );
    }

    if (isUrgent) {
      return (
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-3xl">\ud83d\udea8</span>
          </div>
          <h3 className="text-gray-900 font-bold text-xl mb-2">Urgence d\u00e9tect\u00e9e !</h3>
          <p className="text-gray-500 text-sm mb-2">
            <strong>{answers[0]}</strong> &mdash; {answers[2]}
          </p>
          <p className="text-gray-400 text-sm mb-6">Pour une intervention imm\u00e9diate, appelez directement :</p>
          <a
            href="tel:+33604408157"
            className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors w-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            APPELER MAINTENANT
          </a>
          <p className="text-gray-400 text-xs mt-3">Disponible 7j/7 &middot; Devis gratuit</p>
        </div>
      );
    }

    // Non urgent
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">\u2705</span>
          </div>
          <h3 className="text-gray-900 font-bold text-xl mb-1">Diagnostic re\u00e7u !</h3>
          <p className="text-gray-500 text-sm">
            <strong>{answers[0]}</strong> &mdash; {answers[1]} &mdash; {answers[2]}
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Votre t\u00e9l\u00e9phone</label>
            <input type="tel" placeholder="06 12 34 56 78" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Pr\u00e9cisions (facultatif)</label>
            <textarea rows={2} placeholder="D\u00e9crivez votre probl\u00e8me en quelques mots..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none" />
          </div>
          <Button size="lg" className="w-full bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6]">
            Envoyer &mdash; On vous rappelle sous 24h
          </Button>
        </div>
        <button onClick={() => { setStep(0); setAnswers([]); }} className="block mx-auto mt-4 text-gray-400 hover:text-gray-600 text-sm underline cursor-pointer">
          Recommencer
        </button>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {questions.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-[#3b82f6]" : "bg-gray-200"}`} />
        ))}
      </div>

      <h3 className="text-gray-900 font-bold text-lg mb-5">{q.question}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => {
              setAnswers([...answers, opt.label]);
              setStep(step + 1);
            }}
            className="p-4 rounded-xl border-2 border-gray-200 bg-gray-50 hover:border-[#3b82f6] hover:shadow-md text-left transition-all cursor-pointer"
          >
            <span className="text-2xl block mb-1">{opt.icon}</span>
            <p className="text-gray-900 font-semibold text-sm">{opt.label}</p>
          </button>
        ))}
      </div>

      {step > 0 && (
        <button
          onClick={() => { setStep(step - 1); setAnswers(answers.slice(0, -1)); }}
          className="mt-4 text-gray-400 hover:text-gray-600 text-sm underline cursor-pointer"
        >
          &larr; Retour
        </button>
      )}
    </div>
  );
}
