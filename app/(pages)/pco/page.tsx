import type { Metadata } from "next";
import ButtonLink from "../../components/button";
import CtaBand from "../../components/cta-band";
import FactCards, { type Fact } from "../../components/fact-cards";
import PageHero from "../../components/page-hero";
import Section, { Split, Stack } from "../../components/section";

export const metadata: Metadata = { title: "For pest control companies" };

const features: Fact[] = [
  {
    label: "Field performance",
    title: "Even delivery, every side",
    text: "Micro-holes around the full circumference and along the full length. No dry patches at the end of the run.",
  },
  {
    label: "Recurring work",
    title: "Every install is a maintenance contract",
    text: "Re-injection through junction boxes is clean, quick and repeatable for the life of the building.",
  },
  {
    label: "No change to your chemistry",
    title: "EC and SC compatible",
    text: "Use your existing termiticide. Dilution and dosing don't change. EC preferred.",
  },
  {
    label: "Specification grade",
    title: "Gets you onto the drawings",
    text: "A tested, documented product that architects and engineers will name, so the job comes to you earlier.",
  },
  {
    label: "Complete system",
    title: "Pipe, fittings, boxes",
    text: "Three pipe sizes and a full accessory range from one source, sized to fit each other.",
  },
  {
    label: "Supported locally",
    title: "Authorised distributor",
    text: "Stock, technical advice and documentation from Ceylon Pest Control Company, the authorised Sri Lanka distributor.",
  },
];

const pumps = [
  {
    pump: "0.5 HP",
    run: "20 m / 60 ft",
    beyond: "Larger pump, or inject from both ends",
  },
  { pump: "1.0 HP monobloc", run: "30 m / 100 ft", beyond: "Inject from both ends" },
];

export default function PcoPage() {
  return (
    <>
      <PageHero
        eyebrow="For pest control companies"
        title="The pipe you can warrant."
        lead="Your reputation rides on what happens under the floor after you leave site. Termipore delivers termiticide evenly along the whole run, so the protection you quote is the protection the client gets."
        image="/pest.png"
      />

      <Section>
        <FactCards items={features} />
      </Section>

      <Section alt>
        <Split>
          <Stack>
            <span className="eyebrow">Pump planning</span>
            <h2>Run lengths per charging point</h2>
            <p>
              Plan box spacing to the pump you carry. Longer runs are injected
              from both ends.
            </p>
          </Stack>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th scope="col">Pump</th>
                  <th scope="col">Run per box</th>
                  <th scope="col">Beyond that</th>
                </tr>
              </thead>
              <tbody>
                {pumps.map((row) => (
                  <tr key={row.pump}>
                    <th scope="row">{row.pump}</th>
                    <td className="mono">{row.run}</td>
                    <td>{row.beyond}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Split>
      </Section>

      <CtaBand title="Talk to the distributor about supply." image="/request.png">
        <ButtonLink
          href={{ pathname: "/contact", query: { topic: "Trade supply" } }}
          arrow
        >
          Trade enquiry
        </ButtonLink>
        <ButtonLink href="/specifications" variant="ghost">
          Full TDS
        </ButtonLink>
      </CtaBand>
    </>
  );
}
