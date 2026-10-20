import Image from 'next/image';
import { homeOwnersFirst, homeOwnersHero, requestCta } from '@/public/assets';
import type { Metadata } from 'next';
import ButtonLink from '../../components/button';
import Callout from '../../components/callout';
import CtaBand from '../../components/cta-band';
import { NumberedList } from '../../components/lists';
import PageHero from '../../components/page-hero';
import Section, { Split, Stack } from '../../components/section';

export const metadata: Metadata = { title: 'For homeowners' };

const questions = [
  'Is termite protection in the contract, and which method is being used?',
  'Will the reticulation pipe be genuine Termipore, with a QR code on the roll?',
  'Where will the junction boxes be, so I can reach them in future?',
].map((text, i) => ({ key: String(i + 1).padStart(2, '0'), text }));

export default function HomeownersPage() {
  return (
    <>
      <PageHero
        eyebrow="For homeowners"
        title="Decide before the floor goes down."
        lead="Termipore is installed while your house is being built. Once tiles are laid, the chance has passed. A short conversation with your builder now saves drilling through your floors later."
        image={homeOwnersHero}
      />

      <Section>
        <Split>
          <Stack>
            <span className="eyebrow">Ask your builder</span>
            <h2>Three questions to ask this week.</h2>
            <NumberedList items={questions} />
          </Stack>
          <Stack>
            <span className="eyebrow">Years later</span>
            <h2>What re-treatment looks like.</h2>
            <Image
              src={homeOwnersFirst}
              alt="Technician injecting termiticide through a wall junction box"
              sizes="(min-width: 861px) 50vw, 100vw"
              className="h-auto w-full rounded-md"
            />
            <p>
              A pest control technician arrives with a pump, connects it to the
              junction box on your wall and injects fresh termiticide. It
              spreads through the pipe under your floor. Nothing is drilled,
              nothing is lifted, and you don&apos;t need to move furniture.
            </p>
            <Callout
              title="Compare that with conventional treatment"
              text="Without a pipe network, re-treatment means drilling holes through tiles every few feet, injecting by hand and patching the floor afterwards."
            />
          </Stack>
        </Split>
      </Section>

      <CtaBand
        title="Building now? Find an installer near you."
        image={requestCta}
      >
        <ButtonLink href="/installers" arrow>
          Certified installers
        </ButtonLink>
        <ButtonLink href="/faq" variant="ghost">
          Common questions
        </ButtonLink>
      </CtaBand>
    </>
  );
}
