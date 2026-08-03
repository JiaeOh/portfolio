import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import homeIcon from "../assets/icons/home-icon.svg";
import { MarqueeText } from "./MarqueeText";

type Section = { label: string; top: number; bottom: number };

function getScrollMax() {
  return document.documentElement.scrollHeight - window.innerHeight;
}

export function NavBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const [scrollFraction, setScrollFraction] = useState(0);
  const [hoverFraction, setHoverFraction] = useState<number | null>(null);
  const [sections, setSections] = useState<Section[]>([]);

  const computeSections = useCallback(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-section]"),
    );
    const tops = els.map((el) => el.getBoundingClientRect().top + window.scrollY);
    const docBottom = document.documentElement.scrollHeight;
    setSections(
      els.map((el, i) => ({
        label: el.getAttribute("data-nav-label") ?? "",
        top: tops[i],
        bottom: i < els.length - 1 ? tops[i + 1] : docBottom,
      })),
    );
  }, []);

  useEffect(() => {
    computeSections();
    window.addEventListener("resize", computeSections);
    window.addEventListener("load", computeSections);
    const settleTimer = setTimeout(computeSections, 600);
    return () => {
      window.removeEventListener("resize", computeSections);
      window.removeEventListener("load", computeSections);
      clearTimeout(settleTimer);
    };
  }, [computeSections]);

  useEffect(() => {
    const onScroll = () => {
      const max = getScrollMax();
      setScrollFraction(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labelForFraction = useCallback(
    (frac: number) => {
      if (sections.length === 0) return "Home";
      const y = frac * getScrollMax() + window.innerHeight / 2;
      return (
        sections.find((s) => y >= s.top && y < s.bottom)?.label ??
        sections[sections.length - 1].label
      );
    },
    [sections],
  );

  const activeLabel = labelForFraction(scrollFraction);
  const previewLabel = hoverFraction != null ? labelForFraction(hoverFraction) : null;

  const fractionFromEvent = (e: MouseEvent) => {
    const rect = barRef.current!.getBoundingClientRect();
    return Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  };

  const seekTo = (frac: number) => {
    window.scrollTo({ top: frac * getScrollMax(), behavior: "smooth" });
  };

  const fillPercent = scrollFraction * 100;
  const tooltipLeft = Math.min(92, Math.max(8, (hoverFraction ?? 0) * 100));

  return (
    <div className="fixed top-6 left-1/2 z-50 flex h-12 -translate-x-1/2 items-center gap-2">
      <button
        type="button"
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Home"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/35 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0px_4px_16px_0px_rgba(0,0,0,0.1)]"
      >
        <img src={homeIcon} alt="" className="size-5" />
      </button>

      <div className="relative h-12 w-[260px] lg:w-[440px]">
        <div
          ref={barRef}
          role="slider"
          aria-label="Page scroll position"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(fillPercent)}
          tabIndex={0}
          onMouseMove={(e) => setHoverFraction(fractionFromEvent(e))}
          onMouseLeave={() => setHoverFraction(null)}
          onClick={(e) => seekTo(fractionFromEvent(e))}
          className="relative h-12 w-full cursor-pointer overflow-hidden rounded-full border border-white/15 bg-black/35 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0px_4px_16px_0px_rgba(0,0,0,0.1)]"
        >
          <div
            className="absolute inset-y-0 left-0 border-r border-white/20 bg-[color:var(--color-orange)]/90 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)]"
            style={{ width: `${fillPercent}%` }}
          />

          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${fillPercent}%)` }}
          >
            <MarqueeText text={activeLabel} className="text-white" />
          </div>
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - fillPercent}% 0 0)` }}
          >
            <MarqueeText text={activeLabel} className="text-black" />
          </div>
        </div>

        {previewLabel && (
          <div
            className="pointer-events-none absolute top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[rgba(1,1,1,0.9)] px-3 py-1.5 font-main text-xs text-white"
            style={{ left: `${tooltipLeft}%` }}
          >
            {previewLabel}
          </div>
        )}
      </div>
    </div>
  );
}
