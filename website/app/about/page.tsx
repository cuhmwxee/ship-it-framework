import About from "@/components/About";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <About />
      <Footer />
    </main>
  );
}
