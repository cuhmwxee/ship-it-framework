import Link from "next/link";

const destinations = [
  {
    href: "/framework",
    title: "Framework",
    description: "The four concepts and the thinking behind them.",
  },
  {
    href: "/examples",
    title: "Examples",
    description: "Real-world delivery situations and workflows.",
  },
  {
    href: "/faq",
    title: "FAQ",
    description: "Questions about Ship It! and its concepts.",
  },
  {
    href: "/about",
    title: "About",
    description: "Why Ship It! exists and where it came from.",
  },
];

export default function ExploreFurther() {
  return (
    <section
      aria-labelledby="explore-further-title"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="explore-further-title"
          className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
        >
          Explore further
        </h2>
        <ul className="mt-8 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {destinations.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="block py-7 transition-colors hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:py-8"
              >
                <h3 className="text-xl font-medium leading-snug text-zinc-50 sm:text-2xl">
                  {destination.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-zinc-400 sm:text-xl">
                  {destination.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
