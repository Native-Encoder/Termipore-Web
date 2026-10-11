export type Step = { label: string; title: string; text: string };

export default function Steps({ items }: { items: Step[] }) {
  return (
    <div className="grid grid-cols-1 gap-7 min-[521px]:grid-cols-2 min-[861px]:grid-cols-4">
      {items.map((step, i) => (
        <div
          key={step.title}
          className={`flex flex-col gap-2.5 border-t-3 pt-5 ${i === 0 ? "border-accent" : "border-line"}`}
        >
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
