import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { ComingSoonCarousel } from "../components/ComingSoonCarousel";
import { SectionHeading } from "../components/SectionHeading";
import { projects, site } from "../lib/content";

const publishedProjects = projects.filter((p) => p.badge !== "In progress");
const comingSoonProjects = projects.filter((p) => p.badge === "In progress");

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="white" />
      <path
        d="M7.5 9.5H4.5V19.5H7.5V9.5Z M6 4.5C7 4.5 7.8 5.3 7.8 6.3C7.8 7.3 7 8.1 6 8.1C5 8.1 4.2 7.3 4.2 6.3C4.2 5.3 5 4.5 6 4.5Z M10 9.5H12.9V10.9H12.9C13.3 10.1 14.4 9.2 16 9.2C19.2 9.2 19.8 11.3 19.8 14V19.5H16.8V14.6C16.8 13.4 16.8 11.8 15 11.8C13.2 11.8 13 13.1 13 14.5V19.5H10V9.5Z"
        fill="black"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M4 6.5L12 13L20 6.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M8 13H16M8 17H13"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />

      <div
        id="work"
        className="flex w-full flex-col items-center px-20 pb-24 max-lg:px-6"
      >
        <div className="mb-8 w-[1080px] max-w-full">
          <SectionHeading title={site.workSectionHeading} />
        </div>
        <div className="flex w-full flex-col items-center gap-16">
          {publishedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {comingSoonProjects.length > 0 && (
        <div className="mx-auto flex w-full flex-col items-center gap-6 px-20 pb-24 max-lg:px-6">
          <div className="w-[1080px] max-w-full">
            <SectionHeading
              title="Coming Soon"
              subtitle="Self-initiated project I'm working on next"
            />
          </div>
          <ComingSoonCarousel projects={comingSoonProjects} />
        </div>
      )}

      <footer
        id="about"
        data-nav-section
        data-nav-label="About"
        className="flex w-full flex-col items-center border-t border-[#e5e5e8] px-20 py-16 max-lg:px-6"
      >
        <div className="flex w-[1080px] max-w-full flex-col gap-6">
          <h2 className="font-main text-2xl font-semibold text-[color:var(--color-text-primary)]">
            {site.about.heading}
          </h2>
          {site.about.body.slice(0, 2).map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[720px] font-main text-base leading-[1.7] text-[#4a5463]"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.contact.linkedin || undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!site.contact.linkedin}
              className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 font-main text-sm text-white transition-opacity hover:opacity-80 aria-disabled:pointer-events-none aria-disabled:opacity-40"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 font-main text-sm text-white transition-opacity hover:opacity-80"
            >
              <MailIcon />
              {site.contact.email}
            </a>
            <Link
              to="/cv"
              className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 font-main text-sm text-white transition-opacity hover:opacity-80"
            >
              <FileTextIcon />
              Read CV
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
