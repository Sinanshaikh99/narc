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

          {/* Main heading */}
          <h1
            className="mb-10 text-[34px] font-semibold uppercase leading-[0.98] tracking-[0.08em] sm:mb-12 sm:text-[50px] md:text-[68px] lg:text-[86px]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 500,
              color: "#B08A5A",
            }}
          >
            Narcissism on Screen
          </h1>

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

      <aside
        aria-label="Disclaimer"
        className="w-full overflow-hidden border-y py-5 sm:py-6"
        style={{ borderColor: "#292929", backgroundColor: "#111111" }}
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              aria-hidden={copy === 1}
              className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs md:text-sm"
              style={{ color: "#B08A5A", fontFamily: "var(--font-inter)" }}
            >
              Disclaimer: The characters featured on this website are fictional, and the observations presented are intended solely for educational and psychological discussion. They have not been clinically assessed or diagnosed with Narcissistic Personality Disorder (NPD). The traits discussed are based on their portrayed behaviors and are used to help understand psychological concepts, not to label or diagnose individuals.
            </p>
          ))}
        </div>
      </aside>

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
