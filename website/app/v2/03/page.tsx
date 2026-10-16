import type { Metadata } from "next";
import { Atkinson_Hyperlegible, IBM_Plex_Mono } from "next/font/google";
import Prototype from "../_components/Prototype";

const sans = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--v2-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--v2-mono", display: "swap" });
export const metadata: Metadata = { title: "03 — Quiet Instrument" };
export default function Page() { return <Prototype direction="03" fonts={`${sans.variable} ${mono.variable}`} />; }
