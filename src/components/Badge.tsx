import type { Badge as BadgeType } from "../lib/content";

const styles: Record<BadgeType, string> = {
  Shipped: "bg-black text-white",
  "Pre-launch": "bg-[color:var(--color-orange)] text-black",
  Concept: "border border-gray-400 text-gray-600",
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
