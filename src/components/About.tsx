import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const POINTS = [
  ['Direct line', 'You talk to me. No handoff.'],
  ['Solo', 'The person on the call is the person who does the work.'],
  ['Kept separate', 'Automations, transformation, and app audits are three services. We pick one.'],
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <Reveal>
          <SectionHeading label="About" style={{ marginBottom: 28 }}>
            You talk to me.<br /><em>I do the work.</em>
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 17, marginBottom: 36 }}>
            I&apos;m Aaron. I have a computer science degree and a background in building mobile apps and web apps, front to back.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {POINTS.map(([title, desc]) => (
              <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span className="dot" style={{ marginTop: 8 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 14 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
