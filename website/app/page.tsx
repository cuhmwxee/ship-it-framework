import About from "@/components/About";
import Examples from "@/components/Examples";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Navigation from "@/components/Navigation";
import ReflectionStatement from "@/components/ReflectionStatement";
import SoundFamiliar from "@/components/SoundFamiliar";
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

      <Framework />
      <Why />
      <SoundFamiliar />
      <Examples />
      <FAQ />

      <ReflectionStatement
        emphasis={1}
        lines={reflections.conversations}
      />

      <About />
      <Footer />
    </main>
  );
}
