import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { Glyph } from './visuals/Glyph';

const STEPS = [
  { icon: 'call' as const, title: 'Book a call', desc: 'Tell me which of the three you need. The call is free.' },
  { icon: 'setup' as const, title: 'We name the work', desc: 'An automation, a transformation, or an app audit. One of them.' },
  { icon: 'next' as const, title: 'Then it starts', desc: 'Nothing is booked until we’ve agreed the scope.' },
];

export default function Process() {
  return (
    <section id="process" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="How it works" style={{ marginBottom: 64 }}>
            Three steps.<br /><em>Start with a call.</em>
          </SectionHeading>
        </Reveal>

        <ol className="three-col" style={{ listStyle: 'none' }}>
          {STEPS.map(({ icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.16}>
              <li>
                <Glyph name={icon} />
                <div aria-hidden="true" style={{ fontFamily: 'var(--serif)', fontSize: 48, color: 'var(--accent)', margin: '14px 0 20px', lineHeight: 1 }}>{i + 1}</div>
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
