'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BOOKING_URL, NAV_LINKS, SITE_NAME } from '../lib/site';
import { ButtonLink } from './ui/ButtonLink';

const barStyle = {
  display: 'block',
  width: 22,
  height: 2,
  background: 'var(--text)',
  borderRadius: 2,
  transition: 'transform 0.3s, opacity 0.3s',
} as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="nav-inner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
          transition: 'background 0.4s, border-color 0.4s',
          background: scrolled || menuOpen ? 'rgba(12,12,10,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <Link href="#" style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.01em' }}>
          {SITE_NAME}
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
          <ButtonLink href={BOOKING_URL} size="sm">Book the review</ButtonLink>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span style={{ ...barStyle, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ ...barStyle, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...barStyle, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      <div id="mobile-menu" className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link key={href} href={href} onClick={closeMenu} className="nav-link" style={{ fontSize: 18, padding: '4px 0' }}>
            {label}
          </Link>
        ))}
        <ButtonLink href={BOOKING_URL} block onClick={closeMenu} style={{ marginTop: 8 }}>
          Book the review
        </ButtonLink>
      </div>
    </>
  );
}
