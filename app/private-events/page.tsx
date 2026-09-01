'use client';

import type { FormEvent } from 'react';

const options = [
  ['Production & film shoots', 'Flexible mobile sauna rental for film, TV, commercials, photo shoots, music videos and branded content.'],
  ['Multiple sauna trailers', 'Need more capacity? Tell us the number of guests or crew and we’ll confirm what can be arranged.'],
  ['Cold plunge', 'Add a complete hot-and-cold wellness experience with cold-plunge equipment by request.'],
  ['Event & production staff', 'Request support for setup, guest or talent flow, sauna operation and coordination.'],
  ['Delivery & full setup', 'We coordinate placement, heating, setup and pickup around your venue and schedule.'],
  ['Heat & firewood support', 'Wood-fired heat, firewood and operating support can be included in your package.'],
];

function requestData(form: HTMLFormElement) {
  const data = new FormData(form);
  const value = (name: string) => String(data.get(name) || '').trim();
  const yesNo = (name: string) => data.get(name) ? 'Yes' : 'No';
  const subject = value('subject');
  const body = [
    'Custom Event / Production Request — Sauna on Wheels', '',
    `Name: ${value('firstName')} ${value('lastName')}`,
    `Email: ${value('email')}`,
    `Phone / WhatsApp: ${value('phone') || 'Not provided'}`,
    `Event / Project Type: ${value('projectType')}`,
    `Company / Production Company: ${value('company') || 'Not provided'}`,
    `Subject: ${subject}`,
    `Event / shoot date: ${value('eventDate') || 'Not provided'}`,
    `Location: ${value('location') || 'Not provided'}`,
    `Guests / crew size: ${value('guestCount') || 'Not provided'}`,
    `Requested number of saunas: ${value('saunaCount') || 'Not sure yet'}`,
    `Cold plunge requested: ${yesNo('coldPlunge')}`,
    `Event / production staff requested: ${yesNo('staff')}`,
    '', 'Request:', value('request'),
  ].join('\n');
  return { subject, body };
}

export default function PrivateEventsPage() {
  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { subject, body } = requestData(event.currentTarget);
    window.location.href = `mailto:info@saunaonwheels.life?subject=${encodeURIComponent(`[Custom Request] ${subject}`)}&body=${encodeURIComponent(body)}`;
  };

  const sendWhatsApp = () => {
    const form = document.getElementById('private-event-form') as HTMLFormElement | null;
    if (!form || !form.reportValidity()) return;
    const { body } = requestData(form);
    window.open(`https://wa.me/13236107634?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="events-page">
      <header className="events-header">
        <a className="brand events-brand" href="/" aria-label="Sauna on Wheels home">
          <span className="brand-mark">S·W</span>
          <span><strong>SAUNA ON WHEELS</strong><small>WOOD FIRE. OCEAN AIR.</small></span>
        </a>
        <a className="back-link light-link" href="/booking">← Back to booking</a>
      </header>

      <section className="events-hero">
        <img src="/media/interior-people.jpg" alt="Private wood-fired sauna experience" />
        <div className="events-hero-shade" />
        <div className="events-hero-copy">
          <p className="eyebrow">Private events · Film · Production</p>
          <h1>Built around<br /><em>your moment.</em></h1>
          <p>Private parties, corporate wellness, retreats, film and TV, commercial shoots, music videos, and custom activations.</p>
          <a className="primary-button" href="#event-request">Request a custom quote</a>
        </div>
      </section>

      <section className="events-intro">
        <div>
          <p className="eyebrow dark">More than a standard rental</p>
          <h2>One sauna.<br />Endless settings.</h2>
        </div>
        <p>We work directly with private clients, producers, location managers, agencies, wellness teams and event planners to build the right setup around your location, schedule, crew and guest count.</p>
      </section>

      <section className="events-options" aria-label="Custom event options">
        {options.map(([title, copy]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="production-band">
        <p className="eyebrow">Production companies welcome</p>
        <h2>Practical sauna.<br />Picture-ready set piece.<br /><em>Full support.</em></h2>
        <div className="production-tags">
          <span>Film & TV</span><span>Commercials</span><span>Photo shoots</span><span>Music videos</span><span>Branded content</span>
        </div>
      </section>

      <section className="event-request" id="event-request">
        <div className="event-form-intro">
          <p className="eyebrow dark">Tell us what you need</p>
          <h2>Request a<br /><em>custom quote.</em></h2>
          <p>Share your project details and we’ll follow up directly about availability, logistics and pricing. No payment is collected here.</p>
          <div className="direct-contact">
            <span>Prefer to talk directly?</span>
            <a href="mailto:info@saunaonwheels.life">info@saunaonwheels.life</a>
            <a href="https://wa.me/13236107634" target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>

        <form id="private-event-form" className="event-form" onSubmit={sendEmail}>
          <div className="form-row">
            <label>First name *<input name="firstName" autoComplete="given-name" required /></label>
            <label>Last name *<input name="lastName" autoComplete="family-name" required /></label>
          </div>
          <div className="form-row">
            <label>Email *<input name="email" type="email" autoComplete="email" required /></label>
            <label>Phone / WhatsApp <small>optional</small><input name="phone" type="tel" autoComplete="tel" /></label>
          </div>
          <div className="form-row">
            <label>Event / project type *
              <select name="projectType" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Private Event</option><option>Corporate Wellness</option><option>Film / TV Production</option>
                <option>Commercial / Branded Content</option><option>Photo Shoot</option><option>Music Video</option>
                <option>Retreat / Wellness Activation</option><option>Other</option>
              </select>
            </label>
            <label>Company <small>optional</small><input name="company" autoComplete="organization" placeholder="Company name" /></label>
          </div>
          <label>Subject *<input name="subject" placeholder="Example: Commercial shoot in Los Angeles" required /></label>
          <div className="form-row">
            <label>Event / shoot date <small>optional</small><input name="eventDate" type="date" /></label>
            <label>City / location <small>optional</small><input name="location" placeholder="City, venue or production location" /></label>
          </div>
          <div className="form-row">
            <label>Guests / crew size <small>optional</small><input name="guestCount" type="number" min="1" placeholder="Example: 40" /></label>
            <label>How many saunas? <small>optional</small>
              <select name="saunaCount" defaultValue="Not sure yet"><option>Not sure yet</option><option>1</option><option>2</option><option>3</option><option>4+</option></select>
            </label>
          </div>
          <div className="event-checks">
            <label><input name="coldPlunge" type="checkbox" /> Interested in cold plunge</label>
            <label><input name="staff" type="checkbox" /> Interested in event / production staff</label>
          </div>
          <label>Tell us about your event or production *
            <textarea name="request" required placeholder="Describe the event, schedule, venue access, intended sauna use, what you would like us to provide, and any special requests." />
          </label>
          <div className="event-actions">
            <button type="submit">Send request by email <span>↗</span></button>
            <button type="button" className="whatsapp" onClick={sendWhatsApp}>Send via WhatsApp <span>↗</span></button>
          </div>
          <p className="form-disclaimer">Your email or WhatsApp app opens with the request already filled in.</p>
        </form>
      </section>

      <footer className="booking-footer events-footer">
        <span>© 2026 Sauna on Wheels</span>
        <div className="footer-socials">
          <a href="https://www.instagram.com/saunaonwheels.life" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://wa.me/13236107634" target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
        <span>Orange County · Los Angeles · By request</span>
      </footer>
    </main>
  );
}
