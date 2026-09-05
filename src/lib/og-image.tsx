import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE_NAME } from './site';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

// Read from disk. The images are pre-rendered at build time; next.config.ts also
// includes this folder in the deploy bundle for any on-demand render.
const FONT_DIR = path.join(process.cwd(), 'src/app/fonts');
const font = (file: string) => readFile(path.join(FONT_DIR, file));

async function loadFonts() {
  const [serif, serifItalic, sans] = await Promise.all([
    font('DMSerifDisplay-Regular.ttf'),
    font('DMSerifDisplay-Italic.ttf'),
    font('Inter-Variable.ttf'),
  ]);
  return [
    { name: 'DM Serif Display', data: serif, weight: 400 as const, style: 'normal' as const },
    { name: 'DM Serif Display', data: serifItalic, weight: 400 as const, style: 'italic' as const },
    { name: 'Inter', data: sans, weight: 400 as const, style: 'normal' as const },
  ];
}

type OgProps = {
  eyebrow: string;
  /** First line of the title, in the text colour. */
  title: string;
  /** Optional second line, in the accent colour and italic. */
  accentLine?: string;
  subtitle: string;
  titleSize?: number;
};

/** Renders a 1200×630 link-preview card in the site's palette. */
export async function renderOgImage({ eyebrow, title, accentLine, subtitle, titleSize = 84 }: OgProps) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#0c0c0a',
          color: '#f0ebe2',
          fontFamily: 'Inter',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'DM Serif Display', fontSize: 36, letterSpacing: -0.5 }}>{SITE_NAME}</div>
          <div style={{ fontSize: 22, letterSpacing: 2.5, textTransform: 'uppercase', color: '#d4a85a' }}>{eyebrow}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'DM Serif Display', fontSize: titleSize, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
          {accentLine && (
            <div style={{ fontFamily: 'DM Serif Display', fontStyle: 'italic', fontSize: titleSize, lineHeight: 1.05, letterSpacing: -2, color: '#d4a85a' }}>
              {accentLine}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 48 }}>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: '#8a8478', maxWidth: 860 }}>{subtitle}</div>
          <div style={{ fontSize: 22, color: '#8a8478', whiteSpace: 'nowrap' }}>akhaizel.ca</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
