import { useId, type ReactNode } from 'react';

export type IconName =
  | 'automations'
  | 'transformation'
  | 'audits'
  | 'calendar'
  | 'target'
  | 'launch'
  | 'mail'
  | 'pin';

type IconSize = 'lg' | 'md' | 'sm';

/** Four-point spark. r is the outer radius; the inner waist stays narrow so it reads as a glint. */
function spark(cx: number, cy: number, r = 2) {
  const inner = r * 0.32;
  return `M${cx} ${cy - r}L${cx + inner} ${cy - inner}L${cx + r} ${cy}L${cx + inner} ${cy + inner}L${cx} ${cy + r}L${cx - inner} ${cy + inner}L${cx - r} ${cy}L${cx - inner} ${cy - inner}Z`;
}

const MARKS: Record<IconName, ReactNode> = {
  automations: (
    <>
      <rect x="7.2" y="6.2" width="12" height="20.2" rx="2.5" />
      <path d="M11.1 22.5h4.2" />
      <path d="M19.5 12.2c2.6-.8 5.2-.1 5.7 2.2" />
      <path d={spark(26.1, 12.4, 1.85)} />
    </>
  ),
  transformation: (
    <>
      <circle cx="17.8" cy="11.6" r="2.55" />
      <path d="M12.7 22.4C13.4 18.5 15.4 16.8 17.8 16.8C20.2 16.8 22.2 18.5 22.9 22.4" />
      <circle cx="12.3" cy="13.7" r="2.55" />
      <path d="M6.7 25.1C7.5 20.7 9.6 18.8 12.3 18.8C15 18.8 17.1 20.7 17.9 25.1" />
      <path d={spark(25.3, 7.1, 1.9)} />
    </>
  ),
  audits: (
    <>
      <path d="M16 4.7l8.6 3.5v6.5c0 4.9-3.4 8.35-8.6 10.35-5.2-2-8.6-5.45-8.6-10.35V8.2z" />
      <path d="M12.35 16.15l2.85 2.85 4.85-5.7" />
    </>
  ),
  calendar: (
    <>
      <rect x="6" y="8" width="20" height="18" rx="2.25" />
      <path d="M6 13.25h20" />
      <path d="M11.25 5.25v5" />
      <path d="M20.75 5.25v5" />
    </>
  ),
  target: (
    <>
      <circle cx="16" cy="16" r="9" />
      <circle cx="16" cy="16" r="5" />
      <circle cx="16" cy="16" r="1.45" />
    </>
  ),
  launch: (
    <>
      <path d="M16 5c2.7 2.55 3.9 6.45 3.9 10.9V21H12.1v-5.1C12.1 11.45 13.3 7.55 16 5z" />
      <circle cx="16" cy="12.7" r="1.55" />
      <path d="M12.1 17.1L8.5 21.5" />
      <path d="M19.9 17.1l3.6 4.4" />
      <path d="M16 21.2v3.6" />
    </>
  ),
  mail: (
    <>
      <rect x="5" y="8" width="22" height="16" rx="2.1" />
      <path d="M7.4 10.3L16 16.35 24.6 10.3" />
    </>
  ),
  pin: (
    <>
      <path d="M16 27.3S9.5 20.7 9.5 15a6.5 6.5 0 0 1 13 0c0 5.7-6.5 12.3-6.5 12.3z" />
      <circle cx="16" cy="14.85" r="2.15" />
    </>
  ),
};

/** Gold line icon in a hairline circle. Decorative; the nearby text names it. */
export function IconMark({ name, size = 'lg' }: { name: IconName; size?: IconSize }) {
  const gid = `icon-gold-${useId().replace(/:/g, '')}`;

  return (
    <span className={`icon-mark icon-mark-${size}`} aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id={gid} x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f0d7a6" />
            <stop offset="48%" stopColor="#d4a85a" />
            <stop offset="100%" stopColor="#c4923e" />
          </linearGradient>
        </defs>
        <g
          stroke={`url(#${gid})`}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {MARKS[name]}
        </g>
      </svg>
    </span>
  );
}
