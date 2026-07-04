import About from "@/components/About";
import Examples from "@/components/Examples";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Navigation from "@/components/Navigation";
import OneRule from "@/components/OneRule";
import Principles from "@/components/Principles";
import ReflectionStatement from "@/components/ReflectionStatement";
import { reflections } from "@/content/reflections";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />

      <ReflectionStatement
        emphasis={1}
        lines={reflections.simplify}
      />

      <Why />
      <Framework />
      <Manifesto />
      <OneRule />
      <Principles />
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
