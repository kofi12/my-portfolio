export type SceneKind = 'text' | 'reply' | 'review' | 'audit';

function Stars() {
  return (
    <svg className="stars" viewBox="0 0 120 20" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          transform={`translate(${i * 24} 0)`}
          d="M10 1.8l2.2 4.6 5 .7-3.6 3.5.9 5.1L10 13.3 5.5 15.7l.9-5.1L2.8 7.1l5-.7L10 1.8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

/** Small interface sketches. Text in the page headings carries the meaning. */
export function SetupScene({ kind }: { kind: SceneKind }) {
  return (
    <div className="scene" aria-hidden="true">
      {kind === 'text' && (
        <>
          <p className="scene-kicker">Missed call · Example Plumbing</p>
          <p className="scene-bubble">Hi. The sink is leaking.</p>
          <p className="scene-bubble scene-bubble-out">Sorry we missed you. Here is a time to book.</p>
        </>
      )}
      {kind === 'reply' && (
        <>
          <p className="scene-kicker">Website form</p>
          <p className="scene-bubble">Can you look at the brakes this week?</p>
          <p className="scene-bubble scene-bubble-out">Thanks. Book a time: example.com/book</p>
        </>
      )}
      {kind === 'review' && (
        <>
          <p className="scene-kicker">After the job</p>
          <p className="scene-line">Would you leave a Google review?</p>
          <Stars />
        </>
      )}
      {kind === 'audit' && (
        <ul className="audit-list">
          <li><span>Phone</span><span>Call comes in</span></li>
          <li><span>Website</span><span>Form comes in</span></li>
          <li><span>Facebook</span><span>Reply can lag</span></li>
        </ul>
      )}
    </div>
  );
}
