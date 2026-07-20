import Footer from "@/components/Footer";
import FrameworkGuide from "@/components/FrameworkGuide";
import Navigation from "@/components/Navigation";

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FrameworkGuide />
      <Footer />
    </div>
  );
}
