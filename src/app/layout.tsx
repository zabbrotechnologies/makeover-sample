import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080807",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PUSHPALATHA — Luxury Makeup Educator & Business Mentor | Nandhas Creation",
  description:
    "Master haute bridal artistry, 4K skin longevity, and the 2X Revenue System. Offline private cohort residency with Pushpalatha. Direct admissions: 9363341010.",
  keywords: [
    "Pushpalatha",
    "Nandhas Creation",
    "Makeup Educator",
    "Bridal Makeup Artist",
    "PRO MUA Mastery",
    "2X Revenue System",
    "Luxury Bridal Makeup Academy",
    "Coimbatore Makeup Artist",
    "Chennai Bridal Makeup",
  ],
  authors: [{ name: "Pushpalatha (Nandhas Creation)" }],
  openGraph: {
    title: "PUSHPALATHA — Luxury Makeup Educator & Business Mentor | Nandhas Creation",
    description:
      "Transforming freelance artists into high-ticket bridal entrepreneurs. Offline private residency with Pushpalatha.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#B99762] selection:text-[#080807] font-sans bg-[#080807] text-[#181715]">
        {children}
      </body>
    </html>
  );
}
