import type { Metadata } from "next";
import InPractice from "@/components/InPractice";
import PageShell from "@/components/PageShell";

const description =
  "How Ship It! fits with Scrum, Kanban, AI-assisted development, and vibe coding while keeping your existing way of working.";

export const metadata: Metadata = {
  title: "In practice",
  description,
  alternates: {
    canonical: "/in-practice",
  },
  openGraph: {
    title: "In practice",
    description,
    url: "/in-practice",
  },
  twitter: {
    title: "In practice",
    description,
  },
};

export default function InPracticePage() {
  return (
    <PageShell>
      <InPractice />
    </PageShell>
  );
}
