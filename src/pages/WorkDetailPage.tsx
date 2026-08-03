import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../lib/content";
import { Badge } from "../components/Badge";
import { Media } from "../components/Media";
import { MarkdownBody } from "../components/MarkdownBody";

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project || project.badge === "In progress") {
    return (
      <div className="flex w-full flex-col items-center gap-4 px-6 py-32 text-center">
        <p className="font-main text-lg text-gray-600">
          {project
            ? "This case study isn't published yet."
            : "That case study doesn't exist."}
        </p>
        <Link
          to="/"
          className="font-main text-[color:var(--color-blue)] hover:underline"
        >
          ← Back to work
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto flex w-[860px] max-w-full flex-col px-6 pt-28 pb-24 max-lg:pt-24">
      <Link
        to="/"
        className="font-main text-sm text-gray-600 hover:text-black"
      >
        ← Back to work
      </Link>

      <p className="mt-8 font-main text-sm text-gray-600">
        {project.category} • {project.platform} • {project.year}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h1 className="font-main text-4xl font-semibold text-[color:var(--color-text-primary)]">
          {project.title}
        </h1>
        <Badge badge={project.badge} />
      </div>

      <p className="mt-4 max-w-[680px] font-main text-lg leading-[1.6] text-[#4a5463]">
        {project.description}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-8 border-y border-gray-200 py-6 max-lg:grid-cols-1">
        <div>
          <p className="font-main text-sm text-[color:var(--color-blue)]">
            Role &amp; Timeline
          </p>
          <p className="pt-2 font-main text-base text-black">
            {project.roleTitle}
          </p>
          <p className="pt-1 font-main text-sm text-[#4a5463]">
            {project.timeline}
          </p>
        </div>
        <div>
          <p className="font-main text-sm text-[color:var(--color-blue)]">
            Client
          </p>
          <p className="pt-2 font-main text-base text-black">
            {project.client}
          </p>
        </div>
      </div>

      {project.cover && (
        <Media
          src={project.cover}
          alt={`${project.title} cover`}
          className="mt-10 h-[420px] w-full rounded-2xl max-lg:h-[240px]"
        />
      )}

      <MarkdownBody body={project.body} />
    </article>
  );
}
