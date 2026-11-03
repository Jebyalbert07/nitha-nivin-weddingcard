import React from 'react';
import { Heart, Home, Users, BookOpen } from 'lucide-react';
import { SectionDivider } from './BotanicalDecoration';
import { CoupleGallery } from './CoupleGallery';

export const CoupleSection = () => {
  return (
    <section id="couple" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#8c7035] text-xs uppercase tracking-[0.3em] font-semibold font-sans">
          The Blessed Union
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl text-[#283629] mt-2 mb-3">
          The Bride &amp; Groom
        </h2>
        <p className="text-stone-600 font-serif italic text-sm sm:text-base max-w-xl mx-auto">
          "Together with our families, we invite you to celebrate the bond of love ordained by God."
        </p>
        <SectionDivider label="†" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
        {/* Bride Card */}
        <div className="relative bg-[#faf8f3] rounded-3xl p-8 sm:p-10 border border-[#dfd5c4] shadow-md flex flex-col justify-between hover:border-[#c4a468] transition-all duration-300">
          <div className="absolute top-4 right-5 text-[10px] font-sans font-semibold tracking-widest text-[#8c7035] uppercase px-3 py-1 bg-[#ede4d2] rounded-full">
            The Bride
          </div>

          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#c4a468] shadow-md shrink-0 bg-stone-100">
                <img
                  src="/gallery/nitha_Single.jpeg"
                  alt="Nitha Yohannan"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="font-serif italic text-stone-500 text-sm">Meet</span>
                <h3 className="font-['Alex_Brush'] text-4xl sm:text-5xl text-[#243325] leading-tight my-0.5">
                  Nitha Yohannan
                </h3>
                <span className="text-[11px] font-['Cinzel'] uppercase tracking-wider text-[#8c7035] font-semibold">
                  Munjakkara Bhavan
                </span>
              </div>
            </div>

            <div className="space-y-4 my-6 text-sm text-[#445243]">
              <div className="flex items-start gap-3">
                <Users size={18} className="text-[#8c7035] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#8c7035]">
                    Daughter of
                  </span>
                  <p className="font-medium text-[#2d3a2b] leading-relaxed">
                    Late Mr. Mathew Yohannan <br />
                    &amp; Mrs. Rosamma Yohannan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home size={18} className="text-[#8c7035] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#8c7035]">
                    Family Residence
                  </span>
                  <p className="font-medium text-[#2d3a2b]">
                    Munjakkara Bhavan, Panthaplavu, Pattazhy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#e5dcce] text-xs text-stone-500 font-serif italic text-center">
            "Every good and perfect gift is from above, coming down from the Father of the heavenly lights." — James 1:17
          </div>
        </div>

        {/* Groom Card */}
        <div className="relative bg-[#faf8f3] rounded-3xl p-8 sm:p-10 border border-[#dfd5c4] shadow-md flex flex-col justify-between hover:border-[#c4a468] transition-all duration-300">
          <div className="absolute top-4 right-5 text-[10px] font-sans font-semibold tracking-widest text-[#8c7035] uppercase px-3 py-1 bg-[#ede4d2] rounded-full">
            The Groom
          </div>

          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#c4a468] shadow-md shrink-0 bg-stone-100">
                <img
                  src="/gallery/nivin single.jpeg"
                  alt="Nivin Sunny George"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="font-serif italic text-stone-500 text-sm">Meet</span>
                <h3 className="font-['Alex_Brush'] text-4xl sm:text-5xl text-[#243325] leading-tight my-0.5">
                  Nivin Sunny George
                </h3>
                <span className="text-[11px] font-['Cinzel'] uppercase tracking-wider text-[#8c7035] font-semibold">
                  Kaithakattu Loveland
                </span>
              </div>
            </div>

            <div className="space-y-4 my-6 text-sm text-[#445243]">
              <div className="flex items-start gap-3">
                <Users size={18} className="text-[#8c7035] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#8c7035]">
                    Son of
                  </span>
                  <p className="font-medium text-[#2d3a2b] leading-relaxed">
                    Late Mr. Sunny George <br />
                    &amp; Mrs. Susan John
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home size={18} className="text-[#8c7035] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#8c7035]">
                    Family Residence
                  </span>
                  <p className="font-medium text-[#2d3a2b]">
                    Kaithakattu Loveland, Kulanada
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#e5dcce] text-xs text-stone-500 font-serif italic text-center">
            "Two are better than one, because they have a good return for their labor." — Ecclesiastes 4:9
          </div>
        </div>
      </div>

      {/* 4-Photo Showcase Gallery for Bride & Groom (< 5 photos) */}
      <CoupleGallery />

      {/* Biblical Blessing Banner */}
      <div className="mt-14 bg-white/80 border border-[#decbb0] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-center shadow-sm">
        <BookOpen size={20} className="text-[#8c7035] mx-auto mb-2" />
        <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-[#2c382b] italic leading-relaxed">
          "Therefore what God has joined together, let no one separate."
        </p>
        <span className="font-['Cinzel'] text-xs uppercase tracking-widest text-[#8c7035] font-semibold mt-2 block">
          Mark 10:9
        </span>
      </div>
    </section>
  );
};


