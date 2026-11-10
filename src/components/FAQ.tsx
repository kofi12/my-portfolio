'use client';
import { useState } from 'react';
import { CONTACT_EMAIL } from '../lib/site';
import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const ITEMS = [
  {
    q: 'Which service is which?',
    a: 'Automations are practical setups for a local service business. Never miss a lead is the flagship of that service. Transformation is the wider job: how the business runs, where AI fits, and a rollout. An app audit is for an app that was built with AI tools.',
  },
  {
    q: 'Do you pick up the phone for me?',
    a: 'No. That question belongs to automations. A missed call gets a text back. You still talk to the customer. It is not a promise that every call is answered.',
  },
  {
    q: 'How do I start?',
    a: `Book a free call, or email ${CONTACT_EMAIL}. If you want an app looked at, use Request an app audit.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Reveal>
          <SectionHeading label="FAQ" style={{ marginBottom: 56 }}>
            Common questions
          </SectionHeading>
        </Reveal>

        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          const bodyId = `faq-body-${i}`;
          return (
            <Reveal key={item.q} delay={i * 0.04}>
              <div style={{ borderTop: '1px solid var(--border)' }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={bodyId}
                  style={{
                    width: '100%', background: 'none', border: 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '24px 0', cursor: 'pointer', textAlign: 'left', gap: 16,
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: 500 }}>{item.q}</span>
                  <span aria-hidden="true" style={{
                    fontSize: 22, color: 'var(--accent)', flexShrink: 0,
                    transition: 'transform 0.3s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                  }}>+</span>
                </button>
                <div id={bodyId} className={`faq-body${isOpen ? ' open' : ''}`}>
                  <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.75, paddingBottom: 24 }}>{item.a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}

        <div style={{ borderTop: '1px solid var(--border)' }} />
      </div>
    </section>
  );
}
