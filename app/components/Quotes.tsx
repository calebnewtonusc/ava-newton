"use client";
import { useEffect, useRef, useState } from "react";

const quotes = [
  {
    text: "we're going to sell drugs to raise money for the fall show",
    context: "On school fundraising strategy. Unfiltered. Undeniable.",
    side: "left" as const,
  },
  {
    text: "on a scale of one to ten what is ur favorite color of the alphabet",
    context: "A question with no answer. Delivered without irony.",
    side: "left" as const,
  },
  {
    text: "i js drank acetone and i'm performing a dilution by drinking water",
    context: "Self-administered chemistry at 2am. Crisis managed.",
    side: "left" as const,
  },
  {
    text: "I GOT A 7/7 ON MY DBQ HELLO",
    context: "AP World History. Perfect score. The caps are justified.",
    side: "left" as const,
  },
  {
    text: "ur temptation is often a clue to ur purpose",
    context: "Unprompted wisdom. No setup. All landing.",
    side: "left" as const,
  },
  {
    text: "i got my ariel!",
    context: "After months of training. The aerial. She got it.",
    side: "left" as const,
  },
  {
    text: "first day at sigma hall feeling pretty sigma",
    context: "Day one energy. She named the vibe. She was right.",
    side: "left" as const,
  },
  {
    text: "how expensive do u think laufey is... i will sell my liver",
    context: "Budget planning for birthday concert. The liver is on the table.",
    side: "left" as const,
  },
];

export default function Quotes() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="quotes"
      ref={ref}
      className="section-divider py-28 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="text-purple-400/60 text-xs font-sans tracking-[0.4em] uppercase mb-4">
            Primary Evidence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Things Ava actually said
          </h2>
          <p className="font-sans text-white/40 text-sm mt-4">
            Verbatim. No edits. No context added.
          </p>
        </div>

        <div className="space-y-4">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="flex flex-col gap-1"
              style={{
                alignItems: "flex-start",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Incoming bubble (Ava's messages) */}
              <div className="flex items-end gap-2 max-w-[85%] md:max-w-[75%]">
                {/* Avatar */}
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-sans"
                  style={{
                    background: "linear-gradient(135deg, #f472b6, #c084fc)",
                    color: "white",
                  }}
                >
                  A
                </div>
                <div>
                  <div
                    className="px-4 py-3 rounded-2xl rounded-bl-sm font-sans text-sm text-white leading-relaxed"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {q.text}
                  </div>
                  <p className="font-sans text-white/30 text-xs mt-1.5 ml-1">
                    {q.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
