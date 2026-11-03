import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';

export const FloatingMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Check initial state
    setIsPlaying(weddingAudio.isPlaying);
  }, []);

  const handleToggle = () => {
    const newState = weddingAudio.toggle();
    setIsPlaying(newState);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={handleToggle}
        className={`group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full shadow-lg border transition-all duration-300 backdrop-blur-md ${
          isPlaying
            ? 'bg-[#2f4233]/90 text-[#f3ede0] border-[#c4a468]/60 shadow-[#2f4233]/30 ring-2 ring-[#c4a468]/30'
            : 'bg-[#faf7f0]/95 text-[#526355] border-[#d4c8b2] hover:bg-white shadow-stone-300/40'
        }`}
        title={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        aria-label="Toggle background music"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-4 w-4">
              <span className="w-1 bg-[#c4a468] rounded-full animate-musicBar1 h-full"></span>
              <span className="w-1 bg-[#c4a468] rounded-full animate-musicBar2 h-2/3"></span>
              <span className="w-1 bg-[#c4a468] rounded-full animate-musicBar3 h-4/5"></span>
            </div>
          ) : (
            <Music size={17} className="text-[#8c7035] group-hover:scale-110 transition-transform" />
          )}
        </div>

        <span className="text-xs font-medium tracking-wider uppercase pr-1 font-sans">
          {isPlaying ? 'Music On' : 'Play Music'}
        </span>

        {isPlaying ? (
          <Volume2 size={15} className="text-[#c4a468]" />
        ) : (
          <VolumeX size={15} className="text-stone-400" />
        )}
      </button>
    </div>
  );
};

