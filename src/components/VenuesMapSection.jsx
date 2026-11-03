import React from 'react';
import { MapPin, Navigation, Car, AlertCircle, ExternalLink } from 'lucide-react';
import { SectionDivider } from './BotanicalDecoration';

export const VenuesMapSection = () => {
  const venues = [
    {
      title: 'Engagement Venue',
      name: 'Morningstar Convention Centre',
      area: 'Elamannoor',
      district: 'Pathanamthitta District, Kerala',
      landmark: 'Main Road frontage, easily accessible from Adoor - Kottarakkara route',
      mapsQuery: 'Morningstar+Convention+Centre+Elamannoor',
      tag: 'Event 1 • Jan 9, 2027'
    },
    {
      title: 'Wedding Ceremony Cathedral',
      name: 'St. Thomas Jacobite Syrian Orthodox Cathedral',
      area: 'Manthalir',
      district: 'Pathanamthitta District, Kerala',
      landmark: 'Historic Syrian Orthodox Cathedral at Manthalir',
      mapsQuery: 'St.+Thomas+Jacobite+Syrian+Orthodox+Cathedral+Manthalir',
      tag: 'Event 2 • Jan 14, 2027'
    },
    {
      title: 'Wedding Reception Hall',
      name: 'St. Thomas Parish Hall',
      area: 'Pandalam',
      district: 'Near Medical Mission Hospital, Pandalam, Kerala',
      landmark: 'Immediately adjacent / near to the Medical Mission Hospital in Pandalam',
      mapsQuery: 'St.+Thomas+Parish+Hall+Pandalam',
      tag: 'Event 3 • Jan 14, 2027'
    }
  ];

  return (
    <section id="venues" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#8c7035] text-xs uppercase tracking-[0.3em] font-semibold font-sans">
          Location &amp; Travel
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl text-[#283629] mt-2 mb-3">
          Venues &amp; Directions
        </h2>
        <p className="text-stone-600 font-serif italic text-sm sm:text-base max-w-xl mx-auto">
          Need help reaching the venues? Here are the locations, landmarks, and navigation links.
        </p>
        <SectionDivider label="🗺" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {venues.map((v, i) => (
          <div
            key={i}
            className="bg-[#faf8f3] rounded-3xl p-6 sm:p-7 border border-[#ded3be] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#8c7035] px-2.5 py-1 bg-[#ede4d2] rounded-full">
                  {v.tag}
                </span>
                <MapPin size={18} className="text-[#8c7035]" />
              </div>

              <h3 className="font-['Cinzel'] text-lg font-bold text-[#273426] mb-1">
                {v.name}
              </h3>
              <p className="text-sm font-semibold text-[#8c7035] uppercase tracking-wide">
                {v.area}
              </p>
              <p className="text-xs text-stone-600 mt-1">
                {v.district}
              </p>

              {/* Landmark note */}
              <div className="mt-4 p-3 bg-white/80 rounded-xl border border-[#e8dfcf] text-xs text-[#4b584a] flex items-start gap-2">
                <AlertCircle size={15} className="text-[#8c7035] shrink-0 mt-0.5" />
                <span>
                  <strong>Landmark:</strong> {v.landmark}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e2d8c5]">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${v.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#2d3a2b] hover:bg-[#3d4f3b] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Navigation size={14} />
                <span>Open in Google Maps</span>
                <ExternalLink size={12} className="opacity-70" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Travel Assistance Notice */}
      <div className="mt-10 bg-[#f4ede1] border border-[#d6c7b0] rounded-2xl p-6 max-w-2xl mx-auto flex items-center gap-4 text-xs text-[#425042]">
        <Car size={26} className="text-[#8c7035] shrink-0" />
        <p className="leading-relaxed">
          Ample parking is available at all three celebration premises. For guests traveling by train or flight, Trivandrum (TRV) &amp; Cochin (COK) are the nearest airports, and Chengannur (CNGR) &amp; Kayamkulam (KYJ) are the convenient railway junctions.
        </p>
      </div>
    </section>
  );
};

