import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowAIWorks from './pages/HowAIWorks';
import Prompting from './pages/Prompting';
import Tools from './pages/Tools';
import UseCases from './pages/UseCases';
import Resources from './pages/Resources';
import Day1 from './pages/agenda/Day1';
import Day2 from './pages/agenda/Day2';
import Day1Challenges from './pages/agenda/Day1Challenges';
import PromptLibrary from './pages/PromptLibrary';
import AIModels from './pages/AIModels';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-ai-works" element={<HowAIWorks />} />
          <Route path="/prompting" element={<Prompting />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/models" element={<AIModels />} />
          <Route path="/prompt-library" element={<PromptLibrary />} />
          <Route path="/agenda/day1" element={<Day1 />} />
          <Route path="/agenda/day1/challenges" element={<Day1Challenges />} />
          <Route path="/agenda/day2" element={<Day2 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
