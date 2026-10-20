export type Tick = { title: string; text: string };

/** Diamond-bulleted list: bold lead-in followed by muted detail. */
export function TickList({
  items,
  separator = ' ',
}: {
  items: Tick[];
  separator?: string;
}) {
  return (
    <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
      {items.map((item) => (
        <li
          key={item.title}
          className="grid grid-cols-[22px_1fr] gap-3 text-[0.96rem] before:mt-2 before:size-2.5 before:rotate-45 before:rounded-[1px] before:bg-accent before:content-['']"
        >
          <span>
            <b className="font-semibold text-fg">{item.title}</b>
            <span className="text-muted">
              {separator}
              {item.text}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export type Numbered = { key: string; text: string };

/** Ruled list with a mono key column (step numbers, pump sizes...). */
export function NumberedList({ items }: { items: Numbered[] }) {
  return (
    <ol className="m-0 flex list-none flex-col border-t border-line p-0">
      {items.map((item) => (
        <li
          key={item.key}
          className="grid grid-cols-[44px_1fr] gap-3 border-b border-line py-3.5 text-[0.95rem]"
        >
          <span className="pt-0.5 font-mono text-[0.85rem] text-accent-ink">
            {item.key}
          </span>
          <span>{item.text}</span>
        </li>
      ))}
    </ol>
  );
}
