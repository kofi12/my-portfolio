import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const STEPS = [
  ['Book a free call', 'Tell me how leads come in today: phone, website, Facebook.'],
  ['Turn the setup on', 'Missed-call texts, enquiry replies, and review requests.'],
  ['Go further if you want', 'A paid audit, then a transformation from what it finds. Nothing starts until you agree.'],
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
