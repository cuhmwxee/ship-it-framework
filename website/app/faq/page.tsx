import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about what Ship It! is, who it's for, and how it fits alongside Scrum, Kanban and your existing process.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    siteName: "Ship It!",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image"],
    title: "FAQ",
    description:
      "Answers to common questions about what Ship It! is, who it's for, and how it fits alongside Scrum, Kanban and your existing process.",
    url: "/faq",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HarriMaatta",
    images: ["/opengraph-image"],
    title: "FAQ",
    description:
      "Answers to common questions about what Ship It! is, who it's for, and how it fits alongside Scrum, Kanban and your existing process.",
  },
};

export default function FAQPage() {
  return (
    <PageShell>
      <FAQ />
    </PageShell>
  );
}
