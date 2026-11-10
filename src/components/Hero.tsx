export default function Hero() {
  return (
    <section style={{
      background: 'var(--bg)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', padding: '148px clamp(20px, 5vw, 40px) 72px', textAlign: 'center',
      overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
      }} />

      <div aria-hidden="true" style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, oklch(72% 0.12 75 / 0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="hero-layout">
        <h1 className="hero-title">
          <span className="hero-line hero-rise hero-d1">AI that works</span>
          <span className="hero-line hero-line-accent hero-rise hero-d2">for your business.</span>
        </h1>

        <p className="hero-lede hero-rise hero-d3" style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--muted)',
          maxWidth: 640, margin: '28px auto 0', lineHeight: 1.7,
        }}>
          AI automations for local service businesses. AI transformation across the operation.
          Audits for apps built with AI tools.
        </p>
      </div>
    </section>
  );
}
