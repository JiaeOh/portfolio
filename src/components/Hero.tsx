import { site } from "../lib/content";

export function Hero() {
  return (
    <div
      id="home"
      data-nav-section
      data-nav-label="Home"
      className="flex w-full flex-col items-start gap-16 p-20 max-lg:gap-10 max-lg:px-6 max-lg:pt-24 max-lg:pb-8"
    >
      <header className="flex w-full justify-end">
        <span className="font-logo text-[96px] font-bold leading-none tracking-[-9.6px] text-[color:var(--color-text-primary)] max-lg:text-[56px] max-lg:tracking-[-5.6px]">
          ae
        </span>
      </header>

      <div className="flex flex-col items-start gap-3">
        <h1 className="font-display text-[96px] font-semibold leading-none text-[color:var(--color-text-primary)] max-lg:text-[56px]">
          {site.name}
        </h1>
        <p className="font-main text-[20px] tracking-[-0.4px] text-[#4a5463]">
          Pronounced as{" "}
          <span className="text-[color:var(--color-pronoun-blue)]">
            {site.pronunciation}
          </span>
        </p>
        <p className="font-main text-[18px] text-gray-600">
          {site.role} — {site.location}
        </p>
      </div>

      <p className="max-w-[720px] font-main text-[32px] font-semibold leading-[1.4] text-[color:var(--color-text-primary)] max-lg:text-[24px]">
        {site.tagline}
      </p>

      <p className="max-w-[640px] font-main text-[16px] leading-[1.7] text-[#4a5463]">
        {site.intro}{" "}
        <span className="font-bold">{site.introHighlight}</span>
      </p>

      <div className="flex w-full max-w-[800px] flex-col items-center gap-6 py-[120px] max-lg:py-16">
        <p className="w-full font-main text-[24px] font-bold tracking-[-0.48px] text-[color:var(--color-orange-text)]">
          {site.designGoal.label}
        </p>
        <p className="w-full font-goal text-[32px] font-bold tracking-[-0.32px] text-[color:var(--color-text-primary)]">
          {site.designGoal.heading}
        </p>
        <p className="w-full font-goal text-[24px] font-medium tracking-[-0.48px] text-[color:var(--color-text-primary)]">
          {site.designGoal.leadBold}{" "}
          <span className="text-black/20">{site.designGoal.leadFaded}</span>
        </p>
        <p className="w-full font-goal text-[24px] font-medium tracking-[-0.48px] text-black/20">
          {site.designGoal.closingFaded}
        </p>
      </div>
    </div>
  );
}
