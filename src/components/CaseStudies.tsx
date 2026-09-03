import { Reveal } from './Reveal';

// PLACEHOLDER SECTION: replace these with real, permissioned case studies.
const PLACEHOLDERS = ['Case study 1', 'Case study 2', 'Case study 3'];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <p className="section-label">Case studies</p>
          <div className="cases-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="section-title">Case studies</h2>
            <p className="cases-note" style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 320, textAlign: 'right' }}>
              Placeholder. Real case studies, shared with client permission, will go here.
            </p>
          </div>
        </Reveal>

        <div className="three-col" style={{ gap: 20 }}>
          {PLACEHOLDERS.map((label, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div className="card" style={{ overflow: 'hidden' }}>
                <div style={{
                  aspectRatio: '16/10', background: 'var(--bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderBottom: '1px solid var(--border)',
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 20px)',
                }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--muted)' }}>[ case study ]</span>
                </div>
                <div style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 4 }}>{label}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 13 }}>Coming soon</div>
                  </div>
                  <span className="tag">Placeholder</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
