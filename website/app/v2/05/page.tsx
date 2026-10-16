import type { Metadata } from "next";
import { Literata, Barlow, Barlow_Condensed } from "next/font/google";
import Prototype from "../_components/Prototype";

const serif = Literata({ subsets: ["latin"], variable: "--v2-body", display: "swap" });
const sans = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--v2-heading", display: "swap" });
const condensed = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600"], variable: "--v2-label", display: "swap" });
export const metadata: Metadata = { title: "05 — Open Notebook" };
export default function Page() { return <Prototype direction="05" fonts={`${serif.variable} ${sans.variable} ${condensed.variable}`} />; }
