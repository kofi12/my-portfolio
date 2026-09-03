import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const SYMPTOMS = [
  'A user emailed me a screenshot. It was someone else’s data.',
  'People are using the paid features. Stripe says they never paid.',
  'Every fix breaks something else. I’ve stopped touching it.',
  'I have no idea if it’s secure. I just know it works when I click around.',
  'I tried to hire a developer. They looked at the code and said no.',
];

export default function Symptoms() {
  return (
    <section id="symptoms" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Reveal>
          <SectionHeading label="Sound familiar?" style={{ marginBottom: 48 }}>
            You built it. Now you&apos;re not sure<br /><em>you trust it.</em>
          </SectionHeading>
        </Reveal>

        <ul style={{ listStyle: 'none', borderBottom: '1px solid var(--border)' }}>
          {SYMPTOMS.map((text, i) => (
            <Reveal key={text} delay={i * 0.05}>
              <li style={{ borderTop: '1px solid var(--border)', padding: '28px 0' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.45, fontStyle: 'italic' }}>
                  &ldquo;{text}&rdquo;
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p style={{ marginTop: 40, color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 600 }}>
            None of this means you built the wrong thing. It means nobody has checked the parts you can&apos;t see.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
