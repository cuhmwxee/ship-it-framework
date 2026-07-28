import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  labelledBy?: string;
  size?: "content" | "wide" | "page";
  spacing?: "compact" | "default" | "spacious";
  className?: string;
};

export default function Section({
  children,
  id,
  labelledBy,
  size = "content",
  spacing = "default",
  className = "",
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`ds-section ds-section--${spacing} ${className}`}>
      <Container size={size}>{children}</Container>
    </section>
  );
}
