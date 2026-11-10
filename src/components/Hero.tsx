import { BOOKING_URL } from '../lib/site';
import { ButtonLink } from './ui/ButtonLink';
import { PhoneThread } from './visuals/PhoneThread';

const FACTS: [string, string][] = [
  ['Text back', 'On a missed call'],
  ['Auto-reply', 'Web, Facebook'],
  ['Reviews', 'After the job'],
];

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', background: 'var(--bg)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', padding: '100px clamp(20px, 5vw, 40px) 80px', textAlign: 'center',
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
      }} />

      <div aria-hidden="true" style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(72% 0.12 75 / 0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="hero-layout">
        <h1 className="hero-title">
          <span className="hero-line hero-rise hero-d1">Never miss a lead.</span>
          <span className="hero-line hero-line-accent hero-rise hero-d2">
            Hear back anyway.
          </span>
        </h1>

        <p className="hero-lede hero-rise hero-d3" style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--muted)',
          maxWidth: 560, margin: '28px auto 0', lineHeight: 1.7,
        }}>
          A starter setup for trades, auto shops, salons, cleaners, and clinics
          in Welland, Niagara, and Hamilton. A missed call gets a text back.
          Web and Facebook enquiries get a reply with a booking link.
        </p>

        <div className="hero-actions hero-rise hero-d4">
          <ButtonLink href={BOOKING_URL}>Book a free call</ButtonLink>
        </div>

        <div className="hero-phone hero-rise hero-d4">
          <PhoneThread />
        </div>

        <div className="hero-facts hero-rise hero-d5">
          {FACTS.map(([value, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div className="hero-fact-value">{value}</div>
              <div className="hero-fact-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
