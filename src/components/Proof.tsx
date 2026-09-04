import { Reveal } from './Reveal';
import { SectionHeading } from './ui/SectionHeading';

// Item A: an anonymised teardown. Every finding here was verified in the prototype's source.
const TEARDOWN = [
  ['What it was built with', 'One HTML file. Markup, styling and all the logic in a single page, with an online database plugged in and deployed by dragging the file onto a free host.'],
  ['What I found', 'The database address and key were written into the file, so every copy of the app pointed at the same database and anyone who viewed the page source had the key. The database was set to let that key read, change and delete everything, including another farm’s records. Admin access was a PIN checked on the user’s own device, which anyone can get around. The whole farm was saved as one lump, so two people saving at once meant one person’s entries disappeared. In eight of the thirteen places meant to catch errors, nothing happened, so a failed save looked like a successful one. No tests, and nothing checked the numbers staff typed in.'],
  ['What it would have cost', 'Anyone with the file could have read or wiped the farm’s records. Staff would have lost mortality counts and feed logs without knowing. And because nobody knew who owned the database account, the leaked key could never be revoked.'],
  ['What fixing it involved', 'The verdict was rebuild, not patch. The prototype became the reference for a new build: each farm’s data walled off from every other farm’s, and tested to prove it; every change going through a server that checks who’s allowed; a permanent record of every entry so nothing is silently overwritten; and a tool to bring the old data across.'],
];

// Item B: build proof. Third person, factual. Everything here is backed by the ShiftMark repos.
const BUILD_POINTS = [
  ['Who can see what', 'Every request is checked on the server: who you are, what your role is, and whether you belong to the home you’re asking about. The database has its own rules on top, so a mistake in the app can’t hand one home’s records to another. Those rules have tests that run on every change.'],
  ['Personal data', 'Licence numbers and uploaded documents sit in private storage that only opens with a short-lived link. Logs are scrubbed of keys and tokens, and email addresses are masked. Admin actions go into a record that can’t be edited afterwards. Users can download their data or delete their account. Keys and secrets live in a vault, not in the code.'],
  ['Checking who shows up', 'Credential checks are done by a person, against the document on file, before a professional is accepted. Required training is enforced before anyone can apply to a shift. Arrival and departure are confirmed with four-digit codes from both sides, so the record isn’t one party’s word against the other’s.'],
  ['Catching mistakes before customers do', 'Hundreds of automated tests run every time the code changes, against a real database. If any of them fails, the change can’t go in. That’s how a feature could be added in August without breaking what shipped in June.'],
  ['Keeping the AI on the rails', 'Both codebases have a written rulebook the AI tools read at the start of every session, plus automatic checks that run after every edit. The tools work inside those rules instead of guessing.'],
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
                ShiftMark is an app for Ontario long-term care homes. Staff ask a question about the home&apos;s own policies in plain language and get the answer back, with the exact document it came from. The same app keeps track of required training and fills open shifts across the Greater Toronto Area, first with the home&apos;s own staff and then with nurses and care workers from the marketplace. Aaron Haizel built it and runs it, with the same AI coding tools his clients use. After four months of continuous work, new features still go in without breaking old ones: the policy assistant was added in August to an app people were already using, and the rest kept working.
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
                Now in beta, with sign-ups open for facilities and professionals. Same tools as the apps I review. The difference is that every session started from written rules, and every change went through tests before it went in.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
