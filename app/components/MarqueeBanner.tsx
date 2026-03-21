"use client";

const tags = [
  "Millennium Dance Complex",
  "Ballet",
  "Jazz",
  "Hip Hop",
  "Got Her Aerial",
  "ACTS / CAB Creative Director",
  "Girl Scout",
  "DBQ 7/7",
  "Laufey Stan",
  "Sigma Hall",
  "Marvel Choreographer",
  "Faith First",
  "Chaos Mode Unlocked",
  "SMHS Dancer",
  "AP World",
  "Radio City Music Hall",
  "Temu Recruit",
  "Acetone Researcher",
];

export default function MarqueeBanner() {
  const doubled = [...tags, ...tags];

  return (
    <div
      className="py-5 overflow-hidden relative"
      style={{
        background: "rgba(216,180,254,0.04)",
        borderTop: "1px solid rgba(216,180,254,0.1)",
        borderBottom: "1px solid rgba(216,180,254,0.1)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #09090f 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #09090f 0%, transparent 100%)",
        }}
      />

      <div
        className="flex gap-6 whitespace-nowrap"
        style={{
          animation: "marquee 40s linear infinite",
        }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "rgba(216,180,254,0.55)" }}
          >
            <span
              className="inline-block w-1 h-1 rounded-full"
              style={{ background: "rgba(244,114,182,0.6)" }}
            />
            {tag}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
