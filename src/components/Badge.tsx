import type { Badge as BadgeType } from "../lib/content";

const styles: Record<BadgeType, string> = {
  Shipped: "bg-black text-white",
  // Figma specifies white text here, but it's 2.15:1 against this
  // translucent orange — fails WCAG AA badly. Black text (9.75:1) instead.
  "Pre-launch": "bg-[rgba(247,113,17,0.7)] text-black",
  Concept: "border border-[#9999a1] text-[#4a5463]",
  "In progress": "border border-gray-300 text-gray-600",
};

export function Badge({ badge }: { badge: BadgeType }) {
  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 font-main text-xs font-medium whitespace-nowrap ${styles[badge]}`}
    >
      {badge}
    </span>
  );
}
