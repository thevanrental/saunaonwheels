'use client';

import { useEffect, useState } from 'react';

const experiences = [
  {
    number: '01',
    title: 'Beach sessions',
    copy: 'A private sauna by the Pacific — golden hour, cold ocean, and real wood-fired heat.',
    image: '/media/exterior.png',
    alt: 'Red mobile sauna trailer set up near the beach',
  },
  {
    number: '02',
    title: 'Private gatherings',
    copy: 'Bring the ritual home for birthdays, recovery days, retreats, and nights with friends.',
    image: '/media/interior-people.jpg',
    alt: 'Guests relaxing inside the cedar sauna',
  },
  {
    number: '03',
    title: 'Mountain escapes',
    copy: 'Winter delivery to Mammoth and Tahoe for deep heat after long days in the snow.',
    image: '/media/ocean.png',
    alt: 'Blue-hour view through the sauna window',
  },
];

const faqs = [
  ['How many people fit?', 'The sauna is designed for a comfortable shared session. Final capacity and recommended group size will be confirmed with your booking.'],
  ['Where can you deliver?', 'Our core area is coastal Los Angeles and Orange County, with winter destination service planned for Mammoth Lakes and Lake Tahoe.'],
  ['How long does setup take?', 'We deliver, position, heat, and prepare the sauna before your reserved session so your only job is to step inside.'],
  ['What should I bring?', 'A towel, water, sandals, and something warm for the cool-down. We provide the heat, atmosphere, and sauna essentials.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <video className="hero-media" autoPlay muted loop playsInline poster="/media/fire.png">
          <source src="/media/hero-fire.mov" type="video/quicktime" />
        </video>
        <div className="hero-shade" />

        <header className="site-header">
          <a className="brand" href="#top" aria-label="Sauna on Wheels home">
            <span className="brand-mark">S·W</span>
            <span>
              <strong>SAUNA ON WHEELS</strong>
              <small>WOOD FIRE. OCEAN AIR.</small>
            </span>
          </a>
          <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <span /><span />
          </button>
        </header>

        <div className="hero-copy" id="top">
          <p className="eyebrow">Los Angeles · Orange County</p>
          <h1 id="hero-title">Ocean air.<br />Wood fire.<br /><em>Deep heat.</em></h1>
          <p className="hero-description">A private wood-fired sauna delivered to the coast, your home, or your next escape.</p>
          <a className="primary-button" href="/booking">Book your sauna</a>
        </div>

        <div className="hero-foot">
          <span>Beach sessions</span><span>Private events</span><span>Mountain escapes</span>
        </div>
      </section>

      <div className={`menu-overlay ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="menu-top">
          <span className="menu-brand">SAUNA ON WHEELS</span>
          <button className="menu-close" onClick={closeMenu} aria-label="Close menu">×</button>
        </div>
        <nav aria-label="Main navigation">
          <a onClick={closeMenu} href="#experiences">Experiences</a>
          <a onClick={closeMenu} href="#how">How it works</a>
          <a onClick={closeMenu} href="#story">Our sauna</a>
          <a onClick={closeMenu} href="#faq">FAQ</a>
        </nav>
        <a onClick={closeMenu} className="primary-button menu-cta" href="/booking">Book your sauna</a>
      </div>

      <section className="intro" id="experiences">
        <p className="eyebrow dark">A ritual that comes to you</p>
        <h2>Slow down.<br />We’ll bring the heat.</h2>
        <p>Real fire, a beautiful cedar room, and enough space to share the ritual with the people you love.</p>
      </section>

      <section className="experience-grid" aria-label="Sauna experiences">
        {experiences.map((item) => (
          <article className="experience-card" key={item.number}>
            <img src={item.image} alt={item.alt} />
            <div className="experience-copy">
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href="#reserve">Explore the experience <b>↗</b></a>
            </div>
          </article>
        ))}
      </section>

      <section className="ritual" id="how">
        <div className="ritual-image">
          <img src="/media/ritual.png" alt="Water flowing over aromatic sauna whisks" />
          <span className="vertical-note">THE RITUAL · THE RITUAL · THE RITUAL</span>
        </div>
        <div className="ritual-copy">
          <p className="eyebrow">Simple from start to steam</p>
          <h2>How it works</h2>
          <ol>
            <li><span>01</span><div><h3>Choose your place</h3><p>Beach, driveway, private event, or a winter escape.</p></div></li>
            <li><span>02</span><div><h3>We bring the sauna</h3><p>Delivery, positioning, fire, and preparation are handled for you.</p></div></li>
            <li><span>03</span><div><h3>Step into the heat</h3><p>Gather your people, cool down outside, and repeat.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="statement">
        <p>From the Pacific coast<br />to the winter mountains.</p>
        <span>LA · OC · MAMMOTH · TAHOE</span>
      </section>

      <section className="story" id="story">
        <div className="story-copy">
          <p className="eyebrow dark">Real wood. Real fire.</p>
          <h2>Built for<br /><em>proper heat.</em></h2>
          <p>At the heart of the sauna is a high-capacity wood-burning stove surrounded by stone. The result is deep, soft heat and generous steam — not an imitation of the real thing.</p>
          <a className="text-link" href="#reserve">See the sauna details <span>→</span></a>
        </div>
        <div className="story-photo">
          <img src="/media/stove.jpg" alt="Large stone-filled wood-fired sauna stove" />
          <span className="photo-label">WOOD-FIRED · HAND-BUILT · MOBILE</span>
        </div>
      </section>

      <section className="quote">
        <p>“The best kind of reset: fire, steam, cold air, and nowhere else to be.”</p>
        <span>— The Sauna on Wheels feeling</span>
      </section>

      <section className="faq" id="faq">
        <div>
          <p className="eyebrow dark">Before you book</p>
          <h2>Good to know.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="reserve" id="reserve">
        <img src="/media/interior-people.jpg" alt="Warm cedar sauna interior with guests" />
        <div className="reserve-shade" />
        <div className="reserve-copy">
          <p className="eyebrow">Your heat is waiting</p>
          <h2>Ready to<br /><em>slow down?</em></h2>
          <p>Tell us where you want the sauna and we’ll help plan the experience.</p>
          <a className="primary-button light" href="/booking">Start a booking</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">S·W</span>
          <span><strong>SAUNA ON WHEELS</strong><small>WOOD FIRE. OCEAN AIR.</small></span>
        </a>
        <p>Mobile wood-fired sauna<br />Los Angeles · Orange County</p>
        <div><a href="#experiences">Experiences</a><a href="#faq">FAQ</a><a href="#reserve">Book</a></div>
        <span className="copyright">© 2026 Sauna on Wheels</span>
      </footer>
    </main>
  );
}
