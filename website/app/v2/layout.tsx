import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { default: "Visual prototypes | Ship It!", template: "%s | Ship It! prototypes" },
  description: "Five visual directions for the Ship It! homepage, for design review.",
  robots: { index: false, follow: false },
  // Do not inherit the production homepage's canonical URL.
  alternates: { canonical: null },
};

export default function PrototypeLayout({ children }: { children: ReactNode }) {
  return children;
}
