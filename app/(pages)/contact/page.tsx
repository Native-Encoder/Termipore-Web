import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryForm from "../../components/enquiry-form";
import PageHero from "../../components/page-hero";
import Section, { Split } from "../../components/section";

export const metadata: Metadata = { title: "Contact" };

const details = [
  { label: "Phone · 24/7", value: "0777 367 719" },
  { label: "Email", value: "info@termipore.lk" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the project."
        lead="Quotes, technical documents, site visits and trade supply. We reply within one working day."
        image="/contact.png"
      />

      <Section>
        <Split wideFirst>
          {/* The form reads ?topic= from the URL, so it renders at request time. */}
          <Suspense>
            <EnquiryForm />
          </Suspense>

          <aside className="flex flex-col gap-5.5 rounded-r bg-brand p-8 text-white">
            {details.map((d) => (
              <div key={d.label}>
                <span className="eyebrow text-peach">{d.label}</span>
                <div className="font-sans text-[1.15rem] font-semibold text-white select-all">
                  {d.value}
                </div>
              </div>
            ))}
            <div>
              <span className="eyebrow text-peach">Office</span>
              <div className="font-sans text-base font-semibold text-white select-all">
                809/36 Negombo Road
                <br />
                Mabola, Wattala
              </div>
            </div>
            <hr className="m-0 border-0 border-t border-white/20" />
            <div className="text-[0.88rem] text-on-blue-muted">
              Termipore is distributed in Sri Lanka by Ceylon Pest Control
              Company (Pvt) Ltd. Established 1967 · ISO 9001, 14001, 22000 and
              45001 certified.
            </div>
          </aside>
        </Split>
      </Section>
    </>
  );
}
