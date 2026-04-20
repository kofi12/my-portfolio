'use client';
import React from 'react';
import { Reveal } from './Reveal';

const SERVICES = [
  { num: '01', title: 'Conversion-Focused Design', desc: 'Every layout decision is made to guide your visitor toward one action: contacting you. No clutter, no confusion.' },
  { num: '02', title: 'SEO Foundations', desc: 'Built-in on-page SEO so your business shows up when local customers search for what you offer.' },
  { num: '03', title: 'Responsive Development', desc: 'Your site looks and works flawlessly on every device — phone, tablet, and desktop.' },
  { num: '04', title: 'Maintenance & Support', desc: 'I stay on after launch. Updates, fixes, and improvements — without hunting down a third party.' },
];

export function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg)', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Services</p>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 54px)',
            lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 64,
          }}>
            What I do
          </h2>
        </Reveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 1, border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden',
        }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{
        background: hovered ? '#222220' : 'var(--surface)',
        padding: '40px 36px', height: '100%',
        transition: 'background 0.2s', cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontFamily: 'var(--serif)', fontSize: 48, color: 'var(--border)', marginBottom: 24, lineHeight: 1 }}>{num}</div>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 14, lineHeight: 1.2 }}>{title}</h3>
      <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}
