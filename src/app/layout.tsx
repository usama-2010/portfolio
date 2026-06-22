/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne, IBM_Plex_Mono } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-sans",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Usama Ahmed — Full-Stack Engineer",
  description:
    "Tech lead at MentorMind. Founding engineer at OneCart. Full-stack engineer in London — Next.js, React Native, AWS.",
  openGraph: {
    title: "Usama Ahmed — Full-Stack Engineer",
    description:
      "Tech lead at MentorMind. Founding engineer at OneCart. London.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Ahmed — Full-Stack Engineer",
    description:
      "Tech lead at MentorMind. Founding engineer at OneCart. London.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${syne.variable} ${ibmPlexMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
