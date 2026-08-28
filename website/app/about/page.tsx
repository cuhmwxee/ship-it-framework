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
    title: "About",
    description:
      "The story behind Ship It! — why it defines the minimum shared workflow every software change follows, from Input to Ship.",
    url: "/about",
  },
  twitter: {
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
