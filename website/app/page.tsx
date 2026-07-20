import ExploreFurther from "@/components/ExploreFurther";
import Footer from "@/components/Footer";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ReflectionStatement from "@/components/ReflectionStatement";
import { reflections } from "@/content/reflections";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />

      <ReflectionStatement
        emphasis={0}
        lines={reflections.seen}
      />

      <ReflectionStatement
        emphasis={1}
        lines={reflections.reveals}
      />

      <Why />
      <ReflectionStatement
        emphasis={1}
        lines={reflections.workflowNamed}
      />
      <Framework />
      <ReflectionStatement
        emphasis={0}
        lines={reflections.noNeed}
      />
      <ExploreFurther />
      <Footer />
    </main>
  );
}
