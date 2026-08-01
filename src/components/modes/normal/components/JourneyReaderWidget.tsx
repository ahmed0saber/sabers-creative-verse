import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Square, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VttCue {
  index: number;
  startTime: number;
  endTime: number;
  text: string;
}

/** Parse a WebVTT timestamp like "00:01:23,456" into seconds */
function parseVttTimestamp(raw: string): number {
  const cleaned = raw.trim().replace(",", ".");
  const parts = cleaned.split(":");
  if (parts.length === 3) {
    return (
      parseFloat(parts[0]) * 3600 +
      parseFloat(parts[1]) * 60 +
      parseFloat(parts[2])
    );
  }
  if (parts.length === 2) {
    return parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
  }
  return parseFloat(cleaned);
}

/** Parse a WebVTT file string into an array of cues */
function parseVtt(vttText: string): VttCue[] {
  const cues: VttCue[] = [];
  // Normalize line endings
  const lines = vttText.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");

  let i = 0;
  // Skip the WEBVTT header
  while (i < lines.length && !lines[i].includes("-->")) {
    i++;
  }

  while (i < lines.length) {
    const line = lines[i];
    if (line.includes("-->")) {
      const [startStr, endStr] = line.split("-->");
      const startTime = parseVttTimestamp(startStr);
      const endTime = parseVttTimestamp(endStr);

      // Gather cue text (all lines until blank)
      i++;
      const textLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== "") {
        textLines.push(lines[i].trim());
        i++;
      }

      cues.push({
        index: cues.length,
        startTime,
        endTime,
        text: textLines.join(" "),
      });
    } else {
      i++;
    }
  }

  return cues;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

const JourneyReaderWidget = () => {
  const [cues, setCues] = useState<VttCue[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCueIndex, setActiveCueIndex] = useState<number>(-1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [audioSrc, setAudioSrc] = useState<string>("/audio/intro.mp3");

  const audioRef = useRef<HTMLAudioElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const activeCueRef = useRef<HTMLSpanElement>(null);

  // Load and parse the VTT file
  useEffect(() => {
    fetch("/audio/intro.vvt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseVtt(text);
        setCues(parsed);
      })
      .catch((err) => console.error("Failed to load VTT:", err));

    // Fetch audio as blob to ensure seeking works on static hosts (Cloudflare/Vercel)
    // without relying on HTTP Range request support
    let objectUrl = "";
    fetch("/audio/intro.mp3")
      .then((res) => res.blob())
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        setAudioSrc(objectUrl);
      })
      .catch((err) => console.error("Failed to load audio blob:", err));

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, []);

  // Scroll the active cue into view
  // useEffect(() => {
  //   if (activeCueRef.current && transcriptRef.current) {
  //     activeCueRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }
  // }, [activeCueIndex]);

  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || cues.length === 0) return;

    const time = audio.currentTime;
    setCurrentTime(time);

    if (audio.duration && isFinite(audio.duration)) {
      setProgress((time / audio.duration) * 100);
    }

    // Find the active cue
    let foundIndex = -1;
    for (let i = 0; i < cues.length; i++) {
      if (time >= cues[i].startTime && time < cues[i].endTime) {
        foundIndex = i;
        break;
      }
    }
    // If between cues, keep the last one highlighted
    if (foundIndex === -1 && time > 0) {
      for (let i = cues.length - 1; i >= 0; i--) {
        if (time >= cues[i].startTime) {
          foundIndex = i;
          break;
        }
      }
    }
    setActiveCueIndex(foundIndex);
  }, [cues]);

  const handleLoadedMetadata = useCallback(() => {
    const audio = audioRef.current;
    if (audio && isFinite(audio.duration)) {
      setDuration(audio.duration);
    }
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setActiveCueIndex(-1);
    setProgress(0);
    setCurrentTime(0);
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setActiveCueIndex(-1);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !isFinite(audio.duration)) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clickX / rect.width;
    audio.currentTime = ratio * audio.duration;
  };

  const handleCueClick = (cue: VttCue) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = cue.startTime;
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  };

  if (cues.length === 0) return null;

  return (
    <div className="journey-reader">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      {/* Controls bar */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-y-3 gap-x-2 bg-secondary/30 p-2 rounded-t-lg border border-border/50 border-b-0">
        {/* <span className="order-1 text-sm text-muted-foreground px-1 sm:px-2 font-medium flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5" />
          Listen
        </span> */}
        <Button
          variant={isPlaying ? "default" : "outline"}
          size="sm"
          onClick={handlePlayPause}
          className="order-2 flex items-center justify-center gap-2 transition-smooth h-8 w-[88px]"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" /> Pause
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" /> Play
            </>
          )}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleStop}
          disabled={!isPlaying && currentTime === 0}
          className={`order-3 sm:order-4 h-8 transition-smooth w-[80px] flex items-center justify-center ${
            !isPlaying && currentTime === 0
              ? "opacity-50 cursor-not-allowed"
              : "text-red-500 hover:text-red-600 hover:bg-red-500/10 border-red-500/20"
          }`}
        >
          <Square className="w-3.5 h-3.5 mr-1.5" /> Stop
        </Button>

        {/* Progress and Time Wrapper */}
        <div className="order-4 sm:order-3 flex items-center gap-3 flex-1 w-full sm:w-auto mt-1 sm:mt-0 px-1 sm:px-0">
          {/* Progress bar */}
          <div
            className="journey-progress-bar flex-1 min-w-[6rem] h-2.5 bg-background/50 rounded-full overflow-hidden border border-border/30 cursor-pointer"
            onClick={handleProgressClick}
            role="slider"
            aria-label="Audio progress"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
          >
            <div
              className="h-full bg-primary rounded-full transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Time display */}
          <span className="text-xs text-muted-foreground font-mono tabular-nums whitespace-nowrap">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Synced transcript */}
      <div
        ref={transcriptRef}
        className="journey-transcript bg-card/60 rounded-b-lg border border-border/50 p-4 sm:p-5 max-h-48 overflow-y-auto"
      >
        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
          {cues.map((cue) => (
            <span
              key={cue.index}
              ref={cue.index === activeCueIndex ? activeCueRef : null}
              className={`journey-cue cursor-pointer transition-all duration-300 ease-out rounded-sm px-0.5 -mx-0.5 ${
                cue.index === activeCueIndex ? "journey-cue-active" : ""
              }`}
              onClick={() => handleCueClick(cue)}
            >
              {cue.text}{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default JourneyReaderWidget;
