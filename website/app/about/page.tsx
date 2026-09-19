import type { Metadata } from "next";
import About from "@/components/About";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Ship It! — why it defines the minimum shared workflow every software change follows, from Input to Ship.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
    title: "About",
    description:
      "The story behind Ship It! — why it defines the minimum shared workflow every software change follows, from Input to Ship.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HarriMaatta",
    images: ["/opengraph-image"],
    title: "About",
    description:
      "The story behind Ship It! — why it defines the minimum shared workflow every software change follows, from Input to Ship.",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
