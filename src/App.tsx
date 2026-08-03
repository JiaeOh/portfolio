import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { CaseStudyCard } from "./components/CaseStudyCard";
import { caseStudies } from "./data/caseStudies";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-2.5 bg-[#f6f6f6]">
      <NavBar />
      <Hero />
      <div
        id="selected-work"
        className="flex w-[1280px] max-w-full flex-col items-center gap-24 px-6 pb-24"
      >
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
