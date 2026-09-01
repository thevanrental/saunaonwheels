import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Sauna | Sauna on Wheels',
  description: 'Book a 3-hour or full-day private mobile wood-fired sauna experience in Orange County.',
  keywords: ['book mobile sauna Orange County', 'private sauna rental Orange County', '3 hour sauna rental', 'full day sauna rental'],
  alternates: { canonical: '/booking/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Book Your Sauna | Sauna on Wheels',
    description: 'Choose a Sauna on Wheels rental option in Orange County or Los Angeles.',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'Book Your Sauna | Sauna on Wheels',
    description: 'Choose a Sauna on Wheels rental option in Orange County or Los Angeles.',
    images: [],
  },
};

const bookingOptions = [
  {
    eyebrow: 'Orange County private session',
    name: '3-hour private sauna',
    price: '$450',
    unit: '3 hours',
    description: 'Orange County pricing for a complete private sauna experience, delivered and ready when you arrive.',
    includes: ['Orange County delivery and pickup', 'Full setup', 'Heating and firewood', 'Two venik bundles'],
    href: 'https://buy.stripe.com/7sYaEXgzMfoZd987rf2kw05',
    cta: 'Reserve 3 hours',
    featured: true,
  },
  {
    eyebrow: 'Orange County full-day experience',
    name: 'Full-day private sauna',
    price: '$600',
    unit: 'full day',
    description: 'Orange County pricing for a full day — ideal for longer gatherings, celebrations, and an unhurried reset.',
    includes: ['Orange County delivery and pickup', 'Full setup', 'Heating and firewood', 'Two venik bundles'],
    href: 'https://buy.stripe.com/fZu6oH5V8ccNd9826V2kw04',
    cta: 'Reserve full day',
  },
];

export default function BookingPage() {
  return (
    <main className="booking-page">
      <header className="booking-header">
        <a className="brand booking-brand" href="/" aria-label="Sauna on Wheels home">
          <span className="brand-mark">S·W</span>
          <span><strong>SAUNA ON WHEELS</strong><small>WOOD FIRE. OCEAN AIR.</small></span>
        </a>
        <a className="back-link" href="/">← Back to the experience</a>
      </header>

      <section className="booking-hero">
        <div>
          <p className="eyebrow dark">Choose your heat</p>
          <h1>Book your<br /><em>sauna.</em></h1>
        </div>
        <p>Two fully delivered private sauna experiences for Orange County. Los Angeles and other locations are available by custom quote.</p>
      </section>

      <section className="booking-grid" aria-label="Sauna rental options">
        {bookingOptions.map((option) => (
          <article className={`booking-card ${option.featured ? 'featured' : ''}`} key={option.name}>
            {option.featured && <span className="popular">Most popular</span>}
            <p className="card-eyebrow">{option.eyebrow}</p>
            <h2>{option.name}</h2>
            <div className="price"><strong>{option.price}</strong><span>{option.unit}</span></div>
            <p className="card-description">{option.description}</p>
            <ul>
              {option.includes.map((item) => <li key={item}><span>✓</span>{item}</li>)}
            </ul>
            <a className="booking-button" href={option.href} target="_blank" rel="noreferrer">
              {option.cta}<span>↗</span>
            </a>
          </article>
        ))}
      </section>

      <section className="custom-event">
        <div>
          <p className="eyebrow">Something bigger?</p>
          <h2>Private events<br />& custom experiences.</h2>
        </div>
        <div>
          <p>Multiple saunas, cold plunge, event staff, mountain delivery, and custom setups are available by request.</p>
          <a className="primary-button light" href="/private-events">Plan an event</a>
        </div>
      </section>

      <section className="booking-note">
        <span>Questions before booking?</span>
        <a href="mailto:info@saunaonwheels.life">info@saunaonwheels.life ↗</a>
      </section>

      <footer className="booking-footer">
        <span>© 2026 Sauna on Wheels</span>
        <div className="footer-socials">
          <a href="https://www.instagram.com/saunaonwheels.life" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://wa.me/13236107634" target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
        <span>Orange County first · Los Angeles too</span>
      </footer>
    </main>
  );
}
