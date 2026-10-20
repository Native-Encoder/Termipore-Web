export default function Callout({
  title,
  text,
  className = "",
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-1.5 rounded-r bg-band px-6 py-5.5 ${className}`}
    >
      <b className="font-sans text-head">{title}</b>
      <p className="text-[0.94rem] text-fg">{text}</p>
    </div>
  );
}
