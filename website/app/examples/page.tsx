import type { Metadata } from "next";
import SitePage from "@/components/site/Pages";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "See how Ship It! is applied to a software change through a worked example of correcting an outdated configuration message.",
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
      "See how Ship It! is applied to a software change through a worked example of correcting an outdated configuration message.",
    url: "/examples",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HarriMaatta",
    images: ["/opengraph-image"],
    title: "Examples",
    description:
      "See how Ship It! is applied to a software change through a worked example of correcting an outdated configuration message.",
  },
};

export default function ExamplesPage() {
  return (
    <PageShell>
      <SitePage page="examples" direction="02" basePath="" />
    </PageShell>
  );
}
