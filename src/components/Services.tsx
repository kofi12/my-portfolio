import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const TIERS = [
  {
    num: '01',
    title: 'Production Readiness Review',
    meta: '$250 · 2–3 business days',
    desc: 'A recorded walkthrough of your codebase and a written report with every finding ranked by severity. You get a clear verdict: fix, refactor, or rebuild.',
    includes: [
      'Recorded walkthrough of the code',
      'Written report, findings ranked by severity',
      'Verdict: fix, refactor, or rebuild',
      'Fee credited toward the next tier',
    ],
    note: 'If your app is in good shape, the report says so and the call is short. Spend the money on customers instead.',
  },
  {
    num: '02',
    title: 'Hardening Sprint',
    meta: 'From $3,000 · 1–2 weeks',
    desc: 'The known problems, fixed. One price, agreed before work starts.',
    includes: [
      'Secrets moved server-side',
      'Access control locked down',
      'Payments verified end to end',
      'Error handling and tests around auth, payments, and your core flow',
    ],
  },
  {
    num: '03',
    title: 'Rescue & Refactor',
    meta: 'From $5,000 · Scoped after the review',
    desc: 'For apps that need restructuring before they can grow. Delivered in approved phases, so work can stop at any phase boundary.',
    includes: [
      'Restructuring and data model work',
      'Documentation and handoff',
      'A project instructions file for your codebase, so your AI tools stay on the rails after the work is done',
      'Built so you or a future hire can continue',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="Services" style={{ marginBottom: 64 }}>
            Three fixed-price options.<br /><em>Start with the review.</em>
          </SectionHeading>
        </Reveal>

        <div className="tier-grid">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.num} delay={i * 0.08}>
              <div className="service-cell">
                <div style={{ fontFamily: 'var(--serif)', fontSize: 48, color: 'var(--border)', marginBottom: 24, lineHeight: 1 }}>{tier.num}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 10, lineHeight: 1.2 }}>{tier.title}</h3>
                <div className="meta-label" style={{ marginBottom: 18 }}>{tier.meta}</div>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{tier.desc}</p>
                <ul className="dot-list">
                  {tier.includes.map((item) => (
                    <li key={item}><span className="dot dot-sm" />{item}</li>
                  ))}
                </ul>
                {'note' in tier && (
                  <p style={{ marginTop: 'auto', paddingTop: 24, color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>{tier.note}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p style={{ marginTop: 32, color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
            Already launched? A monthly review retainer covers ongoing checks as your app changes. The instructions file is kept current, and new AI-generated work is reviewed against it. Ask about it on the call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
