import { ButtonRow } from "../button";

export default function CtaBand({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="on-blue">
      <div className="wrap flex flex-wrap items-center justify-between gap-6 py-[clamp(40px,6vw,64px)]">
        <h2 className="max-w-[22ch]">{title}</h2>
        <ButtonRow>{children}</ButtonRow>
      </div>
    </section>
  );
}
