import { specificationsHero, requestCta } from '@/public/assets';
import type { Metadata } from 'next';
import ButtonLink from '../../components/button';
import CtaBand from '../../components/cta-band';
import { NumberedList, TickList } from '../../components/lists';
import PageHero from '../../components/page-hero';
import Section, { SectionHead, Split, Stack } from '../../components/section';
import SizePicker, { Swatch } from '../../components/size-picker';

export const metadata: Metadata = { title: 'Specifications' };

const performance: {
  label: string;
  cells: React.ReactNode[];
  mono?: boolean;
}[] = [
  {
    label: 'Inside × outside diameter',
    cells: ['9.5 × 14.5 mm', '12.5 × 17.5 mm', '12.5 × 19.5 mm'],
    mono: true,
  },
  {
    label: 'Marking line',
    cells: [
      <>
        <Swatch className="bg-pipe-orange" />
        Orange
      </>,
      <>
        <Swatch className="bg-pipe-green" />
        Green
      </>,
      <>
        <Swatch className="bg-pipe-red" />
        Red
      </>,
    ],
  },
  {
    label: 'Suitable for',
    cells: [
      'Limited space between slab and tile',
      'All areas, including ground level',
      'High-consistency flow',
    ],
  },
  {
    label: 'Micro-hole size',
    cells: ['0.2–1.0 mm', '0.2–1.0 mm', '0.2–1.0 mm'],
    mono: true,
  },
  {
    label: 'Hole density, per metre',
    cells: ['40–70', '50–80', '60–100'],
    mono: true,
  },
  {
    label: 'Designed flow per m/hr @ 0.5 kg/cm²',
    cells: ['14–24 L', '16–30 L', '16–30 L'],
    mono: true,
  },
  {
    label: 'Minimum bending radius',
    cells: ['0.3 m / 1 ft', '0.3 m / 1 ft', '0.4 m / 1.2 ft'],
    mono: true,
  },
  {
    label: 'Fitting size',
    cells: ['12 mm', '16 mm', '16 mm'],
    mono: true,
  },
  {
    label: 'Roll length',
    cells: ['125 m', '125 m', '125 m'],
    mono: true,
  },
];

const material: { label: string; value: string; mono?: boolean }[] = [
  {
    label: 'Material',
    value: 'Thermoplastic elastomeric compound, RoHS compliant',
  },
  { label: 'Min. tensile strength', value: '6 kg/cm²', mono: true },
  { label: 'Min. elongation at break', value: '50%', mono: true },
  { label: 'Min. burst pressure', value: '50 PSI', mono: true },
  { label: 'Max. continuous length', value: '25 m / 80 ft', mono: true },
  { label: 'Operating temperature', value: '0 °C to 50 °C', mono: true },
  {
    label: 'Working life',
    value: '30–50 years when not exposed to atmosphere',
  },
];

const rules = [
  'Make turns with a large radius; use an elbow for sharp turns. Never kink the pipe.',
  'Install at ground level or below flooring only. Use PVC or PE above floor level.',
  'Outlet pipes can harden over time. Plan for periodic inspection.',
  'Never pour cement directly on the pipe. Cover with sand or paper first.',
  '0.5 HP pump: an outlet or box every 20 m (60 ft).',
  '1.0 HP monobloc pump: max 30 m (100 ft) continuous; inject from both ends beyond that.',
  'Waterproof wet areas properly. Water seeping into the pipe shortens its life.',
].map((text, i) => ({ key: String(i + 1).padStart(2, '0'), text }));

const accessories = [
  { title: 'Straight coupler', text: 'in-line joiner' },
  { title: '90° elbow, tee and 4-way cross', text: 'for layout changes' },
  { title: 'End seal', text: 'closes the end of a run' },
  {
    title: 'Distribution / junction box',
    text: 'wall-mounted charging point',
  },
  {
    title: 'J-hook clamps and nail-fix clips',
    text: 'fix the pipe to floor or PCC',
  },
  { title: 'Brass nipple & elbow', text: 'durable box connections' },
];

export default function SpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical data · TDS REV 2.4"
        title="Specifications"
        lead="Elastomeric Reticulation Pipe in three sizes, supplied on 125 m rolls with a coloured marking line for identification on site."
        image={specificationsHero}
      />

      <Section>
        <SectionHead
          eyebrow="Choose a size"
          title="Match the pipe to the load above it."
        />
        <SizePicker />
      </Section>

      <Section alt>
        <SectionHead eyebrow="Flow & performance" title="By product code" />
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th scope="col">Parameter</th>
                <th scope="col">TP095145 · 14 mm</th>
                <th scope="col">TP125175 · 17 mm</th>
                <th scope="col">TP125195 · 19 mm</th>
              </tr>
            </thead>
            <tbody>
              {performance.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.cells.map((cell, i) => (
                    <td key={i} className={row.mono ? 'mono' : undefined}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <Split>
          <Stack>
            <span className="eyebrow">Common to all sizes</span>
            <h2>Material &amp; limits</h2>
            <div className="tbl-wrap">
              <table className="tbl">
                <tbody>
                  {material.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td className={row.mono ? 'mono' : undefined}>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Stack>
          <Stack>
            <span className="eyebrow">Installation guidelines</span>
            <h2>Seven site rules</h2>
            <NumberedList items={rules} />
          </Stack>
        </Split>
      </Section>

      <Section alt>
        <Split>
          <Stack>
            <span className="eyebrow">Accessory system</span>
            <h2>Every fitting, sized to the pipe.</h2>
            <p>
              12 mm fittings for the 14 mm line; 16 mm fittings for the 17 and
              19 mm lines. Brass nipples and couplings are recommended at
              junction boxes so connections last as long as the pipe.
            </p>
          </Stack>
          <TickList items={accessories} separator=" · " />
        </Split>
      </Section>

      <CtaBand
        title="Need the TDS, test reports or a sample roll?"
        image={requestCta}
      >
        <ButtonLink
          href={{
            pathname: '/contact',
            query: { topic: 'TDS / test reports' },
          }}
          arrow
        >
          Request documents
        </ButtonLink>
      </CtaBand>
    </>
  );
}
