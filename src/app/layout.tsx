import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://himesh-ka-suroor.vercel.app";
const TITLE = "Himesh Ka Suroor";
const DESCRIPTION = "The Himesh Reshammiya jukebox. Suroor guaranteed.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@figmajeet",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Speeds up the first YouTube player init - it's on the critical path for playback */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
