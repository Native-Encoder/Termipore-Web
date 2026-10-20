import Image from "next/image";
import { systemHero, requestCta } from "@/public/assets";
import type { Metadata } from "next";
import ButtonLink from "../../components/button";
import ComparisonTable, {
  type ComparisonRow,
} from "../../components/comparison-table";
import CtaBand from "../../components/cta-band";
import FactCards, { type Fact } from "../../components/fact-cards";
import { NumberedList } from "../../components/lists";
import PageHero from "../../components/page-hero";
import Section, { SectionHead, Split, Stack } from "../../components/section";
import { systemDrip, systemPVC, systemTermi } from "@/public/assets";

export const metadata: Metadata = { title: "The system" };

const ratings = [
  {
    key: "0.5 HP",
    text: "Provide an outlet or box every 20 m (60 ft). For longer runs, use a larger pump or inject from both ends.",
  },
  {
    key: "1.0 HP",
    text: "Monobloc pump: maximum continuous length 30 m (100 ft). Beyond that, inject from both ends.",
  },
  {
    key: "EC/SC",
    text: "Works with emulsifiable and suspension concentrates. EC preferred. Dilution and dosing are unchanged.",
  },
  {
    key: "Life",
    text: "30–50 years when concealed and not exposed to the atmosphere.",
  },
];

const failures: Fact[] = [
  {
    label: "",
    title: "Built for farms",
    text: "Three to four holes per metre, all on one side. They clog within a few years, and a buried section can't be dug up and replaced the way a farmer would in a field.",
    image: systemDrip,
  },
  {
    label: "",
    title: "Holes too large, too uneven",
    text: "Fine, uniform holes can't be drilled by hand. Most of the flow leaves near the inlet, so the far end of the run gets little or nothing.",
    image: systemPVC,
  },
  {
    label: "",
    title: "Honeycomb elastomeric wall",
    text: "40–100 micro-holes per metre around the full circumference, depending on size. They open under pump pressure and close after, so they resist blocking.",
    highlight: true,
    image: systemTermi,
  },
];

const comparison: ComparisonRow[] = [
  {
    label: "Purpose-built for termite reticulation",
    cells: ["Yes", ["No, repurposed", "nope"], ["—", "dim"]],
  },
  {
    label: "Even delivery along full length",
    cells: ["Yes", ["No", "nope"], ["—", "dim"]],
  },
  {
    label: "Micro-holes on all sides",
    cells: ["Yes", ["One side only", "nope"], ["—", "dim"]],
  },
  {
    label: "Holes per metre",
    cells: [["40–100", "mono"], ["3–4", "mono", "nope"], ["—", "dim"]],
  },
  {
    label: "Resists blocking (sand / mud)",
    cells: ["Yes", ["No", "nope"], ["—", "dim"]],
  },
  {
    label: "Wall thick enough to resist compression",
    cells: ["Yes", ["No", "nope"], ["—", "dim"]],
  },
  {
    label: "Flow checked on every roll",
    cells: ["Yes", ["No", "nope"], ["—", "dim"]],
  },
  {
    label: "Tested, RoHS-compliant material",
    cells: ["Yes", ["Not known", "dim"], ["Not known", "dim"]],
  },
  {
    label: "Re-treat without disturbing occupants",
    cells: ["Yes", "Yes", ["No", "nope"]],
  },
  {
    label: "Design life",
    cells: [
      ["30–50 yrs", "mono"],
      ["Unreliable", "nope"],
      ["None", "nope"],
    ],
  },
];

export default function SystemPage() {
  return (
    <>
      <PageHero
        eyebrow="The system"
        title="A barrier you can recharge without touching the floor."
        lead="Termipore turns termite protection from a one-off soil treatment into part of the building: a sealed pipe network under the slab, served from the wall for the life of the structure."
        image={systemHero}
      />

      <Section>
        <Split>
          <Stack>
            <span className="eyebrow">How it works</span>
            <h2>Pipe, boxes, pump.</h2>
            <p>
              Termipore pipe is laid beneath the floor at plinth level before
              the finish goes down. Each run terminates in a junction box on the
              wall. To treat, a pest control operator connects a pump at the box
              and injects diluted termiticide, which leaves the pipe through
              micro-holes on every side and saturates the soil zone under the
              building.
            </p>
            <p>
              Termites approaching from the soil meet a continuous treated
              layer. When the chemical weakens over time, the barrier is
              recharged through the same boxes.
            </p>
          </Stack>
          <NumberedList items={ratings} />
        </Split>
      </Section>

      <Section alt>
        <SectionHead
          eyebrow="Why other pipes fail"
          title="The difference is in the wall of the pipe."
        />
        <FactCards items={failures} />
      </Section>

      <Section>
        <SectionHead
          eyebrow="Comparison"
          title="Termipore against the alternatives."
        />
        <ComparisonTable rows={comparison} />
      </Section>

      <CtaBand title="See the full technical data." image={requestCta}>
        <ButtonLink href="/specifications" arrow>
          Specifications
        </ButtonLink>
      </CtaBand>
    </>
  );
}
