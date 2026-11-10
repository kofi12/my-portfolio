const ITEMS: [string, string][] = [
  ['Calls', 'Text back when a call is missed'],
  ['Web', 'Auto-reply with a booking link'],
  ['Facebook', 'The same reply on Facebook'],
  ['Reviews', 'Google review request after the job'],
];

/** An illustrative list of the starter setup. Not a client result. */
export default function VerdictCard() {
  return (
    <div className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Never miss a lead
        </span>
        <span className="tag">Illustrative sample</span>
      </div>

      <div>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          What gets <em style={{ color: 'var(--accent)' }}>turned on.</em>
        </p>
        <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, marginTop: 8 }}>
          The starter setup. Not a client result.
        </p>
      </div>

      <ul style={{ listStyle: 'none', borderTop: '1px solid var(--border)' }}>
        {ITEMS.map(([label, text]) => (
          <li key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
            <span className="severity">{label}</span>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
