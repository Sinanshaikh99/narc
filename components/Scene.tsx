"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Scene } from "@/data/scenes";
import ImageMarquee from "@/components/ImageCarousel";

type Props = {
  scene: Scene;
  isLast: boolean;
};

export default function SceneBlock({ scene, isLast }: Props) {
  const ref    = useRef<HTMLElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [muted,   setMuted]   = useState(true);

  /* Scroll reveal */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.04 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Autoplay when ≥15% visible */
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  /* Unmute on first user gesture */
  useEffect(() => {
    const unlock = () => {
      setMuted(false);
      document.removeEventListener("click",      unlock);
      document.removeEventListener("touchstart", unlock);
    };
    document.addEventListener("click",      unlock);
    document.addEventListener("touchstart", unlock);
    return () => {
      document.removeEventListener("click",      unlock);
      document.removeEventListener("touchstart", unlock);
    };
  }, []);

  useEffect(() => {
    if (vidRef.current) vidRef.current.muted = muted;
  }, [muted]);

  return (
    <>
      <article
        ref={ref}
        className={`reveal w-full text-center${visible ? " visible" : ""}`}
        style={{ paddingBottom: 96 }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10">

          {/* ── Scene header ── */}
          <div style={{ marginBottom: 32 }}>
            {/* Scene number */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#B08A5A",
                marginBottom: 28,
              }}
            >
              Scene {scene.number.padStart(2, "0")}
            </p>

            {/* Character name */}
            <h2
              className="text-[42px] leading-[1.08] sm:text-[58px] md:text-[72px] lg:text-[84px]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#F1EFEA",
                marginBottom: 12,
                textShadow: "0 2px 40px rgba(176,138,90,0.18)",
              }}
            >
              {scene.character}
            </h2>

            {/* Film + medium */}
            <p
              className="text-[16px] sm:text-[17px]"
              style={{ fontFamily: "var(--font-inter)", color: "#A4A19A" }}
            >
              {scene.film}
              <span style={{ color: "#55524D" }}> &mdash; {scene.medium}</span>
            </p>
          </div>

          {/* ── Traits ── */}
          <ul
            className="flex flex-wrap justify-center gap-2"
            style={{ marginBottom: 32 }}
          >
            {scene.traits.map((t) => (
              <li
                key={t}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#B08A5A",
                  border: "1px solid rgba(176,138,90,0.18)",
                  backgroundColor: "#111111",
                  borderRadius: 999,
                  padding: "4px 14px",
                }}
              >
                {t}
              </li>
            ))}
          </ul>

          {/* ── Rule ── */}
          <div style={{ height: 1, backgroundColor: "#1C1C1C", marginBottom: 32 }} />

          {/* ── Media ── */}
          <div
            className="mx-auto w-full"
            style={{ maxWidth: 1050, marginBottom: 32 }}
          >
            {scene.videoSrc ? (
              <div
                className={[
                  "w-full overflow-hidden",
                  scene.portrait
                    ? "relative flex aspect-video items-center justify-center"
                    : "aspect-video",
                ].join(" ")}
                style={{
                  borderRadius: 6,
                  border: "1px solid #1C1C1C",
                  backgroundColor: "#0A0A0A",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
                }}
              >
                <video
                  ref={vidRef}
                  src={scene.videoSrc}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                  className={scene.portrait ? "portrait-rotated" : "video-fill"}
                />
              </div>
            ) : scene.imagesSrc && scene.imagesSrc.length > 0 ? (
              <ImageMarquee
                images={scene.imagesSrc}
                alt={`${scene.character} — ${scene.film}`}
              />
            ) : scene.imageSrc ? (
              <div
                className="relative aspect-video w-full overflow-hidden"
                style={{
                  borderRadius: 6,
                  border: "1px solid #1C1C1C",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src={scene.imageSrc}
                  alt={`${scene.character} — ${scene.film}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="flex aspect-video w-full items-center justify-center"
                style={{
                  borderRadius: 6,
                  border: "1px solid #1C1C1C",
                  backgroundColor: "#111111",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#55524D",
                  }}
                >
                  No media available
                </span>
              </div>
            )}
          </div>

          {/* ── Rule ── */}
          <div style={{ height: 1, backgroundColor: "#1C1C1C", marginBottom: 48 }} />

          {/* ── Observations ── */}
          <div
            className="mx-auto flex flex-col"
            style={{ maxWidth: 600, gap: 56 }}
          >
            {scene.observations.map((obs, i) => (
              <div key={i} className="flex flex-col items-center">

                {/* Observation scene title */}
                <p
                  className="text-[22px] sm:text-[26px] md:text-[30px]"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 400,
                    color: "#F1EFEA",
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {obs.scene}
                </p>

                {/* Trait — italic accent */}
                <p
                  className="text-[17px] sm:text-[19px]"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#B08A5A",
                    marginBottom: 32,
                    lineHeight: 1.4,
                  }}
                >
                  {obs.trait}
                </p>

                {/* Bullet sections */}
                <div className="flex w-full flex-col" style={{ gap: 28 }}>
                  <BulletSection label="What happens"                           items={obs.whatHappens}   />
                  <BulletSection label="Why it may reflect narcissistic traits" items={obs.whyItReflects} />
                </div>

              </div>
            ))}
          </div>

        </div>
      </article>

      {/* Divider between scenes */}
      {!isLast && (
        <div
          className="mx-auto w-full"
          style={{
            maxWidth: 1100,
            padding: "0 20px",
            marginBottom: 80,
          }}
        >
          <div style={{ height: 1, backgroundColor: "#1C1C1C" }} />
        </div>
      )}
    </>
  );
}

/* ── Reusable bullet section ── */
function BulletSection({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col items-center" style={{ gap: 12 }}>
      {/* Section label */}
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#55524D",
        }}
      >
        {label}
      </p>

      {/* Bullets */}
      <ul className="w-full flex flex-col text-left" style={{ gap: 10 }}>
        {items.map((item, i) => (
          <li
            key={i}
            className="relative text-[15px] leading-[1.7] sm:text-[16px] sm:leading-[1.72]"
            style={{
              fontFamily: "var(--font-inter)",
              lineHeight: 1.72,
              color: "#A4A19A",
              paddingLeft: 18,
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 3,
                top: 2,
                fontSize: 12,
                lineHeight: 1.72,
                color: "#B08A5A",
                userSelect: "none",
              }}
            >
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
