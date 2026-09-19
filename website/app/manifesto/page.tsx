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
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
    title: "Manifesto",
    description:
      "The principles behind Ship It!: proportional validation, intentional delivery decisions, and a shared language for software delivery.",
    url: "/manifesto",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HarriMaatta",
    images: ["/opengraph-image"],
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