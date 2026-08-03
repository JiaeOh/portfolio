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
        <p className="font-accent text-[20px] tracking-[-0.4px] text-gray-600">
          Pronounced as{" "}
          <span className="text-[color:var(--color-orange-text)]">
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

      <p className="max-w-[640px] font-main text-[18px] leading-[1.7] text-[#4a5565]">
        {site.intro}
      </p>
    </div>
  );
}
