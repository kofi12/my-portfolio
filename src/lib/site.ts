export const SITE_NAME = 'akhaizel';
export const SITE_URL = 'https://akhaizel.ca';
export const OWNER_NAME = 'Aaron Haizel';

/** The only place an email address is written. Everything else imports it. */
export const CONTACT_EMAIL = 'ahaizel@akhaizel.ca';

/**
 * TODO(booking): replace with the scheduling link (Cal.com, Calendly, ...).
 * Placeholder so every booking button keeps working until then.
 */
export const BOOKING_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Production Readiness Review')}`;

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'What goes wrong', href: '/what-goes-wrong' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
