import Link from 'next/link';
import { LIBRARY_PATH, failureModePath, getFailureMode } from '../content/what-goes-wrong';
import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

// Slugs match src/content/what-goes-wrong.ts. Items link to their page once it is published.
const CHECKS: [string, string, string][] = [
  ['secrets-in-the-browser', 'Secrets in the browser', 'API keys shipped to the front end. Anyone who opens developer tools can read them, run up your bill, or read your data.'],
  ['access-control', 'Access control that isn’t there', 'Missing or misconfigured row-level security. One user can read, edit, or delete another user’s records by changing an ID.'],
  ['payment-webhooks', 'Payment webhooks nobody verifies', 'Your app trusts anything that looks like a Stripe event. People get paid features without paying.'],
  ['input-validation', 'No input validation', 'The app accepts whatever it’s sent. That’s how data gets corrupted and how attackers get in.'],
  ['silent-failures', 'Silent failures', 'Errors are swallowed instead of handled. Things break quietly and you find out from a customer.'],
  ['queries-under-load', 'Queries that die under load', 'No indexes, no limits. Fine with ten users. Timeouts with a thousand.'],
  ['dependencies', 'Dependencies that don’t exist or shouldn’t', 'AI tools invent packages and pick abandoned ones. Both are ways to ship someone else’s problem.'],
  ['no-tests', 'No tests', 'Nothing tells you something broke until a customer clicks on it. The code changes every time a tool touches it.'],
  ['ai-with-no-guardrails', 'AI with no guardrails', 'No instructions file, so every session re-guesses your conventions. That’s how a codebase ends up with seven ways of doing the same thing.'],
];

export default function Checks() {
  return (
    <section id="review" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="The review" style={{ marginBottom: 24 }}>
            What I actually look for
          </SectionHeading>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 600, marginBottom: 64 }}>
            Every review covers the same list. Here it is in plain language, with what happens if it&apos;s wrong.
          </p>
        </Reveal>

        <div className="checks-grid">
          {CHECKS.map(([slug, title, desc], i) => {
            const published = Boolean(getFailureMode(slug));
            return (
              <Reveal key={slug} delay={i * 0.05}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span className="dot" style={{ marginTop: 11 }} />
                  <div>
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2, marginBottom: 10 }}>
                      {published ? <Link href={failureModePath(slug)} className="check-link">{title}</Link> : title}
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p style={{ marginTop: 56, color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
            Each one has its own page, with a 30-second check you can do yourself.{' '}
            <Link href={LIBRARY_PATH} className="text-link" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>See all nine.</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
