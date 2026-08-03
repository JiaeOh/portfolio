import { motion } from "motion/react";
import { AccordionStack } from "./AccordionStack";
import expandIcon from "../assets/figma/expand-icon.svg";
import type { CaseStudy } from "../data/caseStudies";

export function CaseStudyCard({
  study,
  index = 0,
}: {
  study: CaseStudy;
  index?: number;
}) {
  return (
    <motion.div
      data-nav-section
      data-nav-label={study.navLabel}
      className="w-[1080px] max-w-full rounded-3xl border border-gray-200/50 bg-white/40 p-[33px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)] max-lg:p-6"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.7,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <p className="font-main text-sm text-gray-500">{study.eyebrow}</p>
          <h3 className="pt-2 font-main text-[36px] font-semibold leading-[1.2] text-[color:var(--color-text-primary)]">
            {study.title}
          </h3>
          {study.description && (
            <p className="max-w-[768px] pt-3 font-main text-[18px] leading-[1.625] text-[#4a5565]">
              {study.description}
            </p>
          )}
        </div>
        <img src={expandIcon} alt="" className="mt-1 size-6 shrink-0" />
      </div>

      <AccordionStack className="mt-6" items={study.images} />

      <div
        className="mt-8 grid gap-8 max-lg:grid-cols-1"
        style={{
          gridTemplateColumns: `repeat(${study.meta.length}, minmax(0, 1fr))`,
        }}
      >
        {study.meta.map((col) => (
          <div key={col.label}>
            <p className="font-main text-sm text-[color:var(--color-blue)]">
              {col.label}
            </p>
            {"heading" in col && col.heading ? (
              <>
                <p className="pt-2 font-main text-base text-black">
                  {col.heading}
                </p>
                <p className="pt-1 font-main text-sm text-[#4a5565]">
                  {col.body}
                </p>
              </>
            ) : "list" in col && col.list ? (
              <ul className="pt-2 space-y-1">
                {col.list.map((item) => (
                  <li key={item} className="font-main text-sm text-[#4a5565]">
                    • {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

      {study.tags && study.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[color:var(--color-blue-15)] px-3 py-1.5 font-main text-sm text-[#364153]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
