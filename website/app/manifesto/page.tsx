import type { Metadata } from "next";
import Manifesto from "@/components/Manifesto";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "The principles behind Ship It!: proportional validation, intentional delivery decisions, and a shared language for software delivery.",
  alternates: {
    canonical: "/manifesto",
  },
  openGraph: {
    title: "Manifesto",
    description:
      "The principles behind Ship It!: proportional validation, intentional delivery decisions, and a shared language for software delivery.",
    url: "/manifesto",
  },
  twitter: {
    title: "Manifesto",
    description:
      "The principles behind Ship It!: proportional validation, intentional delivery decisions, and a shared language for software delivery.",
  },
};

export default function ManifestoPage() {
  return (
    <PageShell>
      <Manifesto />
    </PageShell>
  );
}