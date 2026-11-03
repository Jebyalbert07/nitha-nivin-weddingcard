import React from 'react';
import { Sparkles, Palette, Shirt, Check } from 'lucide-react';
import { SectionDivider } from './BotanicalDecoration';

export const DressCodeSection = () => {
  const colorPalette = [
    { name: 'Olive Green', hex: '#3d5641', desc: 'Botanical foliage & leaves' },
    { name: 'Sage Mist', hex: '#77917c', desc: 'Soft eucalyptus tone' },
    { name: 'Champagne Gold', hex: '#c4a468', desc: 'Golden accents & rings' },
    { name: 'Warm Ivory', hex: '#f4ede1', desc: 'Parchment & blossoms' },
    { name: 'Forest Velvet', hex: '#223124', desc: 'Classic deep elegance' },
  ];

  return (
    <section id="dress-code" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#8c7035] text-xs uppercase tracking-[0.3em] font-semibold font-sans">
          Style &amp; Harmony
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl text-[#283629] mt-2 mb-3">
          Dress Code &amp; Theme
        </h2>
        <p className="text-stone-600 font-serif italic text-sm sm:text-base max-w-xl mx-auto">
          We warmly encourage our cherished guests to embrace our wedding theme palette for photographs and memories.
        </p>
        <SectionDivider label="✨" />
      </div>

      <div className="bg-[#faf8f3] rounded-3xl p-8 sm:p-10 border border-[#ded4c3] shadow-md">
        {/* Style Guidelines */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8c7035] font-semibold mb-2">
              <Shirt size={16} />
              <span>Recommended Attire</span>
            </div>
            <h3 className="font-['Cinzel'] text-2xl text-[#263426] font-semibold mb-3">
              Traditional &amp; Formal Elegance
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              We welcome Kerala traditional attire (Kasavu Sarees, Silk Sarees, Jubba / Kurta) or formal suits and evening wear complementing our botanical earthy palette.
            </p>
            <ul className="space-y-2 text-xs text-[#3d4c3c]">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-[#8c7035]" />
                <span>Traditional Kerala Christian Formal &amp; Festive Silks</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-[#8c7035]" />
                <span>Earthy greens, subtle pastels, champagne, and warm creams</span>
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-[#8c7035]" />
                <span>Comfortable footwear for church and reception festivities</span>
              </li>
            </ul>
          </div>

          {/* Color Palette Swatches */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8c7035] font-semibold mb-3">
              <Palette size={16} />
              <span>Theme Color Palette</span>
            </div>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {colorPalette.map((col, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className="w-full aspect-square rounded-2xl shadow-sm border border-stone-200 transform hover:scale-105 transition-transform"
                    style={{ backgroundColor: col.hex }}
                    title={`${col.name} (${col.hex})`}
                  ></div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#2d3a2b] mt-1.5 text-center leading-tight">
                    {col.name}
                  </span>
                  <span className="text-[9px] text-stone-400 font-mono">
                    {col.hex}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 italic text-center mt-4">
              "Your smile and presence are the most cherished additions to our day."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

