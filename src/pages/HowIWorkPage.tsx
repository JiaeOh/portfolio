import { Link } from "react-router-dom";
import { getPageBySlug } from "../lib/content";
import { MarkdownBody } from "../components/MarkdownBody";

export function HowIWorkPage() {
  const page = getPageBySlug("how-i-work");

  if (!page) return null;

  return (
    <article className="mx-auto flex w-[860px] max-w-full flex-col px-6 pt-28 pb-24 max-lg:pt-24">
      <Link to="/" className="font-main text-sm text-gray-600 hover:text-black">
        ← Back to work
      </Link>

      <h1 className="mt-8 font-main text-4xl font-semibold text-[color:var(--color-text-primary)]">
        {page.title}
      </h1>
      {page.subtitle && (
        <p className="mt-3 max-w-[640px] font-main text-lg leading-[1.6] text-[#4a5565]">
          {page.subtitle}
        </p>
      )}

      <MarkdownBody body={page.body} />
    </article>
  );
}
