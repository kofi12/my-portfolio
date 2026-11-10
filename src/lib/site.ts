export const SITE_NAME = 'akhaizel';
export const SITE_URL = 'https://akhaizel.ca';
export const OWNER_NAME = 'Aaron Haizel';

/** The only place an email address is written. Everything else imports it. */
export const CONTACT_EMAIL = 'aaronhaizel@gmail.com';

/**
 * TODO(booking): replace with the scheduling link (Cal.com, Calendly, ...).
 * Placeholder so every booking button keeps working until then.
 */
export const BOOKING_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free call')}`;

/** Mailto for the AI-built app audit, separate from the free call. */
export const AUDIT_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('App audit')}`;

export const NAV_LINKS = [
  { label: 'Automations', href: '/#automations' },
  { label: 'Transformation', href: '/#transformation' },
  { label: 'App audits', href: '/#app-audits' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
