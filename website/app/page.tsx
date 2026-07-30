import ExploreFurther from "@/components/ExploreFurther";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import PageShell from "@/components/PageShell";
import ReflectionStatement from "@/components/ReflectionStatement";
import { reflections } from "@/content/reflections";

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

      <Framework />
      <ExploreFurther />
    </PageShell>
  );
}
