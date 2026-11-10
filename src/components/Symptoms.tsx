import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const SYMPTOMS = [
  'The phone rang on a job. They booked someone else.',
  'A Facebook message sat there until the next day.',
  'The website form works. I see it when I’m back at the desk.',
  'The job went well. I forgot to ask for a Google review.',
];

export default function Symptoms() {
  return (
    <section id="symptoms" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Reveal>
          <SectionHeading label="Sound familiar?" style={{ marginBottom: 48 }}>
            The work is there.<br /><em>The reply is late.</em>
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
            A late reply is how the next job goes to someone else.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
