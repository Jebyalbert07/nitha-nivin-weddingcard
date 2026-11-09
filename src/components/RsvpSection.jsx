import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart, Users, CalendarCheck, Utensils, MessageCircle, RefreshCw } from 'lucide-react';
import { SectionDivider } from './BotanicalDecoration';

export const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: 'attending', // 'attending' | 'declined' | 'uncertain'
    events: {
      engagement: true,
      wedding: true,
      reception: true
    },
    guestCount: '2',
    mealPreference: 'traditional_feast', // 'traditional_feast' | 'vegetarian' | 'drinks_only'
    drinkChoice: 'Wine & Champagne',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('nitha_nivin_rsvp');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSubmittedData(parsed);
        setSubmitted(true);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventCheckbox = (eventName) => {
    setFormData((prev) => ({
      ...prev,
      events: {
        ...prev.events,
        [eventName]: !prev.events[eventName]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }

    // Launch celebratory confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#c9a562', '#4a6350', '#8c7035', '#ffffff']
    });

    const submission = {
      ...formData,
      submittedAt: new Date().toISOString()
    };

    localStorage.setItem('nitha_nivin_rsvp', JSON.stringify(submission));
    setSubmittedData(submission);
    setSubmitted(true);
  };

  const handleReset = () => {
    localStorage.removeItem('nitha_nivin_rsvp');
    setSubmitted(false);
    setSubmittedData(null);
  };

  const getWhatsAppRsvpUrl = () => {
    const data = submittedData || formData;
    const statusText =
      data.attendance === 'attending'
        ? 'Joyfully Accepts'
        : data.attendance === 'declined'
          ? 'Regretfully Declines'
          : 'Will Confirm Later';

    const eventsList = [];
    if (data.events.engagement) eventsList.push('Engagement (9 Jan)');
    if (data.events.wedding) eventsList.push('Wedding Ceremony (14 Jan)');
    if (data.events.reception) eventsList.push('Reception (14 Jan)');

    const message = `*Wedding RSVP for Nitha & Nivin*\n` +
      `Guest Name: ${data.name}\n` +
      `Status: ${statusText}\n` +
      `Attending Events: ${eventsList.join(', ') || 'None'}\n` +
      `Number of Guests: ${data.guestCount}\n` +
      `Food/Drink: ${data.mealPreference} / ${data.drinkChoice}\n` +
      (data.message ? `Personal Note: "${data.message}"` : '');

    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="rsvp" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#8c7035] text-xs uppercase tracking-[0.3em] font-semibold font-sans">
          Be Our Honored Guest
        </span>
        <h2 className="font-['Cinzel'] text-3xl sm:text-4xl text-[#283629] mt-2 mb-3">
          RSVP &amp; Attendance
        </h2>
        <p className="text-stone-600 font-serif italic text-sm sm:text-base max-w-xl mx-auto">
          Kindly respond by 25th December 2026 to help us prepare for your gracious presence.
        </p>
        <SectionDivider label="💌" />
      </div>

      <div className="bg-[#faf8f3] rounded-3xl p-6 sm:p-10 border border-[#dfd5c4] shadow-lg">
        {submitted && submittedData ? (
          /* Confirmation Screen */
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 bg-[#eaf4eb] border border-[#a3c9a8] rounded-full flex items-center justify-center mx-auto text-[#3d6942] mb-4">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="font-['Cinzel'] text-2xl font-bold text-[#2d3a2b] mb-2">
              Thank You, {submittedData.name}!
            </h3>

            <p className="text-stone-600 font-serif italic text-sm sm:text-base mb-6 max-w-md mx-auto">
              {submittedData.attendance === 'attending'
                ? 'Your RSVP has been joyfully recorded. We eagerly await celebrating our special days with you!'
                : submittedData.attendance === 'declined'
                  ? 'Thank you for letting us know. Your prayers and blessings mean the world to us.'
                  : 'Thank you for letting us know! Please confirm when your schedule is finalized.'}
            </p>

            {/* Summary Voucher */}
            <div className="bg-white rounded-2xl p-6 border border-[#decbb0] max-w-md mx-auto text-left shadow-sm mb-6 text-xs sm:text-sm text-[#3b473a] space-y-2">
              <div className="flex justify-between border-b pb-2 border-stone-200">
                <span className="text-stone-500 font-medium">Status</span>
                <span className="font-semibold text-[#8c7035] uppercase">
                  {submittedData.attendance === 'attending' ? 'Attending' : submittedData.attendance}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2 border-stone-200">
                <span className="text-stone-500 font-medium">Guests Count</span>
                <span className="font-semibold">{submittedData.guestCount} Guest(s)</span>
              </div>
              <div className="flex justify-between border-b pb-2 border-stone-200">
                <span className="text-stone-500 font-medium">Events Selected</span>
                <span className="font-medium text-right">
                  {[
                    submittedData.events.engagement && 'Engagement',
                    submittedData.events.wedding && 'Wedding',
                    submittedData.events.reception && 'Reception'
                  ]
                    .filter(Boolean)
                    .join(', ')}
                </span>
              </div>
              {submittedData.message && (
                <div className="pt-2 italic text-stone-600">
                  "{submittedData.message}"
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={getWhatsAppRsvpUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors"
              >
                <MessageCircle size={15} />
                <span>Send to Family via WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full text-xs font-medium uppercase tracking-wider transition-colors"
              >
                <RefreshCw size={13} />
                <span>Update RSVP</span>
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Guest Name & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#455444] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Thomas Varghese & Family"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d6c9b4] bg-white focus:outline-none focus:ring-2 focus:ring-[#8c7035] text-sm text-[#2d3a2b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#455444] mb-1.5">
                  Mobile / WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d6c9b4] bg-white focus:outline-none focus:ring-2 focus:ring-[#8c7035] text-sm text-[#2d3a2b]"
                />
              </div>
            </div>

            {/* Attendance Status (Inspired by template2.tilda.ws) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#455444] mb-2">
                Will you be attending? *
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { value: 'attending', label: 'Yes, I will attend! 🎉', desc: 'Joyfully accepting' },
                  { value: 'declined', label: 'Unfortunately cannot 🕊', desc: 'Sending warm blessings' },
                  { value: 'uncertain', label: 'Will tell you later ⏳', desc: 'Confirming soon' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`cursor-pointer border rounded-2xl p-3.5 flex flex-col justify-center transition-all ${formData.attendance === option.value
                        ? 'border-[#8c7035] bg-[#f2e9d8] shadow-sm'
                        : 'border-[#ded4c3] bg-white hover:bg-[#faf7f0]'
                      }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      checked={formData.attendance === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold text-[#2d3a2b]">{option.label}</span>
                    <span className="text-[11px] text-stone-500 mt-0.5">{option.desc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Events Selection */}
            {formData.attendance === 'attending' && (
              <div className="space-y-4 pt-2 border-t border-[#ede5d5] animate-fadeIn">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#455444]">
                  Which events will you join?
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-[#ded4c3] bg-white cursor-pointer hover:bg-[#fcfaf5]">
                    <input
                      type="checkbox"
                      checked={formData.events.engagement}
                      onChange={() => handleEventCheckbox('engagement')}
                      className="w-4 h-4 accent-[#2d3a2b]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#2d3a2b] block">Engagement</span>
                      <span className="text-[10px] text-stone-500">Sat, 9 Jan 2027</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border border-[#ded4c3] bg-white cursor-pointer hover:bg-[#fcfaf5]">
                    <input
                      type="checkbox"
                      checked={formData.events.wedding}
                      onChange={() => handleEventCheckbox('wedding')}
                      className="w-4 h-4 accent-[#2d3a2b]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#2d3a2b] block">Wedding Ceremony</span>
                      <span className="text-[10px] text-stone-500">Thu, 14 Jan 2027</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl border border-[#ded4c3] bg-white cursor-pointer hover:bg-[#fcfaf5]">
                    <input
                      type="checkbox"
                      checked={formData.events.reception}
                      onChange={() => handleEventCheckbox('reception')}
                      className="w-4 h-4 accent-[#2d3a2b]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#2d3a2b] block">Reception</span>
                      <span className="text-[10px] text-stone-500">Thu, 14 Jan 2027</span>
                    </div>
                  </label>
                </div>

                {/* Guest Count & Drink Choice (from template2.tilda.ws) */}
                {/* <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#455444] mb-1.5">
                      Total Attending Guests
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#d6c9b4] bg-white focus:outline-none focus:ring-2 focus:ring-[#8c7035] text-sm text-[#2d3a2b]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5+">5+ Family Members</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#455444] mb-1.5">
                      Beverage Preference (Template2 Feature)
                    </label>
                    <select
                      name="drinkChoice"
                      value={formData.drinkChoice}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#d6c9b4] bg-white focus:outline-none focus:ring-2 focus:ring-[#8c7035] text-sm text-[#2d3a2b]"
                    >
                      <option value="Champagne & Wine">Champagne &amp; Wine</option>
                      <option value="Non-alcoholic / Fresh Juices">Non-Alcoholic &amp; Fresh Juices</option>
                      <option value="Traditional Welcome Drinks">Traditional Welcome Drinks</option>
                      <option value="Coffee & Tea">Authentic Filter Coffee &amp; Tea</option>
                    </select>
                  </div>
                </div> */}
              </div>
            )}

            {/* Wishes / Personal Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#455444] mb-1.5">
                Congratulatory Note / Prayer for Nitha &amp; Nivin
              </label>
              <textarea
                name="message"
                rows="3"
                placeholder="Leave your sweet blessings or wishes..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-[#d6c9b4] bg-white focus:outline-none focus:ring-2 focus:ring-[#8c7035] text-sm text-[#2d3a2b]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#2d3a2b] hover:bg-[#3d4f3b] text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                <Send size={15} />
                <span>Confirm My RSVP</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

