import Link from "next/link";
import type { ReactNode } from "react";
import Navigation from "./Navigation";
import { siteBase, type SiteLocation } from "./config";
import { homepage } from "@/app/v2/_components/content";
import { directions } from "@/app/v2/_components/directions";
import shared from "@/app/v2/_components/prototype.module.css";
import styles from "@/app/v2/_site/site.module.css";

export default function Shell({ direction, fonts, children, basePath, preview = true }: SiteLocation & { fonts: string; children: ReactNode; preview?: boolean }) {
  const base = siteBase(direction, basePath);
  const name = directions.find((item) => item.id === direction)!.name;
  return <div className={`${shared.prototype} ${styles.fullSite} ${fonts}`} data-direction={direction} data-production={preview ? undefined : "true"}>
    <a href="#main-content" className={shared.skip}>Skip to content</a>
    {preview && <div className={shared.review}>
      <Link href="/v2">← All directions</Link><span>{direction} / {name}</span>
      <nav aria-label="Visual prototypes">{directions.map((item) => <Link key={item.id} href={`/v2/${item.id}`} aria-label={item.name} aria-current={item.id === direction ? "page" : undefined}>{item.id}</Link>)}</nav>
    </div>}
    <div className={shared.site}><Navigation direction={direction} basePath={basePath} /><main id="main-content" tabIndex={-1}>{children}</main>
      <footer className={shared.footer}><Link href={base || "/"}>Ship It!</Link><p>{homepage.footer}</p></footer>
    </div>
  </div>;
}
