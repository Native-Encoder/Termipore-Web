'use client';

import { useState } from 'react';
import {
  DocMeta,
  DownloadIcon,
  FileBadge,
  REQUEST_HREF,
  docMeta,
  formatLabel,
  type ResolvedDoc,
  type ResolvedGroup,
} from './shared';

/** Filter chips over grouped document lists. Every group shows by default. */
export default function DocumentGroups({
  groups,
}: {
  groups: ResolvedGroup[];
}) {
  const [filter, setFilter] = useState('all');
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const chips = [
    { id: 'all', label: 'All', count: total },
    ...groups.map((g) => ({ id: g.id, label: g.label, count: g.items.length })),
  ];

  return (
    <>
      <div
        role="group"
        aria-label="Filter documents"
        className="mt-10 mb-1 flex flex-wrap gap-2"
      >
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            aria-pressed={filter === chip.id}
            onClick={() => setFilter(chip.id)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border-[1.5px] border-head bg-transparent px-4 py-2.25 font-sans text-[0.9rem] font-medium text-head hover:bg-chip aria-pressed:bg-head aria-pressed:text-bg"
          >
            {chip.label}
            <small className="text-[0.75rem] opacity-75">{chip.count}</small>
          </button>
        ))}
      </div>

      {groups.map((group) => (
        <section
          key={group.id}
          hidden={filter !== 'all' && filter !== group.id}
          aria-labelledby={`docs-${group.id}`}
          className="mt-7 overflow-hidden rounded-r border border-line bg-bg"
        >
          <header className="flex items-baseline justify-between gap-x-4 border-b border-line bg-surface px-[clamp(18px,2.5vw,24px)] py-3 max-[560px]:flex-col">
            <h3
              id={`docs-${group.id}`}
              className="text-[0.85rem] font-semibold"
            >
              {group.title}
            </h3>
            <p className="text-[0.8rem] text-muted">{group.note}</p>
          </header>
          <ul className="m-0 list-none p-0">
            {group.items.map((doc) => (
              <DocRow key={doc.title} doc={doc} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

function DocRow({ doc }: { doc: ResolvedDoc }) {
  const format = formatLabel(doc);

  return (
    <li className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 border-b border-line px-[clamp(18px,2.5vw,24px)] py-5 *:min-w-0 last:border-b-0 hover:bg-surface/40 min-[861px]:grid-cols-[auto_1fr_minmax(150px,auto)_auto] min-[861px]:gap-x-5.5">
      <FileBadge format={doc.format} cert={doc.cert} />
      <div>
        <h4 className="mb-0.5 text-[1.03rem] leading-[1.35] font-semibold text-fg">
          {doc.title}
          {doc.onRequest && (
            <span className="ml-2 inline-block rounded-[3px] bg-accent/12 px-2 py-0.5 align-[2px] font-mono text-[0.68rem] font-medium tracking-[0.06em] text-accent-ink uppercase">
              On request
            </span>
          )}
        </h4>
        <p className="text-[0.9rem] text-muted">{doc.text}</p>
      </div>
      <DocMeta
        items={docMeta(doc)}
        className="col-start-2 min-[861px]:col-start-auto min-[861px]:flex-col min-[861px]:gap-y-0.5"
      />
      <div className="col-start-2 justify-self-start min-[861px]:col-start-auto">
        {doc.href ? (
          <a className="btn btn-ghost px-4.5 py-2.75" href={doc.href} download>
            <DownloadIcon />
            Download
            <span className="sr-only">
              {' '}
              {doc.title} ({format})
            </span>
          </a>
        ) : (
          <a
            className="btn border-line bg-surface px-4.5 py-2.75 text-fg hover:border-fg"
            href={REQUEST_HREF}
          >
            Request copy<span className="sr-only"> of {doc.title}</span>
          </a>
        )}
      </div>
    </li>
  );
}
