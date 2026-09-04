import { Reveal } from './Reveal';
import VerdictCard from './VerdictCard';
import { SectionHeading } from './ui/SectionHeading';

const POINTS = [
  ['Judgement first', 'You’re paying to know what’s wrong and what it costs to fix. The typing is the easy part.'],
  ['Direct line', 'You talk to me. Every reply, every fix.'],
  ['Fixed prices', 'Quoted before work starts. No surprises on the invoice.'],
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="two-col-grid container">
        <Reveal>
          <VerdictCard />
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <SectionHeading label="About" style={{ marginBottom: 28 }}>
              The person auditing<br /><em>is the person fixing.</em>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 17, marginBottom: 36 }}>
              I&apos;m Aaron. I have a computer science degree and a background in building mobile apps and web apps, front to back. I work solo, so the person who reads your code, writes the report, and explains it on the call is the same person who fixes it.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
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
      </div>
    </section>
  );
}
