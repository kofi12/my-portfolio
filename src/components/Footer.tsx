'use client';
import React from 'react';
import Link from 'next/link';

const NAV_LINKS = ['Services', 'About', 'Work', 'Contact'];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: 'clamp(32px, 5vw, 48px) clamp(20px, 5vw, 40px)' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20,
      }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 20 }}>akhaizel</span>
        <div style={{ display: 'flex', gap: 32 }}>
          {NAV_LINKS.map(item => (
            <Link key={item} href={`#${item.toLowerCase()}`} style={{
              color: 'var(--muted)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >{item}</Link>
          ))}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 13 }}>© {new Date().getFullYear()} Aaron Haizel</p>
      </div>
    </footer>
  );
}
