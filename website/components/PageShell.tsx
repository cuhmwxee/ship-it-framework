import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="ds-page-shell">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
