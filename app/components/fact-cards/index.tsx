import Image from "next/image";

export type Fact = {
  label: string;
  title: string;
  text: string;
  highlight?: boolean;
  image?: string;
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
          className={`flex flex-col gap-2 overflow-hidden rounded-r border bg-bg p-6 ${fact.highlight ? "border-brand" : "border-line"}`}
        >
          {fact.image && (
            <div className="relative -mx-6 -mt-6 mb-2 aspect-5/4 border-b border-line bg-surface">
              <Image
                src={fact.image}
                alt=""
                fill
                sizes="(min-width: 861px) 33vw, (min-width: 561px) 50vw, 100vw"
                quality={100}
                className="object-cover"
              />
            </div>
          )}
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
