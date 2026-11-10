import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { Glyph } from './visuals/Glyph';

const STEPS = [
  { icon: 'call' as const, title: 'Book a free call', desc: 'Tell me how leads come in today: phone, website, Facebook.' },
  { icon: 'setup' as const, title: 'Turn the setup on', desc: 'Missed-call texts, enquiry replies, and review requests.' },
  { icon: 'next' as const, title: 'Go further if you want', desc: 'A paid audit, then a transformation from what it finds. Nothing starts until you agree.' },
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
