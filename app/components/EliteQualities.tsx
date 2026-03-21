"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Music,
  Heart,
  FlaskConical,
  Zap,
  Star,
  Laugh,
  BookOpen,
  Shield,
  Users,
  Sparkles,
} from "lucide-react";

const BIRTH_YEAR = 2009;
const yearsAsSister = new Date().getFullYear() - BIRTH_YEAR;

const ROSE = {
  color: "text-pink-400",
  iconBg: "bg-pink-500/15 border-pink-500/25",
  accentColor: "#f472b6",
  accentRgb: "244,114,182",
};
const VIOLET = {
  color: "text-purple-400",
  iconBg: "bg-purple-500/15 border-purple-500/25",
  accentColor: "#c084fc",
  accentRgb: "192,132,252",
};

const cards = [
  {
    icon: Music,
    ...ROSE,
    title: `${yearsAsSister} Years and Counting`,
    body: `Most siblings drift. Ava has been there since before she could walk. She texts at 2am, she choreographs entire productions, she sells cookies with the same energy she brings to an aerial. That is not nothing. That is the whole thing.`,
  },
  {
    icon: Star,
    ...VIOLET,
    title: "Dancer at Her Core",
    body: "Ballet. Jazz. Hip hop. Millennium Dance Complex. Got her aerial and announced it like she had just split the atom — because for a dancer, she had. The discipline required is something most people will never understand.",
  },
  {
    icon: Heart,
    ...ROSE,
    title: "Faith That Leads",
    body: 'ACTS/CAB Creative Director. Posts Matthew 24 devotionals. Texts scripture. She does not keep faith in the background — it is load-bearing, front and center, every single day. "Ur temptation is often a clue to ur purpose."',
  },
  {
    icon: FlaskConical,
    ...VIOLET,
    title: "Chaotic Academic",
    body: '"Im doing my 32 missing assignments." That is a real thing Ava said. She also got a 7/7 on her AP World DBQ. These facts are both true at the same time and neither cancels the other.',
  },
  {
    icon: Laugh,
    ...ROSE,
    title: "Zero-Filter Mode",
    body: '"We\'re going to sell drugs to raise money for the fall show." No context. No preamble. Full commitment. Ava delivers chaos with the confidence of someone who has rehearsed it, which she has not.',
  },
  {
    icon: BookOpen,
    ...VIOLET,
    title: "Philosopher of the Absurd",
    body: '"On a scale of one to ten what is ur favorite color of the alphabet." This is an actual question Ava asked. It has no answer. It does not need one. It is pure Ava.',
  },
  {
    icon: Shield,
    ...ROSE,
    title: "Scientist in Training",
    body: '"I js drank acetone and I\'m performing a dilution by drinking water." She diagnosed her own chemical exposure and self-administered a solution in one sentence. This is either chemistry or chaos. It is both.',
  },
  {
    icon: Sparkles,
    ...VIOLET,
    title: "Laufey Stan Supreme",
    body: '"I will sell my liver." That is the amount Ava is willing to pay to see Laufey perform at her birthday. The liver is not a small ask. This is not hyperbole. This is budget planning.',
  },
  {
    icon: Zap,
    ...ROSE,
    title: "Sigma Hall Graduate",
    body: '"First day at sigma hall feeling pretty sigma." Ava walked into a summer program and immediately established the vibe. She named it. She claimed it. She was right.',
  },
  {
    icon: Users,
    ...VIOLET,
    title: "Temu Executive",
    body: '"I just got recruited to work at temu!!!" Delivered with the same energy as a Fortune 500 offer. The specifics do not matter. The confidence is the whole story.',
  },
];

export default function EliteQualities() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const featuredCard = cards[0];
  const gridCards = cards.slice(1);
  const FeaturedIcon = featuredCard.icon;

  return (
    <section
      id="qualities"
      ref={ref}
      className="section-divider py-28 px-8 md:px-12"
    >
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
            The Starter Pack
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            The Ava Newton starter pack
          </h2>
        </div>

        {/* Featured hero card */}
        <div
          className="rounded-2xl overflow-hidden mb-4 relative"
          style={{
            background: "#0e0e1a",
            border: "1px solid rgba(244,114,182,0.25)",
            minHeight: "220px",
            boxShadow:
              "0 0 60px rgba(244,114,182,0.08), 0 4px 32px rgba(0,0,0,0.4)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(to right, #f472b6, #c084fc)",
            }}
          />
          <div className="flex min-h-[220px]">
            <div
              className="flex-1 p-8 md:p-10 flex flex-col justify-center"
              style={{ minWidth: 0 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`inline-flex p-2.5 rounded-xl border ${featuredCard.iconBg}`}
                >
                  <FeaturedIcon className={`w-6 h-6 ${featuredCard.color}`} />
                </div>
                <span
                  className="font-sans text-xs font-bold tracking-[0.25em] uppercase"
                  style={{ color: featuredCard.accentColor }}
                >
                  Founding Sisterhood
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-3 leading-tight">
                {featuredCard.title}
              </h3>
              <p className="font-sans text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
                {featuredCard.body}
              </p>
            </div>

            <div
              className="relative hidden md:block"
              style={{ width: "40%", flexShrink: 0 }}
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(14,14,26,1) 0%, rgba(14,14,26,0.2) 25%, transparent 55%)",
                }}
              />
              <Image
                src="/photos/ava-girlscouts.jpeg"
                alt="Ava"
                fill
                quality={90}
                sizes="(max-width: 768px) 0px, 40vw"
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </div>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gridCards.map((card, i) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === i;

            return (
              <div
                key={card.title}
                className="rounded-2xl p-6 relative overflow-hidden cursor-default"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "#0e0e1a",
                  border: `1px solid ${isHovered ? card.accentColor + "55" : "rgba(255,255,255,0.08)"}`,
                  boxShadow: isHovered
                    ? `0 0 24px rgba(${card.accentRgb},0.12), 0 4px 16px rgba(0,0,0,0.3)`
                    : "0 4px 16px rgba(0,0,0,0.2)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 0.5s ease, transform 0.5s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                  transitionDelay: `${(i + 1) * 60}ms`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: card.accentColor }}
                />
                <div className="mt-3">
                  <div
                    className={`inline-flex p-2.5 rounded-xl border mb-4 ${card.iconBg}`}
                  >
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <h3 className="font-serif text-white font-semibold mb-2 text-lg">
                    {card.title}
                  </h3>
                  <p className="font-sans text-white/55 text-sm leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
