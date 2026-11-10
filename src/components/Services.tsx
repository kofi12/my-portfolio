import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { Glyph } from './visuals/Glyph';

const TIERS = [
  {
    num: '01',
    icon: 'message' as const,
    title: 'Never miss a lead',
    meta: 'Starter',
    desc: 'For leads that arrive while you’re with a customer.',
    includes: [
      'Text back on a missed call',
      'Auto-reply on the web and Facebook, with a booking link',
      'Google review request after the job',
    ],
  },
  {
    num: '02',
    icon: 'search' as const,
    title: 'AI audit',
    meta: 'Paid',
    desc: 'A look at how leads come in, and where a reply is slow or missing.',
    includes: [
      'Phone, website, and Facebook',
      'What is worth automating next',
    ],
  },
  {
    num: '03',
    icon: 'layers' as const,
    title: 'AI transformation',
    meta: 'After the audit',
    desc: 'The work from the audit, once you’ve agreed the scope.',
    includes: [
      'Only what the audit turned up',
      'You talk to the person doing the work',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="Services" style={{ marginBottom: 64 }}>
            Start with the setup.<br /><em>Go further after.</em>
          </SectionHeading>
        </Reveal>

        <div className="tier-grid">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.num} delay={i * 0.08}>
              <div className="service-cell">
                <div className="glyph-row">
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 48, color: 'var(--border)', lineHeight: 1 }}>{tier.num}</div>
                  <Glyph name={tier.icon} />
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 10, lineHeight: 1.2 }}>{tier.title}</h3>
                <div className="meta-label" style={{ marginBottom: 18 }}>{tier.meta}</div>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{tier.desc}</p>
                <ul className="dot-list">
                  {tier.includes.map((item) => (
                    <li key={item}><span className="dot dot-sm" />{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p style={{ marginTop: 32, color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
            Not sure where to start? Book a free call. The setup comes first.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
