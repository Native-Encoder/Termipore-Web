import type { Metadata } from 'next';
import { IBM_Plex_Mono, Poppins } from 'next/font/google';
import Footer from './components/footer';
import Header from './components/header';
import './globals.css';
import { WhatsappButton } from './components/icons';
import ImageWarmup from './components/image-warmup';
import {
  homeHero,
  homeHeroMobile,
  architectHero,
  architectHeroMobile,
  engineerHero,
  engineerHeroMobile,
  pestHero,
  pestHeroMobile,
  homeOwnersHero,
  homeOwnersHeroMobile,
  systemHero,
  systemHeroMobile,
  specificationsHero,
  specificationsHeroMobile,
  installersHero,
  installersHeroMobile,
  faqHero,
  faqHeroMobile,
  contactHero,
  contactHeroMobile,
  requestCta,
} from '@/public/assets';

// Full-width photos fetched in the background so page switches show them
// instantly. Keep in sync with the `image` passed to PageHero on each page.
// Each hero is warmed only on screens that show it, so phones don't also
// download every desktop photo.
const DESKTOP = '(min-width: 768px)';
const MOBILE = '(max-width: 767px)';
const warmupImages = [
  { src: homeHero, media: DESKTOP },
  { src: homeHeroMobile, media: MOBILE },
  { src: architectHero, media: DESKTOP },
  { src: architectHeroMobile, media: MOBILE },
  { src: engineerHero, media: DESKTOP },
  { src: engineerHeroMobile, media: MOBILE },
  { src: pestHero, media: DESKTOP },
  { src: pestHeroMobile, media: MOBILE },
  { src: homeOwnersHero, media: DESKTOP },
  { src: homeOwnersHeroMobile, media: MOBILE },
  { src: systemHero, media: DESKTOP },
  { src: systemHeroMobile, media: MOBILE },
  { src: specificationsHero, media: DESKTOP },
  { src: specificationsHeroMobile, media: MOBILE },
  { src: installersHero, media: DESKTOP },
  { src: installersHeroMobile, media: MOBILE },
  { src: faqHero, media: DESKTOP },
  { src: faqHeroMobile, media: MOBILE },
  { src: contactHero, media: DESKTOP },
  { src: contactHeroMobile, media: MOBILE },
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
