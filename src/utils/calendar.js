// Helper functions for calendar integration

export const eventsData = [
  {
    id: 'engagement',
    title: 'Engagement: Nitha & Nivin',
    shortTitle: 'Engagement Ceremony',
    dayName: 'SATURDAY',
    dateDisplay: '9th JANUARY 2027',
    isoDate: '2027-01-09T11:30:00+05:30',
    timeDisplay: '11:30 AM',
    endTimeDisplay: '02:00 PM',
    venue: 'Morningstar Convention Centre',
    location: 'Elamannoor, Kerala',
    fullAddress: 'Morningstar Convention Centre, Elamannoor, Kerala, India',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Morningstar+Convention+Centre+Elamannoor',
    type: 'engagement',
    description: 'Cordially invite you to the Engagement Ceremony of Nitha Yohannan and Nivin Sunny George at Morningstar Convention Centre, Elamannoor.',
    startGCal: '20270109T060000Z', // 11:30 AM IST is 06:00 UTC
    endGCal: '20270109T083000Z',   // 02:00 PM IST is 08:30 UTC
  },
  {
    id: 'wedding',
    title: 'Holy Matrimony: Nitha & Nivin',
    shortTitle: 'Holy Matrimony (Wedding)',
    dayName: 'THURSDAY',
    dateDisplay: '14th JANUARY 2027',
    isoDate: '2027-01-14T10:30:00+05:30',
    timeDisplay: '10:30 AM',
    endTimeDisplay: '12:30 PM',
    venue: 'St. Thomas Jacobite Syrian Orthodox Cathedral',
    location: 'Manthalir, Kerala',
    fullAddress: 'St. Thomas Jacobite Syrian Orthodox Cathedral, Manthalir, Kerala, India',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=St.+Thomas+Jacobite+Syrian+Orthodox+Cathedral+Manthalir',
    type: 'wedding',
    description: 'Cordially invite you to celebrate the Holy Matrimony of Nitha Yohannan and Nivin Sunny George at St. Thomas Jacobite Syrian Orthodox Cathedral, Manthalir.',
    startGCal: '20270114T050000Z', // 10:30 AM IST is 05:00 UTC
    endGCal: '20270114T070000Z',   // 12:30 PM IST is 07:00 UTC
  },
  {
    id: 'reception',
    title: 'Wedding Reception: Nitha & Nivin',
    shortTitle: 'Wedding Reception',
    dayName: 'THURSDAY',
    dateDisplay: '14th JANUARY 2027',
    isoDate: '2027-01-14T12:30:00+05:30',
    timeDisplay: '12:30 PM',
    subTimeDisplay: 'Soon after the wedding',
    endTimeDisplay: '04:00 PM',
    venue: 'St. Thomas Parish Hall',
    location: 'Pandalam (Near Medical Mission Hospital)',
    fullAddress: 'St. Thomas Parish Hall, Pandalam (Near Medical Mission Hospital), Kerala, India',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=St.+Thomas+Parish+Hall+Pandalam',
    type: 'reception',
    description: 'Join us for the Wedding Reception & Feast of Nitha Yohannan and Nivin Sunny George at St. Thomas Parish Hall, Pandalam.',
    startGCal: '20270114T070000Z', // 12:30 PM IST is 07:00 UTC
    endGCal: '20270114T103000Z',   // 04:00 PM IST is 10:30 UTC
  }
];

export function getGoogleCalendarUrl(event) {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const text = encodeURIComponent(event.title);
  const details = encodeURIComponent(event.description);
  const location = encodeURIComponent(event.fullAddress);
  const dates = `${event.startGCal}/${event.endGCal}`;
  return `${base}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}

export function downloadIcsFile(event) {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Nitha & Nivin Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}-20270114@nitha-nivin-wedding.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${event.startGCal}`,
    `DTEND:${event.endGCal}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.fullAddress}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${event.id}-nitha-nivin-wedding.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

