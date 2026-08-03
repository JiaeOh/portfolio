import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { site } from "../lib/content";

function RevealWord({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const color = useTransform(
    progress,
    range,
    ["rgba(0,0,0,0.2)", "rgba(0,0,0,1)"],
  );
  return (
    <motion.span style={{ color }} className="inline">
      {children}{" "}
    </motion.span>
  );
}

/**
 * The Design Goal body copy pins in place while the user scrolls through
 * it, filling word by word from faded to full black. Once it's fully
 * filled, the container's extra height runs out and normal scroll
 * continues — the classic sticky-reveal pattern.
 */
export function DesignGoalReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bodyText = [
    site.designGoal.leadBold,
    site.designGoal.leadFaded,
    site.designGoal.closingFaded,
  ].join(" ");
  const words = bodyText.split(" ");

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center gap-6 px-20 max-lg:px-6">
        <p className="w-full max-w-[800px] font-main text-[24px] font-bold tracking-[-0.48px] text-[color:var(--color-orange-text)]">
          {site.designGoal.label}
        </p>
        <p className="w-full max-w-[800px] font-goal text-[32px] font-bold tracking-[-0.32px] text-[color:var(--color-text-primary)]">
          {site.designGoal.heading}
        </p>
        <p className="w-full max-w-[800px] font-goal text-[24px] font-medium tracking-[-0.48px]">
          {words.map((word, i) => (
            <RevealWord
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {word}
            </RevealWord>
          ))}
        </p>
      </div>
    </div>
  );
}
