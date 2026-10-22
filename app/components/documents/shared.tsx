// Shared by the server section and the client filter; must stay free of Node APIs.

export type DocFormat = 'pdf' | 'docx';

export type DocItem = {
  title: string;
  text: string;
  /** Path under /public, e.g. "/downloads/termipore-tds-rev-2-4.pdf". */
  file?: string;
  format?: DocFormat;
  /** Extra meta lines: lab, report no., revision, validity... */
  meta?: string[];
  /** Green badge for certificates. */
  cert?: boolean;
  /** Never downloadable; always sent on request via the contact form. */
  onRequest?: boolean;
};

export type DocGroup = {
  id: string;
  /** Short label for the filter chip. */
  label: string;
  title: string;
  note: string;
  items: DocItem[];
};

/** Resolved on the server so the client only gets plain data. */
export type ResolvedDoc = DocItem & {
  href: string | null;
  size: string | null;
};
export type ResolvedGroup = Omit<DocGroup, 'items'> & { items: ResolvedDoc[] };

export const REQUEST_HREF = '/contact?topic=TDS+%2F+test+reports';

const FORMAT_LABEL: Record<DocFormat, string> = { pdf: 'PDF', docx: 'Word' };

export function docMeta(doc: ResolvedDoc) {
  const format = FORMAT_LABEL[doc.format ?? 'pdf'];
  return [
    ...(doc.meta ?? []),
    ...(doc.href ? [doc.size ? `${format} · ${doc.size}` : format] : []),
  ];
}

export function formatLabel(doc: DocItem) {
  return FORMAT_LABEL[doc.format ?? 'pdf'];
}

export function DocMeta({
  items,
  className = '',
}: {
  items: string[];
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <div
      className={`flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.78rem] tracking-[0.02em] text-muted ${className}`}
    >
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

// Fixed colours: the badge sits on white paper in both themes.
const BADGE_COLOR = { pdf: '#b84e14', docx: '#2e3191', cert: '#1f7a4d' };

/** Paper-sheet icon with a folded corner and the file type. */
export function FileBadge({
  format = 'pdf',
  cert = false,
  large = false,
}: {
  format?: DocFormat;
  cert?: boolean;
  large?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`relative grid flex-none place-items-center rounded-[5px_3px_3px_5px] border border-[#e3ddd2] bg-white before:absolute before:-top-px before:-right-px before:rounded-bl before:bg-[linear-gradient(225deg,var(--bg)_50%,#e3ddd2_50%)] before:content-[''] ${
        large
          ? 'h-[clamp(64px,7vw,78px)] w-[clamp(52px,5.6vw,64px)] before:size-4.5'
          : 'h-14.5 w-11.5 before:size-3.5'
      }`}
    >
      <b
        className={`rounded-[3px] font-mono font-medium tracking-[0.08em] text-white ${
          large
            ? 'mt-4.5 px-1.75 py-0.75 text-[0.8rem]'
            : 'mt-3.5 px-1.25 py-0.5 text-[0.68rem]'
        }`}
        style={{ background: BADGE_COLOR[cert ? 'cert' : format] }}
      >
        {format.toUpperCase()}
      </b>
    </div>
  );
}

export function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v12M6 10l6 6 6-6M4 21h16" />
    </svg>
  );
}
