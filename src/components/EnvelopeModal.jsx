import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';

export const EnvelopeModal = ({ isOpen, onClose }) => {
  const [isOpening, setIsOpening] = useState(false);

  if (!isOpen) return null;

  const handleOpen = () => {
    setIsOpening(true);

    // Play subtle music
    try {
      weddingAudio.start();
    } catch (e) {
      console.log('Audio autoplay prevented', e);
    }

    // Launch celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c9a562', '#4a6350', '#f7f4ed', '#8c7035', '#ffffff']
    });

    setTimeout(() => {
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-md transition-opacity duration-700 animate-fadeIn">
      {/* Outer Envelope Container */}
      <div
        className={`relative w-full max-w-lg bg-[#faf8f2] rounded-2xl shadow-2xl overflow-hidden border border-[#d9cdb8] transform transition-all duration-700 ${isOpening ? 'scale-105 opacity-0 -translate-y-6' : 'scale-100 opacity-100'
          }`}
        style={{
          boxShadow: '0 25px 60px -15px rgba(45, 52, 43, 0.45), 0 0 0 1px rgba(196, 164, 104, 0.25)'
        }}
      >
        {/* Subtle Textured Background & Golden Border Inner Inset */}
        <div className="p-8 sm:p-10 text-center relative">
          <div className="absolute inset-3 border border-[#c4a468]/40 rounded-xl pointer-events-none"></div>

          {/* Cross & Monogram */}
          <div className="mx-auto mb-3 flex flex-col items-center">
            <span className="text-[#8c7035] text-2xl font-serif">†</span>
            <div className="mt-2 text-[11px] tracking-[0.35em] text-[#6b6255] uppercase font-sans font-medium">
              With Gratitude To God
            </div>
          </div>

          <div className="my-5">
            <p className="text-stone-500 font-serif italic text-sm tracking-wide">
              Wedding Invitation
            </p>
            <h1 className="font-['Alex_Brush'] text-5xl sm:text-6xl text-[#2c382e] my-2 font-normal leading-tight">
              Nitha &amp; Nivin
            </h1>
            <p className="font-['Cinzel'] text-xs tracking-[0.25em] text-[#8c7035] font-semibold uppercase mt-1">
              14th January 2027 • Kerala, India
            </p>
          </div>

          {/* Golden Wax Seal Button */}
          <div className="my-7 flex justify-center">
            <button
              onClick={handleOpen}
              className="group relative flex flex-col items-center focus:outline-none transition-transform active:scale-95"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#8b6508] p-0.5 shadow-lg group-hover:shadow-[#c4a468]/50 group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#fbf3d5]/60 flex flex-col items-center justify-center bg-gradient-to-br from-[#c99e32] to-[#8a630e] text-[#fff6db]">
                  {/* <span className="font-['Great_Vibes'] text-2xl font-bold tracking-wider drop-shadow-sm">
                    N &amp; N
                  </span> */}
                  <span className="font-['Great_Vibes'] text-[9px] tracking-widest font-sans uppercase opacity-90 -mt-1 font-semibold">
                    OPEN
                  </span>
                </div>
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#546252] group-hover:text-[#2d3a2b] transition-colors">
                <Sparkles size={14} className="text-[#b8860b] animate-pulse" />
                Tap to Open Invitation
              </span>
            </button>
          </div>

          <p className="text-stone-500 text-xs tracking-wider max-w-xs mx-auto leading-relaxed">
            "We cordially invite you to share in our joy as we begin our new journey together."
          </p>
        </div>
      </div>
    </div>
  );
};

