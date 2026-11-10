import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../lib/og-image';

export const alt = 'akhaizel. Never miss a lead.';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Local service businesses',
    title: 'Never miss a lead.',
    accentLine: 'Hear back anyway.',
    subtitle: 'Missed-call texts, web and Facebook replies, and Google review requests.',
  });
}
