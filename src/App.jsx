import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { CoupleSection } from './components/CoupleSection';
import { EventsTimeline } from './components/EventsTimeline';
import { VenuesMapSection } from './components/VenuesMapSection';
import { WeddingMomentsGallery } from './components/WeddingMomentsGallery';
import { DressCodeSection } from './components/DressCodeSection';
import { RsvpSection } from './components/RsvpSection';
import { WishesGuestbook } from './components/WishesGuestbook';
import { ContactFooter } from './components/ContactFooter';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { EnvelopeModal } from './components/EnvelopeModal';
import { CardViewerModal } from './components/CardViewerModal';

export function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showCardModal, setShowCardModal] = useState(false);

  // Check if visitor has opened envelope in this session
  useEffect(() => {
    const hasOpened = sessionStorage.getItem('nitha_envelope_opened');
    if (hasOpened === 'true') {
      setShowEnvelope(false);
    }
  }, []);

  const handleCloseEnvelope = () => {
    sessionStorage.setItem('nitha_envelope_opened', 'true');
    setShowEnvelope(false);
  };

  return (
    <div className="relative min-h-screen bg-[#f7f4ed] text-[#2c382b] selection:bg-[#dfc89d] selection:text-[#253225]">
      {/* Interactive Envelope Greeting Modal */}
      <EnvelopeModal
        isOpen={showEnvelope}
        onClose={handleCloseEnvelope}
      />

      {/* Lightbox / Modal for Official Printed Wedding Card */}
      <CardViewerModal
        isOpen={showCardModal}
        onClose={() => setShowCardModal(false)}
      />

      {/* Floating Audio Controller */}
      <FloatingMusicPlayer />

      {/* Sticky Luxury Navigation Bar */}
      <Navbar onOpenCardModal={() => setShowCardModal(true)} />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Hero & Official Invitation Banner */}
        <HeroSection onOpenCardModal={() => setShowCardModal(true)} />

        {/* Live Countdown to Wedding & Engagement */}
        <CountdownSection />

        {/* The Couple, Parents, Family Residences & Bible Blessings */}
        <CoupleSection />

        {/* Celebrations Schedule: Engagement, Holy Matrimony & Reception */}
        <EventsTimeline />

        {/* Venues, Route Guidance & Google Maps Links */}
        <VenuesMapSection />

        {/* Wedding Moments & Memories Gallery Section */}
        {/* <WeddingMomentsGallery /> */}

        {/* Dress Code & Theme Color Palette (Inspired by template2.tilda.ws) */}
        {/* <DressCodeSection /> */}

        {/* Interactive RSVP Submission with Confetti & WhatsApp Share */}
        <RsvpSection />

        {/* Live Wishes & Blessings Guestbook */}
        <WishesGuestbook />
      </main>

      {/* Contact Information & Footer */}
      <ContactFooter onOpenCardModal={() => setShowCardModal(true)} />
    </div>
  );
}

export default App;
