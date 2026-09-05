import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../../../lib/og-image';
import { FAILURE_MODES, PUBLISHED } from '../../../content/what-goes-wrong';

export function generateStaticParams() {
  return PUBLISHED.map(({ slug }) => ({ slug }));
}

export const alt = 'What goes wrong in AI-built apps';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mode = FAILURE_MODES.find((m) => m.slug === slug);
  return renderOgImage({
    eyebrow: 'What goes wrong',
    title: mode ? `${mode.title}.` : 'What goes wrong in AI‑built apps.',
    subtitle: mode ? mode.summary : 'Nine things that go wrong in AI-built apps, and how to check for each in 30 seconds.',
    titleSize: mode && mode.title.length > 26 ? 68 : 80,
  });
}
