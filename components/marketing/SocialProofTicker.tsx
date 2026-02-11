"use client";

import { useState, useEffect } from "react";

const notifications = [
  { name: "Mehdi L.", action: "a candidat\u00e9", time: "il y a 3 min" },
  { name: "Laura B.", action: "a rejoint le programme", time: "il y a 12 min" },
  { name: "Yanis K.", action: "a candidat\u00e9", time: "il y a 18 min" },
  { name: "Sarah M.", action: "a g\u00e9n\u00e9r\u00e9 sa 1\u00e8re commission", time: "il y a 1h" },
  { name: "Thomas D.", action: "a candidat\u00e9", time: "il y a 2h" },
  { name: "Amina K.", action: "a atteint 1 000\u20ac de commissions", time: "il y a 3h" },
  { name: "Julien R.", action: "a candidat\u00e9", time: "il y a 4h" },
  { name: "Fatima N.", action: "a rejoint le programme", time: "il y a 5h" },
];

export default function SocialProofTicker() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(showTimeout);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [visible]);

  const n = notifications[current];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-dark-light border border-dark-border rounded-2xl p-4 shadow-2xl max-w-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-white shrink-0">
            {n.name[0]}
          </div>
          <div>
            <p className="text-white text-sm font-medium">
              {n.name} <span className="text-white/60 font-normal">{n.action}</span>
            </p>
            <p className="text-white/40 text-xs">{n.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
