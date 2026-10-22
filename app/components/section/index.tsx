type Children = { children: React.ReactNode; className?: string };

export default function Section({
  id,
  alt = false,
  narrow = false,
  className = '',
  children,
}: Children & { id?: string; alt?: boolean; narrow?: boolean }) {
  return (
    <section
      id={id}
      // Clears the sticky header when jumped to.
      className={`section scroll-mt-28 ${alt ? 'bg-surface' : ''}`}
    >
      <div className={`wrap ${narrow ? 'max-w-215' : ''} ${className}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

/** Two equal columns that stack below 860px. */
export function Split({
  wideFirst = false,
  className = '',
  children,
}: Children & { wideFirst?: boolean }) {
  const cols = wideFirst
    ? 'min-[861px]:grid-cols-[1.5fr_1fr]'
    : 'min-[861px]:grid-cols-2';
  return (
    <div
      className={`grid grid-cols-1 items-start gap-[clamp(28px,5vw,64px)] ${cols} *:min-w-0 ${className}`}
    >
      {children}
    </div>
  );
}

export function Stack({ className = '', children }: Children) {
  return <div className={`flex flex-col gap-5 ${className}`}>{children}</div>;
}
