import Link from "next/link";
import BrandMark from "@/components/BrandMark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/framework", label: "Framework" },
  { href: "/examples", label: "Examples" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-full text-zinc-50 transition-colors hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <BrandMark width={28} height={28} className="h-7 w-7 shrink-0 sm:h-6 sm:w-6" />
          <span className="hidden text-lg font-semibold tracking-tight sm:block">
            Ship It!
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-1 sm:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
