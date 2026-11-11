export const SITE_NAME = 'akhaizel';
export const SITE_URL = 'https://akhaizel.ca';
export const OWNER_NAME = 'Aaron Haizel';

/** The only place an email address is written. Everything else imports it. */
export const CONTACT_EMAIL = 'aaronhaizel@gmail.com';

const MAILTO_CALL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free call')}`;
const MAILTO_AUDIT = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('App audit')}`;

/**
 * Public scheduling page (Google Calendar appointment schedule, Cal.com, …).
 * Shared by the free-call and app-audit buttons. Null when unset or not http(s).
 */
function schedulingUrl() {
  const configured = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (configured && /^https?:\/\//i.test(configured)) return configured;
  return null;
}

const SCHEDULING_URL = schedulingUrl();

/** Free-call buttons. The scheduling page when set, otherwise email. */
export const BOOKING_URL = SCHEDULING_URL ?? MAILTO_CALL;

/**
 * App-audit buttons. The same scheduling page when set.
 * Otherwise email with the subject "App audit".
 */
export const AUDIT_BOOKING_URL = SCHEDULING_URL ?? MAILTO_AUDIT;

export const NAV_LINKS = [
  { label: 'Automations', href: '/#automations' },
  { label: 'Transformation', href: '/#transformation' },
  { label: 'App audits', href: '/#app-audits' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
