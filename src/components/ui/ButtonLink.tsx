import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  block?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  className,
  style,
  onClick,
}: ButtonLinkProps) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size === 'sm' && 'btn-sm',
    block && 'btn-block',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link href={href} className={classes} style={style} onClick={onClick}>
      {children}
    </Link>
  );
}
