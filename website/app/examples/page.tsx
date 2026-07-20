import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SoundFamiliar from "@/components/SoundFamiliar";
import TryIt from "@/components/TryIt";

export default function ExamplesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <SoundFamiliar />
      <TryIt />
      <Footer />
    </main>
  );
}
