import { Link } from "react-router-dom";

const CV_PATH = "/JiaeOh_CV.pdf";

export function CVPage() {
  return (
    <article className="mx-auto flex w-[900px] max-w-full flex-col px-6 pt-28 pb-24 max-lg:pt-24">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="font-main text-sm text-gray-600 hover:text-black"
        >
          ← Back to work
        </Link>
        <a
          href={CV_PATH}
          download
          className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 font-main text-sm text-white transition-opacity hover:opacity-80"
        >
          Download PDF
        </a>
      </div>

      <h1 className="mt-8 font-main text-4xl font-semibold text-[color:var(--color-text-primary)]">
        CV
      </h1>

      <object
        data={CV_PATH}
        type="application/pdf"
        className="mt-8 h-[1100px] w-full rounded-2xl border border-gray-200 max-lg:h-[600px]"
        aria-label="Jiae Oh's CV"
      >
        <p className="p-6 font-main text-base text-[#4a5463]">
          Your browser can't preview PDFs inline.{" "}
          <a
            href={CV_PATH}
            className="text-[color:var(--color-blue)] underline"
          >
            Open the CV directly
          </a>
          .
        </p>
      </object>
    </article>
  );
}
