import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Heart, Sparkles } from 'lucide-react';

export const CountdownSection = () => {
  const [activeTarget, setActiveTarget] = useState('wedding'); // 'wedding' | 'engagement'

  const targetDates = {
    engagement: {
      name: 'Engagement Ceremony',
      dateStr: '2027-01-09T11:30:00+05:30',
      label: 'Saturday, 9th January 2027 • 11:30 AM',
      venue: 'Morningstar Convention Centre, Elamannoor'
    },
    wedding: {
      name: 'Holy Matrimony & Reception',
      dateStr: '2027-01-14T10:30:00+05:30',
      label: 'Thursday, 14th January 2027 • 10:30 AM',
      venue: 'St. Thomas Cathedral, Manthalir'
    }
  };

  const calculateTimeLeft = (targetIso) => {
    const difference = +new Date(targetIso) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDates[activeTarget].dateStr));

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDates[activeTarget].dateStr));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDates[activeTarget].dateStr));
    }, 1000);

    return () => clearInterval(timer);
  }, [activeTarget]);

  return (
    <section id="countdown" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      <div className="bg-[#f7f4ed] rounded-3xl p-8 sm:p-12 border border-[#dfd4c0] shadow-md relative overflow-hidden">
        {/* Subtle decorative background ring */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-[#c4a468]/20 pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full border border-[#c4a468]/20 pointer-events-none"></div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-[#8c7035] text-xs uppercase tracking-[0.25em] font-semibold mb-2">
            <Sparkles size={14} />
            <span>Counting Down The Moments</span>
            <Sparkles size={14} />
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-3xl text-[#283629] font-medium tracking-wide">
            Until We Say "I Do"
          </h2>

          {/* Target Event Selector Tabs */}
          <div className="inline-flex p-1 bg-[#ebe4d5] rounded-full my-6 text-xs font-medium">
            <button
              onClick={() => setActiveTarget('wedding')}
              className={`px-5 py-2 rounded-full transition-all duration-200 tracking-wider uppercase font-semibold ${
                activeTarget === 'wedding'
                  ? 'bg-[#2d3a2b] text-white shadow-sm'
                  : 'text-[#5d6b5c] hover:text-[#2d3a2b]'
              }`}
            >
              Wedding Day (Jan 14)
            </button>
            <button
              onClick={() => setActiveTarget('engagement')}
              className={`px-5 py-2 rounded-full transition-all duration-200 tracking-wider uppercase font-semibold ${
                activeTarget === 'engagement'
                  ? 'bg-[#2d3a2b] text-white shadow-sm'
                  : 'text-[#5d6b5c] hover:text-[#2d3a2b]'
              }`}
            >
              Engagement (Jan 9)
            </button>
          </div>

          <p className="text-stone-600 text-xs sm:text-sm font-serif italic mb-8 max-w-md">
            {targetDates[activeTarget].label} <br />
            <span className="text-[#8c7035] font-sans text-xs not-italic font-medium">
              {targetDates[activeTarget].venue}
            </span>
          </p>

          {/* Time Digits Grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-lg w-full mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-sm border border-[#decbb0] rounded-2xl py-4 sm:py-6 px-2 shadow-sm flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-200"
              >
                <span className="font-['Playfair_Display'] text-2xl sm:text-4xl md:text-5xl font-bold text-[#2d3a2b]">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#8c7035] mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-stone-500 text-xs">
            <Heart size={14} className="text-[#8c7035] fill-[#8c7035]" />
            <span className="font-serif italic">Every second brings us closer to celebration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

