import { AUDIT_BOOKING_URL } from '../lib/site';
import { ButtonLink } from './ui/ButtonLink';

/** Closing call to action for the app-audit articles. */
export default function BookingCta() {
  return (
    <div className="card" style={{ padding: 'clamp(28px, 4vw, 40px)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 34px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
        Want this <em>app looked at?</em>
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
        Request an app audit. I’ll tell you whether it’s a problem, and what fixing it would take.
      </p>
      <ButtonLink href={AUDIT_BOOKING_URL} style={{ marginTop: 8 }}>Request an app audit</ButtonLink>
    </div>
  );
}
