import Link from "next/link";
import type { ReactNode } from "react";

type NavigationCardProps = {
  href: string;
  title: string;
  children: ReactNode;
};

export default function NavigationCard({ href, title, children }: NavigationCardProps) {
  return (
    <Link href={href} className="ds-navigation-card">
      <h3 className="ds-navigation-card__title">{title}</h3>
      <p className="ds-navigation-card__description">{children}</p>
    </Link>
  );
}
