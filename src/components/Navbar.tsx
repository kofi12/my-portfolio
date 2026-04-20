'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = ['Services', 'About', 'Work', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav
        className="nav-inner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
          transition: 'background 0.4s, border-color 0.4s, backdropFilter 0.4s',
          background: scrolled || menuOpen ? 'rgba(12,12,10,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <Link href="#" style={{
          fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--text)',
          textDecoration: 'none', letterSpacing: '-0.01em',
        }}>
          akhaizel
        </Link>

        {/* Desktop nav */}
        <div className="nav-links">
          {NAV_LINKS.map(item => (
            <Link key={item} href={`#${item.toLowerCase()}`} style={{
              color: 'var(--muted)', fontSize: 14, textDecoration: 'none',
              letterSpacing: '0.02em', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {item}
            </Link>
          ))}
          <Link href="#contact">
            <button style={{
              background: 'var(--accent)', color: '#0c0c0a', border: 'none',
              padding: '9px 20px', borderRadius: 6, fontSize: 14, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'var(--sans)', letterSpacing: '0.01em',
              transition: 'opacity 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.88';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              Book a Free Consultation
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: 22, height: 2, background: 'var(--text)',
            borderRadius: 2,
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2, background: 'var(--text)',
            borderRadius: 2,
            transition: 'opacity 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: 22, height: 2, background: 'var(--text)',
            borderRadius: 2,
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(item => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              color: 'var(--muted)', fontSize: 18, textDecoration: 'none',
              letterSpacing: '0.02em', padding: '4px 0',
            }}
          >
            {item}
          </Link>
        ))}
        <Link href="#contact" onClick={() => setMenuOpen(false)}>
          <button style={{
            background: 'var(--accent)', color: '#0c0c0a', border: 'none',
            padding: '12px 24px', borderRadius: 6, fontSize: 15, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'var(--sans)', marginTop: 8, width: '100%',
          }}>
            Book a Free Consultation
          </button>
        </Link>
      </div>
    </>
  );
}
