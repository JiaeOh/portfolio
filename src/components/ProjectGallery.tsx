import type { GalleryItem } from "../lib/content";
import { Media } from "./Media";

export function ProjectGallery({ gallery }: { gallery: GalleryItem[] }) {
  if (gallery.length === 0) return null;

  const large = gallery.find((g) => g.size === "large") ?? gallery[0];
  const small = gallery.filter((g) => g !== large).slice(0, 2);

  return (
    <div className="grid h-[320px] grid-cols-[2fr_1fr] gap-2 max-lg:h-auto max-lg:grid-cols-2">
      <Media
        src={large.src}
        alt={large.alt}
        poster={large.poster}
        className="size-full rounded-xl max-lg:aspect-square max-lg:h-auto"
      />
      <div className="flex flex-col gap-2 max-lg:col-span-1">
        {small.map((item) => (
          <Media
            key={item.src ?? item.alt}
            src={item.src}
            alt={item.alt}
            poster={item.poster}
            pausedUntilHover
            className="min-h-0 flex-1 rounded-xl max-lg:aspect-square max-lg:flex-none"
          />
        ))}
      </div>
    </div>
  );
}
