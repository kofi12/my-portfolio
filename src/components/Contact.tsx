'use client';
import React from 'react';
import { Reveal } from './Reveal';

const inputStyle: React.CSSProperties = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  color: 'var(--text)', borderRadius: 8, padding: '12px 16px',
  fontSize: 15, fontFamily: 'var(--sans)', width: '100%',
  outline: 'none', transition: 'border-color 0.2s',
};

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '120px 40px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start',
      }}>
        <Reveal>
          <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Contact</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
            {"Let's build"}<br /><span style={{ fontStyle: 'italic' }}>{"something great."}</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 48 }}>
            Tell me about your business and what you need. I&apos;ll get back to you within 24 hours to set up a free, no-pressure consultation.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <a href="mailto:ahaizel@bronston.ca" style={{
              color: 'var(--text)', textDecoration: 'none', display: 'flex',
              alignItems: 'center', gap: 12, fontSize: 15, transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 8, background: 'var(--surface)',
                border: '1px solid var(--border)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: 16,
              }}>✉</div>
              ahaizel@bronston.ca
            </a>
            <div style={{ color: 'var(--muted)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 8, background: 'var(--surface)',
                border: '1px solid var(--border)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: 16,
              }}>📍</div>
              Based in Canada · Available remotely
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form action="https://formsubmit.co/ahaizel@bronston.ca" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <input name="fullName" placeholder="Full Name" style={inputStyle} />
              <input name="email" type="email" placeholder="Email" style={inputStyle} />
            </div>
            <input name="businessName" placeholder="Business Name" style={inputStyle} />
            <textarea name="message" rows={5} placeholder="Tell me about your project..." style={{ ...inputStyle, resize: 'vertical' }} />
            <button type="submit" style={{
              background: 'var(--accent)', color: '#0c0c0a', border: 'none',
              padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'var(--sans)', alignSelf: 'flex-start',
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
          </form>
        </Reveal>
      </div>
    </section>
  );
}
