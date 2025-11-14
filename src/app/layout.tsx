import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

/**
 * FONT CONFIGURATION
 * 
 * To update fonts globally:
 * 1. Import new fonts from 'next/font/google' here
 * 2. Update the CSS variable assignments below
 * 3. The Tailwind config will automatically pick up changes via CSS variables
 * 
 * Current setup:
 * - Body font (font-body): Inter (used for all text including headings)
 * - Accent font (font-accent): Instrument Serif Regular Italic
 */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "JourneyWell Content Agency - Creative Content Solutions",
    template: "%s | JourneyWell Content Agency",
  },
  description:
    "JourneyWell Content Agency helps entrepreneurs and brands show up with confidence online through storytelling and content mastery.",
  keywords: [
    "content agency",
    "creative agency",
    "storytelling",
    "content marketing",
    "brand strategy",
    "entrepreneurs",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.journeywell.com/",
    siteName: "JourneyWell Content Agency",
    images: [
      {
        url: "https://www.journeywell.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JourneyWell Content Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@journeywell",
    creator: "@journeywell",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-body antialiased bg-white dark:bg-[#0B0D1E]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitcher />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


