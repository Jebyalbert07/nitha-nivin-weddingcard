import React, { useState } from 'react';
import { X, Download, Share2, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

export const CardViewerModal = ({ isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.25, 2.5));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.25, 0.75));
  const handleRotate = () => setRotation((r) => (r + 90) % 360);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/wedding-card.jpg';
    a.download = 'nitha-nivin-wedding-card.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/85 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-[#faf8f3] rounded-3xl overflow-hidden shadow-2xl border border-[#d6c7b0]">
        {/* Top Control Bar */}
        <div className="w-full px-5 py-3.5 bg-[#f2ecde] border-b border-[#dfd4be] flex items-center justify-between text-[#2d3a2b]">
          <div className="flex items-center gap-2">
            <span className="text-[#8c7035] text-base font-serif">†</span>
            <span className="font-['Cinzel'] text-xs uppercase tracking-wider font-semibold">
              Original Wedding Invitation
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg hover:bg-white text-stone-700 transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg hover:bg-white text-stone-700 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <button
              onClick={handleRotate}
              className="p-1.5 rounded-lg hover:bg-white text-stone-700 transition-colors"
              title="Rotate"
            >
              <RotateCw size={18} />
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 px-3 py-1 bg-[#2d3a2b] hover:bg-[#3d4f3b] text-white rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ml-2"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Save Image</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-200/80 hover:bg-stone-300 text-stone-800 transition-colors ml-1"
              title="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Image Display Area */}
        <div className="w-full flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-[#ece6d8]">
          <div
            className="transition-transform duration-200 shadow-2xl rounded-xl overflow-hidden border border-[#d2c3aa]"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              maxWidth: '560px'
            }}
          >
            <img
              src="/wedding-card.jpg"
              alt="Official Wedding Invitation Card - Nitha & Nivin"
              className="w-full h-auto block select-none"
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="w-full py-2.5 px-4 bg-[#f2ecde] border-t border-[#dfd4be] text-center text-xs text-stone-600 font-serif italic">
          High-resolution printed wedding card • Nitha Yohannan &amp; Nivin Sunny George
        </div>
      </div>
    </div>
  );
};

