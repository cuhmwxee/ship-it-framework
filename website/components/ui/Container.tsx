import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "content" | "wide" | "page";
  className?: string;
};

export default function Container({
  children,
  size = "content",
  className = "",
}: ContainerProps) {
  return <div className={`ds-container ds-container--${size} ${className}`}>{children}</div>;
}
