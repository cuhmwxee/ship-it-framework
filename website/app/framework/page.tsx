import type { Metadata } from "next";
import FrameworkGuide from "@/components/FrameworkGuide";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Framework",
  description:
    "The four concepts of Ship It!: Input, Development, Validation, and Ship — the minimum workflow every software change follows.",
  alternates: {
    canonical: "/framework",
  },
  openGraph: {
    title: "Framework",
    description:
      "The four concepts of Ship It!: Input, Development, Validation, and Ship — the minimum workflow every software change follows.",
    url: "/framework",
  },
  twitter: {
    title: "Framework",
    description:
      "The four concepts of Ship It!: Input, Development, Validation, and Ship — the minimum workflow every software change follows.",
  },
};

export default function FrameworkPage() {
  return (
    <PageShell>
      <FrameworkGuide />
    </PageShell>
  );
}
