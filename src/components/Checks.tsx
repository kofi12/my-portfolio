import Link from 'next/link';
import { LIBRARY_PATH, failureModePath, getFailureMode } from '../content/what-goes-wrong';
import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

// Slugs match src/content/what-goes-wrong.ts. Items link to their page once it is published.
const CHECKS: [string, string, string][] = [
  ['secrets-in-the-browser', 'Secrets in the browser', 'Your private keys are inside the app itself, where anyone who looks can copy them, run up your bill, or read your data.'],
  ['access-control', 'Users who can see each other’s data', 'The rules about who can see what are missing or wrong. One user can read, change or delete another’s records by changing a number in the address bar.'],
  ['payment-webhooks', 'Payments taken on trust', 'Your app believes anything that says it’s from Stripe. People get paid features without paying.'],
  ['input-validation', 'Forms that accept anything', 'The app takes whatever it’s given. That’s how bad data gets in, and how attackers do.'],
  ['silent-failures', 'Silent failures', 'Errors are hidden instead of handled. Things break quietly and you find out from a customer.'],
  ['queries-under-load', 'Slows down as you grow', 'Fine with ten users. Timeouts with a thousand.'],
  ['dependencies', 'Building blocks nobody checked', 'AI tools pull in code libraries that were made up, abandoned, or already known to be unsafe.'],
  ['no-tests', 'No tests', 'Nothing tells you something broke until a customer clicks on it. And the code changes every time a tool touches it.'],
  ['ai-with-no-guardrails', 'AI with no guardrails', 'No written rules, so every session guesses again. That’s how an app ends up with seven ways of doing the same thing.'],
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
