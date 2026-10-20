'use client';

import { useEffect, useRef, useState } from 'react';

const NUMBER = /\d[\d,]*/g;
const DURATION = 1800;

function render(value: string, progress: number) {
  return value.replace(NUMBER, (match) => {
    const target = Number(match.replace(/,/g, ''));
    const current = Math.round(target * progress);
    return match.includes(',')
      ? current.toLocaleString('en-US')
      : String(current);
  });
}

// Counts every number in `value` up from zero the first time it scrolls into view.
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    setText(render(value, 0));
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          setText(render(value, 1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
