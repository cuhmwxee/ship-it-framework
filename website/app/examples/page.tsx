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
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
    title: "Examples",
    description:
      "See how Ship It! is applied to a software change through a concrete worked example of a dependency update.",
    url: "/examples",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HarriMaatta",
    images: ["/opengraph-image"],
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
