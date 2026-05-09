import type { Metadata } from "next";
import { Geist, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magnum Opus — The Autonomous QA Engineer",
  description:
    "Magnum Opus is an autonomous QA agent that bootstraps test automation, hunts bugs, and reviews pull requests like a senior engineer — without human intervention.",
  metadataBase: new URL("https://magnumopus.civitascerebrum.ai"),
  openGraph: {
    title: "Magnum Opus — The Autonomous QA Engineer",
    description:
      "Replace a team of senior QA engineers with one autonomous agent. By Civitas Cerebrum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-ink-900 text-bone-50">
        {children}
      </body>
    </html>
  );
}
