import { BOOKING_URL } from '../lib/site';
import { ButtonLink } from './ui/ButtonLink';

/** The closing call to action shared by every library page. */
export default function BookingCta() {
  return (
    <div className="card" style={{ padding: 'clamp(28px, 4vw, 40px)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 34px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
        Find out before <em>your users do.</em>
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
        The Production Readiness Review is $250, takes 2–3 business days, and ends with a clear verdict: fix, refactor, or rebuild.
      </p>
      <ButtonLink href={BOOKING_URL} style={{ marginTop: 8 }}>Book the $250 review</ButtonLink>
    </div>
  );
}
