import type { Metadata } from "next";
import Link from "next/link";
import FaqList, { type FaqItem } from "../../components/faq-list";
import PageHero from "../../components/page-hero";
import Section from "../../components/section";

export const metadata: Metadata = { title: "FAQ" };

const faqs: FaqItem[] = [
  {
    question: "When does Termipore need to be installed?",
    answer:
      "Before floor finishes are laid. The pipe goes on the PCC or in soil at plinth level, after the substructure is complete and before screeding and tiling.",
  },
  {
    question: "How is the barrier topped up?",
    answer:
      "Through wall-mounted junction boxes. A pump is connected at the box and termiticide is injected into the network. With a 0.5 HP pump, each box serves up to 20 m of pipe; longer runs are injected from both ends.",
  },
  {
    question: "Which termiticides can be used?",
    answer:
      "Termipore has been tested with emulsifiable concentrate (EC) and suspension concentrate (SC) formulations. EC is preferred. Normal dilution and dosing apply.",
  },
  {
    question: "How long does the pipe last?",
    answer:
      "30–50 years when concealed under the floor and not exposed to the atmosphere. In accelerated weathering equal to about 10 years outdoors, tensile strength and elongation dropped by about 10%, with no cracking or blocking.",
  },
  {
    question: "Can the pipe be run above floor level?",
    answer:
      "No. Termipore must be installed at ground level or below the floor. Use PVC or PE pipe for any section above floor level.",
  },
  {
    question: "Which size should be specified?",
    answer: (
      <>
        17 mm (green) suits all areas and is the usual choice. 14 mm (orange) is
        for limited space between slab and tile. 19 mm (red) gives the most
        consistent flow along long runs. See{" "}
        <Link href="/specs">Specifications</Link>.
      </>
    ),
  },
  {
    question: "How do I know the pipe is genuine?",
    answer:
      "Every genuine roll carries a QR code. Scan it on site to confirm authenticity and reach technical support.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common questions" />
      <Section narrow>
        <FaqList items={faqs} />
      </Section>
    </>
  );
}
