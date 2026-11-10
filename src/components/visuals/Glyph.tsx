type GlyphName = 'message' | 'search' | 'layers' | 'call' | 'setup' | 'next';

/** Decorative line icon in the site gold. */
export function Glyph({ name }: { name: GlyphName }) {
  return (
    <svg className="glyph" viewBox="0 0 28 28" aria-hidden="true">
      {name === 'message' && (
        <path d="M5 7.5h18v10.5H9.5L5 21.5V7.5z" />
      )}
      {name === 'search' && (
        <>
          <circle cx="12" cy="12" r="5.5" />
          <path d="M16.2 16.2L21 21" />
        </>
      )}
      {name === 'layers' && (
        <>
          <path d="M4 11l10-5 10 5-10 5-10-5z" />
          <path d="M6.5 15.2L14 19l7.5-3.8" />
        </>
      )}
      {name === 'call' && (
        <>
          <rect x="8.5" y="5" width="11" height="18" rx="2" />
          <path d="M12 19.5h4" />
        </>
      )}
      {name === 'setup' && (
        <>
          <circle cx="6" cy="18" r="2" />
          <circle cx="14" cy="8" r="2" />
          <circle cx="22" cy="16" r="2" />
          <path d="M8 16.6l4.2-6.4M16 9.3l4 5" />
        </>
      )}
      {name === 'next' && <path d="M6 14h14M15 8.5L20.5 14 15 19.5" />}
    </svg>
  );
}
