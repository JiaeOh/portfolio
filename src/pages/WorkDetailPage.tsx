import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../lib/content";
import { Badge } from "../components/Badge";
import { Media } from "../components/Media";
import { MarkdownBody } from "../components/MarkdownBody";

/**
 * Pulls the "### ..." step titles out of the "## Process" section to use
 * as a scannable Action list. These are the project's own words — just
 * reused as a summary instead of duplicated by hand.
 */
function extractProcessSteps(body: string): string[] {
  const sectionMatch = body.match(/\n## Process\n([\s\S]*?)(?=\n## |$)/);
  const section = sectionMatch ? sectionMatch[1] : "";
  return [...section.matchAll(/^### (?:\d+\.\s*)?(.+)$/gm)].map((m) => m[1]);
}

/** Splits the body so "## Process" can render in its own shaded panel —
 * a visual beat between the plain Overview and What-this-transfers-to
 * sections, instead of one flat, undifferentiated scroll. */
function splitProcessSection(body: string) {
  const match = body.match(/\n(## Process\n[\s\S]*?)(?=\n## |$)/);
  if (!match) return { before: body, process: null, after: "" };
  const before = body.slice(0, match.index);
  const process = match[1];
  const after = body.slice((match.index ?? 0) + match[0].length);
  return { before, process, after };
}

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

  const actionSteps = extractProcessSteps(project.body);
  const { before, process, after } = splitProcessSection(project.body);

  return (
    <article className="mx-auto flex w-[960px] max-w-full flex-col px-6 pt-28 pb-24 max-lg:pt-24">
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

      {/* First viewport: the product in motion, before anything else. */}
      <Media
        src={project.video}
        fallbackSrc={project.cover}
        alt={`${project.title} product walkthrough`}
        className="mt-8 aspect-video w-full rounded-3xl"
      />

      {/* Problem → Action → Outcome: the one thing a skimming recruiter
          should see even if they read nothing else on this page. */}
      <div className="mt-8 grid grid-cols-3 gap-8 rounded-3xl bg-black px-8 py-8 text-white max-lg:grid-cols-1 max-lg:gap-6 max-lg:px-6 max-lg:py-6">
        <div>
          <p className="font-main text-xs font-semibold tracking-wide text-[color:var(--color-orange-text)] uppercase">
            Problem
          </p>
          <ul className="mt-3 space-y-2">
            {project.keyChallenges.map((item) => (
              <li
                key={item}
                className="font-main text-[15px] leading-snug text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-white/15 max-lg:border-y max-lg:py-6 lg:border-x lg:px-8">
          <p className="font-main text-xs font-semibold tracking-wide text-[color:var(--color-orange-text)] uppercase">
            Action
          </p>
          <ul className="mt-3 space-y-2">
            {(actionSteps.length > 0 ? actionSteps : ["—"]).map((item) => (
              <li
                key={item}
                className="font-main text-[15px] leading-snug text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-main text-xs font-semibold tracking-wide text-[color:var(--color-orange-text)] uppercase">
            Outcome
          </p>
          <ul className="mt-3 space-y-2">
            {project.outcomes.map((item) => (
              <li
                key={item}
                className="font-main text-[15px] leading-snug font-semibold text-white"
              >
                {item}
              </li>
            ))}
            {project.outcomes.length === 0 && (
              <li className="font-main text-[15px] leading-snug text-white/50 italic">
                Outcome pending
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-8 border-y border-gray-200 py-6 max-lg:grid-cols-1">
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

      <MarkdownBody body={before} />

      {process && (
        <div className="relative mt-14 rounded-[32px] bg-white px-8 py-8 shadow-[0px_16px_48px_rgba(0,0,0,0.06)] max-lg:px-6">
          <MarkdownBody body={process} />
        </div>
      )}

      <MarkdownBody body={after} />
    </article>
  );
}
