"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { pages, siteBase, type SiteLocation } from "./config";
import styles from "@/app/v2/_components/prototype.module.css";

export default function Navigation({ direction, basePath }: SiteLocation) {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const base = siteBase(direction, basePath);
  const home = base || "/";
  const items = [{ href: home, title: "Home" }, ...pages.map((page) => ({ href: `${base}/${page.slug}`, title: page.title }))];
  const links = items.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => { if (menu.current) menu.current.open = false; }}>{item.title}</Link>);
  return <header className={styles.navigation}>
    <Link href={home} className={styles.brand} aria-label="Ship It! — Home"><Image src="/brand/shipit-icon.png" alt="" width={28} height={28} loading="eager" /><span>Ship It!</span></Link>
    <nav className={styles.desktopNav} aria-label="Primary navigation">{links}</nav>
    <details ref={menu} className={styles.mobileMenu} onKeyDown={(event) => { if (event.key === "Escape" && menu.current?.open) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
      <summary>Menu <span aria-hidden="true">+</span></summary>
      <nav aria-label="Mobile primary navigation">{links}</nav>
    </details>
  </header>;
}
