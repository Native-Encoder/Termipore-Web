'use client';

import { useRef, useState } from 'react';

export default function CopyClause({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');

  // Fall back to selecting the text when the clipboard API is unavailable.
  const select = () => {
    const el = ref.current;
    const selection = window.getSelection();
    if (!el || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
    setMessage('Selected. Press Ctrl+C / ⌘C to copy.');
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Copied to clipboard.');
    } catch {
      select();
    }
  };

  return (
    <div className="min-w-0">
      <div
        ref={ref}
        className="relative rounded-r border border-l-4 border-line border-l-brand bg-surface px-6 pt-6 pb-5 font-mono text-[0.86rem] leading-[1.75] wrap-anywhere whitespace-pre-wrap"
      >
        {text}
      </div>
      <div className="mt-3 flex items-center justify-end gap-3">
        <small className="text-[0.82rem] text-muted" aria-live="polite">
          {message}
        </small>
        <button className="btn btn-ghost" type="button" onClick={copy}>
          Copy clause
        </button>
      </div>
    </div>
  );
}
