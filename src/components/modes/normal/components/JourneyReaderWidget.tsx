import { useState, useEffect, useRef } from 'react';
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
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Refs to manage state within speech synthesis callbacks without stale closures
  const chunksRef = useRef<string[]>([]);
  const currentChunkIndexRef = useRef(0);
  const isPlayingRef = useRef(false);
  const isPausedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
      
      const updateVoices = () => {
        setVoices(window.speechSynthesis.getVoices());
      };
      
      updateVoices();
      
      // Some browsers load voices asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }
    
    return () => {
      // Clean up speech synthesis when component unmounts
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const getPreferredVoice = () => {
    if (!voices.length) return null;
    
    // 1. Try to find a male English voice (prioritizing Google UK/US Male)
    let voice = voices.find(v => 
      (v.name.includes('Male') || v.name.includes('male') || v.name.includes('Google UK English Male')) && 
      v.lang.startsWith('en')
    );
    
    // 2. Fallback to any UK English or US English voice
    if (!voice) {
      voice = voices.find(v => v.lang === 'en-GB' || v.lang === 'en-US');
    }
    
    // 3. Fallback to any English voice
    if (!voice) {
      voice = voices.find(v => v.lang.startsWith('en'));
    }
    
    // 4. Default to the first available voice
    return voice || voices[0];
  };

  const getChunks = (textToChunk: string) => {
    // Split by common sentence boundaries to fix Android long-text bugs and get progress updates
    const regex = /[^.!?]+[.!?]+/g;
    let matches = textToChunk.match(regex);
    
    if (!matches) {
      matches = [textToChunk];
    } else {
      const joined = matches.join('');
      if (joined.length < textToChunk.length) {
        matches.push(textToChunk.slice(joined.length));
      }
    }
    return matches.map(c => c.trim()).filter(Boolean);
  };

  const speakChunk = (chunkIndex: number) => {
    if (!speechSynthesis || !isPlayingRef.current || isPausedRef.current) return;
    
    if (chunkIndex >= chunksRef.current.length) {
      handleStop();
      return;
    }

    const chunk = chunksRef.current[chunkIndex];
    const utterance = new SpeechSynthesisUtterance(chunk);
    
    const preferredVoice = getPreferredVoice();
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }
    
    utterance.rate = 1.15; // Increased reading speed

    utterance.onend = () => {
      if (!isPlayingRef.current) return; // Ignore if stopped manually
      
      currentChunkIndexRef.current += 1;
      
      // Update overall progress based on completed chunks
      const overallProgress = (currentChunkIndexRef.current / chunksRef.current.length) * 100;
      setProgress(Math.min(100, overallProgress));
      
      // Speak the next chunk
      speakChunk(currentChunkIndexRef.current);
    };

    utterance.onerror = (e) => {
      // Ignore errors caused by manual interruption or cancellation
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        handleStop();
      }
    };
    
    // onboundary may provide finer progress updates within the current chunk (varies by browser/OS)
    utterance.onboundary = (event) => {
      if (event.name === 'word' || event.name === 'sentence') {
        const chunkProgress = event.charIndex / chunk.length;
        const overallProgress = ((chunkIndex + chunkProgress) / chunksRef.current.length) * 100;
        setProgress(Math.min(100, overallProgress));
      }
    };

    speechSynthesis.speak(utterance);
  };

  const handlePlayPause = () => {
    if (!speechSynthesis) return;

    if (isPlaying && !isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
      isPausedRef.current = true;
    } else if (isPlaying && isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
      isPausedRef.current = false;
    } else {
      // Start speaking
      speechSynthesis.cancel(); // Clear any pending speech queue
      
      chunksRef.current = getChunks(text);
      currentChunkIndexRef.current = 0;
      
      setIsPlaying(true);
      isPlayingRef.current = true;
      setIsPaused(false);
      isPausedRef.current = false;
      setProgress(0);
      
      speakChunk(0);
    }
  };

  const handleStop = () => {
    if (!speechSynthesis) return;
    speechSynthesis.cancel();
    
    setIsPlaying(false);
    isPlayingRef.current = false;
    setIsPaused(false);
    isPausedRef.current = false;
    
    setProgress(0);
    currentChunkIndexRef.current = 0;
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
