import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { WorkDetailPage } from "./pages/WorkDetailPage";
import { HowIWorkPage } from "./pages/HowIWorkPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#f6f6f6]">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
          <Route path="/how-i-work" element={<HowIWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
