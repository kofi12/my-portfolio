import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const TRIGGERS = [
  'A call comes in while you’re with a customer.',
  'An enquiry lands after you’ve closed.',
  'You’re busy, and the next job still needs a reply.',
  'You want Google reviews, and the ask keeps slipping.',
];

export default function Triggers() {
  return (
    <section id="when" className="band-pad" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="When people call" style={{ marginBottom: 40, fontSize: 'clamp(28px, 3vw, 36px)' }}>
            Usually one of these
          </SectionHeading>
        </Reveal>
        <ul className="four-col" style={{ listStyle: 'none' }}>
          {TRIGGERS.map((text, i) => (
            <Reveal key={text} delay={i * 0.05}>
              <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span className="dot" style={{ marginTop: 9 }} />
                <p style={{ fontSize: 15, lineHeight: 1.6 }}>{text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
