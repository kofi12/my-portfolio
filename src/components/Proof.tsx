import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

// Item A: an anonymised teardown. Every finding here was verified in the prototype's source.
const TEARDOWN = [
  ['What it was built with', 'One HTML file. Markup, styling and all the logic in a single page, with a hosted database bolted on through a script tag and deployed by dragging the file onto a free host.'],
  ['What I found', 'The database address and key were written into the file, so every copy of the app pointed at the same database and anyone who viewed the page source had the key. The database rule let that key read, write and delete every row, including another farm’s. Admin access was a PIN checked in the browser. The whole farm was saved as one blob, so two people saving at once meant one person’s entries disappeared. Eight of the thirteen error handlers were empty, so a failed save looked like a successful one. No tests, and nothing checked the numbers staff typed in.'],
  ['What it would have cost', 'Anyone with the file could have read or wiped the farm’s records. Staff would have lost mortality counts and feed logs without knowing. And because nobody knew who owned the database account, the leaked key could never be revoked.'],
  ['What fixing it involved', 'The verdict was rebuild, not patch. The prototype became the reference for a new build: per-farm isolation enforced in the database and tested, every write going through a server that checks permissions, an append-only ledger so nothing is silently overwritten, and a migration tool to bring the old data across.'],
];

// Item B: build proof. Third person, factual. Everything here is backed by the ShiftMark repos.
const BUILD_POINTS = [
  ['Stack', 'A Python API on Google Cloud Run, a Postgres database with Supabase, and an Expo app for iOS and Android. Separate staging and production environments, deployed from GitHub.'],
  ['Access control', 'Sign-in tokens are issued by Supabase and checked by the API on every request. Each user has a role, each facility action checks membership, and the database enforces per-row rules on top. Those rules have their own test suite.'],
  ['Sensitive data', 'Licence numbers and uploaded documents sit in private storage reached only through short-lived links. Logs scrub tokens and mask email addresses. Every admin action lands in an append-only audit log. Users can export their data and delete their account. Secrets live in a secrets manager, not in the code.'],
  ['Credential verification', 'A nurse’s registration is checked against the College of Nurses of Ontario’s public register. The server issues a one-time token, the nurse uploads a screenshot of the register result showing it, and an admin reviews it. The decision is a person’s, not a scraper’s.'],
  ['Testing', 'Around 390 backend test files run against a real database on every pull request, alongside lint, type checks, a dependency vulnerability scan, and an architecture rule that fails the build if a layer imports the wrong way. Nothing merges without them.'],
  ['Guardrails', 'Both codebases carry a project instructions file the AI tools read at the start of every session, and hooks that run the formatter and tests on every edit.'],
];

export default function Proof() {
  return (
    <section id="proof" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="Proof" style={{ marginBottom: 64 }}>
            Two apps, built with<br /><em>the same tools.</em>
          </SectionHeading>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Reveal>
            <article className="card proof-card">
              <div className="proof-head">
                <span className="tag tag-accent">Teardown</span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.2 }}>An AI-built farm management app</h3>
              </div>
              <div className="proof-grid">
                {TEARDOWN.map(([title, text]) => (
                  <div key={title}>
                    <h4 className="meta-label" style={{ marginBottom: 10 }}>{title}</h4>
                    <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="card proof-card">
              <div className="proof-head">
                <span className="tag tag-accent">Build</span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.2 }}>ShiftMark</h3>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 32, maxWidth: 820 }}>
                ShiftMark is a shift-coverage and credential-verification platform for nurses and long-term care facilities. Aaron Haizel built it and runs it. It was built with the same AI coding tools his clients use. After four months of continuous development the codebase is still extensible: in August a full policy-document assistant was added to an app already running in production, through the same checks as every other change.
              </p>
              <ul className="proof-grid" style={{ listStyle: 'none' }}>
                {BUILD_POINTS.map(([title, text]) => (
                  <li key={title}>
                    <h4 className="meta-label" style={{ marginBottom: 10 }}>{title}</h4>
                    <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{text}</p>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)', fontSize: 15, lineHeight: 1.7 }}>
                Now entering pilot with a small number of facilities. Same tools as the apps I review. The difference is that every session started from written rules, and every change went through tests before it merged.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
