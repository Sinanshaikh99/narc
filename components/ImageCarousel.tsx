"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageMarquee({ images, alt }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Pause on hover */
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    const pause  = () => { t.style.animationPlayState = "paused"; };
    const resume = () => { t.style.animationPlayState = "running"; };
    t.addEventListener("mouseenter", pause);
    t.addEventListener("mouseleave", resume);
    return () => {
      t.removeEventListener("mouseenter", pause);
      t.removeEventListener("mouseleave", resume);
    };
  }, []);

  /* Duplicate for seamless loop */
  const items = [...images, ...images];

  return (
    <div
      role="img"
      aria-label={alt}
      className="relative w-full overflow-hidden"
      style={{
        height: 360,
        borderRadius: 8,
        border: "1px solid #292929",
        backgroundColor: "#0A0A0A",
        boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
      }}
    >
      {/* Left fade — blends into page bg, NO white */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10"
        style={{
          width: 80,
          background: "linear-gradient(to right, #0A0A0A, transparent)",
        }}
      />
      {/* Right fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10"
        style={{
          width: 80,
          background: "linear-gradient(to left, #0A0A0A, transparent)",
        }}
      />

      {/* Scrolling track */}
      <div ref={trackRef} className="marquee-track">
        {items.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden"
            style={{
              width: 310,
              height: 310,
              position: "relative",
              borderRadius: 6,
            }}
          >
            <Image
              src={src}
              alt={`${alt} — image ${(i % images.length) + 1}`}
              fill
              className="object-cover"
              sizes="310px"
              priority={i < images.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
