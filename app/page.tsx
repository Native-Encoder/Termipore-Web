import Image from 'next/image';
import {
  architectHome,
  engineerHome,
  pestHome,
  homeHero,
  requestCta,
  homeOwnersHome,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
} from '@/public/assets';
import Link from 'next/link';
import ButtonLink, { ButtonRow } from './components/button';
import ComparisonTable, {
  type ComparisonRow,
} from './components/comparison-table';
import CountUp from './components/count-up';
import CtaBand from './components/cta-band';
import FactCards, { type Fact } from './components/fact-cards';
import HeroDiagram from './components/hero-diagram';
import Section, { SectionHead, Split, Stack } from './components/section';
import Steps, { type Step } from './components/steps';

const stats = [
  { value: '150+', label: 'installations in Sri Lanka' },
  { value: '10,000+', label: 'installations worldwide' },
  { value: '30–50 yrs', label: 'working life when concealed' },
  { value: 'ISO 9001', label: ':2015 certified manufacturing', static: true },
];

const audiences = [
  {
    href: '/architects',
    tag: '',
    title: 'Architects & specifiers',
    text: 'Specification clause, size selection, junction box layout and the coordination points to put on your drawings.',
    go: 'For architects →',
    image: architectHome,
  },
  {
    href: '/builders',
    tag: '',
    title: 'Construction companies & developers',
    text: 'Where Termipore sits in the programme, what site teams must protect, and why buyers value it at handover.',
    go: 'For builders →',
    image: engineerHome,
  },
  {
    href: '/pco',
    tag: '',
    title: 'Pest control companies',
    text: 'Pipe range, fitting system, technical data and supply through the authorised distributor.',
    go: 'For pest control →',
    image: pestHome,
  },
  {
    href: '/homeowners',
    tag: '',
    title: 'Homeowners',
    text: 'What to ask your builder before the floor goes down, and what re-treatment looks like years later.',
    go: 'For homeowners →',
    image: homeOwnersHome,
  },
];

const comparison: ComparisonRow[] = [
  {
    label: 'Purpose-built for termite control',
    cells: ['Yes', ['No', 'nope'], ['—', 'dim']],
  },
  {
    label: 'Holes per metre',
    cells: [
      ['40–100', 'mono'],
      ['3–4', 'mono', 'nope'],
      ['—', 'dim'],
    ],
  },
  {
    label: 'Holes around full circumference',
    cells: ['Yes', ['One side', 'nope'], ['—', 'dim']],
  },
  {
    label: 'Resists blocking by sand or mud',
    cells: ['Yes', ['No', 'nope'], ['—', 'dim']],
  },
  {
    label: 'Flow checked on every roll',
    cells: ['Yes', ['No', 'nope'], ['—', 'dim']],
  },
  {
    label: 'Re-treat without drilling floors',
    cells: ['Yes', 'Yes', ['No', 'nope']],
  },
  {
    label: 'Design life',
    cells: [
      ['30–50 yrs', 'mono'],
      ['Unreliable', 'nope'],
      ['None', 'nope'],
    ],
  },
];

const steps: Step[] = [
  {
    label: '01 · Before the floor',
    title: 'Lay the network',
    text: 'Pipe is run on the PCC or in soil at plinth level, around the perimeter and under internal walls, fixed with clamps.',
  },
  {
    label: '02 · Connect',
    title: 'Terminate at junction boxes',
    text: 'Runs end in wall-mounted boxes, spaced to suit the pump. Floor finishes go down over a sealed network.',
  },
  {
    label: '03 · Inject',
    title: 'Charge the barrier',
    text: 'Termiticide is pumped through the boxes and spreads from the micro-holes into the soil beneath the slab.',
  },
  {
    label: '04 · Years later',
    title: 'Re-treat from the wall',
    text: 'The barrier is topped up through the same boxes. No drilling, no lifted tiles, no disruption to occupants.',
  },
];

const evidence: Fact[] = [
  {
    label: '',
    title: '300 hours ≈ 10 years outdoors',
    text: 'No cracking, blocking or jetting. Uniform flow on all sides. Tensile strength and elongation reduced by about 10%.',
    image: firstImage,
  },
  {
    label: '',
    title: 'No slow crack growth',
    text: 'Environmental stress-crack resistance tested at 50 °C for 24 hours.',
    image: secondImage,
  },
  {
    label: '',
    title: 'No banned hazardous substances',
    text: 'Compliant with RoHS Annex II and amendment (EU) 2015/863. Test reports on request.',
    image: thirdImage,
  },
  {
    label: '',
    title: 'EC and SC formulations',
    text: 'Tested with both. Emulsifiable concentrates are preferred for flow.',
    image: fourthImage,
  },
  {
    label: '',
    title: 'ISO 9001:2015',
    text: 'Certified process, with flow rate checked on every roll before dispatch.',
    image: fifthImage,
  },
  {
    label: '',
    title: 'QR code on every roll',
    text: 'Scan on site to confirm genuine Termipore and reach technical support.',
    image: sixthImage,
  },
];

export default function Home() {
  return (
    <>
      <section className="on-blue relative isolate overflow-hidden pt-[clamp(48px,7vw,88px)]">
        <Image
          src={homeHero}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="wrap">
          <div className="grid grid-cols-1 items-center gap-[clamp(24px,4vw,56px)] *:min-w-0 min-[861px]:grid-cols-[1.05fr_1fr]">
            <div className="flex flex-col gap-5.5 pb-[clamp(32px,5vw,64px)]">
              <span className="eyebrow">Anti-termite reticulation system</span>
              <h1>
                Built Beneath.
                <br />
                <span className="text-accent">Protected for Life.</span>
              </h1>
              <p className="lead">
                Termipore is an elastomeric pipe network laid under the floor
                during construction. Termiticide is injected through
                wall-mounted junction boxes to form a continuous barrier in the
                soil, and topped up for decades without drilling a single tile.
              </p>
              <ButtonRow>
                <ButtonLink href="/installers" arrow>
                  Find a certified installer
                </ButtonLink>
                <ButtonLink href="/specifications" variant="ghost">
                  Technical specifications
                </ButtonLink>
              </ButtonRow>
            </div>
            <HeroDiagram />
          </div>

          <div
            className="mt-2 grid grid-cols-2 border-t border-white/18 min-[861px]:grid-cols-4"
            aria-label="Key figures"
          >
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="border-l border-white/18 px-5 pt-5.5 pb-6.5 first:border-l-0 first:pl-0 max-[860px]:nth-[3]:border-l-0 max-[860px]:nth-[3]:pl-0 max-[860px]:nth-[n+3]:border-t"
              >
                <b className="block font-sans text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] font-extrabold text-white tabular-nums">
                  {'static' in stat ? (
                    stat.value
                  ) : (
                    <CountUp value={stat.value} />
                  )}
                </b>
                <span className="text-[0.82rem] text-on-blue-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Who it's for"
          title="One system. Four people who need it to work."
        />
        <div className="grid grid-cols-1 overflow-hidden rounded-r border border-line bg-bg min-[561px]:grid-cols-2 min-[961px]:grid-cols-4">
          {audiences.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex flex-col gap-3 border-line px-6 pt-7 pb-6.5 no-underline transition-colors duration-150 hover:bg-surface max-[560px]:not-first:border-t min-[561px]:max-[960px]:even:border-l min-[561px]:max-[960px]:nth-[n+3]:border-t min-[961px]:not-first:border-l"
            >
              {a.image && (
                <div className="relative -mx-6 -mt-7 mb-1 aspect-5/4 border-b border-line bg-surface">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(min-width: 961px) 25vw, (min-width: 561px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <span className="font-mono text-[0.72rem] tracking-[0.1em] text-muted uppercase">
                {a.tag}
              </span>
              <h3 className="text-[1.2rem]">{a.title}</h3>
              <p className="flex-1 text-[0.93rem] text-muted">{a.text}</p>
              <span className="font-sans text-[0.9rem] font-semibold text-accent-ink">
                {a.go}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section alt>
        <Split>
          <Stack>
            <span className="eyebrow">Why the pipe decides everything</span>
            <h2>Reticulation works. Repurposed pipe doesn&apos;t.</h2>
            <p className="lead">
              Reticulation earned a mixed reputation in Sri Lanka because
              contractors used drip-irrigation line or hand-drilled PVC. Holes
              blocked, flow ran out before the far end of the run, and sections
              of the building were left untreated.
            </p>
            <p>
              Termipore is made for this one job. Micro-holes sit in a honeycomb
              elastomeric wall on every side of the pipe, open under pump
              pressure and close again, so sand and mud don&apos;t plug them.
              Flow is checked on every roll.
            </p>
            <ButtonLink
              href="/system"
              variant="ghost"
              arrow
              className="self-start"
            >
              How the system works
            </ButtonLink>
          </Stack>
          <ComparisonTable rows={comparison} />
        </Split>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Installation sequence"
          title="Laid once. Recharged for decades."
        />
        <Steps items={steps} />
      </Section>

      <Section alt>
        <SectionHead
          eyebrow="Tested, documented"
          title="Evidence a specifier can file."
        />
        <FactCards items={evidence} />
      </Section>

      <CtaBand
        title="Planning a slab pour? Bring Termipore in at design stage."
        image={requestCta}
      >
        <ButtonLink href="/contact" arrow>
          Request a quote
        </ButtonLink>
        <ButtonLink href="/specifications" variant="ghost">
          Get the TDS
        </ButtonLink>
      </CtaBand>
    </>
  );
}
