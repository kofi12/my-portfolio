import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BookingCta from '../../../components/BookingCta';
import InlineCode from '../../../components/InlineCode';
import { LIBRARY_PATH, PUBLISHED, failureModePath, getFailureMode } from '../../../content/what-goes-wrong';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PUBLISHED.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const mode = getFailureMode(slug);
  if (!mode) return {};
  const title = `${mode.title} | What goes wrong | akhaizel`;
  return {
    title,
    description: mode.description,
    openGraph: { type: 'article', siteName: 'akhaizel', locale: 'en_CA', url: failureModePath(mode.slug), title, description: mode.description },
    twitter: { card: 'summary_large_image', title, description: mode.description },
  };
}

function Block({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <h2 className="article-h2">{heading}</h2>
      {paragraphs.map((p) => (
        <p key={p} className="article-p"><InlineCode text={p} /></p>
      ))}
    </section>
  );
}

export default async function FailureModePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const mode = getFailureMode(slug);
  if (!mode) notFound();
  const { body } = mode;

  return (
    <>
      <section className="page-head" style={{ background: 'var(--bg)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Link href={LIBRARY_PATH} className="nav-link" style={{ display: 'inline-block', marginBottom: 32 }}>← All nine problems</Link>
          <p className="section-label">What goes wrong</p>
          <h1 className="section-title" style={{ marginBottom: 20 }}>{mode.title}.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.7 }}>{mode.summary}</p>
        </div>
      </section>

      <article className="section-pad" style={{ background: 'var(--bg2)', paddingTop: 72 }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          <Block heading="What it is" paragraphs={body.whatItIs} />
          <Block heading="What it looks like from your side" paragraphs={body.fromYourSide} />
          <Block heading="What it costs if you ignore it" paragraphs={body.cost} />

          <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h2 className="article-h2">How to check it yourself in 30 seconds</h2>
            <div className="card" style={{ padding: 'clamp(24px, 3vw, 32px)' }}>
              <ol className="steps">
                {body.check.map((step, i) => (
                  <li key={step}>
                    <span className="meta-label" style={{ flexShrink: 0, width: 28, marginTop: 4 }}>{i + 1}</span>
                    <span className="article-p" style={{ color: 'var(--text)' }}><InlineCode text={step} /></span>
                  </li>
                ))}
              </ol>
              {body.checkNote && (
                <p style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)', color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
                  {body.checkNote}
                </p>
              )}
            </div>
          </section>

          <Block heading="How I fix it" paragraphs={body.fix} />

          <BookingCta />
        </div>
      </article>
    </>
  );
}
