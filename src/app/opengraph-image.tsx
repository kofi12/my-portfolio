import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../lib/og-image';

export const alt = 'akhaizel. AI that works for your business.';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Three services',
    title: 'AI that works',
    accentLine: 'for your business.',
    subtitle: 'Automations, transformation, and audits of AI-built apps.',
  });
}
