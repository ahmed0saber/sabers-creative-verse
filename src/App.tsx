import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import NotFound from "./pages/NotFound";
import NormalMode from "./components/modes/NormalMode";
import DevMode from "./components/modes/DevMode";
import HackerMode from "./components/modes/HackerMode";
import AIMode from "./components/modes/AIMode";
import "./globals.css"

const App = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <main className="transition-smooth">
        <Routes>
          <Route path="/" element={<NormalMode />} />
          <Route path="/dev" element={<DevMode />} />
          <Route path="/hacker" element={<HackerMode />} />
          <Route path="/ai" element={<AIMode />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
