import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Prototype from "../_components/Prototype";

const sans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--v2-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--v2-mono", display: "swap" });
export const metadata: Metadata = { title: "02 — Working Drawing" };
export default function Page() { return <Prototype direction="02" fonts={`${sans.variable} ${mono.variable}`} />; }
