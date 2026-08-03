import { Link } from "react-router-dom";
import { site } from "../lib/content";

export function AboutPage() {
  return (
    <article className="mx-auto flex w-[860px] max-w-full flex-col px-6 pt-28 pb-24 max-lg:pt-24">
      <Link to="/" className="font-main text-sm text-gray-600 hover:text-black">
        ← Back to work
      </Link>

      <h1 className="mt-8 font-main text-4xl font-semibold text-[color:var(--color-text-primary)]">
        {site.about.heading}
      </h1>

      <div className="mt-6 flex flex-col gap-4">
        {site.about.body.map((paragraph) => (
          <p
            key={paragraph}
            className="max-w-[680px] font-main text-lg leading-[1.7] text-[#4a5565]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-8">
        {site.skills.map((group) => (
          <div key={group.group}>
            <p className="font-main text-sm font-semibold text-[color:var(--color-blue)]">
              {group.group}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[color:var(--color-blue-15)] px-3 py-1.5 font-main text-sm text-[#364153]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-8">
        <a
          href={`mailto:${site.contact.email}`}
          className="rounded-full bg-black px-5 py-2.5 font-main text-sm text-white transition-opacity hover:opacity-80"
        >
          {site.contact.email}
        </a>
        <p className="font-main text-sm text-gray-600">{site.contact.cta}</p>
      </div>
    </article>
  );
}
