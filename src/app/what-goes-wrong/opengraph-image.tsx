import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../../lib/og-image';

export const alt = 'What goes wrong in AI-built apps';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'What goes wrong',
    title: 'Nine things that go wrong',
    accentLine: 'in AI‑built apps.',
    subtitle: 'What each one is, what it costs, and how to check for it yourself in 30 seconds.',
    titleSize: 76,
  });
}
