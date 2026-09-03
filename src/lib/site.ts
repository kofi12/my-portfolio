export const SITE_NAME = 'akhaizel';
export const OWNER_NAME = 'Aaron Haizel';
export const EMAIL = 'ahaizel@bronston.ca';

/**
 * Every booking call to action points here.
 * Placeholder: swap for a scheduling link (Cal.com, Calendly, ...) when ready.
 */
export const BOOKING_URL = `mailto:${EMAIL}?subject=${encodeURIComponent('Production Readiness Review')}`;

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;
