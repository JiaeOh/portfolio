import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { WorkDetailPage } from "./pages/WorkDetailPage";
import { HowIWorkPage } from "./pages/HowIWorkPage";
import { AboutPage } from "./pages/AboutPage";
import { CVPage } from "./pages/CVPage";

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen w-full bg-[#f6f6f6] bg-no-repeat"
        style={{
          backgroundImage:
            "conic-gradient(from 200deg at 15% 12%, rgba(255,255,255,0.51) 0%, rgba(238,243,250,0.2) 4.37%, rgba(111,169,255,0.3) 12.02%, rgba(206,225,252,0.2) 22.6%, rgba(249,249,249,0.2) 45.24%, rgba(255,255,255,0.51) 100%)",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
          <Route path="/how-i-work" element={<HowIWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
