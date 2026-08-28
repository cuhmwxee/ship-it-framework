import type { Metadata } from "next";
import Examples from "@/components/Examples";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "See how Ship It! is applied to a software change through a concrete worked example of a dependency update.",
  alternates: {
    canonical: "/examples",
  },
  openGraph: {
    title: "Examples",
    description:
      "See how Ship It! is applied to a software change through a concrete worked example of a dependency update.",
    url: "/examples",
  },
  twitter: {
    title: "Examples",
    description:
      "See how Ship It! is applied to a software change through a concrete worked example of a dependency update.",
  },
};

export default function ExamplesPage() {
  return (
    <PageShell>
      <Examples />
    </PageShell>
  );
}
