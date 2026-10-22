import { statSync } from 'node:fs';
import path from 'node:path';
import DocumentGroups from './groups';
import {
  DocMeta,
  DownloadIcon,
  FileBadge,
  REQUEST_HREF,
  docMeta,
  type DocGroup,
  type DocItem,
  type ResolvedDoc,
} from './shared';

export type { DocGroup, DocItem } from './shared';

function formatSize(bytes: number) {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

/**
 * Reads the file from /public at build time. A file that hasn't been uploaded
 * yet resolves to `href: null`, so the row offers "Request copy" instead of a
 * broken download.
 */
function resolve(doc: DocItem): ResolvedDoc {
  if (doc.onRequest || !doc.file) return { ...doc, href: null, size: null };
  try {
    const { size } = statSync(path.join(process.cwd(), 'public', doc.file));
    return { ...doc, href: doc.file, size: formatSize(size) };
  } catch {
    return { ...doc, href: null, size: null };
  }
}

/** Featured TDS card followed by the filterable document groups. */
export default function Documents({
  featured,
  groups,
}: {
  featured: DocItem;
  groups: DocGroup[];
}) {
  const tds = resolve(featured);
  const resolved = groups.map((g) => ({ ...g, items: g.items.map(resolve) }));

  return (
    <>
      <article
        aria-labelledby="tds-title"
        className="grid grid-cols-[auto_1fr] items-center gap-x-[clamp(16px,2.5vw,28px)] gap-y-5 rounded-r border border-l-[6px] border-line border-l-brand bg-bg p-[clamp(20px,3vw,32px)] *:min-w-0 min-[861px]:grid-cols-[auto_1fr_auto]"
      >
        <FileBadge format={tds.format} large />
        <div className="flex flex-col gap-1">
          <span className="eyebrow">Start here</span>
          <h3
            id="tds-title"
            className="text-[clamp(1.25rem,2.2vw,1.5rem)] font-bold"
          >
            {tds.title}
          </h3>
          <p className="text-[0.95rem] text-muted">{tds.text}</p>
          <DocMeta items={docMeta(tds)} className="mt-1.5" />
        </div>
        <div className="col-span-full min-[861px]:col-span-1">
          <a
            className="btn btn-primary w-full justify-center min-[861px]:w-auto"
            href={tds.href ?? REQUEST_HREF}
            download={tds.href ? true : undefined}
          >
            {tds.href ? (
              <>
                <DownloadIcon />
                Download TDS<span className="sr-only"> (PDF)</span>
              </>
            ) : (
              'Request TDS'
            )}
          </a>
        </div>
      </article>

      <DocumentGroups groups={resolved} />
    </>
  );
}
