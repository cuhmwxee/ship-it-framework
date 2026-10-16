import type { Metadata } from "next";
import Home from "@/components/site/Home";
export const metadata: Metadata = { title: "Home" };
export default function Page() { return <Home direction="04" />; }
