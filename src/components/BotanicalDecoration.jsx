import React from 'react';

// Delicate botanical leaf and flower decorative motifs matching the invitation corner florals
export const CornerBotanical = ({ position = 'top-left' }) => {
  const isTopLeft = position === 'top-left';
  const isBottomRight = position === 'bottom-right';

  const transformStyle = isBottomRight ? { transform: 'rotate(180deg)' } : {};

  return (
    <div
      className={`absolute pointer-events-none select-none z-10 ${
        isTopLeft ? 'top-0 left-0' : 'bottom-0 right-0'
      }`}
      style={{
        width: 'clamp(140px, 22vw, 320px)',
        height: 'clamp(140px, 22vw, 320px)',
        opacity: 0.9,
        ...transformStyle
      }}
    >
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a6350" />
            <stop offset="50%" stopColor="#627d66" />
            <stop offset="100%" stopColor="#384c3c" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#758f79" />
            <stop offset="100%" stopColor="#516954" />
          </linearGradient>
          <linearGradient id="goldStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bfa15f" />
            <stop offset="100%" stopColor="#8c7035" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Delicate Golden Vines */}
        <path
          d="M 5,5 Q 70,30 110,80 T 170,190"
          stroke="url(#goldStem)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 5,5 Q 35,70 70,120 T 130,220"
          stroke="url(#goldStem)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Eucalyptus Leaves */}
        {/* Leaf 1 */}
        <path
          d="M 25,20 C 45,10 70,25 65,45 C 60,65 30,50 25,20 Z"
          fill="url(#leafGrad1)"
          opacity="0.9"
        />
        {/* Leaf 2 */}
        <path
          d="M 15,45 C 5,65 20,85 40,80 C 60,75 50,45 15,45 Z"
          fill="url(#leafGrad2)"
          opacity="0.85"
        />
        {/* Leaf 3 */}
        <path
          d="M 55,35 C 80,30 95,55 85,75 C 75,95 50,75 55,35 Z"
          fill="url(#leafGrad1)"
          opacity="0.9"
        />
        {/* Leaf 4 */}
        <path
          d="M 50,75 C 70,80 80,105 70,120 C 60,135 40,115 50,75 Z"
          fill="url(#leafGrad2)"
          opacity="0.88"
        />
        {/* Leaf 5 */}
        <path
          d="M 85,70 C 110,65 125,90 115,110 C 105,130 80,110 85,70 Z"
          fill="url(#leafGrad1)"
          opacity="0.92"
        />
        {/* Leaf 6 */}
        <path
          d="M 75,120 C 95,130 105,155 90,170 C 75,185 60,160 75,120 Z"
          fill="url(#leafGrad2)"
          opacity="0.85"
        />
        {/* Leaf 7 */}
        <path
          d="M 120,105 C 145,100 160,125 150,145 C 140,165 115,145 120,105 Z"
          fill="url(#leafGrad1)"
          opacity="0.88"
        />
        {/* Leaf 8 */}
        <path
          d="M 105,155 C 125,165 135,190 120,205 C 105,220 90,195 105,155 Z"
          fill="url(#leafGrad2)"
          opacity="0.85"
        />

        {/* Elegant White Blossom Petals */}
        {/* Blossom 1 */}
        <g transform="translate(45, 55)">
          <circle cx="0" cy="0" r="11" fill="#ffffff" opacity="0.95" />
          <circle cx="-6" cy="-6" r="6" fill="#fffbf2" opacity="0.9" />
          <circle cx="6" cy="-6" r="6" fill="#fffbf2" opacity="0.9" />
          <circle cx="7" cy="5" r="6" fill="#fffbf2" opacity="0.9" />
          <circle cx="-7" cy="5" r="6" fill="#fffbf2" opacity="0.9" />
          <circle cx="0" cy="8" r="5" fill="#fffbf2" opacity="0.9" />
          <circle cx="0" cy="0" r="3" fill="#dfbe7b" />
        </g>

        {/* Blossom 2 */}
        <g transform="translate(95, 95)">
          <circle cx="0" cy="0" r="10" fill="#ffffff" opacity="0.95" />
          <circle cx="-5" cy="-5" r="5" fill="#fffbf2" opacity="0.9" />
          <circle cx="5" cy="-5" r="5" fill="#fffbf2" opacity="0.9" />
          <circle cx="6" cy="4" r="5" fill="#fffbf2" opacity="0.9" />
          <circle cx="-6" cy="4" r="5" fill="#fffbf2" opacity="0.9" />
          <circle cx="0" cy="0" r="2.5" fill="#c9a562" />
        </g>

        {/* Blossom 3 - Bud */}
        <g transform="translate(140, 135)">
          <circle cx="0" cy="0" r="7" fill="#ffffff" opacity="0.95" />
          <circle cx="0" cy="0" r="2" fill="#dfbe7b" />
        </g>
      </svg>
    </div>
  );
};

export const SectionDivider = ({ label = '†' }) => {
  return (
    <div className="flex items-center justify-center my-8 text-neutral-400">
      <div className="w-16 sm:w-28 h-px bg-gradient-to-r from-transparent to-[#c4a468]"></div>
      <div className="mx-4 flex items-center gap-2 text-[#9c7c3b]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c4a468]"></span>
        <span className="font-serif text-lg tracking-widest px-1">{label}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#c4a468]"></span>
      </div>
      <div className="w-16 sm:w-28 h-px bg-gradient-to-l from-transparent to-[#c4a468]"></div>
    </div>
  );
};

