type Severity = 'critical' | 'high' | 'medium' | 'low';

const FINDINGS: [Severity, string][] = [
  ['critical', 'Service key shipped in the browser bundle'],
  ['high', 'No row-level security on customer records'],
  ['high', 'Stripe webhook accepted without a signature check'],
  ['medium', 'Errors swallowed in the checkout flow'],
  ['low', 'Unindexed query behind the dashboard'],
];

/** An illustrative sample of the review's front page. Not a real client result. */
export default function VerdictCard() {
  return (
    <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Production Readiness Review
        </span>
        <span className="tag">Illustrative sample</span>
      </div>

      <div>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Verdict: <em style={{ color: 'var(--accent)' }}>Fix.</em>
        </p>
        <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, marginTop: 8 }}>
          Safe to launch after one Hardening Sprint. No rebuild needed.
        </p>
      </div>

      <ul style={{ listStyle: 'none', borderTop: '1px solid var(--border)' }}>
        {FINDINGS.map(([severity, text]) => (
          <li key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
            <span className={`severity severity-${severity}`}>{severity}</span>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>{text}</span>
          </li>
        ))}
      </ul>

      <p style={{ fontSize: 13, color: 'var(--muted)' }}>Recorded walkthrough · Written report · Verdict call</p>
    </div>
  );
}
