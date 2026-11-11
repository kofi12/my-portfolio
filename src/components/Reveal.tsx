'use client';
import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Visible in the server HTML. The hidden state is a class added after
 * hydration, and only for blocks that are still off screen. If JavaScript
 * never runs, or the observer never fires, the block cannot stay invisible:
 * anything on screen is shown on a short poll.
 */
export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let observer: IntersectionObserver | undefined;
    let poll = 0;

    const show = () => {
      el.classList.remove('reveal-wait');
      el.classList.add('reveal-show');
      observer?.disconnect();
      window.clearInterval(poll);
    };

    const onScreen = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.96 && rect.bottom > 24;
    };

    const frame = requestAnimationFrame(() => {
      if (onScreen()) return;
      el.classList.add('reveal-wait');
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show();
      }, { threshold: 0.08 });
      observer.observe(el);
      poll = window.setInterval(() => {
        if (onScreen()) show();
      }, 400);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.clearInterval(poll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={['reveal', className].filter(Boolean).join(' ')}
      style={{ ...style, animationDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
