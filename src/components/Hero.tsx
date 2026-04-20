'use client';
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const lineStyle = (delay: number): React.CSSProperties => ({
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(52px, 8vw, 112px)',
    lineHeight: 1.0,
    letterSpacing: '-0.03em',
    color: 'var(--text)',
    display: 'block',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.9s cubic-bezier(0.25,1,0.5,1) ${delay}s, transform 0.9s cubic-bezier(0.25,1,0.5,1) ${delay}s`,
  });

  const fadeIn = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.9s cubic-bezier(0.25,1,0.5,1) ${delay}s, transform 0.9s cubic-bezier(0.25,1,0.5,1) ${delay}s`,
  });

  return (
    <section style={{
      minHeight: '100vh', background: 'var(--bg)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', padding: '100px 40px 80px', textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(72% 0.12 75 / 0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32,
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100,
          padding: '6px 16px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s 0.1s',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
          <span style={{ fontSize: 13, color: 'var(--muted)', letterSpacing: '0.04em' }}>
            Available for new projects
          </span>
        </div>

        <h1 style={{ marginBottom: 0 }}>
          <span style={lineStyle(0.2)}>Websites that</span>
          <span style={{ ...lineStyle(0.35), fontStyle: 'italic', color: 'var(--accent)' }}>
            win clients.
          </span>
        </h1>

        <p style={{
          marginTop: 32, fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--muted)',
          maxWidth: 560, margin: '32px auto 0', lineHeight: 1.7,
          ...fadeIn(0.55),
        }}>
          I build fast, polished websites for trades, small businesses, and law firms —
          every line of code, personally by me.
        </p>

        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center',
          flexWrap: 'wrap', marginTop: 44, ...fadeIn(0.7),
        }}>
          <Link href="#contact">
            <button style={{
              background: 'var(--accent)', color: '#0c0c0a', border: 'none',
              padding: '14px 32px', borderRadius: 8, fontSize: 15, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'var(--sans)', letterSpacing: '0.01em',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.88';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              Book a Free Consultation
            </button>
          </Link>
          <Link href="#work">
            <button style={{
              background: 'transparent', color: 'var(--text)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '14px 32px', borderRadius: 8, fontSize: 15, fontWeight: 400,
              cursor: 'pointer', fontFamily: 'var(--sans)',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              See my work
            </button>
          </Link>
        </div>

        {/* Stat row */}
        <div style={{
          marginTop: 80, display: 'flex', gap: 48, justifyContent: 'center',
          flexWrap: 'wrap',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.9s 0.9s',
        }}>
          {([['100%', 'Personally built'], ['2–3 wk', 'Avg. turnaround'], ['Free', 'Initial consult']] as [string, string][]).map(([val, lab]) => (
            <div key={val} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--accent)', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{lab}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
