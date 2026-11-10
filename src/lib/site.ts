export const SITE_NAME = 'akhaizel';
export const SITE_URL = 'https://akhaizel.ca';
export const OWNER_NAME = 'Aaron Haizel';

/** The only place an email address is written. Everything else imports it. */
export const CONTACT_EMAIL = 'aaronhaizel@gmail.com';

const MAILTO_CALL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free call')}`;

/**
 * Public scheduling page (Google Calendar appointment schedule, Cal.com, …).
 * When unset or not an http(s) URL, booking buttons fall back to email.
 */
function bookingUrl() {
  const configured = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (configured && /^https?:\/\//i.test(configured)) return configured;
  return MAILTO_CALL;
}

export const BOOKING_URL = bookingUrl();

/** Fallback when the on-site audit form cannot send. */
export const AUDIT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('App audit')}`;

export const NAV_LINKS = [
  { label: 'Automations', href: '/#automations' },
  { label: 'Transformation', href: '/#transformation' },
  { label: 'App audits', href: '/#app-audits' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
