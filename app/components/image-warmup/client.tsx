'use client';

import { useEffect } from 'react';

type Source = { srcSet: string; sizes: string; src: string; media: string };

export default function WarmupClient({ sources }: { sources: Source[] }) {
  useEffect(() => {
    // Skip on data-saver connections.
    const conn = (navigator as { connection?: { saveData?: boolean } })
      .connection;
    if (conn?.saveData) return;

    let cancelled = false;
    const warm = () => {
      for (const s of sources) {
        if (cancelled) return;
        if (s.media && !window.matchMedia(s.media).matches) continue;
        const img = new Image();
        img.fetchPriority = 'low';
        img.decoding = 'async';
        // `sizes` before `srcset` so the browser picks the same candidate
        // the real hero <img> will request.
        img.sizes = s.sizes;
        img.srcset = s.srcSet;
        img.src = s.src;
      }
    };

    const start = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(warm, { timeout: 2000 });
      } else {
        setTimeout(warm, 200);
      }
    };

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('load', start);
    };
  }, [sources]);

  return null;
}
