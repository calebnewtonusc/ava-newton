"use client";
import { useEffect, useRef, useState } from "react";

const BIRTH_YEAR = 2009;
const yearsAsSister = new Date().getFullYear() - BIRTH_YEAR;

const stats = [
  {
    value: `${yearsAsSister}`,
    label: "Years as Sister",
    sublabel: `Since ${BIRTH_YEAR}`,
  },
  {
    value: "7/7",
    label: "AP World DBQ",
    sublabel: "Perfect score",
  },
  {
    value: "90",
    label: "Min Daily Practice",
    sublabel: "Millennium Dance Complex",
  },
  {
    value: "3",
    label: "Dance Styles",
    sublabel: "Ballet, Jazz, Hip Hop",
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-divider py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(216,180,254,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="text-purple-400/60 text-xs font-sans tracking-[0.4em] uppercase mb-4">
            The Numbers
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Ava Newton, by the data
          </h2>
          <p className="font-sans text-white/40 text-base mt-4 max-w-xl mx-auto">
            {yearsAsSister} years of documented excellence, distilled into
            numbers. The stats do not lie.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "rgba(216,180,254,0.04)",
                border: "1px solid rgba(216,180,254,0.1)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease, transform 0.5s ease`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <p
                className="font-serif font-bold text-4xl md:text-5xl mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #f472b6 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p className="font-sans text-white font-semibold text-sm mb-1">
                {stat.label}
              </p>
              <p className="font-sans text-white/35 text-xs">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
