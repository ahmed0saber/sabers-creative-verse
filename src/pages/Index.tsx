import { ModeProvider, useMode } from '@/contexts/ModeContext';
import Navbar from '@/components/Navbar';
import NormalMode from '@/components/modes/NormalMode';
import DevMode from '@/components/modes/DevMode';
import HackerMode from '@/components/modes/HackerMode';
import { useEffect } from 'react';

const PortfolioContent = () => {
  const { mode } = useMode();

  const renderMode = () => {
    switch (mode) {
      case 'normal':
        return <NormalMode />;
      case 'dev':
        return <DevMode />;
      case 'hacker':
        return <HackerMode />;
      default:
        return <NormalMode />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mode]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Navbar />
      <main className="transition-smooth">
        {renderMode()}
      </main>
    </>
  );
};

const Index = () => {
  return (
    <ModeProvider>
      <PortfolioContent />
    </ModeProvider>
  );
};

export default Index;
