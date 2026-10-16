import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Archivo } from "next/font/google";
import Shell from "@/components/site/Shell";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--v2-body", display: "swap" });
export const metadata: Metadata = {
  title: { default: "Plain Statement | Ship It!", template: "%s | Plain Statement — Ship It!" },
  description: "Plain Statement: a full-site visual prototype of Ship It!.",
  robots: { index: false, follow: false }, alternates: { canonical: null },
};
export default function Layout({ children }: { children: ReactNode }) { return <Shell direction="04" fonts={archivo.variable}>{children}</Shell>; }
