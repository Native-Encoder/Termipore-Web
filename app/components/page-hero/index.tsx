export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="on-blue py-[clamp(48px,6vw,80px)]">
      <div className="wrap">
        <div className="flex max-w-195 flex-col gap-4.5">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </div>
    </section>
  );
}
