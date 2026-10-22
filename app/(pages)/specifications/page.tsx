import {
  specificationsHero,
  specificationsHeroMobile,
  requestCta,
} from '@/public/assets';
import type { Metadata } from 'next';
import ButtonLink from '../../components/button';
import CtaBand from '../../components/cta-band';
import Documents, {
  type DocGroup,
  type DocItem,
} from '../../components/documents';
import { TickList } from '../../components/lists';
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
      'High load bearing',
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

// Files live in public/downloads. Until a file is uploaded its row offers
// "Request copy" instead of a download, and sizes are read at build time.
const tds: DocItem = {
  title: 'Technical Data Sheet',
  text: 'Dimensions, flow, material limits and installation limits for all three pipe sizes (14, 17 and 19 mm).',
  file: '/downloads/termipore-tds-rev-2-4.pdf',
  meta: ['Rev 2.4'],
};

const documents: DocGroup[] = [
  {
    id: 'data',
    label: 'Technical data',
    title: 'Technical data',
    note: 'For specifiers and site teams',
    items: [
      {
        title: 'Installation guidelines',
        text: 'Seven site rules, pump and box spacing, and what must be protected before the screed goes down.',
        file: '/downloads/termipore-installation-guidelines.pdf',
      },
      {
        title: 'Model specification clause',
        text: 'The editable clause from the Architects page, ready to paste into your project specification.',
        file: '/downloads/termipore-model-specification-clause.docx',
        format: 'docx',
        meta: ['Editable'],
      },
    ],
  },
  {
    id: 'tests',
    label: 'Test reports',
    title: 'Test reports',
    note: 'Independent laboratory results',
    items: [
      {
        title: 'Accelerated weathering test',
        text: '300 hours, equivalent to about 10 years outdoors. No cracking, blocking or jetting; tensile strength and elongation reduced by about 10%.',
        file: '/downloads/termipore-weathering-report.pdf',
      },
      {
        title: 'Environmental stress-crack resistance',
        text: 'Tested at 50 °C for 24 hours. No slow crack growth.',
        file: '/downloads/termipore-escr-report.pdf',
      },
      {
        title: 'Termiticide compatibility (EC and SC)',
        text: 'Tested with emulsifiable and suspension concentrates. EC is preferred for flow.',
        file: '/downloads/termipore-formulation-compatibility.pdf',
      },
      {
        title: 'RoHS compliance',
        text: 'Compliant with RoHS Annex II and amendment (EU) 2015/863. We send the full test report within one working day.',
        onRequest: true,
      },
    ],
  },
  {
    id: 'certs',
    label: 'Certifications',
    title: 'Certifications',
    note: 'Check the validity date before you file',
    items: [
      {
        title: 'ISO 9001:2015 certificate',
        text: 'Manufacturer’s quality management certificate. Covers the process that checks flow rate on every roll before dispatch.',
        file: '/downloads/termipore-iso-9001-2015.pdf',
        cert: true,
      },
    ],
  },
];

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
        mobileImage={specificationsHeroMobile}
        mobileBackdrop="#000a38"
        mobileClear={0.45}
      >
        <a
          href="#documents"
          className="mt-2 inline-flex w-fit items-center gap-2 border-b-2 border-accent pb-0.75 text-[0.95rem] font-semibold text-white no-underline hover:text-peach"
        >
          Reports &amp; certifications
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 4v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </PageHero>

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

      <Section alt id="documents">
        <div className="mb-10 flex flex-col gap-3">
          <span className="eyebrow">Reports &amp; certifications</span>
          <h2>Download the documents behind the data.</h2>
          <p className="lead mt-1 max-w-155">
            Test reports, certificates and technical data for your specification
            file or tender submission. Check the revision before you submit.
          </p>
        </div>
        <Documents featured={tds} groups={documents} />
      </Section>

      <CtaBand
        title="Need a document that isn’t listed, or a sample roll?"
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
