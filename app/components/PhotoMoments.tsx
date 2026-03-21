"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/photos/ava-rockettes.jpeg",
    caption: "Rockettes at Radio City Music Hall",
    sub: "When she made it backstage",
    objPos: "center 20%",
    span: "col-span-2 row-span-1",
    height: "h-72",
  },
  {
    src: "/photos/ava-dance.jpeg",
    caption: "Dance Competition Ready",
    sub: "Spotlight costume. Panda Express. Peak Ava.",
    objPos: "center 20%",
    span: "col-span-1 row-span-2",
    height: "h-full min-h-[400px]",
  },
  {
    src: "/photos/ava-baby-caleb.jpeg",
    caption: "The Origin Story",
    sub: "Ava and Caleb, night one",
    objPos: "center center",
    span: "col-span-1 row-span-1",
    height: "h-64",
  },
  {
    src: "/photos/ava-lollipop.jpeg",
    caption: "Maximum Chaos, Minimum Age",
    sub: "She was always this much",
    objPos: "center 30%",
    span: "col-span-1 row-span-1",
    height: "h-64",
  },
  {
    src: "/photos/ava-caleb-selfie.jpeg",
    caption: "The Dynamic Duo",
    sub: "Newton siblings, undefeated",
    objPos: "center 30%",
    span: "col-span-2 row-span-1",
    height: "h-72",
  },
  {
    src: "/photos/ava-makeup.jpeg",
    caption: "Theatrical Era",
    sub: "Full glam, maximum commitment",
    objPos: "center 20%",
    span: "col-span-1 row-span-1",
    height: "h-64",
  },
];

export default function PhotoMoments() {
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
      id="moments"
      ref={ref}
      className="section-divider py-28 px-6 md:px-12"
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
            Photo Evidence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            The moments on record
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 gap-3 auto-rows-auto">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative rounded-2xl overflow-hidden ${photo.span} ${photo.height}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "scale(1) translateY(0)"
                  : "scale(0.97) translateY(12px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: `${i * 80}ms`,
                border: "1px solid rgba(216,180,254,0.1)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                style={{ objectPosition: photo.objPos }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(9,9,15,0.85) 0%, rgba(9,9,15,0.2) 40%, transparent 70%)",
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-sans text-white font-semibold text-sm leading-tight">
                  {photo.caption}
                </p>
                <p className="font-sans text-white/50 text-xs mt-0.5">
                  {photo.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
