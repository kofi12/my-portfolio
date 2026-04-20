import React from 'react';
import Image from 'next/image';
import { Reveal } from './Reveal';

const POINTS = [
  ['Direct communication', 'No account managers. You have my direct line.'],
  ['Full ownership', 'Every deliverable — design, code, and copy — done by me.'],
  ['Built for results', 'Conversion-focused design that turns visitors into paying clients.'],
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg2)', padding: '120px 40px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
      }}>
        <Reveal>
          <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/Headshot_nobg.png"
              alt="Aaron Haizel"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>About</p>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 54px)',
              lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 28,
            }}>
              You talk to me.<br /><span style={{ fontStyle: 'italic' }}>I build it.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 17, marginBottom: 20 }}>
              {`I'm Aaron — a web developer based in Canada. Unlike agencies that hand off your project to a team of strangers, I personally handle every aspect of your website from design to launch.`}
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 17, marginBottom: 36 }}>
              {`That means clear communication, faster turnaround, and a final product that reflects exactly what you need — not what's easiest for a production line.`}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {POINTS.map(([title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'var(--accent)', marginTop: 8, flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{title}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 14 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
