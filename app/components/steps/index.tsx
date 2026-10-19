import Image, { type StaticImageData } from "next/image";

export type Step = {
  label: string;
  title: string;
  text: string;
  image?: string | StaticImageData;
};

export default function Steps({ items }: { items: Step[] }) {
  return (
    <div className="grid grid-cols-1 gap-7 min-[521px]:grid-cols-2 min-[861px]:grid-cols-4">
      {items.map((step, i) => (
        <div
          key={step.title}
          className={`flex flex-col gap-2.5 border-t-3 pt-5 ${i === 0 ? "border-accent" : "border-line"}`}
        >
          {step.image && (
            <div className="relative mb-1 aspect-5/4 overflow-hidden rounded-r border border-line bg-surface">
              <Image
                src={step.image}
                alt=""
                fill
                sizes="(min-width: 861px) 25vw, (min-width: 521px) 50vw, 100vw"
                quality={100}
                className="object-cover"
              />
            </div>
          )}
          <span className="font-mono text-[0.8rem] text-accent-ink">
            {step.label}
          </span>
          <h3>{step.title}</h3>
          <p className="text-[0.93rem] text-muted">{step.text}</p>
        </div>
      ))}
    </div>
  );
}
