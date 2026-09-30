import SceneBlock from "@/components/Scene";
import { scenes } from "@/data/scenes";

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "#0A0A0A" }}
      className="min-h-screen w-full overflow-x-hidden"
    >
      {/* ═══════════════════════════════════════
          OPENING — cinematic statement
      ═══════════════════════════════════════ */}
      <section className="px-5 pt-24 pb-36 sm:px-8 sm:pt-32 sm:pb-48 lg:px-10 lg:pt-40 lg:pb-60">
        <div className="mx-auto max-w-[920px] text-center">

          {/* Small site label */}
          <p
            className="mb-8 text-[11px] font-medium uppercase tracking-[0.28em] sm:mb-10 sm:text-xs md:text-sm"
            style={{
              fontFamily: "var(--font-inter)",
              color: "#B08A5A",
            }}
          >
            Narcissism on Screen
          </p>

          {/* Cinematic statement */}
          <p
            className="
              text-[25px]
              leading-[1.42]
              tracking-[-0.02em]
              sm:text-[32px]
              sm:leading-[1.34]
              md:text-[40px]
              md:leading-[1.3]
              lg:text-[48px]
              lg:leading-[1.24]
            "
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 400,
              color: "#F1EFEA",
            }}
          >
            Every mirror tells a story. Some reflect reality, while others
            reflect a carefully constructed image. We invite you to step
            inside, look closer, and explore what lies beyond the reflection.
          </p>

          {/* Thin rule */}
          <div
            className="mx-auto mt-10 h-px w-12 sm:mt-12 sm:w-16"
            style={{ backgroundColor: "#292929" }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SCENES
      ═══════════════════════════════════════ */}
      <div className="flex w-full flex-col pt-16 sm:pt-24 lg:pt-32">
        {scenes.map((scene, i) => (
          <SceneBlock
            key={scene.number}
            scene={scene}
            isLast={i === scenes.length - 1}
          />
        ))}
      </div>
    </main>
  );
}
