import { BOOKING_URL, CONTACT_EMAIL } from '../lib/site';
import { Reveal } from './Reveal';
import { ButtonLink } from './ui/ButtonLink';
import { SectionHeading } from './ui/SectionHeading';

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
            Book a free call.
          </SectionHeading>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
            Tell me which of the three you need. The call is free.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-link" style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}>
              <span className="icon-box"><MailIcon /></span>
              Questions first? Email {CONTACT_EMAIL}
            </a>
            <div style={{ color: 'var(--muted)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="icon-box"><PinIcon /></span>
              Welland, Niagara and Hamilton
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card" style={{ padding: 36, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.2, marginBottom: 8 }}>Not sure which one?</h3>
            <div className="meta-label" style={{ marginBottom: 24 }}>We’ll name it on the call</div>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              Automations, transformation, or an app audit. One service, agreed before any work starts.
            </p>
            <ButtonLink href={BOOKING_URL} block>Book a free call</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
