'use client';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { BOOKING_URL } from '../lib/site';
import { ButtonLink } from './ui/ButtonLink';
import { PhoneThread } from './visuals/PhoneThread';

const FACTS: [string, string][] = [
  ['Text back', 'On a missed call'],
  ['Auto-reply', 'Web, Facebook'],
  ['Reviews', 'After the job'],
];

const EASE = 'cubic-bezier(0.25,1,0.5,1)';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const enter = (delay: number, distance: number): CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${distance}px)`,
    transition: `opacity 0.9s ${EASE} ${delay}s, transform 0.9s ${EASE} ${delay}s`,
  });

  const lineStyle = (delay: number): CSSProperties => enter(delay, 24);

  return (
    <section style={{
      minHeight: '100vh', background: 'var(--bg)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', padding: '100px clamp(20px, 5vw, 40px) 80px', textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Subtle grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
      }} />

      {/* Glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(72% 0.12 75 / 0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="hero-layout">
        <h1 className="hero-title">
          <span className="hero-line hero-enter" style={lineStyle(0.2)}>Never miss a lead.</span>
          <span className="hero-line hero-line-accent hero-enter" style={lineStyle(0.35)}>
            Hear back anyway.
          </span>
        </h1>

        <p className="hero-lede hero-enter" style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--muted)',
          maxWidth: 560, margin: '28px auto 0', lineHeight: 1.7,
          ...enter(0.5, 16),
        }}>
          A starter setup for trades, auto shops, salons, cleaners, and clinics
          in Welland, Niagara, and Hamilton. A missed call gets a text back.
          Web and Facebook enquiries get a reply with a booking link.
        </p>

        <div className="hero-actions hero-enter" style={enter(0.65, 16)}>
          <ButtonLink href={BOOKING_URL}>Book a free call</ButtonLink>
        </div>

        <div className="hero-phone hero-enter" style={enter(0.75, 16)}>
          <PhoneThread />
        </div>

        <div className="hero-facts hero-enter" style={enter(0.85, 12)}>
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
