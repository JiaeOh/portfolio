import { useLayoutEffect, useRef, useState } from "react";
import { site } from "../lib/content";
import { DesignGoalReveal } from "./DesignGoalReveal";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const iRef = useRef<HTMLSpanElement>(null);
  const [glowOrigin, setGlowOrigin] = useState<{ x: number; y: number } | null>(
    null,
  );

  useLayoutEffect(() => {
    function measure() {
      if (!heroRef.current || !iRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      const iRect = iRef.current.getBoundingClientRect();
      setGlowOrigin({
        x: iRect.left - heroRect.left + iRect.width / 2,
        y: iRect.top - heroRect.top,
      });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const name = site.name; // "Jiae Oh" — the glow anchors to the dot of the "i"

  return (
    <div
      id="home"
      data-nav-section
      data-nav-label="Home"
      ref={heroRef}
      className="relative flex w-full flex-col items-start gap-16 px-20 pt-40 pb-20 max-lg:gap-10 max-lg:px-6 max-lg:pt-24 max-lg:pb-8"
    >
      {glowOrigin && (
        <div
          className="pointer-events-none absolute -z-10"
          style={{
            left: glowOrigin.x,
            top: glowOrigin.y,
            width: 1100,
            height: 1100,
            transform: "translate(-50%, -60%)",
            backgroundImage:
              "conic-gradient(from 150deg, rgba(255,255,255,0.51) 0%, rgba(238,243,250,0.2) 4.37%, rgba(111,169,255,0.3) 12.02%, rgba(206,225,252,0.2) 22.6%, rgba(249,249,249,0.2) 45.24%, rgba(255,255,255,0.51) 100%)",
          }}
        />
      )}

      <div className="flex flex-col items-start gap-6">
        <h1 className="font-display text-[96px] font-bold leading-none text-[color:var(--color-text-primary)] max-lg:text-[56px]">
          {name.charAt(0)}
          <span ref={iRef}>{name.charAt(1)}</span>
          {name.slice(2)}
        </h1>
        <p className="font-main text-[20px] tracking-[-0.4px] text-[#4a5463]">
          Pronounced as{" "}
          <span className="text-[color:var(--color-pronoun-blue)]">
            {site.pronunciation}
          </span>
        </p>
      </div>

      <p className="max-w-[640px] font-main text-[16px] leading-[1.7] text-[#4a5463]">
        {site.intro}{" "}
        <span className="font-bold">{site.introHighlight}</span>
      </p>

      <DesignGoalReveal />
    </div>
  );
}
