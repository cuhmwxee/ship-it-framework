import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Prototype from "../_components/Prototype";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--v2-body", display: "swap" });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--v2-heading", display: "swap" });
export const metadata: Metadata = { title: "01 — Field Manual" };
export default function Page() { return <Prototype direction="01" fonts={`${serif.variable} ${sans.variable}`} />; }
