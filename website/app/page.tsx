import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ReflectionStatement from "@/components/ReflectionStatement";
import SoundFamiliar from "@/components/SoundFamiliar";
import TryIt from "@/components/TryIt";
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
      <SoundFamiliar />
      <TryIt />
      <FAQ />

      <ReflectionStatement
        emphasis={0}
        lines={reflections.try}
      />

      <About />
      <Footer />
    </main>
  );
}
