import { Link } from "react-router-dom";
import type { Project } from "../lib/content";
import { Badge } from "./Badge";
import { ProjectGallery } from "./ProjectGallery";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      data-nav-section
      data-nav-label={`${project.category} — ${project.navLabel}`}
      className="w-[1080px] max-w-full rounded-3xl border border-[rgba(229,229,232,0.7)] bg-white/60 p-8 shadow-[0px_7px_24px_4px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0px_28px_56px_-12px_rgba(0,0,0,0.14)] max-lg:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-main text-sm text-gray-600">
          {project.category} • {project.platform} • {project.year}
        </p>
        <Link
          to={`/work/${project.slug}`}
          aria-label={`Read the full ${project.title} case study`}
          className="shrink-0 text-gray-600 transition-colors hover:text-black"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h3 className="font-main text-[28px] font-semibold leading-[1.2] text-[color:var(--color-text-primary)]">
          {project.title}
        </h3>
        <Badge badge={project.badge} />
      </div>

      <p className="mt-3 max-w-[720px] font-main text-base leading-[1.6] text-[#4a5463]">
        {project.description}
      </p>

      {project.gallery.length > 0 && (
        <div className="mt-6">
          <ProjectGallery gallery={project.gallery} />
        </div>
      )}

      <div className="mt-8 grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        <div>
          <p className="font-main text-sm text-[color:var(--color-blue)]">
            Role &amp; Timeline
          </p>
          <p className="pt-2 font-main text-base text-black">
            {project.roleTitle}
          </p>
          <p className="pt-1 font-main text-[15px] text-[#4a5463]">
            {project.timeline}
          </p>
        </div>

        <div>
          <p className="font-main text-sm text-[color:var(--color-blue)]">
            Key Challenges
          </p>
          <ul className="pt-2 space-y-1.5">
            {project.keyChallenges.map((item) => (
              <li
                key={item}
                className="font-main text-[16px] leading-snug text-[#4a5463]"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes carries the site — render as the loudest text on the card, per STRATEGY.md */}
        <div>
          <p className="font-main text-sm text-[color:var(--color-blue)]">
            Outcomes
          </p>
          <ul className="pt-2 space-y-1.5">
            {project.outcomes.map((item) => (
              <li
                key={item}
                className="font-main text-[16px] leading-snug font-semibold text-[color:var(--color-text-primary)]"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[color:var(--color-blue-15)] px-3 py-1.5 font-main text-sm text-[#364054]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
