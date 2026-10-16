import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Home from "@/components/site/Home";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};


export default function HomePage() {
  return <PageShell><Home direction="02" basePath="" /></PageShell>;
}
