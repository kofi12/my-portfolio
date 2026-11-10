import { CONTACT_EMAIL } from './site';

export type AuditFields = {
  name?: unknown;
  email?: unknown;
  business?: unknown;
  appUrl?: unknown;
  builtWith?: unknown;
  worry?: unknown;
  website?: unknown;
};

export type FieldErrors = Partial<Record<'name' | 'email' | 'business' | 'appUrl' | 'builtWith' | 'worry', string>>;

export type ParsedAudit =
  | { ok: true; dropped: true }
  | { ok: true; dropped: false; mail: { name: string; email: string; business: string; appUrl: string; builtWith: string; worry: string } }
  | { ok: false; fields: FieldErrors };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

function multiline(value: unknown, max: number) {
  if (typeof value !== 'string') return '';
  return value.replace(/\u0000/g, '').trim().slice(0, max);
}

/** Validate a submission. A filled honeypot is accepted and dropped, not mailed. */
export function parseAudit(input: AuditFields): ParsedAudit {
  if (text(input.website, 200)) return { ok: true, dropped: true };

  const fields: FieldErrors = {};
  const name = text(input.name, 80);
  const email = text(input.email, 120);
  const business = text(input.business, 120);
  const appUrl = text(input.appUrl, 300);
  const builtWith = text(input.builtWith, 120);
  const worry = multiline(input.worry, 2000);

  if (name.length < 2) fields.name = 'Add your name.';
  if (!EMAIL.test(email)) fields.email = 'Add a real email address.';
  if (business.length < 2) fields.business = 'Add the business or app name.';
  if (appUrl && !/^https?:\/\/\S+$/i.test(appUrl)) fields.appUrl = 'Use a full link, starting with https://.';
  if (worry.length < 20) fields.worry = 'Say a little more about what you’re worried about.';

  if (Object.keys(fields).length) return { ok: false, fields };
  return { ok: true, dropped: false, mail: { name, email, business, appUrl, builtWith, worry } };
}

export async function sendAuditEmail(mail: { name: string; email: string; business: string; appUrl: string; builtWith: string; worry: string }) {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return { ok: false as const, error: 'unavailable' as const };

  const from = process.env.RESEND_FROM?.trim() || 'onboarding@resend.dev';
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_EMAIL],
      reply_to: mail.email,
      subject: `App audit request from ${mail.name}`,
      text: [
        `Name: ${mail.name}`,
        `Email: ${mail.email}`,
        `Business or app: ${mail.business}`,
        `Link: ${mail.appUrl || '(none)'}`,
        `Built with: ${mail.builtWith || '(not specified)'}`,
        '',
        mail.worry,
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    console.error('App audit email was not accepted', response.status);
    return { ok: false as const, error: 'send' as const };
  }
  return { ok: true as const };
}
