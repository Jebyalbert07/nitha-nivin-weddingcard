import React, { useState, useEffect } from 'react';
import { Menu, X, Image as ImageIcon, HeartHandshake } from 'lucide-react';

export const Navbar = ({ onOpenCardModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Couple', href: '#couple' },
    { name: 'Events', href: '#events' },
    { name: 'Venues', href: '#venues' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Wishes', href: '#guestbook' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'bg-[#faf8f2]/95 backdrop-blur-md shadow-sm border-b border-[#e2d8c3]/60 py-2.5'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-[#8c7035] text-lg font-serif">†</span>
          <span className="font-['Alex_Brush'] text-2xl sm:text-3xl text-[#2d3a2b] group-hover:text-[#8c7035] transition-colors">
            Nitha &amp; Nivin
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#4f5c4e] hover:text-[#8c7035] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCardModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#3c4a3b] border border-[#3c4a3b]/30 rounded-full hover:bg-[#3c4a3b] hover:text-white transition-all duration-200"
          >
            <ImageIcon size={13} />
            <span>View Card</span>
          </button>

          <a
            href="#rsvp"
            className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#2d3a2b] text-[#f7f5ee] rounded-full hover:bg-[#435741] transition-all duration-200 shadow-sm"
          >
            RSVP
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCardModal}
            className="p-1.5 text-[#3c4a3b] rounded-full border border-[#d4c8b2]"
            title="View Original Card"
          >
            <ImageIcon size={16} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#2d3a2b] hover:text-[#8c7035] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f2] border-b border-[#e2d8c3] px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#3b473a] hover:text-[#8c7035] py-1 border-b border-[#ede5d4]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCardModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs uppercase tracking-wider border border-[#2d3a2b] text-[#2d3a2b] rounded-md font-medium"
              >
                <ImageIcon size={14} />
                <span>View Original Card</span>
              </button>
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 text-xs uppercase tracking-wider bg-[#2d3a2b] text-white rounded-md font-medium"
              >
                Confirm Attendance (RSVP)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

