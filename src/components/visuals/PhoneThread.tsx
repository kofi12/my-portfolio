/**
 * Stylised phone. The business and the customer are placeholders.
 * Messages stay in the layout from the start, so the animation does not shift the page.
 */
export function PhoneThread() {
  return (
    <figure className="phone">
      <div className="phone-shell">
        <div className="phone-top">
          <span>Missed call</span>
          <span className="phone-live" aria-hidden="true" />
        </div>
        <p className="phone-who">Example Plumbing</p>
        <div className="bubble bubble-in" style={{ animationDelay: '0.55s' }}>
          <span className="bubble-from">Jordan</span>
          Hi. The sink is leaking. Can someone come by this week?
        </div>
        <div className="bubble bubble-out" style={{ animationDelay: '1.45s' }}>
          <span className="bubble-from">Example Plumbing</span>
          Sorry we missed you. Pick a time: example.com/book
        </div>
      </div>
      <figcaption className="phone-caption">Example only. Not a real customer or business.</figcaption>
    </figure>
  );
}
