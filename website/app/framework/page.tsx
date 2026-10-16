import type { Metadata } from "next";
import SitePage from "@/components/site/Pages";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Framework",
  description:
    "The four concepts of Ship It!: Input, Development, Validation, and Ship — the minimum workflow every software change follows.",
  alternates: {
    canonical: "/framework",
  },
  openGraph: {
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
    title: "Framework",
    description:
      "The four concepts of Ship It!: Input, Development, Validation, and Ship — the minimum workflow every software change follows.",
    url: "/framework",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HarriMaatta",
    images: ["/opengraph-image"],
    title: "Framework",
    description:
      "The four concepts of Ship It!: Input, Development, Validation, and Ship — the minimum workflow every software change follows.",
  },
};

export default function FrameworkPage() {
  return (
    <PageShell>
      <SitePage page="framework" direction="02" basePath="" />
    </PageShell>
  );
}
