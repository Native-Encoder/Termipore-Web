import Image, { type StaticImageData } from 'next/image';

export type Fact = {
  label: string;
  title: string;
  text: string;
  highlight?: boolean;
  image?: string | StaticImageData;
};

export default function FactCards({
  items,
  columns = 3,
  imagePosition = 'top',
}: {
  items: Fact[];
  columns?: 2 | 3;
  imagePosition?: 'top' | 'left';
}) {
  const cols =
    columns === 2
      ? 'min-[561px]:grid-cols-2'
      : 'min-[561px]:grid-cols-2 min-[861px]:grid-cols-3';
  const side = imagePosition === 'left';
  return (
    <div className={`grid grid-cols-1 gap-5 ${cols}`}>
      {items.map((fact) => (
        <div
          key={fact.title}
          className={`flex flex-col overflow-hidden rounded-r border bg-bg ${side ? 'min-[861px]:flex-row' : ''} ${fact.highlight ? 'border-brand' : 'border-line'}`}
        >
          {fact.image && (
            <div
              className={`relative shrink-0 border-line bg-surface ${side ? 'aspect-6/5 border-b min-[861px]:w-2/5 min-[861px]:border-r min-[861px]:border-b-0' : 'aspect-5/4 border-b'}`}
            >
              <Image
                src={fact.image}
                alt=""
                fill
                sizes={
                  side
                    ? '(min-width: 861px) 20vw, (min-width: 561px) 50vw, 100vw'
                    : columns === 2
                      ? '(min-width: 561px) 50vw, 100vw'
                      : '(min-width: 861px) 33vw, (min-width: 561px) 50vw, 100vw'
                }
                className="object-cover"
              />
            </div>
          )}
          <div
            className={`flex flex-col gap-2 p-6 ${side ? 'min-[861px]:justify-center' : ''}`}
          >
            <span
              className={`font-mono text-[0.74rem] tracking-[0.08em] uppercase ${fact.highlight ? 'text-accent-ink' : 'text-muted'}`}
            >
              {fact.label}
            </span>
            <h3>{fact.title}</h3>
            <p className="text-[0.93rem] text-muted">{fact.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
