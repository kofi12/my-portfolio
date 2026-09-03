import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const STEPS = [
  ['Book the review', 'Pay $250, give me access to the code, and get a written report within 2–3 business days.'],
  ['Get the verdict on a call', 'We go through the findings together. You’ll know what’s wrong, what matters, and what doesn’t.'],
  ['Decide with fixed prices in hand', 'If there’s work to do, you get a fixed quote. Take it, get a second opinion, or hand the report to someone else. No hourly billing.'],
];

export default function Process() {
  return (
    <section id="process" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="How it works" style={{ marginBottom: 64 }}>
            Three steps.<br /><em>No open-ended billing.</em>
          </SectionHeading>
        </Reveal>

        <ol className="three-col" style={{ listStyle: 'none' }}>
          {STEPS.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.1}>
              <li>
                <div aria-hidden="true" style={{ fontFamily: 'var(--serif)', fontSize: 48, color: 'var(--accent)', marginBottom: 24, lineHeight: 1 }}>{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2, marginBottom: 12 }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
