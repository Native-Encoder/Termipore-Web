export type Fact = {
  label: string;
  title: string;
  text: string;
  highlight?: boolean;
};

export default function FactCards({
  items,
  columns = 3,
}: {
  items: Fact[];
  columns?: 2 | 3;
}) {
  const cols =
    columns === 2
      ? "min-[561px]:grid-cols-2"
      : "min-[561px]:grid-cols-2 min-[861px]:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-5 ${cols}`}>
      {items.map((fact) => (
        <div
          key={fact.title}
          className={`flex flex-col gap-2 rounded-r border bg-bg p-6 ${fact.highlight ? "border-brand" : "border-line"}`}
        >
          <span
            className={`font-mono text-[0.74rem] tracking-[0.08em] uppercase ${fact.highlight ? "text-accent-ink" : "text-muted"}`}
          >
            {fact.label}
          </span>
          <h3>{fact.title}</h3>
          <p className="text-[0.93rem] text-muted">{fact.text}</p>
        </div>
      ))}
    </div>
  );
}
