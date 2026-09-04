import { Fragment } from 'react';

/** Renders a string, turning `backtick` spans into inline code. */
export default function InlineCode({ text }: { text: string }) {
  const parts = text.split('`');
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <code key={i} className="code">{part}</code> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}
