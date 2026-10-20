import { engineerHero, requestCta } from '@/public/assets';
import type { Metadata } from 'next';
import ButtonLink from '../../components/button';
import CtaBand from '../../components/cta-band';
import { TickList } from '../../components/lists';
import PageHero from '../../components/page-hero';
import Section, { SectionHead, Split, Stack } from '../../components/section';
import Steps, { type Step } from '../../components/steps';
import {
  constructionFirst,
  constructionSecond,
  constructionThird,
  constructionFourth,
} from '@/public/assets';

export const metadata: Metadata = {
  title: 'For construction companies & developers',
};

const sequence: Step[] = [
  {
    label: '01 · Substructure',
    title: 'Plinth & PCC complete',
    text: 'The installer lays and clamps pipe on the PCC or in soil at plinth level.',
    image: constructionFirst,
  },
  {
    label: '02 · Protect',
    title: 'Cover before screed',
    text: 'Sand or paper over the pipe. Wet cement must never touch it.',
    image: constructionSecond,
  },
  {
    label: '03 · Walls',
    title: 'Fix junction boxes',
    text: 'Boxes set in the walls at the agreed points, connected with brass fittings.',
    image: constructionThird,
  },
  {
    label: '04 · Charge',
    title: 'Inject and record',
    text: 'Termiticide injected through each box before handover, with zones and pipe sizes documented.',
    image: constructionFourth,
  },
];

const siteFailures = [
  {
    title: 'Wet cement on the pipe.',
    text: 'Dried cement seals the micro-holes. Cover before pouring.',
  },
  {
    title: 'Kinks and tight turns.',
    text: 'Keep to the bending radius; use elbows at corners.',
  },
  {
    title: 'Cut or crushed runs.',
    text: 'Later trades chasing services through the slab must avoid marked pipe zones.',
  },
  {
    title: 'Look-alike pipe.',
    text: 'Check the QR code on every roll delivered to site.',
  },
];

const developerBenefits = [
  {
    title: 'Visible at handover.',
    text: 'Junction boxes show the protection is built in, not promised.',
  },
  {
    title: 'No disruption to occupants.',
    text: 'Re-treatment happens from the wall in apartments, offices and homes.',
  },
  {
    title: 'Long working life.',
    text: '30–50 years when concealed, in line with the building it protects.',
  },
  {
    title: 'Manageable by facilities teams.',
    text: 'A scheduled re-injection replaces emergency drilling treatments.',
  },
];

export default function BuildersPage() {
  return (
    <>
      <PageHero
        eyebrow="For construction companies & developers"
        title="Termite protection that fits the programme and survives handover."
        lead="Termipore goes in between the PCC and the floor finish. Done right, it's a short, contained activity that gives your buyers protection they can maintain without ever lifting a tile."
        image={engineerHero}
      />

      <Section>
        <SectionHead eyebrow="Where it sits" title="Sequencing on site" />
        <Steps items={sequence} />
      </Section>

      <Section alt>
        <Split>
          <Stack>
            <span className="eyebrow">For your site teams</span>
            <h2>What causes failures on site.</h2>
            <TickList items={siteFailures} />
          </Stack>
          <Stack>
            <span className="eyebrow">For developers</span>
            <h2>A feature buyers can understand.</h2>
            <TickList items={developerBenefits} />
          </Stack>
        </Split>
      </Section>

      <CtaBand
        title="Price Termipore into your next project."
        image={requestCta}
      >
        <ButtonLink
          href={{ pathname: '/contact', query: { topic: 'Project quote' } }}
          arrow
        >
          Request a project quote
        </ButtonLink>
      </CtaBand>
    </>
  );
}
