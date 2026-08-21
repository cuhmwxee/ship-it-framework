import type { Metadata } from "next";
import ExploreFurther from "@/components/ExploreFurther";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import PageShell from "@/components/PageShell";
import ReflectionStatement from "@/components/ReflectionStatement";
import Section from "@/components/ui/Section";
import { reflections } from "@/content/reflections";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <Section spacing="compact" className="pt-4">
        <div className="ds-content">
          <div className="space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            <p>
              Delivery processes often describe everything around a change:
              planning, coordination, review, validation, and release. Those
              practices can be useful. The question is which of them this change
              needs before it ships.
            </p>
            {reflections.seen.slice(0, 2).map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              Software changes are becoming smaller, more frequent and
              increasingly AI-assisted. Teams can produce changes faster than
              many delivery processes were designed to handle.{" "}
              <strong>
                AI can make changes faster. It doesn&apos;t make unnecessary
                steps necessary.
              </strong>
            </p>
          </div>
        </div>
      </Section>

      <ReflectionStatement
        lines={["What if the process is the thing that needs simplifying?"]}
        emphasis={0}
      />

      <Framework />
      <ExploreFurther />
    </PageShell>
  );
}
