import React from 'react';

const ITEMS = [
  'Web Design', 'SEO', 'Responsive Development', 'Conversion-Focused',
  'Law Firms', 'Trades & Contractors', 'Small Business', 'Website Maintenance', 'Fast Turnaround',
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{
      background: 'var(--accent)', overflow: 'hidden', padding: '14px 0',
      borderTop: '1px solid rgba(0,0,0,0.1)',
    }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{
            color: '#0c0c0a', fontSize: 13, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: 48,
          }}>
            {item} <span style={{ opacity: 0.4, marginLeft: 48 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
