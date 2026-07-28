import InlineLink from "@/components/ui/InlineLink";

type RelatedPage = {
  href: string;
  label: string;
  description: string;
};

type RelatedPagesProps = {
  pages: readonly RelatedPage[];
  intro?: string;
};

export default function RelatedPages({ pages, intro }: RelatedPagesProps) {
  return (
    <nav aria-labelledby="related-pages-title" className="ds-related-pages">
      <h2 id="related-pages-title" className="ds-type-subheading">Related pages</h2>
      {intro && <p className="ds-type-body ds-related-pages__intro">{intro}</p>}
      <ul className="ds-related-pages__list">
        {pages.map((page) => (
          <li key={page.href}>
            <InlineLink href={page.href}>{page.label}</InlineLink>{" "}
            <span className="ds-type-muted">{page.description}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
