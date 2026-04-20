import React from 'react';
import { Reveal } from './Reveal';

const QUOTES = [
  {
    text: `"Aaron built our site in under three weeks and it looks better than anything I've seen from agencies charging triple the price."`,
    name: 'J. Mitchell', role: 'Electrician, Ontario',
  },
  {
    text: `"Our new website has already brought in two new clients in the first month. The investment paid for itself immediately."`,
    name: 'S. Patel', role: 'Family Law Attorney',
  },
  {
    text: `"I appreciated that I was talking to the person actually building my site. No confusion, no delays, no excuses."`,
    name: 'M. Torres', role: 'General Contractor',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Testimonials</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 64 }}>
            What clients say
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <div style={{
                background: 'var(--surface)', borderRadius: 12, padding: '36px',
                border: '1px solid var(--border)', height: '100%',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.65, color: 'var(--text)', fontStyle: 'italic', marginBottom: 32 }}>
                  {q.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent)', opacity: 0.3 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{q.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{q.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p style={{ textAlign: 'center', marginTop: 40, color: 'var(--muted)', fontSize: 13 }}>
            * Placeholder testimonials — real ones coming soon
          </p>
        </Reveal>
      </div>
    </section>
  );
}
