import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Shell from "@/components/site/Shell";

const sans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--v2-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--v2-mono", display: "swap" });
export const metadata: Metadata = {
  title: { default: "Working Drawing | Ship It!", template: "%s | Working Drawing — Ship It!" },
  description: "Working Drawing: a full-site visual prototype of Ship It!.",
  robots: { index: false, follow: false }, alternates: { canonical: null },
};
export default function Layout({ children }: { children: ReactNode }) { return <Shell direction="02" fonts={`${sans.variable} ${mono.variable}`}>{children}</Shell>; }
