import Link from 'next/link';
import { NAV_LINKS, OWNER_NAME, SITE_NAME } from '../lib/site';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: 'clamp(32px, 5vw, 48px) clamp(20px, 5vw, 40px)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 20 }}>{SITE_NAME}</span>
        <div style={{ display: 'flex', gap: 32 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 13 }}>© {new Date().getFullYear()} {OWNER_NAME}</p>
      </div>
    </footer>
  );
}
