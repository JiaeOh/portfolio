import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import homeIcon from "../assets/icons/nav-home-icon.svg";
import { MarqueeText } from "./MarqueeText";
import { getProjectBySlug } from "../lib/content";

type Section = { label: string; top: number; bottom: number };

function getScrollMax() {
  return document.documentElement.scrollHeight - window.innerHeight;
}

function routeFallbackLabel(pathname: string) {
  if (pathname === "/about") return "About";
  const workMatch = pathname.match(/^\/work\/(.+)$/);
  if (workMatch) {
    const project = getProjectBySlug(workMatch[1]);
    if (project) return `${project.category} — ${project.navLabel}`;
  }
  return "Home";
}

export function NavBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollFraction, setScrollFraction] = useState(0);
  const [hoverFraction, setHoverFraction] = useState<number | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Touch devices fire a synthetic mousemove on tap but never mouseleave, so
  // the preview tooltip would otherwise stay stuck open — dismiss it ourselves.
  useEffect(() => {
    if (!isTouch || hoverFraction == null) return;
    const timer = setTimeout(() => setHoverFraction(null), 1200);
    return () => clearTimeout(timer);
  }, [isTouch, hoverFraction]);

  const computeSections = useCallback(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-section]"),
    );
    const tops = els.map(
      (el) => el.getBoundingClientRect().top + window.scrollY,
    );
    const docBottom = document.documentElement.scrollHeight;
    setSections(
      els.map((el, i) => ({
        label: el.getAttribute("data-nav-label") ?? "",
        top: tops[i],
        bottom: i < els.length - 1 ? tops[i + 1] : docBottom,
      })),
    );
  }, []);

  // Recompute on route change too — different pages have different (or no) sections.
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
  }, [computeSections, location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = getScrollMax();
      setScrollFraction(
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const labelForFraction = useCallback(
    (frac: number) => {
      if (sections.length === 0) return routeFallbackLabel(location.pathname);
      const y = frac * getScrollMax() + window.innerHeight / 2;
      return (
        sections.find((s) => y >= s.top && y < s.bottom)?.label ??
        sections[sections.length - 1].label
      );
    },
    [sections, location.pathname],
  );

  const activeLabel = labelForFraction(scrollFraction);
  const previewLabel =
    hoverFraction != null ? labelForFraction(hoverFraction) : null;

  const fractionFromEvent = (e: MouseEvent) => {
    const rect = barRef.current!.getBoundingClientRect();
    return Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  };

  const seekTo = (frac: number) => {
    window.scrollTo({ top: frac * getScrollMax(), behavior: "smooth" });
  };

  const goHome = () => {
    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const fillPercent = scrollFraction * 100;
  const tooltipLeft = Math.min(92, Math.max(8, (hoverFraction ?? 0) * 100));

  return (
    <div className="fixed top-6 left-1/2 z-50 flex h-12 -translate-x-1/2 items-center gap-2">
      <button
        type="button"
        onClick={goHome}
        aria-label="Home"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 bg-[rgba(185,185,185,0.1)] shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-[3px]"
      >
        <img src={homeIcon} alt="" className="size-12" />
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
          className="relative h-12 w-full cursor-pointer overflow-hidden rounded-full border border-white/40 bg-[rgba(185,185,185,0.1)] shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-[3px]"
        >
          <div
            className="absolute inset-y-0 left-0 bg-[rgba(255,255,255,0.7)]"
            style={{ width: `${fillPercent}%` }}
          />

          <div className="absolute inset-0">
            <MarqueeText text={activeLabel} className="text-black" />
          </div>
        </div>

        {previewLabel && (
          <div
            className="pointer-events-none absolute top-full mt-2 -translate-x-1/2 rounded-lg bg-[rgba(1,1,1,0.9)] px-3 py-1.5 font-main text-xs whitespace-nowrap text-white"
            style={{ left: `${tooltipLeft}%` }}
          >
            {previewLabel}
          </div>
        )}
      </div>
    </div>
  );
}
