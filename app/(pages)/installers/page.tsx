import { installersHero, installersHeroMobile } from '@/public/assets';
import type { Metadata } from 'next';
import Link from 'next/link';
import Callout from '../../components/callout';
import PageHero from '../../components/page-hero';
import Section from '../../components/section';

export const metadata: Metadata = { title: 'Certified installers' };

const installers = [
  'CNE Pest Control',
  'Manulas Pest Control and Fumigation',
  'Termite.com',
  'A1 Pest Control',
];

const card = 'flex flex-col gap-3 rounded-r border border-line bg-bg p-6';
const badge =
  'self-start rounded-[3px] px-2.25 py-1 font-mono text-[0.7rem] tracking-[0.08em] uppercase';

export default function InstallersPage() {
  return (
    <>
      <PageHero
        eyebrow="Certified installer directory"
        title="Installed by people trained on the system."
        lead="Certified installers lay, connect and charge Termipore to the manufacturer's guidelines. Contact one directly, or send an enquiry and we'll connect you with the nearest installer."
        image={installersHero}
        mobileImage={installersHeroMobile}
        mobileBackdrop="#040d3b"
        mobileClear={0.66}
      />

      <Section>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
          <article className={card}>
            <span className={`${badge} bg-accent text-white`}>
              Authorised distributor
            </span>
            <h3>Ceylon Pest Control Company</h3>
            <p className="text-[0.9rem] text-muted">
              Island-wide. Pest control specialists since 1967.
            </p>
            <div className="flex flex-col gap-0.5 font-mono text-[0.85rem] text-fg">
              <span>0777 367 719</span>
              <span>info@termipore.lk</span>
            </div>
          </article>

          {installers.map((name) => (
            <article key={name} className={card}>
              <span className={`${badge} bg-chip text-chip-fg`}>
                Certified installer
              </span>
              <h3>{name}</h3>
              <p className="text-[0.9rem] text-muted">
                Coverage details coming soon.
              </p>
              <Link
                href="/contact"
                className="font-semibold text-accent-ink no-underline"
              >
                Enquire via Termipore →
              </Link>
            </article>
          ))}
        </div>

        <Callout
          className="mt-8"
          title="Check before work starts"
          text="Ask your installer to show the QR code on each roll delivered to site. It confirms the pipe is genuine Termipore."
        />
      </Section>
    </>
  );
}
