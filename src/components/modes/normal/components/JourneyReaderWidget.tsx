import { useState, useEffect } from 'react';
import { Play, Pause, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JourneyReaderWidgetProps {
  text: string;
}

const JourneyReaderWidget = ({ text }: JourneyReaderWidgetProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
    
    return () => {
      // Clean up speech synthesis when component unmounts
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!speechSynthesis) return;

    if (isPlaying && !isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPlaying && isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.15; // Increased reading speed

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(0);
      };
      // Handle the case where speech synthesis is interrupted
      utterance.onerror = () => {
         setIsPlaying(false);
         setIsPaused(false);
         setProgress(0);
      };
      
      utterance.onboundary = (event) => {
        if (event.name === 'word' || event.name === 'sentence') {
          // Calculate percentage based on charIndex
          const currentProgress = Math.min(100, Math.max(0, (event.charIndex / text.length) * 100));
          setProgress(currentProgress);
        }
      };

      speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (!speechSynthesis) return;
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  if (!speechSynthesis) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 bg-secondary/30 p-2 rounded-lg border border-border/50 w-fit">
      <span className="text-sm text-muted-foreground px-2 font-medium">Reader</span>
      <Button
        variant={isPlaying ? "default" : "outline"}
        size="sm"
        onClick={handlePlayPause}
        className="flex items-center gap-2 transition-smooth h-8"
      >
        {isPlaying && !isPaused ? (
          <><Pause className="w-3.5 h-3.5" /> Pause</>
        ) : (
          <><Play className="w-3.5 h-3.5" /> {isPlaying ? 'Resume' : 'Listen'}</>
        )}
      </Button>
      {isPlaying && (
        <>
          <div className="w-24 sm:w-32 h-2.5 bg-background/50 rounded-full overflow-hidden border border-border/30 mx-2">
            <div 
              className="h-full bg-primary transition-all duration-200 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleStop}
            className="text-red-500 hover:text-red-600 hover:bg-red-500/10 border-red-500/20 transition-smooth h-8 ml-1"
          >
            <Square className="w-3.5 h-3.5 mr-1.5" /> Stop
          </Button>
        </>
      )}
    </div>
  );
};

export default JourneyReaderWidget;
