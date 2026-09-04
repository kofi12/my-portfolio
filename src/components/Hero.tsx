'use client';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { BOOKING_URL } from '../lib/site';
import { ButtonLink } from './ui/ButtonLink';

const FACTS: [string, string][] = [
  ['$250', 'Review to start'],
  ['2–3 days', 'To a written verdict'],
  ['Fixed', 'Prices. No hourly billing.'],
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

  const lineStyle = (delay: number): CSSProperties => ({
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(48px, 6vw, 88px)',
    lineHeight: 1.0,
    letterSpacing: '-0.03em',
    display: 'block',
    ...enter(delay, 40),
  });

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

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000 }}>
        <h1>
          <span style={lineStyle(0.2)}>I make AI‑built apps</span>
          <span style={{ ...lineStyle(0.35), fontStyle: 'italic', color: 'var(--accent)' }}>
            safe to launch.
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--muted)',
          maxWidth: 560, margin: '32px auto 0', lineHeight: 1.7,
          ...enter(0.55, 20),
        }}>
          For founders who built their app with Lovable, Bolt, Cursor, v0, or Replit
          and need to know if it&apos;s ready for real users.
        </p>

        <div style={{
          display: 'flex', justifyContent: 'center', marginTop: 44, ...enter(0.7, 20),
        }}>
          <ButtonLink href={BOOKING_URL}>Book the $250 review</ButtonLink>
        </div>

        <div style={{
          marginTop: 80, display: 'flex', gap: 'clamp(28px, 4vw, 48px)', justifyContent: 'center',
          flexWrap: 'wrap',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s 0.9s',
        }}>
          {FACTS.map(([value, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--accent)', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
