import { ThemeProvider } from '@/contexts/ThemeContext';
import { ModeProvider, useMode } from '@/contexts/ModeContext';
import Navbar from '@/components/Navbar';
import NormalMode from '@/components/modes/NormalMode';
import DevMode from '@/components/modes/DevMode';
import HackerMode from '@/components/modes/HackerMode';

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
    <ThemeProvider>
      <ModeProvider>
        <PortfolioContent />
      </ModeProvider>
    </ThemeProvider>
  );
};

export default Index;
