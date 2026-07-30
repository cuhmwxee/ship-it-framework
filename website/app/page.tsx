import ExploreFurther from "@/components/ExploreFurther";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import PageShell from "@/components/PageShell";
import Principles from "@/components/Principles";
import ReflectionStatement from "@/components/ReflectionStatement";
import Section from "@/components/ui/Section";
import { reflections } from "@/content/reflections";
import Why from "@/components/Why";

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <ReflectionStatement
        emphasis={0}
        lines={reflections.seen}
      />

      <ReflectionStatement
        emphasis={1}
        lines={reflections.reveals}
      />

      <Section size="wide" spacing="compact">
        <div className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
          <p>Ship It! is a minimal software delivery framework.</p>
          <p className="mt-3">
            It describes the minimum workflow required to move a software change from Input
            to Ship.
          </p>
        </div>
      </Section>

      <Framework />
      <Why />
      <Principles />
      <ExploreFurther />
    </PageShell>
  );
}
