import { POST } from '../src/app/api/app-audit/route';

const valid = {
  name: 'Jordan Example',
  email: 'jordan@example.com',
  business: 'Example Plumbing',
  appUrl: 'https://example.com',
  builtWith: 'An AI coding tool',
  worry: 'I am worried the database key is sitting in the browser.',
  website: '',
};

function request(body: unknown, ip = '203.0.113.10') {
  return new Request('http://localhost/api/app-audit', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
    body: JSON.stringify(body),
  });
}

async function main() {
  delete process.env.RESEND_API_KEY;
  const missing = await POST(request(valid, '203.0.113.20'));
  const missingBody = await missing.json();
  if (missing.status !== 503 || missingBody.error !== 'unavailable') {
    throw new Error(`missing key: expected 503 unavailable, got ${missing.status} ${JSON.stringify(missingBody)}`);
  }
  console.log('missing-key path: 503 unavailable');

  const calls: { url: string; body: { to: string[]; reply_to: string; from: string } }[] = [];
  const original = global.fetch;
  global.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: String(url), body: JSON.parse(String(init?.body)) });
    return new Response(JSON.stringify({ id: 'email_test' }), { status: 200 });
  }) as typeof fetch;

  process.env.RESEND_API_KEY = 're_test_key';
  process.env.RESEND_FROM = 'onboarding@resend.dev';
  const ok = await POST(request(valid, '203.0.113.30'));
  const okBody = await ok.json();
  if (ok.status !== 200 || okBody.ok !== true) {
    throw new Error(`mocked success: expected 200, got ${ok.status} ${JSON.stringify(okBody)}`);
  }
  if (calls.length !== 1 || calls[0].url !== 'https://api.resend.com/emails') {
    throw new Error(`mocked success: expected one Resend call, got ${calls.length}`);
  }
  if (calls[0].body.reply_to !== valid.email || calls[0].body.to[0] !== 'aaronhaizel@gmail.com') {
    throw new Error('mocked success: recipient or reply-to was wrong');
  }
  if (JSON.stringify(calls[0].body).includes('re_test_key')) {
    throw new Error('mocked success: API key leaked into the payload');
  }
  console.log('mocked success path: 200, one Resend call, reply-to set');

  calls.length = 0;
  const honey = await POST(request({ ...valid, website: 'https://spam.example' }, '203.0.113.40'));
  const honeyBody = await honey.json();
  if (honey.status !== 200 || honeyBody.ok !== true || calls.length !== 0) {
    throw new Error('honeypot should look successful and not send');
  }
  console.log('honeypot: accepted, not sent');

  const short = await POST(request({ ...valid, worry: 'too short' }, '203.0.113.50'));
  const shortBody = await short.json();
  if (short.status !== 400 || !shortBody.fields?.worry) {
    throw new Error(`short worry: expected 400, got ${short.status} ${JSON.stringify(shortBody)}`);
  }
  console.log('short worry: 400');

  global.fetch = original;
  console.log('app audit route checks passed');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
