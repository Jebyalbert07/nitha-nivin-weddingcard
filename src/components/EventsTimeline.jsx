import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Navigation, Download, ExternalLink, Sparkles, Check } from 'lucide-react';
import { eventsData, getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { SectionDivider } from './BotanicalDecoration';

export const EventsTimeline = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyVenue = (event) => {
    navigator.clipboard.writeText(`${event.venue}, ${event.location}`);
    setCopiedId(event.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="events" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#8c7035] text-xs uppercase tracking-[0.3em] font-semibold font-sans">
          Schedule of Celebrations
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl text-[#283629] mt-2 mb-3">
          Events &amp; Timings
        </h2>
        <p className="text-stone-600 font-serif italic text-sm sm:text-base max-w-xl mx-auto">
          We look forward to having you with us on these sacred and joyous occasions.
        </p>
        <SectionDivider label="✝" />
      </div>

      {/* Grid replicating the 3 events on the invitation card */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {eventsData.map((ev, index) => {
          return (
            <div
              key={ev.id}
              className="relative bg-[#fbf9f4] rounded-3xl p-6 sm:p-8 border border-[#e2d7c5] shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#c4a468] transition-all duration-300 group"
            >
              {/* Event Header with Custom SVGs matching the card */}
              <div>
                <div className="flex flex-col items-center justify-center mb-6">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-[#f0e9dc] border border-[#d9ccb5] flex items-center justify-center text-[#8c7035] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {ev.type === 'engagement' && (
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Two interlocking engagement rings */}
                        <circle cx="9" cy="12" r="5" />
                        <circle cx="15" cy="12" r="5" />
                        <path d="M8 7 L9 5 L10 7 Z" fill="currentColor" />
                      </svg>
                    )}

                    {ev.type === 'wedding' && (
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Church / Cathedral with cross */}
                        <path d="M12 2v4M10 4h4" />
                        <path d="M12 6l-6 5v9h12v-9z" />
                        <path d="M10 20v-5a2 2 0 0 1 4 0v5" />
                      </svg>
                    )}

                    {ev.type === 'reception' && (
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Two champagne glasses clinking */}
                        <path d="M6 3l2 8a3 3 0 0 0 3 2.5V19h-2v2h6v-2h-2v-5.5A3 3 0 0 0 16 11l2-8" />
                        <line x1="6" y1="3" x2="18" y2="3" />
                        <circle cx="12" cy="7" r="0.5" fill="currentColor" />
                      </svg>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-['Cinzel'] text-xl font-bold tracking-[0.2em] text-[#253225] uppercase mt-4">
                    {ev.shortTitle}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#c4a468]/60 mt-2"></div>
                </div>

                {/* Details Section */}
                <div className="space-y-4 my-6 text-sm">
                  {/* Date */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#efe7d8] text-[#8c7035] shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#8c7035]">
                        {ev.dayName}
                      </span>
                      <p className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#2d3a2b]">
                        {ev.dateDisplay}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#efe7d8] text-[#8c7035] shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#8c7035]">
                        Time
                      </span>
                      <p className="font-semibold text-[#2d3a2b] text-sm sm:text-base">
                        {ev.timeDisplay}
                      </p>
                      {ev.subTimeDisplay && (
                        <span className="text-xs text-stone-500 italic block">
                          ({ev.subTimeDisplay})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#efe7d8] text-[#8c7035] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#8c7035]">
                        Venue &amp; Location
                      </span>
                      <p className="font-bold text-[#2d3a2b] text-sm uppercase leading-snug">
                        {ev.venue}
                      </p>
                      <p className="text-xs text-[#526052] font-medium mt-0.5">
                        {ev.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#e5dcce] space-y-2">
                <a
                  href={ev.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#2d3a2b] hover:bg-[#3f523d] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Navigation size={14} />
                  <span>Get Directions</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getGoogleCalendarUrl(ev)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 bg-white hover:bg-[#f6f2e8] border border-[#d8cbaf] text-[#334032] rounded-xl text-[11px] font-medium tracking-wider uppercase transition-colors"
                    title="Add to Google Calendar"
                  >
                    <Calendar size={13} className="text-[#8c7035]" />
                    <span>Google Cal</span>
                  </a>

                  <button
                    onClick={() => downloadIcsFile(ev)}
                    className="flex items-center justify-center gap-1.5 py-2 px-2 bg-white hover:bg-[#f6f2e8] border border-[#d8cbaf] text-[#334032] rounded-xl text-[11px] font-medium tracking-wider uppercase transition-colors"
                    title="Download Apple / Outlook .ics"
                  >
                    <Download size={13} className="text-[#8c7035]" />
                    <span>.ICS Cal</span>
                  </button>
                </div>

                <button
                  onClick={() => handleCopyVenue(ev)}
                  className="w-full text-center text-[11px] text-stone-500 hover:text-[#2d3a2b] py-1 transition-colors"
                >
                  {copiedId === ev.id ? (
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                      <Check size={12} /> Venue copied to clipboard!
                    </span>
                  ) : (
                    'Copy Venue Address'
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

