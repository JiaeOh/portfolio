import { useEffect, useState } from "react";

export type AccordionMedia = {
  src?: string;
  type?: "image" | "video";
  alt?: string;
  badge?: string;
};

export function AccordionStack({
  items,
  className,
  autoplayInterval = 3200,
}: {
  items: AccordionMedia[];
  className?: string;
  autoplayInterval?: number;
}) {
  const [isTouch, setIsTouch] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const [autoIndex, setAutoIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // No hover on touch devices, so the accordion auto-advances instead.
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
    if (!isTouch || items.length < 2) return;
    const id = setInterval(() => {
      setAutoIndex((i) => (i + 1) % items.length);
    }, autoplayInterval);
    return () => clearInterval(id);
  }, [isTouch, items.length, autoplayInterval]);

  const activeIndex = isTouch ? autoIndex : (hoverIndex ?? 0);
  const activeShare = isNarrow ? 90 : 64;
  const restShare = (100 - activeShare) / Math.max(items.length - 1, 1);

  return (
    <div
      className={`flex w-full gap-2 overflow-hidden rounded-3xl ${className ?? ""}`}
      onMouseLeave={() => !isTouch && setHoverIndex(null)}
    >
      {items.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={item.src ?? i}
            onMouseEnter={() => !isTouch && setHoverIndex(i)}
            onFocus={() => !isTouch && setHoverIndex(i)}
            tabIndex={isTouch ? -1 : 0}
            style={{
              flexBasis: `${isActive ? activeShare : restShare}%`,
              transitionProperty: "flex-basis",
              transitionDuration: "700ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="relative h-[480px] shrink overflow-hidden rounded-2xl bg-black/45 max-lg:h-[380px]"
          >
            {item.type === "video" && item.src ? (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 size-full object-cover"
              />
            ) : item.src ? (
              <img
                src={item.src}
                alt={item.alt ?? ""}
                className="absolute inset-0 size-full object-cover"
              />
            ) : null}
            {item.badge && isActive && (
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1">
                <span className="size-1.5 rounded-full bg-red-500 opacity-95" />
                <span className="font-main text-xs text-white">
                  {item.badge}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
