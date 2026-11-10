import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const CHECKS: [string, string][] = [
  ['Missed-call text', 'A call you can’t take gets a text back.'],
  ['Enquiry replies', 'Web and Facebook messages get an automatic reply with a booking link.'],
  ['Review requests', 'After the job, the customer is asked for a Google review.'],
  ['Then an audit', 'A paid AI audit can follow, and a transformation after that.'],
];

export default function Checks() {
  return (
    <section id="review" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="The setup" style={{ marginBottom: 24 }}>
            What gets turned on
          </SectionHeading>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 600, marginBottom: 64 }}>
            Three replies for the leads you can’t get to in the moment. A closer look can follow, if you want one.
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
