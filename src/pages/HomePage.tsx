import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { Media } from "../components/Media";
import { projects, site } from "../lib/content";

export function HomePage() {
  return (
    <>
      <Hero />

      <div
        id="work"
        className="flex w-[1280px] max-w-full flex-col items-center gap-16 px-6 pb-24"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div
        id="selected-work"
        data-nav-section
        data-nav-label={site.selectedWork.heading}
        className="mx-auto flex w-[1280px] max-w-full flex-col gap-8 px-6 pb-24"
      >
        <div>
          <h2 className="font-main text-2xl font-semibold text-[color:var(--color-text-primary)]">
            {site.selectedWork.heading}
          </h2>
          <p className="mt-1 font-main text-sm text-gray-600">
            {site.selectedWork.note}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          {site.selectedWork.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <Media
                src={item.image}
                alt={item.title}
                className="h-[200px] w-full rounded-2xl"
              />
              <h3 className="font-main text-lg font-semibold text-[color:var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="font-main text-sm text-gray-600">{item.meta}</p>
              <p className="font-main text-base leading-[1.6] text-[#4a5565]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer
        id="about"
        data-nav-section
        data-nav-label="About"
        className="mx-auto flex w-[1280px] max-w-full flex-col gap-6 border-t border-gray-200 px-6 py-16"
      >
        <h2 className="font-main text-2xl font-semibold text-[color:var(--color-text-primary)]">
          {site.about.heading}
        </h2>
        {site.about.body.map((paragraph) => (
          <p
            key={paragraph}
            className="max-w-[720px] font-main text-base leading-[1.7] text-[#4a5565]"
          >
            {paragraph}
          </p>
        ))}

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.contact.email}`}
            className="rounded-full bg-black px-5 py-2.5 font-main text-sm text-white transition-opacity hover:opacity-80"
          >
            {site.contact.email}
          </a>
          <p className="font-main text-sm text-gray-600">{site.contact.cta}</p>
          <Link
            to="/how-i-work"
            className="font-main text-sm text-[color:var(--color-blue)] hover:underline"
          >
            How I work →
          </Link>
        </div>
      </footer>
    </>
  );
}
