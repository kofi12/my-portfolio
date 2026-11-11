export const SITE_NAME = 'akhaizel';
export const SITE_URL = 'https://akhaizel.ca';
export const OWNER_NAME = 'Aaron Haizel';

/** The only place an email address is written. Everything else imports it. */
export const CONTACT_EMAIL = 'aaronhaizel@gmail.com';

const MAILTO_CALL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free call')}`;
const MAILTO_AUDIT = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('App audit')}`;

/** Aaron's Google Calendar appointment schedule. */
const DEFAULT_BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ18vkvHb75BizhStc3vaMOGvFjwzbXzqpgC-ESy1Q2cUfn52E7cSA4zrZMGLSiIfhs51UOQpscR';

/**
 * Shared by the free-call and app-audit buttons.
 * NEXT_PUBLIC_BOOKING_URL replaces the default when it is an http(s) link.
 * An invalid override falls back to email.
 */
function schedulingUrl() {
  const configured = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (!configured) return DEFAULT_BOOKING_URL;
  if (/^https?:\/\//i.test(configured)) return configured;
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
