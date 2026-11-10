import { parseAudit, sendAuditEmail, type AuditFields } from '../../../lib/app-audit';

export const runtime = 'nodejs';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function clientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const first = forwarded?.split(',')[0]?.trim();
  return first || request.headers.get('x-real-ip') || 'unknown';
}

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((at) => now - at < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  if (limited(clientIp(request))) {
    return Response.json({ ok: false, error: 'rate' }, { status: 429 });
  }

  let raw = '';
  try {
    raw = await request.text();
  } catch {
    return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
  }
  if (raw.length > 20_000) {
    return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  let body: AuditFields;
  try {
    body = JSON.parse(raw) as AuditFields;
  } catch {
    return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  const parsed = parseAudit(body);
  if (!parsed.ok) {
    return Response.json({ ok: false, error: 'invalid', fields: parsed.fields }, { status: 400 });
  }
  if (parsed.dropped) {
    return Response.json({ ok: true });
  }

  let sent: Awaited<ReturnType<typeof sendAuditEmail>>;
  try {
    sent = await sendAuditEmail(parsed.mail);
  } catch {
    console.error('App audit email request failed');
    return Response.json({ ok: false, error: 'send' }, { status: 502 });
  }
  if (!sent.ok && sent.error === 'unavailable') {
    return Response.json({ ok: false, error: 'unavailable' }, { status: 503 });
  }
  if (!sent.ok) {
    return Response.json({ ok: false, error: 'send' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
