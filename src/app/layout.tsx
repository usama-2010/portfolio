/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Syne, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { THEME_STORAGE_KEY } from "@/lib/theme";

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
    "Senior Full-Stack Engineer at MentorMind LTD. Full-stack engineer in London — Next.js, React Native, AWS.",
  openGraph: {
    title: "Usama Ahmed — Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer at MentorMind LTD. London.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Ahmed — Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer at MentorMind LTD. London.",
  },
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "light" || stored === "dark" || stored === "auto" ? stored : "auto";
    var dark = theme === "dark" || (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch (e) {}
})();
`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${syne.variable} ${ibmPlexMono.variable} font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
