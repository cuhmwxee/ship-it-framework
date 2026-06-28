import Framework from "@/components/Framework";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Framework />
    </main>
  );
}
