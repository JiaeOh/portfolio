import { useEffect, useState } from "react";
import type { Project } from "../lib/content";
import { Media } from "./Media";

const ADVANCE_MS = 4500;

/**
 * Auto-advancing single-slide carousel for "in progress" teasers. Kept
 * visually lighter than a published ProjectCard (thin border, no shadow,
 * no hover lift) so it doesn't compete with Selected Works.
 */
export function ComingSoonCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (projects.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, ADVANCE_MS);
    return () => clearInterval(id);
  }, [projects.length]);

  if (projects.length === 0) return null;

  return (
    <div className="w-[1080px] max-w-full overflow-hidden rounded-2xl border border-[rgba(229,229,232,0.7)] bg-white/30">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex w-full shrink-0 items-start gap-6 p-8 max-lg:flex-col max-lg:p-6"
          >
            <div className="flex flex-1 flex-col gap-2 self-start">
              <p className="font-main text-sm text-[#4a5463]">
                In development
              </p>
              <p className="font-main text-lg font-semibold text-[color:var(--color-text-primary)]">
                {project.title}
              </p>
              <p className="font-main text-base leading-[1.6] text-[#4a5463]">
                {project.description}
              </p>
            </div>
            <Media
              src={project.cover}
              alt={project.title}
              className="h-[240px] flex-1 shrink-0 self-start rounded-xl max-lg:h-[200px] max-lg:w-full"
            />
          </div>
        ))}
      </div>

      {projects.length > 1 && (
        <div className="flex items-center justify-center gap-2 pb-5">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              aria-label={`Show ${project.title}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-black" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
