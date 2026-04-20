import React from 'react';
import { Reveal } from './Reveal';

const PROJECTS = [
  { label: 'Contractor', industry: 'Home Services', tag: 'Coming soon' },
  { label: 'Law Firm', industry: 'Legal', tag: 'Coming soon' },
  { label: 'Retail Shop', industry: 'Small Business', tag: 'Coming soon' },
];

export default function Work() {
  return (
    <section id="work" style={{ background: 'var(--bg2)', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Portfolio</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Recent work
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 300, textAlign: 'right' }}>
              Projects launching soon — check back or get in touch to see relevant samples.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div style={{
                borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)',
                background: 'var(--surface)',
              }}>
                <div style={{
                  aspectRatio: '16/10', background: 'var(--bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderBottom: '1px solid var(--border)',
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 20px)',
                }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.8 }}>
                    [ website screenshot ]<br />{p.industry}
                  </div>
                </div>
                <div style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 4 }}>{p.label}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 13 }}>{p.industry}</div>
                  </div>
                  <span style={{
                    fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase',
                    border: '1px solid var(--border)', borderRadius: 100,
                    padding: '4px 12px', color: 'var(--muted)',
                  }}>{p.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
