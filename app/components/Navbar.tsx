"use client";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

function useScrollNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight >= docHeight - 200;
      setVisible(scrollY > 80 && !nearBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
}

export default function Navbar() {
  const visible = useScrollNav();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "rgba(9,9,15,0.85)",
        borderColor: "rgba(216,180,254,0.08)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <span className="font-sans text-sm font-semibold text-white/80 tracking-wide">
            Ava Newton — Case File
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          {[
            { label: "Qualities", href: "#qualities" },
            { label: "Quotes", href: "#quotes" },
            { label: "Moments", href: "#moments" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-xs text-white/40 hover:text-white/80 tracking-widest uppercase transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#verdict"
          className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer"
          style={{
            background: "rgba(216,180,254,0.08)",
            border: "1px solid rgba(216,180,254,0.2)",
            color: "#d8b4fe",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "rgba(216,180,254,0.15)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(216,180,254,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "rgba(216,180,254,0.08)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(216,180,254,0.2)";
          }}
        >
          The Verdict
        </a>
      </div>
    </nav>
  );
}
