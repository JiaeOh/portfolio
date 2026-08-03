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

function RevealParagraph({
  words,
  startIndex,
  totalWords,
  progress,
  breakAfterIndex,
  className,
}: {
  words: string[];
  startIndex: number;
  totalWords: number;
  progress: MotionValue<number>;
  breakAfterIndex?: number;
  className: string;
}) {
  return (
    <p className={className}>
      {words.map((word, i) => {
        const absoluteIndex = startIndex + i;
        return (
          <span key={absoluteIndex}>
            <RevealWord
              progress={progress}
              range={[
                absoluteIndex / totalWords,
                (absoluteIndex + 1) / totalWords,
              ]}
            >
              {word}
            </RevealWord>
            {absoluteIndex === breakAfterIndex && <br />}
          </span>
        );
      })}
    </p>
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

  const headingWords = site.designGoal.heading.split(" ");
  const leadWords = `${site.designGoal.leadBold} ${site.designGoal.leadFaded}`.split(
    " ",
  );
  const closingWords = site.designGoal.closingFaded.split(" ");
  const words = [...headingWords, ...leadWords, ...closingWords];

  // Force each sentence in the heading onto its own line rather than
  // relying on natural wrap, which can strand a lone word like "Yet" at
  // the end of the first line.
  const headingBreakIndex = headingWords.findIndex(
    (w, i) => w.endsWith(".") && i < headingWords.length - 1,
  );

  const leadStart = headingWords.length;
  const closingStart = leadStart + leadWords.length;

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center gap-6 px-20 max-lg:px-6">
        <p className="w-full max-w-[800px] font-main text-[24px] font-bold tracking-[-0.48px] text-[color:var(--color-orange-text)]">
          {site.designGoal.label}
        </p>
        <RevealParagraph
          words={headingWords}
          startIndex={0}
          totalWords={words.length}
          progress={scrollYProgress}
          breakAfterIndex={headingBreakIndex === -1 ? undefined : headingBreakIndex}
          className="w-full max-w-[800px] font-goal text-[32px] font-bold tracking-[-0.32px]"
        />
        <div className="flex w-full max-w-[800px] flex-col gap-4">
          <RevealParagraph
            words={leadWords}
            startIndex={leadStart}
            totalWords={words.length}
            progress={scrollYProgress}
            className="font-goal text-[24px] font-medium tracking-[-0.48px]"
          />
          <RevealParagraph
            words={closingWords}
            startIndex={closingStart}
            totalWords={words.length}
            progress={scrollYProgress}
            className="font-goal text-[24px] font-medium tracking-[-0.48px]"
          />
        </div>
      </div>
    </div>
  );
}
