"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, Music, Heart, Star } from "lucide-react";

const BIRTH_YEAR = 2009;
const yearsAsSister = new Date().getFullYear() - BIRTH_YEAR;

const roles = [
  "Dancer",
  "Faith Leader",
  "Chaos Agent",
  "Creative Director",
  "Girl Scout",
  "AP Scholar",
  "Aerial Gymnast",
  "Best Sister",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#09090f" }}
    >
      {/* Background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(216,180,254,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 70% 60%, rgba(244,114,182,0.06) 0%, transparent 60%)",
        }}
      />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(216,180,254,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-purple-400/70 text-xs font-sans tracking-[0.35em] uppercase font-semibold">
                Subject Profile — Certified Iconic
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-4">
              Ava <span className="rose-gradient">Grace</span> Newton
            </h1>

            {/* Role rotator */}
            <div className="flex items-center gap-3 mb-6 h-10">
              <div
                className="h-px flex-1 max-w-[40px]"
                style={{ background: "rgba(216,180,254,0.3)" }}
              />
              <span
                key={roleIdx}
                className="font-sans text-lg font-semibold"
                style={{
                  color: "#c084fc",
                  animation: "fadeSlideIn 0.4s ease",
                }}
              >
                {roles[roleIdx]}
              </span>
            </div>

            <p className="font-sans text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Peer reviewed by {yearsAsSister} years of firsthand observation.
              This is not a hype post. This is a documented, evidence-based case
              that Ava Newton is built different.
            </p>

            {/* Floating stat cards */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: Music,
                  label: "Years Dancing",
                  value: `${new Date().getFullYear() - 2016}+`,
                },
                { icon: Heart, label: "DBQ Score", value: "7/7" },
                {
                  icon: Star,
                  label: "Years as Sister",
                  value: `${yearsAsSister}`,
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                  style={{
                    background: "rgba(216,180,254,0.06)",
                    border: "1px solid rgba(216,180,254,0.15)",
                  }}
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                  <div>
                    <p className="font-sans text-white font-bold text-sm leading-none">
                      {value}
                    </p>
                    <p className="font-sans text-white/40 text-xs mt-0.5">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div
            className="relative flex justify-center lg:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
            }}
          >
            {/* Glow behind photo */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(192,132,252,0.2) 0%, transparent 70%)",
                transform: "scale(1.1)",
              }}
            />

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: "380px",
                height: "500px",
                border: "1px solid rgba(216,180,254,0.2)",
                boxShadow:
                  "0 0 80px rgba(192,132,252,0.15), 0 32px 64px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src="/photos/ava-headshot.jpeg"
                alt="Ava Newton"
                fill
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
              />
              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40"
                style={{
                  background:
                    "linear-gradient(to top, rgba(9,9,15,0.9) 0%, transparent 100%)",
                }}
              />
              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-white font-bold text-xl leading-tight">
                  Ava Grace Newton
                </p>
                <p className="font-sans text-purple-300/70 text-xs tracking-widest uppercase mt-1">
                  SMHS · San Marino, CA
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-6 right-0 md:right-6 px-3 py-2 rounded-xl"
              style={{
                background: "rgba(244,114,182,0.1)",
                border: "1px solid rgba(244,114,182,0.25)",
              }}
            >
              <p className="font-sans text-pink-300 text-xs font-semibold tracking-wide">
                Got her aerial ✓
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
