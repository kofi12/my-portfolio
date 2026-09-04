import type { Metadata } from 'next';
import Link from 'next/link';
import BookingCta from '../../components/BookingCta';
import { FAILURE_MODES, failureModePath } from '../../content/what-goes-wrong';

export const metadata: Metadata = {
  title: 'What goes wrong in AI-built apps | akhaizel',
  description: 'Nine things that go wrong in apps built with AI coding tools, what each one costs, and how to check for it yourself in 30 seconds.',
};

export default function WhatGoesWrongIndex() {
  return (
    <>
      <section className="page-head" style={{ background: 'var(--bg)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="section-label">What goes wrong</p>
          <h1 className="section-title" style={{ marginBottom: 28 }}>What goes wrong in AI-built apps.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8 }}>
            AI coding tools are good at making things work. They are less good at making things safe, and they don&apos;t tell you which is which. These are the nine problems I check in every review. Each page says what the problem is, what it looks like from your side, what it costs, and how to check for it yourself in about 30 seconds.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8, marginTop: 16 }}>
            None of this means your app has the problem. It means you can find out.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg2)', paddingTop: 64 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <ol style={{ listStyle: 'none', borderBottom: '1px solid var(--border)' }}>
            {FAILURE_MODES.map((mode, i) => {
              const inner = (
                <>
                  <span className="meta-label" style={{ flexShrink: 0, width: 32, marginTop: 6 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.25, marginBottom: 6 }}>{mode.title}</span>
                    <span style={{ display: 'block', color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>{mode.summary}</span>
                  </span>
                </>
              );
              return (
                <li key={mode.slug} style={{ borderTop: '1px solid var(--border)' }}>
                  {mode.body ? (
                    <Link href={failureModePath(mode.slug)} className="index-row">{inner}</Link>
                  ) : (
                    <div className="index-row" style={{ opacity: 0.55 }}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ol>

          <div style={{ marginTop: 64 }}>
            <BookingCta />
          </div>
        </div>
      </section>
    </>
  );
}
