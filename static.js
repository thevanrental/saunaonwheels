document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-overlay');
  const openMenu = document.querySelector('.menu-button');
  const closeMenu = document.querySelector('.menu-close');

  const setMenu = (open) => {
    if (!menu) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  openMenu?.addEventListener('click', () => setMenu(true));
  closeMenu?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const form = document.getElementById('private-event-form');
  if (!form) return;

  const trackLead = (method) => {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'generate_lead', {
      method,
      lead_type: 'private_event',
      transport_type: 'beacon',
    });
  };

  const requestData = () => {
    const data = new FormData(form);
    const value = (name) => String(data.get(name) || '').trim();
    const yesNo = (name) => data.get(name) ? 'Yes' : 'No';
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
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const { subject, body } = requestData();
    trackLead('email');
    window.location.href = `mailto:info@saunaonwheels.life?subject=${encodeURIComponent(`[Custom Request] ${subject}`)}&body=${encodeURIComponent(body)}`;
  });

  form.querySelector('.whatsapp')?.addEventListener('click', () => {
    if (!form.reportValidity()) return;
    const { body } = requestData();
    trackLead('whatsapp');
    window.open(`https://wa.me/13236107634?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
  });
});
