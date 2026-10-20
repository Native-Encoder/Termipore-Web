/** Cell value: plain text, or a tuple of [text, tone] where tone styles the cell. */
export type Cell = string | [string, ...Tone[]];
type Tone = 'mono' | 'nope' | 'dim';

export type ComparisonRow = { label: string; cells: [Cell, Cell, Cell] };

const toneClass: Record<Tone, string> = {
  mono: 'mono',
  nope: 'text-no',
  dim: 'text-muted',
};

function renderCell(cell: Cell, i: number) {
  if (typeof cell === 'string') return <td key={i}>{cell}</td>;
  const [text, ...tones] = cell;
  return (
    <td key={i} className={tones.map((t) => toneClass[t]).join(' ')}>
      {text}
    </td>
  );
}

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="tbl-wrap">
      <table className="tbl cmp">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Termipore</th>
            <th scope="col">Drip / drilled PVC</th>
            <th scope="col">Soil treatment only</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.cells.map(renderCell)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
