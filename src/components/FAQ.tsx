'use client';
import { useState } from 'react';
import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

// Answers marked TODO(policy) are drafts pending Aaron's confirmation.
const ITEMS = [
  {
    q: 'What access do you need?',
    a: 'Read-only access to your repository. A review never needs write access, and it never needs your production database.',
  },
  {
    // TODO(policy): confirm an NDA is ready to send.
    q: 'Will you sign an NDA?',
    a: 'Yes. Send yours, or I’ll send a short mutual one.',
  },
  {
    q: 'What if I don’t like the verdict?',
    a: 'The report is yours. Take it to another developer, get a second opinion, or do nothing. You paid for the review, not for me.',
  },
  {
    // TODO(policy): confirm the live-data check approach.
    q: 'Do you need my production database?',
    a: 'No. I read code and configuration. If a finding needs checking against live data, I’ll ask you to run a specific check and tell me what you see.',
  },
  {
    // TODO(policy): confirm any stacks not taken, such as no-code builders.
    q: 'What if my app isn’t built with one of the tools you list?',
    a: 'The tools change. The problems don’t. If it’s a web or mobile app with a database and users, I can review it. If I can’t, I’ll say so before you pay.',
  },
  {
    // TODO(policy): confirm payment terms for sprints and rescues.
    q: 'How do I pay, and when?',
    a: 'The review is paid when you book. Sprints and rescues are fixed quotes, paid half up front and half on delivery, or per phase for a rescue.',
  },
  {
    // TODO(policy): confirm the deletion window and what happens to the recording.
    q: 'What happens to my code after the review?',
    a: 'I delete my copy within 30 days of delivering the report, unless you’ve booked follow-up work. The recorded walkthrough is yours to keep.',
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
