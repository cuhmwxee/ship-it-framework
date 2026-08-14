import ExploreFurther from "@/components/ExploreFurther";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import PageShell from "@/components/PageShell";
import ReflectionStatement from "@/components/ReflectionStatement";
import Section from "@/components/ui/Section";
import { reflections } from "@/content/reflections";

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <ReflectionStatement
        emphasis={0}
        lines={reflections.proportional}
      />

      <Section spacing="compact" className="pt-4">
        <div className="ds-content">
          <div className="space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            <p>
              Delivery processes often describe everything around a change:
              planning, coordination, review, validation, and release. Those
              practices can be useful, but their full weight is not necessary for
              every change.
            </p>
            {reflections.seen.slice(0, -1).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="py-10 text-center text-2xl font-semibold leading-tight tracking-tight text-[var(--color-interactive-hover)] sm:py-12 sm:text-3xl lg:text-4xl">
            {reflections.seen[reflections.seen.length - 1]}
          </p>
        </div>
      </Section>

      <Framework />
      <ExploreFurther />
    </PageShell>
  );
}
