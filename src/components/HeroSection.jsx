import React from 'react';
import { Calendar, MapPin, Heart, ArrowDown, Share2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { CornerBotanical } from './BotanicalDecoration';

export const HeroSection = ({ onOpenCardModal }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Wedding of Nitha & Nivin',
        text: 'You are cordially invited to celebrate the engagement and wedding of Nitha Yohannan & Nivin Sunny George.',
        url: window.location.href,
      }).catch((err) => console.log('Share error', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Corner Botanical Foliage matching the invitation card */}
      <CornerBotanical position="top-left" />
      <CornerBotanical position="bottom-right" />

      {/* Subtle luxury parchment background texture & inner border */}
      <div className="relative max-w-3xl w-full mx-auto py-12 px-6 sm:px-12 text-center rounded-2xl bg-[#fcfbfa]/80 backdrop-blur-sm border border-[#e8dfcf] shadow-xl">
        <div className="absolute inset-2 sm:inset-3 border border-[#c4a468]/30 rounded-xl pointer-events-none"></div>

        {/* Holy Cross */}
        <div className="flex flex-col items-center justify-center mb-4">
          <span className="text-[#8c7035] text-3xl font-serif leading-none tracking-widest drop-shadow-sm">
            †
          </span>
          <div className="w-8 h-px bg-[#c4a468] mt-3"></div>
        </div>

        {/* Invitation Text */}
        <div className="space-y-2 mb-6">
          <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.3em] text-[#635c50] uppercase font-medium">
            With Gratitude to God
          </p>
          <p className="font-['Cinzel'] text-[11px] sm:text-xs tracking-[0.2em] text-[#787062] uppercase max-w-xl mx-auto leading-relaxed">
            We cordially invite you to share in our joy as we celebrate the engagement and wedding of
          </p>
        </div>

        {/* Groom Name */}
        <div className="my-6">
          <h2 className="font-['Alex_Brush'] text-5xl sm:text-7xl md:text-8xl text-[#243325] font-normal leading-tight tracking-normal">
            Nivin Sunny George
          </h2>
          <p className="font-['Cinzel'] text-xs uppercase tracking-[0.25em] text-[#8c7035] font-semibold mt-1">
            Kaithakattu Loveland, Kulanada
          </p>
        </div>



        {/* Conjunction with floral flourish */}
        <div className="flex items-center justify-center gap-3 my-4">
          <span className="w-12 h-px bg-[#c4a468]/60"></span>
          <span className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.3em] uppercase text-[#6f675a] font-semibold">
            WITH
          </span>
          <span className="w-12 h-px bg-[#c4a468]/60"></span>
        </div>

        {/* Bride Name in Magnificent Script Font */}
        <div className="my-6">
          <h1 className="font-['Alex_Brush'] text-5xl sm:text-7xl md:text-8xl text-[#243325] font-normal leading-tight tracking-normal">
            Nitha Yohannan
          </h1>
          <p className="font-['Cinzel'] text-xs uppercase tracking-[0.25em] text-[#8c7035] font-semibold mt-1">
            Munjakkara Bhavan, Pattazhy
          </p>
        </div>

        {/* Primary Dates Banner */}
        <div className="my-8 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-[#f3eee4]/90 border border-[#d6c7b0] px-5 py-3 rounded-full text-xs sm:text-sm text-[#3b493a]">
          <div className="flex items-center gap-1.5 font-medium tracking-wide">
            <Calendar size={15} className="text-[#8c7035]" />
            <span>Engagement: <strong>9 Jan 2027</strong></span>
          </div>
          <span className="text-[#c4a468]">•</span>
          <div className="flex items-center gap-1.5 font-medium tracking-wide">
            <Heart size={14} className="text-[#8c7035] fill-[#8c7035]/30" />
            <span>Wedding: <strong>14 Jan 2027</strong></span>
          </div>
          <span className="text-[#c4a468]">•</span>
          <div className="flex items-center gap-1 text-stone-600">
            <MapPin size={14} className="text-[#8c7035]" />
            <span>Kerala, India</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
          <a
            href="#rsvp"
            className="px-6 py-3 bg-[#2d3a2b] hover:bg-[#3d4f3b] text-[#faf7f0] rounded-full text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            RSVP Attendance
          </a>

          <a
            href="#events"
            className="px-6 py-3 bg-white hover:bg-[#f6f2e9] text-[#2d3a2b] border border-[#2d3a2b]/30 rounded-full text-xs uppercase tracking-[0.2em] font-semibold shadow-sm hover:shadow transition-all duration-200"
          >
            Event Schedule
          </a>

          <button
            onClick={onOpenCardModal}
            className="px-4 py-3 bg-transparent hover:bg-[#eadecc]/40 text-[#6f5e3e] border border-[#c4a468]/50 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center gap-1.5"
            title="View original invitation card image"
          >
            <ImageIcon size={14} />
            <span>View Card</span>
          </button>

          <button
            onClick={handleShare}
            className="p-3 text-[#586756] hover:text-[#2d3a2b] hover:bg-[#eadecc]/40 border border-[#d4c8b2] rounded-full transition-colors"
            title="Share Invitation"
            aria-label="Share invitation link"
          >
            <Share2 size={16} />
          </button>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="#countdown"
            className="flex flex-col items-center text-[#7e8c7c] hover:text-[#2d3a2b] transition-colors"
            aria-label="Scroll down to countdown"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium mb-1">Explore Details</span>
            <ArrowDown size={14} className="animate-bounce text-[#8c7035]" />
          </a>
        </div>
      </div>
    </section>
  );
};
