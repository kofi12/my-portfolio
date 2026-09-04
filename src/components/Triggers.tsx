import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const TRIGGERS = [
  'An investor’s technical advisor is about to open the repo.',
  'The launch date is fixed and nobody else has read the code.',
  'An enterprise customer just sent a security questionnaire.',
  'Your first developer hire starts soon and will inherit the codebase.',
];

export default function Triggers() {
  return (
    <section id="when" className="band-pad" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="When people book" style={{ marginBottom: 40, fontSize: 'clamp(28px, 3vw, 36px)' }}>
            The moments this gets booked
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
