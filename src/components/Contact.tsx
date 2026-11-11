import { BOOKING_URL, CONTACT_EMAIL } from '../lib/site';
import { Reveal } from './Reveal';
import { ButtonLink } from './ui/ButtonLink';
import { SectionHeading } from './ui/SectionHeading';

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
          <div className="contact-facts">
            <div>
              <p className="section-label contact-kicker">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-link" style={{ fontSize: 15 }}>
                Questions first? Email {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="section-label contact-kicker">Serving</p>
              <p style={{ color: 'var(--muted)', fontSize: 14 }}>Welland, Niagara and Hamilton</p>
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
