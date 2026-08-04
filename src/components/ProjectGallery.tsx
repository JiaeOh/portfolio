import { useEffect, useState } from "react";
import type { GalleryItem } from "../lib/content";
import { Media } from "./Media";

/**
 * 1 large + 2 small, per HANDOFF.md — but the small slots keep the
 * hover-expand accordion behaviour it also specifies: hovering a slot
 * grows it and shrinks the others. No hover on touch, so it auto-rotates
 * instead.
 */
export function ProjectGallery({ gallery }: { gallery: GalleryItem[] }) {
  const [isTouch, setIsTouch] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const [autoIndex, setAutoIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const large = gallery.find((g) => g.size === "large") ?? gallery[0];
  const ordered = large ? [large, ...gallery.filter((g) => g !== large)] : [];

  useEffect(() => {
    const touchQuery = window.matchMedia("(hover: none)");
    const narrowQuery = window.matchMedia("(max-width: 1024px)");
    const update = () => {
      setIsTouch(touchQuery.matches);
      setIsNarrow(narrowQuery.matches);
    };
    update();
    touchQuery.addEventListener("change", update);
    narrowQuery.addEventListener("change", update);
    return () => {
      touchQuery.removeEventListener("change", update);
      narrowQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!isTouch || ordered.length < 2) return;
    const id = setInterval(() => {
      setAutoIndex((i) => (i + 1) % ordered.length);
    }, 3200);
    return () => clearInterval(id);
  }, [isTouch, ordered.length]);

  if (ordered.length === 0) return null;

  const activeIndex = isTouch ? autoIndex : (hoverIndex ?? 0);
  const activeShare = isNarrow ? 84 : 64;
  const restShare = (100 - activeShare) / Math.max(ordered.length - 1, 1);

  return (
    <div
      className="flex h-[320px] w-full gap-2 overflow-hidden rounded-xl max-lg:h-[240px]"
      onMouseLeave={() => !isTouch && setHoverIndex(null)}
    >
      {ordered.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={item.src ?? item.alt}
            onMouseEnter={() => !isTouch && setHoverIndex(i)}
            onFocus={() => !isTouch && setHoverIndex(i)}
            tabIndex={isTouch ? -1 : 0}
            style={{
              flexBasis: `${isActive ? activeShare : restShare}%`,
              transitionProperty: "flex-basis",
              transitionDuration: "700ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="relative h-full shrink overflow-hidden rounded-xl"
          >
            <Media
              src={item.src}
              fallbackSrc={item.poster}
              alt={item.alt}
              poster={item.poster}
              pausedUntilHover={i !== 0}
              className="size-full"
            />
          </div>
        );
      })}
    </div>
  );
}
