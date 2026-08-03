import { ScrollRevealText } from "./ScrollRevealText";

export function Hero() {
  return (
    <div
      id="home"
      data-nav-section
      data-nav-label="Home"
      className="flex w-full flex-col items-start gap-[120px] p-20 max-lg:gap-16 max-lg:p-8"
    >
      <header className="flex w-full justify-end">
        <span className="font-logo text-[96px] font-bold leading-none tracking-[-9.6px] text-[color:var(--color-text-primary)] max-lg:text-[56px] max-lg:tracking-[-5.6px]">
          ae
        </span>
      </header>

      <div className="flex flex-col items-start gap-9">
        <h1 className="font-display text-[120px] font-semibold leading-none text-[color:var(--color-text-primary)] max-lg:text-[64px]">
          Jiae Oh
        </h1>
        <p className="w-[416px] max-w-full text-[20px] tracking-[-0.4px]">
          <span className="font-accent">Pronounced as </span>
          <span className="font-accent text-[color:var(--color-orange)]">
            Jee-Ay
          </span>
        </p>
      </div>

      <div className="flex w-full justify-end">
        <p className="w-[295px] max-w-full font-main font-bold text-[18px] leading-normal text-[color:var(--color-orange)]">
          Product designer, specialised in B2C Financial, SaS B2B, complex
          database blah blah - 3 lines
        </p>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-[960px] max-w-full font-main text-[40px] font-bold leading-normal text-[color:var(--color-text-primary)] whitespace-pre-wrap">
          <p className="mb-0">
            I design ----- everyone use the service easily,{" "}
            <span>trust</span>
            <ScrollRevealText text="ful, straight-away, no learning? > 3-5 lines design goal - with colouring interaction by scroll." />
          </p>
          <p className="mb-0 mt-[1em]">
            내용 : 우리는 AI로 인해 세상의 발전속도는 굉장히 빠르지만
          </p>
          <p className="mb-0">
            사람과 서비스의 관계에서 신뢰는 더 쌓기 어려운 순간에 살고있다.
          </p>
          <p className="mb-0">
            이런 시대에서 나는 항상 먼저 기술을 시도해보고 적응하는 한
            사람으로서,
          </p>
          <p className="mb-0">
            기술이 사람을 앞질러 가는 것이 아니라, Voluntary한 user까지 이
            AI의 날개를 보조바퀴로 사용할 수 있도록 서비스를 디자인하겠다는
            책임감을 가지고 있다.
          </p>
          <p className="mb-0">
            {">>> "}이부분 문장 정리 필요. 최대한 많은 사람을 품고, 기술이
            리드하는 것이 아닌 기술로 사람이 enhanced 되는 시대가 될수 있게
            기여하는 디자이너가 되고싶음.
          </p>
        </div>
      </div>
    </div>
  );
}
