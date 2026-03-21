"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const exhibits = [
  {
    id: "A",
    title: "The Acetone Incident",
    body: 'Ava consumed acetone. Immediately diagnosed the situation. Immediately began the treatment: drinking water to dilute the concentration. "I js drank acetone and I\'m performing a dilution by drinking water." She did not call poison control. She ran the experiment herself. No notes. No review board. Just results.',
    pull: '"performing a dilution"',
    photo: "/photos/ava-makeup.jpeg",
    objPos: "center 20%",
    accent: "#f472b6",
    accentRgb: "244,114,182",
  },
  {
    id: "B",
    title: "The Fundraising Pivot",
    body: "The fall show needed money. Ava had a solution. \"We're going to sell drugs to raise money for the fall show.\" This was a pivot from conventional fundraising. It was decisive. It was creative. It was fully committed. The school eventually went with bake sales. The decision not to take Ava's advice remains their loss.",
    pull: '"raise money for the fall show"',
    photo: "/photos/ava-girlscouts.jpeg",
    objPos: "center 25%",
    accent: "#c084fc",
    accentRgb: "192,132,252",
  },
  {
    id: "C",
    title: "The Liver Offer",
    body: 'Ava wants Laufey to perform at her birthday. The price of a Laufey concert is unknown. Ava\'s solution: liquidate the liver. "I will sell my liver." The organ has value. The concert has value. The math is simple. This is not impulsiveness — this is a cost-benefit analysis with a clear winner.',
    pull: '"i will sell my liver"',
    photo: "/photos/ava-baby-caleb.jpeg",
    objPos: "center center",
    accent: "#f472b6",
    accentRgb: "244,114,182",
  },
  {
    id: "D",
    title: "The Perfect Score",
    body: 'AP World History. Document-Based Question. Maximum possible score: 7. Ava\'s score: 7. "I GOT A 7/7 ON MY DBQ HELLO." The capitalization is not optional. The exclamation is not optional. This is the correct level of enthusiasm for a perfect score.',
    pull: '"I GOT A 7/7"',
    photo: "/photos/ava-rockettes.jpeg",
    objPos: "center 20%",
    accent: "#c084fc",
    accentRgb: "192,132,252",
  },
];

export default function FunFacts() {
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
      id="casefile"
      ref={ref}
      className="section-divider py-28 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="text-purple-400/60 text-xs font-sans tracking-[0.4em] uppercase mb-4">
            Case Files
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Exhibits A through D
          </h2>
          <p className="font-sans text-white/40 text-sm mt-4">
            Submitted into evidence. All verified.
          </p>
        </div>

        <div className="space-y-4">
          {exhibits.map((ex, i) => (
            <div
              key={ex.id}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#0e0e1a",
                border: `1px solid rgba(${ex.accentRgb}, 0.15)`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="h-[2px]"
                style={{
                  background: `linear-gradient(to right, ${ex.accent}, transparent)`,
                }}
              />
              <div className="flex flex-col md:flex-row gap-0">
                {/* Text */}
                <div className="flex-1 p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-sans text-xs font-bold tracking-[0.3em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        color: ex.accent,
                        background: `rgba(${ex.accentRgb}, 0.1)`,
                        border: `1px solid rgba(${ex.accentRgb}, 0.2)`,
                      }}
                    >
                      Exhibit {ex.id}
                    </span>
                  </div>
                  <h3 className="font-serif text-white font-bold text-xl mb-3">
                    {ex.title}
                  </h3>
                  <p className="font-sans text-white/55 text-sm leading-relaxed mb-4">
                    {ex.body}
                  </p>
                  <p
                    className="font-serif text-base italic"
                    style={{ color: ex.accent }}
                  >
                    {ex.pull}
                  </p>
                </div>

                {/* Photo */}
                <div
                  className="relative hidden md:block"
                  style={{ width: "200px", flexShrink: 0 }}
                >
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: `linear-gradient(to right, rgba(14,14,26,1) 0%, rgba(14,14,26,0.3) 30%, transparent 60%)`,
                    }}
                  />
                  <Image
                    src={ex.photo}
                    alt={ex.title}
                    fill
                    quality={85}
                    sizes="200px"
                    className="object-cover"
                    style={{ objectPosition: ex.objPos }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
