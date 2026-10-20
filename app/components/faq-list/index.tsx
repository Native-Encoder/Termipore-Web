export type FaqItem = { question: string; answer: React.ReactNode };

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <details
          key={item.question}
          open={i === 0}
          className="group border-b border-line"
        >
          <summary className="relative cursor-pointer list-none py-5 pr-10 font-sans font-semibold text-head after:absolute after:top-4 after:right-1 after:text-[1.5rem] after:font-normal after:text-accent-ink after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">
            {item.question}
          </summary>
          <p className="pb-5.5 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
