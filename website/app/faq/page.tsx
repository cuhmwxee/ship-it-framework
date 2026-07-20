import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FAQ />
      <Footer />
    </main>
  );
}
