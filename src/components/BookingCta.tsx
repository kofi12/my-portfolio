import { BOOKING_URL } from '../lib/site';
import { ButtonLink } from './ui/ButtonLink';

/** The closing call to action shared by every library page. */
export default function BookingCta() {
  return (
    <div className="card" style={{ padding: 'clamp(28px, 4vw, 40px)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 34px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
        Want this <em>looked at?</em>
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
        Book a free call. I’ll tell you whether it’s a problem, and what fixing it would take.
      </p>
      <ButtonLink href={BOOKING_URL} style={{ marginTop: 8 }}>Book a free call</ButtonLink>
    </div>
  );
}
