import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  titleId: string;
  children?: ReactNode;
  className?: string;
};

export default function PageHero({ title, titleId, children, className = "" }: PageHeroProps) {
  return (
    <header className={`ds-page-hero ${className}`}>
      <h1 id={titleId} className="ds-type-page-title">{title}</h1>
      {children && <div className="ds-page-hero__body">{children}</div>}
    </header>
  );
}
