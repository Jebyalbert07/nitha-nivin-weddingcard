import React, { useState } from 'react';
import { Phone, MessageCircle, Heart, Share2, Check, ArrowUp, MapPin } from 'lucide-react';
import { SectionDivider } from './BotanicalDecoration';

export const ContactFooter = ({ onOpenCardModal }) => {
  const [copied, setCopied] = useState(false);

  const handleShareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Nitha & Nivin Wedding Invitation',
        text: 'Join us in celebrating the holy matrimony and engagement of Nitha & Nivin.',
        url: window.location.href,
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#243125] text-[#e8e4dc] pt-16 pb-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Top golden accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c4a468] to-transparent"></div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#c4a468] text-2xl font-serif block mb-1">†</span>
          <h2 className="font-['Alex_Brush'] text-5xl sm:text-6xl text-[#f5eedf]">
            Nitha &amp; Nivin
          </h2>
          <p className="font-['Cinzel'] text-xs uppercase tracking-[0.3em] text-[#c4a468] mt-2">
            14th January 2027 • Kerala
          </p>
          <p className="text-xs text-stone-300 font-serif italic mt-3 max-w-md mx-auto">
            "Your presence, prayers, and blessings are our greatest wedding gift."
          </p>
        </div>

        {/* Contact Assistance Cards (Bride's family & Groom's family) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Bride Family Contact */}
          <div className="bg-[#2f3e30] rounded-2xl p-6 border border-[#445846] text-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#c4a468] block mb-1">
              Bride's Family Helpline
            </span>
            <h4 className="font-['Cinzel'] text-base font-bold text-white mb-1">
              Munjakkara Bhavan
            </h4>
            <p className="text-xs text-stone-300 mb-4 flex items-center justify-center gap-1">
              <MapPin size={12} className="text-[#c4a468]" />
              <span>Panthaplavu, Pattazhy</span>
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="tel:+919447549348"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3c4e3e] hover:bg-[#4d634f] text-white rounded-lg text-xs transition-colors"
              >
                <Phone size={13} className="text-[#c4a468]" />
                <span>Call Family</span>
              </a>
              <a
                href="https://wa.me/?text=Hello%2C+reaching+out+regarding+Nitha+%26+Nivin%27s+wedding."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25d366]/20 hover:bg-[#25d366]/30 text-[#69f0ae] border border-[#25d366]/40 rounded-lg text-xs transition-colors"
              >
                <MessageCircle size={13} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Groom Family Contact */}
          <div className="bg-[#2f3e30] rounded-2xl p-6 border border-[#445846] text-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#c4a468] block mb-1">
              Groom's Family Helpline
            </span>
            <h4 className="font-['Cinzel'] text-base font-bold text-white mb-1">
              Kaithakattu Loveland
            </h4>
            <p className="text-xs text-stone-300 mb-4 flex items-center justify-center gap-1">
              <MapPin size={12} className="text-[#c4a468]" />
              <span>Kulanada</span>
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="tel:+918075017390"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3c4e3e] hover:bg-[#4d634f] text-white rounded-lg text-xs transition-colors"
              >
                <Phone size={13} className="text-[#c4a468]" />
                <span>Call Family</span>
              </a>
              <a
                href="https://wa.me/?text=Hello%2C+reaching+out+regarding+Nitha+%26+Nivin%27s+wedding."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25d366]/20 hover:bg-[#25d366]/30 text-[#69f0ae] border border-[#25d366]/40 rounded-lg text-xs transition-colors"
              >
                <MessageCircle size={13} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links & Share */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-6 border-t border-[#374938] text-xs">
          <button
            onClick={onOpenCardModal}
            className="text-stone-300 hover:text-[#c4a468] transition-colors"
          >
            View Official Printed Card
          </button>
          <span className="text-stone-600">•</span>
          <a href="#events" className="text-stone-300 hover:text-[#c4a468] transition-colors">
            Event Schedule
          </a>
          <span className="text-stone-600">•</span>
          <a href="#venues" className="text-stone-300 hover:text-[#c4a468] transition-colors">
            Venues &amp; Directions
          </a>
          <span className="text-stone-600">•</span>
          <a href="#gallery" className="text-stone-300 hover:text-[#c4a468] transition-colors">
            Moments Gallery
          </a>
          <span className="text-stone-600">•</span>
          <a href="#rsvp" className="text-stone-300 hover:text-[#c4a468] transition-colors">
            RSVP Attendance
          </a>
          <span className="text-stone-600">•</span>
          <button
            onClick={handleShareLink}
            className="inline-flex items-center gap-1 text-[#c4a468] hover:underline"
          >
            {copied ? <Check size={13} /> : <Share2 size={13} />}
            <span>{copied ? 'Link Copied!' : 'Share Invitation'}</span>
          </button>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="mt-8 flex flex-col items-center justify-between text-[15px] text-stone-400 border-t border-[#374938] pt-6 gap-5">
          <p>
            With Love &amp; Gratitude • Jaison, Nisha, Johann, Nivya, Stalin &amp; John Yohannan.
          </p>


          <p>
            Crafted with ❤️ by <a href="https://quininfosolutions.com" target="_blank"> Quin Info Solutions </a>
          </p>
          <p>
            Crafted with ❤️ by <a href="https://quininfosolutions.com" target="_blank"> Quin Info Solutions </a> </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#c4a468] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer >
  );
};

