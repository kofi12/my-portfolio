import { BOOKING_URL } from '../lib/site';
import { Reveal } from './Reveal';
import { ButtonLink } from './ui/ButtonLink';
import { SectionHeading } from './ui/SectionHeading';
import { PhoneThread } from './visuals/PhoneThread';
import { SetupScene, type SceneKind } from './visuals/SetupScene';

const PARTS: [SceneKind, string, string][] = [
  ['text', 'Missed-call text', 'A call you can’t take gets a text back.'],
  ['reply', 'Enquiry replies', 'Web and Facebook messages get an auto-reply with a booking link.'],
  ['review', 'Review requests', 'After the job, the customer is asked for a Google review.'],
];

export default function Automations() {
  return (
    <section id="automations" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="two-col-grid" style={{ alignItems: 'center', marginBottom: 56 }}>
          <div>
            <Reveal>
              <SectionHeading label="AI automations" style={{ marginBottom: 24 }}>
                Practical setups.<br /><em>Never miss a lead.</em>
              </SectionHeading>
              <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
                For trades, auto shops, salons, cleaners, and clinics in Welland, Niagara, and Hamilton.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
                Never miss a lead is the flagship: replies for the moments you can’t get to. It is one automation, not the whole practice. You still talk to the customer. It is not a promise that every call is answered.
              </p>
              <ButtonLink href={BOOKING_URL}>Book a free call</ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="automations-phone">
              <PhoneThread />
            </div>
          </Reveal>
        </div>

        <div className="three-col">
          {PARTS.map(([kind, title, desc], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div>
                <SetupScene kind={kind} />
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
