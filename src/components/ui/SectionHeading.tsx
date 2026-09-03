import type { CSSProperties, ReactNode } from 'react';

type SectionHeadingProps = {
  label: string;
  children: ReactNode;
  /** Applied to the h2. Use for the gap before the section body. */
  style?: CSSProperties;
};

export function SectionHeading({ label, children, style }: SectionHeadingProps) {
  return (
    <>
      <p className="section-label">{label}</p>
      <h2 className="section-title" style={style}>
        {children}
      </h2>
    </>
  );
}
