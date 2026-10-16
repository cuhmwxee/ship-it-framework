import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SitePage from "@/components/site/Pages";
import { pages, isPage } from "@/components/site/config";

type Props = { params: Promise<{ page: string }> };
export function generateStaticParams() { return pages.map(({ slug }) => ({ page: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const title = pages.find((item) => item.slug === page)?.title;
  return { title: title ?? "Page not found", robots: { index: false, follow: false } };
}
export default async function Page({ params }: Props) {
  const { page } = await params;
  if (!isPage(page)) notFound();
  return <SitePage page={page} direction="04" />;
}
