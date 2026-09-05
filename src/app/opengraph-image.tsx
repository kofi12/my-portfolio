import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../lib/og-image';

export const alt = 'akhaizel. I make AI-built apps safe to launch.';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'AI-built app audits',
    title: 'I make AI‑built apps',
    accentLine: 'safe to launch.',
    subtitle: 'A $250 review, a written report, and a clear verdict in 2–3 business days. For founders who built with Lovable, Bolt, Cursor, v0, or Replit.',
  });
}
