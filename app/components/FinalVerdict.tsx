"use client";
import { useEffect, useRef, useState } from "react";
import { Star, Shield } from "lucide-react";

const BIRTH_YEAR = 2009;
const yearsAsSister = new Date().getFullYear() - BIRTH_YEAR;

export default function FinalVerdict() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="verdict"
      ref={ref}
      className="relative py-36 px-8 md:px-12 overflow-hidden section-divider"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(192,132,252,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/15 to-transparent" />

      <div
        className="max-w-3xl mx-auto text-center relative z-10 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
        }}
      >
        <div className="flex items-center justify-center mb-6">
          <div
            className="p-3 rounded-2xl"
            style={{
              background: "rgba(192,132,252,0.1)",
              border: "1px solid rgba(192,132,252,0.2)",
            }}
          >
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
        </div>

        <p className="text-purple-400/60 text-xs font-sans tracking-[0.45em] uppercase mb-6">
          The Final Word
        </p>

        <div className="flex items-center justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-pink-400 fill-pink-400"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 80}ms`,
                transition: "opacity 0.5s ease",
              }}
            />
          ))}
        </div>

        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-10">
          The Verdict: <span className="rose-gradient">Ava Newton</span> is a
          force of nature.
        </h2>

        <div className="space-y-5 text-white/45 font-sans text-lg leading-relaxed mb-14">
          <p>
            This is not a hype post. This is a documented, evidence-based case.
            Ava Newton choreographs school productions, lands aerials at
            Millennium Dance Complex, gets a 7/7 on AP World DBQs, sells Girl
            Scout cookies with genuine enthusiasm, and texts "we're going to
            sell drugs to raise money for the fall show" without breaking
            stride. That combination does not just happen. It is built.
          </p>
          <p>
            She leads devotionals and posts scripture at midnight and asks "on a
            scale of one to ten what is ur favorite color of the alphabet" in
            the same 24 hours. She will sell her liver for Laufey tickets and
            get a perfect score the next morning. {yearsAsSister} years of
            watching her do both at the same time — the chaos and the faith, the
            excellence and the absurdity — is a privilege that cannot be
            overstated.
          </p>
          <p
            className="font-serif text-white/80 text-xl italic"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: "400ms",
              transition: "opacity 0.8s ease",
            }}
          >
            "Some people are a lot. Ava is exactly enough of everything."
          </p>
        </div>

        <div
          className="px-10 py-4 rounded-full text-white font-sans font-semibold text-sm tracking-wider inline-block cursor-default select-none"
          style={{
            background: "linear-gradient(135deg, #f472b6, #c084fc)",
            boxShadow: "0 0 40px rgba(192,132,252,0.3)",
          }}
        >
          Case Closed. Ava Wins.
        </div>
      </div>
    </section>
  );
}
