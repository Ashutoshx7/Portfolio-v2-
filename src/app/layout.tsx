import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ashutoshx7.me"
  ),
  title: "Farhandy Akbar",
  description:
    "Full stack developer building clean, modern websites and apps with a focus on design, functionality, and attention to detail.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "Farhandy Akbar",
    description:
      "Full stack developer building clean, modern websites and apps.",
    url: "https://ashutoshx7.me",
    siteName: "Farhandy Akbar",
    type: "website",
    images: [
      {
        url: "https://ashutoshx7.me/og-image.jpg",
        secureUrl: "https://ashutoshx7.me/og-image.jpg",
        width: 1024,
        height: 576,
        type: "image/jpeg",
        alt: "Farhandy Akbar - Engineer / Artist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhandy Akbar",
    description:
      "Full stack developer building clean, modern websites and apps.",
    site: "@Ashutosh_7x7",
    creator: "@Ashutosh_7x7",
    images: ["https://ashutoshx7.me/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
