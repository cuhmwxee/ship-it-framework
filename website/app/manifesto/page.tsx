import type { Metadata } from "next";
import Manifesto from "@/components/Manifesto";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Why Ship It! challenges what a particular change needs from the team's existing delivery process.",
  alternates: {
    canonical: "/manifesto",
  },
  openGraph: {
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
    title: "Manifesto",
    description:
      "Why Ship It! challenges what a particular change needs from the team's existing delivery process.",
    url: "/manifesto",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HarriMaatta",
    images: ["/opengraph-image"],
    title: "Manifesto",
    description:
      "Why Ship It! challenges what a particular change needs from the team's existing delivery process.",
  },
};

export default function ManifestoPage() {
  return (
    <PageShell>
      <Manifesto />
    </PageShell>
  );
}