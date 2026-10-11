import type { Metadata } from "next";
import ButtonLink from "../../components/button";
import CopyClause from "../../components/copy-clause";
import CtaBand from "../../components/cta-band";
import FactCards, { type Fact } from "../../components/fact-cards";
import PageHero from "../../components/page-hero";
import Section, { SectionHead, Split, Stack } from "../../components/section";

export const metadata: Metadata = { title: "For architects & specifiers" };

const clause = `ANTI-TERMITE RETICULATION SYSTEM

Supply and install Termipore Elastomeric Reticulation Pipe beneath all ground-floor slabs, at plinth level, prior to laying of floor finishes.

1. Pipe: TP125175 (17 mm, green marking line) generally; TP095145 (14 mm, orange) where space between slab and tile is limited; TP125195 (19 mm, red) where high-consistency flow is required.
2. Material: thermoplastic elastomeric compound, RoHS compliant; min. burst pressure 50 PSI; operating temperature 0–50 °C.
3. Layout: perimeter and internal wall lines; min. bending radius 0.3 m (0.4 m for 19 mm); elbows at sharp turns.
4. Junction boxes: wall-mounted, max. 20 m pipe run per box (0.5 HP pump) unless injected from both ends.
5. Protection: no wet cement in direct contact with pipe; cover with sand or paper before screeding.
6. Installer: Termipore certified installer. Genuine product verified by QR code on each roll.`;

const coordination: Fact[] = [
  {
    label: "Junction box locations",
    title: "Accessible, on internal or external walls",
    text: "Boxes must stay reachable for the life of the building. Avoid locations that will be boxed in by joinery.",
  },
  {
    label: "Pipe runs",
    title: "Perimeter and internal wall lines",
    text: "Show runs and box spacing on the ground floor plan so the installer and contractor work from the same layout.",
  },
  {
    label: "Wet areas",
    title: "Tanking over pipe zones",
    text: "Bathrooms and wash areas need proper tiling and waterproofing. Seepage into the pipe shortens its life.",
  },
  {
    label: "Above floor",
    title: "PVC or PE, never Termipore",
    text: "Termipore must not be exposed to air. Any connection above finished floor level is in PVC or PE.",
  },
];

export default function ArchitectsPage() {
  return (
    <>
      <PageHero
        eyebrow="For architects & specifiers"
        title="Specify termite protection that outlasts the treatment."
        lead="A soil treatment is a single event. A Termipore network is a building element with a design life, a fixed specification and test data behind it. It belongs on the drawings."
      />

      <Section>
        <Split>
          <Stack>
            <span className="eyebrow">Model specification clause</span>
            <h2>Drop it into your specification.</h2>
            <p>
              Edit sizes and spacing to suit the project. Values are from the
              Termipore TDS.
            </p>
          </Stack>
          <CopyClause text={clause} />
        </Split>
      </Section>

      <Section alt>
        <SectionHead
          eyebrow="Coordination"
          title="Four things to show on the drawings."
        />
        <FactCards items={coordination} columns={2} />
      </Section>

      <CtaBand title="Get a technical briefing for your practice.">
        <ButtonLink
          href={{ pathname: "/contact", query: { topic: "Technical briefing" } }}
          arrow
        >
          Book a briefing
        </ButtonLink>
        <ButtonLink href="/specifications" variant="ghost">
          Specifications
        </ButtonLink>
      </CtaBand>
    </>
  );
}
