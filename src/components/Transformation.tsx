import { BOOKING_URL } from '../lib/site';
import { Reveal } from './Reveal';
import { ButtonLink } from './ui/ButtonLink';
import { SectionHeading } from './ui/SectionHeading';

const DELIVERS = [
  'A map of how work moves today, so you can see where the hours go.',
  'Those workflows redesigned, with AI built in for the repetitive parts.',
  'A rollout, and training, so the team can work with it.',
  'The time saved, measured against a baseline. No number is promised up front.',
];

const REPETITIVE = ['Admin', 'Follow-ups', 'Scheduling', 'Reporting', 'Documents', 'Internal questions'];

export default function Transformation() {
  return (
    <section id="transformation" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="two-col-grid" style={{ alignItems: 'center' }}>
          <div>
            <Reveal>
              <SectionHeading label="AI transformation" style={{ marginBottom: 24 }}>
                Get time back.<br /><em>With the team you have.</em>
              </SectionHeading>
              <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, marginBottom: 28 }}>
                AI joins the team. It does not replace it. It takes the repetitive work, so people spend their time on the work that needs them.
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
            <div className="scene" aria-hidden="true" style={{ height: 'auto', minHeight: 0, marginBottom: 0 }}>
              <p className="scene-kicker">Repetitive work</p>
              <ul className="audit-list">
                {REPETITIVE.map((item) => (
                  <li key={item}><span>{item}</span><span>AI teammate</span></li>
                ))}
              </ul>
              <p className="scene-line" style={{ fontSize: 20 }}>People keep the higher-value work.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
