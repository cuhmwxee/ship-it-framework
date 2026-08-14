import ExploreFurther from "@/components/ExploreFurther";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import PageShell from "@/components/PageShell";
import Section from "@/components/ui/Section";
import { reflections } from "@/content/reflections";

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <Section spacing="default">
        <div className="ds-content space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {reflections.seen.map((line, index) => (
            <p
              key={line}
              className={
                index === reflections.seen.length - 1
                  ? "text-2xl font-semibold leading-tight tracking-tight text-[var(--color-interactive-hover)] sm:text-3xl lg:text-4xl"
                  : undefined
              }
            >
              {line}
            </p>
          ))}
        </div>
      </Section>

      <Framework />
      <ExploreFurther />
    </PageShell>
  );
}
