import { useEffect, useRef, useState } from "react";

export function MarqueeText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [overflowing, setOverflowing] = useState(false);
  const [duration, setDuration] = useState(8);

  useEffect(() => {
    const check = () => {
      const container = containerRef.current;
      const textEl = textRef.current;
      if (!container || !textEl) return;
      // account for the 16px horizontal padding on each side of the centered label
      const over = textEl.scrollWidth + 32 > container.clientWidth;
      setOverflowing(over);
      if (over) {
        setDuration(Math.max(6, textEl.scrollWidth / 45));
      }
    };
    check();
    document.fonts?.ready.then(check);
    const settleTimer = setTimeout(check, 500);
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("resize", check);
      clearTimeout(settleTimer);
    };
  }, [text]);

  return (
    <div ref={containerRef} className="h-full w-full overflow-hidden">
      {!overflowing ? (
        <div className="flex h-full w-full items-center justify-center px-4">
          <span
            ref={textRef}
            className={`whitespace-nowrap font-main text-[16px] tracking-[-0.32px] ${className ?? ""}`}
          >
            {text}
          </span>
        </div>
      ) : (
        <div
          className="flex h-full items-center gap-12 pl-4 whitespace-nowrap"
          style={{
            width: "max-content",
            animation: `marquee ${duration}s linear infinite`,
          }}
        >
          <span
            ref={textRef}
            className={`font-main text-[16px] tracking-[-0.32px] ${className ?? ""}`}
          >
            {text}
          </span>
          <span
            aria-hidden="true"
            className={`font-main text-[16px] tracking-[-0.32px] ${className ?? ""}`}
          >
            {text}
          </span>
        </div>
      )}
    </div>
  );
}
