import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Media } from "./Media";

const baseComponents: Components = {
  h2: ({ children }) => (
    <h2 className="mt-14 font-main text-2xl font-semibold text-[color:var(--color-text-primary)] first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 font-main text-xl font-semibold text-[color:var(--color-text-primary)]">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-8 font-main text-sm font-semibold tracking-wide text-gray-600 uppercase">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mt-4 font-main text-base leading-[1.75] text-[#374151]">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[color:var(--color-text-primary)]">
      {children}
    </strong>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-1.5 pl-5 font-main text-base leading-[1.7] text-[#374151]">
      {children}
    </ul>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-[color:var(--color-orange)] pl-5 font-accent text-lg leading-[1.6] text-gray-700 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[color:var(--color-blue)] underline underline-offset-2"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt, title }) => (
    <figure className="my-8">
      <Media
        src={typeof src === "string" ? src : undefined}
        alt={alt ?? ""}
        className="w-full rounded-2xl"
      />
      {title && (
        <figcaption className="mt-2 font-main text-sm text-gray-600">
          {title}
        </figcaption>
      )}
    </figure>
  ),
  table: ({ children }) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse font-main text-sm [&_td:last-child]:text-gray-600 [&_th:last-child]:text-gray-600">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-gray-200 py-3 pr-4 text-left font-semibold text-gray-600">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-gray-100 py-3 pr-4 align-top text-[#374151]">
      {children}
    </td>
  ),
};

const sourcesComponents: Components = {
  ...baseComponents,
  h2: ({ children }) => (
    <h2 className="mt-14 font-main text-sm font-semibold tracking-wide text-gray-600 uppercase">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="mt-2 font-main text-sm leading-[1.7] text-gray-600">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-2 list-disc space-y-1 pl-5 font-main text-sm leading-[1.7] text-gray-600">
      {children}
    </ul>
  ),
};

/**
 * Renders a case study's markdown body. "## Sources" is split out and
 * rendered smaller/muted, like footnotes, per HANDOFF.md.
 */
export function MarkdownBody({ body }: { body: string }) {
  const sourcesIndex = body.indexOf("\n## Sources");
  const main = sourcesIndex === -1 ? body : body.slice(0, sourcesIndex);
  const sources = sourcesIndex === -1 ? null : body.slice(sourcesIndex + 1);

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={baseComponents}>
        {main}
      </ReactMarkdown>
      {sources && (
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={sourcesComponents}>
          {sources}
        </ReactMarkdown>
      )}
    </div>
  );
}
