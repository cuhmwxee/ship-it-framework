import Examples from "@/components/Examples";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function ExamplesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Examples />
      <Footer />
    </main>
  );
}
