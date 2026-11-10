import { BOOKING_URL } from '../lib/site';
import { Reveal } from './Reveal';
import { ButtonLink } from './ui/ButtonLink';
import { SectionHeading } from './ui/SectionHeading';

const DELIVERS = [
  'How the work moves today: enquiries, scheduling, follow-up, and the tools already in use.',
  'Where AI fits, and where it should be left alone.',
  'A rollout across processes, tools, and the team.',
  'A scope you agree before any of that work starts.',
];

export default function Transformation() {
  return (
    <section id="transformation" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="two-col-grid" style={{ alignItems: 'center' }}>
          <div>
            <Reveal>
              <SectionHeading label="AI transformation" style={{ marginBottom: 24 }}>
                The wider<br /><em>engagement.</em>
              </SectionHeading>
              <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 28 }}>
                This is not a single setup. I look at how the business runs, find where AI belongs, and roll it out across the operation.
              </p>
            </Reveal>
            <ul className="dot-list" style={{ marginBottom: 32, fontSize: 15, lineHeight: 1.6 }}>
              {DELIVERS.map((item) => (
                <li key={item}><span className="dot dot-sm" />{item}</li>
              ))}
            </ul>
            <Reveal>
              <ButtonLink href={BOOKING_URL}>Book a free call</ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="scene" aria-hidden="true" style={{ height: 'auto', minHeight: 220, marginBottom: 0 }}>
              <p className="scene-kicker">The operation</p>
              <ul className="audit-list">
                <li><span>Enquiries</span><span>How they arrive</span></li>
                <li><span>Scheduling</span><span>How work is booked</span></li>
                <li><span>Follow-up</span><span>What happens after</span></li>
                <li><span>The team</span><span>Tools already in use</span></li>
              </ul>
              <p className="scene-line" style={{ fontSize: 20 }}>Where AI fits, and where it doesn’t.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
