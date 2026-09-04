import { BOOKING_URL, CONTACT_EMAIL } from '../lib/site';
import { Reveal } from './Reveal';
import { ButtonLink } from './ui/ButtonLink';
import { SectionHeading } from './ui/SectionHeading';

const INCLUDES = [
  'Recorded walkthrough of your codebase',
  'Written report, findings ranked by severity',
  'A verdict on a call: fix, refactor, or rebuild',
  'Fee credited toward the next tier',
];

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="two-col-grid-start container">
        <Reveal>
          <SectionHeading label="Get started" style={{ marginBottom: 24 }}>
            Find out before<br /><em>your users do.</em>
          </SectionHeading>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
            Book the Production Readiness Review. $250, 2–3 business days, and a clear verdict you can act on.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-link" style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}>
              <span className="icon-box"><MailIcon /></span>
              Questions first? Email {CONTACT_EMAIL}
            </a>
            <div style={{ color: 'var(--muted)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="icon-box"><PinIcon /></span>
              Based in Canada · Works remotely
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card" style={{ padding: 36, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.2, marginBottom: 8 }}>Production Readiness Review</h3>
            <div className="meta-label" style={{ marginBottom: 24 }}>$250 · 2–3 business days</div>
            <ul className="dot-list" style={{ fontSize: 15, gap: 12, marginBottom: 32 }}>
              {INCLUDES.map((item) => (
                <li key={item}><span className="dot dot-sm" />{item}</li>
              ))}
            </ul>
            <ButtonLink href={BOOKING_URL} block>Book the $250 review</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
