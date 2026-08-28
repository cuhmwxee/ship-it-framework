import type { Metadata } from "next";
import Examples from "@/components/Examples";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "See how Input, Development, Validation and Ship apply to real changes — from production bug fixes to dependency updates and AI-assisted development.",
  alternates: {
    canonical: "/examples",
  },
  openGraph: {
    title: "Examples",
    description:
      "See how Input, Development, Validation and Ship apply to real changes — from production bug fixes to dependency updates and AI-assisted development.",
    url: "/examples",
  },
  twitter: {
    title: "Examples",
    description:
      "See how Input, Development, Validation and Ship apply to real changes — from production bug fixes to dependency updates and AI-assisted development.",
  },
};

export default function ExamplesPage() {
  return (
    <PageShell>
      <Examples />
    </PageShell>
  );
}
