import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Framework from "@/components/Framework";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Navigation from "@/components/Navigation";
import OneRule from "@/components/OneRule";
import Principles from "@/components/Principles";
import Statement from "@/components/Statement";
import Why from "@/components/Why";
import WorksWith from "@/components/WorksWith";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Why />
      <Statement />
      <Framework />
      <OneRule />
      <Manifesto />
      <Principles />
      <WorksWith />
      <FAQ />
      <Footer />
    </main>
  );
}
