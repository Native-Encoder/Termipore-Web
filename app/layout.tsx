import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { WhatsappButton } from "./components/icons";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Termipore Sri Lanka",
    template: "%s · Termipore Sri Lanka",
  },
  description:
    "Termipore anti-termite reticulation system: an elastomeric pipe network laid beneath the floor and recharged from the wall for decades.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
