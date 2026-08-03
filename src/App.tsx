import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { WorkDetailPage } from "./pages/WorkDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { CVPage } from "./pages/CVPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#f6f6f6]">
        <NavBar />
        {/* The whole design canvas is 1440 wide with 80px side padding baked
            into each page — this centers that canvas instead of letting it
            hug the left edge on wider screens. */}
        <div className="mx-auto max-w-[1440px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<WorkDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
