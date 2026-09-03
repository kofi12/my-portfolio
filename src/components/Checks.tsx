import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const CHECKS = [
  ['Secrets in the browser', 'API keys shipped to the front end. Anyone who opens developer tools can read them, run up your bill, or read your data.'],
  ['Access control that isn’t there', 'Missing or misconfigured row-level security. One user can read, edit, or delete another user’s records by changing an ID.'],
  ['Payment webhooks nobody verifies', 'Your app trusts anything that looks like a Stripe event. People get paid features without paying.'],
  ['No input validation', 'The app accepts whatever it’s sent. That’s how data gets corrupted and how attackers get in.'],
  ['Silent failures', 'Errors are swallowed instead of handled. Things break quietly and you find out from a customer.'],
  ['Queries that die under load', 'No indexes, no limits. Fine with ten users. Timeouts with a thousand.'],
  ['Dependencies that don’t exist or shouldn’t', 'AI tools invent packages and pick abandoned ones. Both are ways to ship someone else’s problem.'],
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
          {CHECKS.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span className="dot" style={{ marginTop: 11 }} />
                <div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2, marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
