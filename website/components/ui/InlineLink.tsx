import Link from "next/link";
import type { ReactNode } from "react";

type InlineLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function InlineLink({ href, children, className = "" }: InlineLinkProps) {
  return <Link href={href} className={`ds-inline-link ${className}`}>{children}</Link>;
}
