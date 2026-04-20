'use client';
import React, { useState } from 'react';
import { Reveal } from './Reveal';

const ITEMS = [
  { q: 'How long does a website take?', a: 'Most projects are completed in 2–3 weeks from our initial call. More complex sites may take up to 4–5 weeks. I always give you a clear timeline upfront.' },
  { q: 'How much does it cost?', a: 'Pricing depends on your needs — but most small business websites start around $800–1,500. I offer free consultations so we can scope your project before any commitment.' },
  { q: 'Do I need to provide content?', a: 'Ideally yes — you know your business best. But I can help shape your messaging and write copy if needed. Just let me know during our initial call.' },
  { q: 'Will my site be mobile-friendly?', a: 'Absolutely. Every site I build is responsive by default — it will look and work great on phones, tablets, and desktops.' },
  { q: 'What happens after launch?', a: "I offer ongoing maintenance and support plans. You can also reach out anytime for updates, and I'll take care of it personally — no tickets, no waiting." },
  { q: 'Do you work with clients outside Canada?', a: 'Yes — I work remotely with clients anywhere. My primary market is Canada but I take on projects from the US and elsewhere.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: 'var(--bg2)', padding: '120px 40px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Reveal>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 56 }}>
            Common questions
          </h2>
        </Reveal>

        {ITEMS.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.05}>
            <div style={{ borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none', color: 'var(--text)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '24px 0', cursor: 'pointer', fontFamily: 'var(--sans)',
                  textAlign: 'left', gap: 16,
                }}
              >
                <span style={{ fontSize: 17, fontWeight: 500 }}>{item.q}</span>
                <span style={{
                  fontSize: 22, color: 'var(--accent)', flexShrink: 0,
                  transition: 'transform 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                }}>+</span>
              </button>
              <div className={`faq-body${open === i ? ' open' : ''}`}>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.75, paddingBottom: 24 }}>{item.a}</p>
              </div>
            </div>
          </Reveal>
        ))}

        <div style={{ borderTop: '1px solid var(--border)' }} />
      </div>
    </section>
  );
}
