import type { Metadata } from 'next';
import { IBM_Plex_Mono, Poppins } from 'next/font/google';
import Footer from './components/footer';
import Header from './components/header';
import './globals.css';
import { WhatsappButton } from './components/icons';
import ImageWarmup from './components/image-warmup';
import {
  homeHero,
  architectHero,
  engineerHero,
  pestHero,
  homeOwnersHero,
  homeOwnersHeroMobile,
  systemHero,
  specificationsHero,
  installersHero,
  faqHero,
  contactHero,
  requestCta,
} from '@/public/assets';

// Full-width photos fetched in the background so page switches show them
// instantly. Keep in sync with the `image` passed to PageHero on each page.
const warmupImages = [
  homeHero,
  architectHero,
  engineerHero,
  pestHero,
  homeOwnersHero,
  { src: homeOwnersHeroMobile, media: '(max-width: 767px)' },
  systemHero,
  specificationsHero,
  installersHero,
  faqHero,
  contactHero,
  requestCta,
];

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'Termipore Sri Lanka',
    template: '%s · Termipore Sri Lanka',
  },
  description:
    'Termipore anti-termite reticulation system: an elastomeric pipe network laid beneath the floor and recharged from the wall for decades.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${poppins.variable} ${plexMono.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
        <ImageWarmup images={warmupImages} />
      </body>
    </html>
  );
}
