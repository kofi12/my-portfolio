import Link from 'next/link';
import { Reveal } from './Reveal';
import { IconMark, type IconName } from './visuals/IconMark';

const OFFERS: { href: string; mark: IconName; title: string; who: string; what: string }[] = [
  {
    href: '/#automations',
    mark: 'automations',
    title: 'AI automations',
    who: 'Local service businesses',
    what: 'Practical setups. Never miss a lead is the flagship.',
  },
  {
    href: '/#transformation',
    mark: 'transformation',
    title: 'AI transformation',
    who: 'The team you have',
    what: 'Time back. AI takes the repetitive work.',
  },
  {
    href: '/#app-audits',
    mark: 'audits',
    title: 'AI-built app audits',
    who: 'Apps built with AI tools',
    what: 'A review of security, data, reliability, and upkeep.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--bg2)', paddingTop: 32 }}>
      <div className="container">
        <div className="tier-grid">
          {OFFERS.map((offer, i) => (
            <Reveal key={offer.href} delay={i * 0.08}>
              <Link href={offer.href} className="service-cell">
                <div className="service-mark">
                  <IconMark name={offer.mark} />
                  <span className="service-rule" aria-hidden="true" />
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, marginBottom: 14, lineHeight: 1.15 }}>{offer.title}</h2>
                <p className="meta-label" style={{ marginBottom: 12 }}>{offer.who}</p>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{offer.what}</p>
                <span className="service-jump">See this service</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
