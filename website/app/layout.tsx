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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shipitframe.work"),
  title: {
    default: "Ship It! | The Minimal Software Delivery Framework",
    template: "%s | Ship It!",
  },
  description:
    "Ship It! is a minimal software delivery framework built around four concepts — Input, Development, Validation, and Ship — that describes the minimum workflow every software change follows.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },

  openGraph: {
    title: "Ship It!",
    description:
      "Input, Development, Validation, Ship — the minimal software delivery framework.",
    url: "https://www.shipitframe.work",
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ship It!",
    description:
      "Input, Development, Validation, Ship — the minimal software delivery framework.",
    creator: "@HarriMaatta",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
