'use client';
import { useState } from 'react';
import { CONTACT_EMAIL } from '../lib/site';
import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

const ITEMS = [
  {
    q: 'Who is this for?',
    a: 'Local service businesses: trades, auto shops, salons, cleaners, and clinics in Welland, Niagara, and Hamilton.',
  },
  {
    q: 'Do you pick up the phone for me?',
    a: 'No. A missed call gets a text back, so the lead isn’t left hanging. You still talk to the customer. It isn’t a promise that every call is answered.',
  },
  {
    q: 'What do you need from me?',
    a: 'How enquiries come in today, and a booking link if you already have one. If you don’t, we can sort that out on the call.',
  },
  {
    q: 'What comes after the setup?',
    a: 'A paid AI audit looks at how leads move, then a transformation puts the useful changes in place. Nothing else is booked until we’ve talked.',
  },
  {
    q: 'How do I start?',
    a: `Book a free call, or email ${CONTACT_EMAIL}.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad" style={{ background: 'var(--bg2)' }}>
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
