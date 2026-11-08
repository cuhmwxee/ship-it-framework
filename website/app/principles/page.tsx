import type { Metadata } from "next";
import SitePage from "@/components/site/Pages";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Principles",
  description:
    "Why Ship It! challenges what a particular change needs from the team's existing delivery process.",
  alternates: {
    canonical: "/principles",
  },
  openGraph: {
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
    title: "Principles",
    description:
      "Why Ship It! challenges what a particular change needs from the team's existing delivery process.",
    url: "/principles",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HarriMaatta",
    images: ["/opengraph-image"],
    title: "Principles",
    description:
      "Why Ship It! challenges what a particular change needs from the team's existing delivery process.",
  },
};

export default function PrinciplesPage() {
  return (
    <PageShell>
      <SitePage page="principles" direction="02" basePath="" />
    </PageShell>
  );
}