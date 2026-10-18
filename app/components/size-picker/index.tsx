"use client";

import Image from "next/image";
import { useState } from "react";

type SizeKey = "14" | "17" | "19";

const sizes: Record<
  SizeKey,
  {
    code: string;
    line: string;
    color: string;
    swatch: string;
    od: number;
    id: number;
    use: string;
    holes: string;
    flow: string;
    bend: string;
    fit: string;
    n: number;
    // Product photo in /public; null shows a placeholder until one is added.
    image: string | null;
  }
> = {
  "14": {
    code: "TP095145",
    line: "Orange line",
    color: "#F26F21",
    swatch: "bg-pipe-orange",
    od: 14.5,
    id: 9.5,
    use: "Low-profile line for limited space between slab and tile. Medium flow over longer distance.",
    holes: "40–70 per m",
    flow: "14–24 L/m/hr",
    bend: "0.3 m / 1 ft",
    fit: "12 mm",
    n: 14,
    image: "/14mm.png",
  },
  "17": {
    code: "TP125175",
    line: "Green line",
    color: "#2E9D5A",
    swatch: "bg-pipe-green",
    od: 17.5,
    id: 12.5,
    use: "Standard size for all areas, including ground level. Uniform flow and good weight support.",
    holes: "50–80 per m",
    flow: "16–30 L/m/hr",
    bend: "0.3 m / 1 ft",
    fit: "16 mm",
    n: 17,
    image: null, // TODO: "/17mm.png"
  },
  "19": {
    code: "TP125195",
    line: "Red line",
    color: "#D2342C",
    swatch: "bg-pipe-red",
    od: 19.5,
    id: 12.5,
    use: "Thicker wall for higher load and the most consistent flow along long runs.",
    holes: "60–100 per m",
    flow: "16–30 L/m/hr",
    bend: "0.4 m / 1.2 ft",
    fit: "16 mm",
    n: 20,
    image: null, // TODO: "/19mm.png"
  },
};

// Largest pipe (19.5 mm OD) fills a 120-unit radius in the 300×300 viewBox.
const scale = 120 / 19.5;

export function Swatch({ className }: { className: string }) {
  return (
    <span
      className={`mr-2 inline-block size-3 rounded-xs align-[-1px] ${className}`}
    />
  );
}

export default function SizePicker() {
  const [key, setKey] = useState<SizeKey>("17");
  const s = sizes[key];

  const ro = s.od * scale;
  const ri = s.id * scale;
  const rm = (ro + ri) / 2;
  const holes = Array.from({ length: s.n }, (_, i) => {
    const a = (i / s.n) * Math.PI * 2 + 0.2;
    return { cx: 150 + Math.cos(a) * rm, cy: 150 + Math.sin(a) * rm };
  });

  const specs = [
    ["Inside × outside", `${s.id} × ${s.od} mm`],
    ["Hole density", s.holes],
    ["Flow @ 0.5 kg/cm²", s.flow],
    ["Min. bend radius", s.bend],
    ["Fittings", s.fit],
    ["Roll", "125 m"],
  ];

  return (
    <div className="grid grid-cols-1 items-center gap-[clamp(24px,4vw,48px)] rounded-r border border-line bg-bg p-[clamp(20px,3vw,36px)] *:min-w-0 min-[821px]:grid-cols-[320px_1fr]">
      <div className="flex flex-col items-center gap-6">
        <svg
          className="mx-auto block h-auto w-full max-w-75"
          viewBox="0 0 300 300"
          role="img"
          aria-label="Pipe cross-section for the selected size"
        >
          <circle
            cx="150"
            cy="150"
            r={ro}
            strokeWidth="2"
            className="fill-surface stroke-head"
          />
          <circle
            cx="150"
            cy="150"
            r={ri}
            strokeWidth="2"
            className="fill-bg stroke-line"
          />
          <g className="fill-accent">
            {holes.map((h, i) => (
              <circle key={i} cx={h.cx} cy={h.cy} r="2.6" />
            ))}
          </g>
          <rect
            x="140"
            y={150 - ro + 4}
            width="20"
            height="10"
            rx="2"
            fill={s.color}
          />
          <text
            x="150"
            y="146"
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="15"
            className="fill-muted"
          >
            ID {s.id}
          </text>
          <text
            x="150"
            y="168"
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="15"
            className="fill-head"
          >
            OD {s.od} mm
          </text>
        </svg>
        <div className="relative aspect-square w-full max-w-75 overflow-hidden rounded-r border border-line bg-surface">
          {s.image ? (
            <Image
              key={s.image}
              src={s.image}
              alt={`${s.code} ${key} mm pipe, ${s.line.toLowerCase()}`}
              fill
              sizes="300px"
              className="object-contain"
            />
          ) : (
            <div className="flex h-full items-center justify-center border-2 border-dashed border-line font-mono text-[0.8rem] text-muted">
              {key} mm image coming soon
            </div>
          )}
        </div>
      </div>

      <div>
        <div
          className="mb-4.5 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Pipe size"
        >
          {(Object.keys(sizes) as SizeKey[]).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={k === key}
              onClick={() => setKey(k)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border-[1.5px] border-line bg-transparent px-4 py-2.25 font-sans text-[0.9rem] font-semibold text-fg aria-selected:border-head aria-selected:bg-head aria-selected:text-bg"
            >
              <Swatch className={sizes[k].swatch} />
              {k} mm
            </button>
          ))}
        </div>
        <h3 className="mb-1.5">
          {s.code} · {s.line}
        </h3>
        <p className="mb-4.5 text-muted">{s.use}</p>
        <dl className="m-0 grid grid-cols-2 border-t border-line">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col gap-0.5 border-b border-line py-3.5 odd:pr-4"
            >
              <dt className="font-mono text-[0.72rem] tracking-[0.08em] text-muted uppercase">
                {label}
              </dt>
              <dd className="m-0 font-mono text-[0.88rem] font-semibold tabular-nums">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
