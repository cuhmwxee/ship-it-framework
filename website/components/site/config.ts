export type SiteDirection = "02" | "04";
export const pages = [
  { slug: "framework", title: "Framework" },
  { slug: "manifesto", title: "Manifesto" },
  { slug: "examples", title: "Examples" },
  { slug: "in-practice", title: "In practice" },
  { slug: "faq", title: "FAQ" },
  { slug: "about", title: "About" },
] as const;
export type PageSlug = (typeof pages)[number]["slug"];
export function isPage(slug: string): slug is PageSlug {
  return pages.some((page) => page.slug === slug);
}

export type SiteLocation = { direction: SiteDirection; basePath?: string };
export function siteBase(direction: SiteDirection, basePath?: string) {
  return basePath ?? `/v2/${direction}`;
}
