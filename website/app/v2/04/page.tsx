import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Prototype from "../_components/Prototype";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--v2-body", display: "swap" });
export const metadata: Metadata = { title: "04 — Plain Statement" };
export default function Page() { return <Prototype direction="04" fonts={archivo.variable} />; }
