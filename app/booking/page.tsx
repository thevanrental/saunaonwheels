import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Sauna | Sauna on Wheels',
  description: 'Choose a Sauna on Wheels rental option in Orange County or Los Angeles.',
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
    eyebrow: 'Pick it up in Brea',
    name: 'Sauna trailer rental',
    price: '$250',
    unit: 'rental',
    description: 'Trailer rental only. Pick up the sauna from our Brea location and create the experience on your schedule.',
    includes: ['Sauna trailer', 'Harvia wood-fired stove', 'Off-grid lighting', 'Book securely on Towlos'],
    href: 'https://towlos.com/listing/enclosed-trailer/united-states/brea-ca/102602',
    cta: 'Book on Towlos',
  },
  {
    eyebrow: 'Flexible overnight option',
    name: 'Outdoorsy rental',
    price: '$300',
    unit: 'per night',
    description: 'Reserve through Outdoorsy with delivery availability and platform-supported booking.',
    includes: ['Delivery available', 'Sauna essentials', 'Two venik bundles', 'Book securely on Outdoorsy'],
    href: 'https://www.outdoorsy.com/rv-rental/brea_ca/2026_saw_carrier_549352-listing',
    cta: 'Book on Outdoorsy',
  },
  {
    eyebrow: 'Our essential private session',
    name: '3-hour private sauna',
    price: '$450',
    unit: '3 hours',
    description: 'A complete private sauna experience delivered to your location and ready when you arrive.',
    includes: ['Delivery and pickup', 'Full setup', 'Heating and firewood', 'Two venik bundles'],
    href: 'https://buy.stripe.com/7sYaEXgzMfoZd987rf2kw05',
    cta: 'Reserve 3 hours',
    featured: true,
  },
  {
    eyebrow: 'More time to slow down',
    name: 'Full-day private sauna',
    price: '$600',
    unit: 'full day',
    description: 'Keep the sauna for the day — ideal for longer gatherings, celebrations, and an unhurried reset.',
    includes: ['Delivery and pickup', 'Full setup', 'Heating and firewood', 'Two venik bundles'],
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
        <p>Four ways to bring real wood-fired heat into your day — from a simple trailer pickup to a fully delivered private experience.</p>
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
        <span>Orange County first · Los Angeles too</span>
      </footer>
    </main>
  );
}
