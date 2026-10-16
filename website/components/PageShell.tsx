import type { ReactNode } from "react";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Shell from "./site/Shell";

const sans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--v2-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--v2-mono", display: "swap" });

// Only presentation is shared with the prototype. Production metadata remains
// owned by app/layout.tsx and each public route, outside all /v2 layouts.
export default function PageShell({ children }: { children: ReactNode }) {
  return <Shell direction="02" basePath="" preview={false} fonts={`${sans.variable} ${mono.variable}`}>{children}</Shell>;
}
