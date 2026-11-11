import Link from 'next/link';
import { AUDIT_BOOKING_URL } from '../lib/site';
import { Reveal } from './Reveal';
import { ButtonLink } from './ui/ButtonLink';
import { SectionHeading } from './ui/SectionHeading';

const DELIVERS = [
  'Security: who can see what, and which keys are exposed.',
  'Data: whether one person’s records stay theirs.',
  'Reliability, running cost, and whether the next change will hold.',
  'A verdict you can act on. The What goes wrong pages walk through the same checks.',
];

const TEARDOWN = [
  ['What it was built with', 'One HTML file. Markup, styling, and all the logic in a single page, with an online database plugged in and deployed by dragging the file onto a free host.'],
  ['What I found', 'The database address and key were written into the file, so anyone who viewed the page source had the key. That key could read, change, and delete everything, including another farm’s records. Admin access was a PIN checked on the device, which anyone can get around. The whole farm was saved as one lump, so two people saving at once meant one person’s entries disappeared. In eight of the thirteen places meant to catch errors, nothing happened, so a failed save looked successful. No tests, and nothing checked the numbers staff typed in.'],
  ['What was at stake', 'Anyone with the file could have read or wiped the records. Staff would have lost mortality counts and feed logs without knowing. The leaked key could not be revoked, because nobody knew who owned the account.'],
  ['What fixing it involved', 'The verdict was rebuild, not patch. The prototype became the reference for a new build: each farm’s data walled off and tested, every change checked on the server, a permanent record of every entry, and a tool to bring the old data across.'],
];

export default function AppAudits() {
  return (
    <section id="app-audits" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <SectionHeading label="AI-built app audits" style={{ marginBottom: 24 }}>
            What goes wrong<br /><em>in an AI-built app.</em>
          </SectionHeading>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 680, marginBottom: 28 }}>
            For apps made with AI coding tools. I review the parts that are easy to miss: security, data, reliability, running cost, and whether the next change will hold.
          </p>
        </Reveal>

        <ul className="dot-list" style={{ maxWidth: 720, marginBottom: 28 }}>
          {DELIVERS.map((item) => (
            <li key={item}><span className="dot dot-sm" />{item}</li>
          ))}
        </ul>

        <Reveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', marginBottom: 56 }}>
            <ButtonLink href={AUDIT_BOOKING_URL}>Request an app audit</ButtonLink>
            <Link href="/what-goes-wrong" className="text-link" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>
              Read what goes wrong
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <article className="card proof-card">
            <div className="proof-head">
              <span className="tag tag-accent">Teardown</span>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.2 }}>An AI-built farm app</h3>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 720 }}>
              Anonymised. The findings were in the source. No client is named.
            </p>
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
      </div>
    </section>
  );
}
