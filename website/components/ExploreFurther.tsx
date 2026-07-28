import NavigationCard from "@/components/NavigationCard";
import Section from "@/components/ui/Section";

const destinations = [
  {
    href: "/framework",
    title: "Framework",
    description: "The four concepts and the thinking behind them.",
  },
  {
    href: "/manifesto",
    title: "Manifesto",
    description: "The philosophy behind proportional software delivery.",
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
    <Section labelledBy="explore-further-title" spacing="compact">
      <div className="ds-content border-t border-zinc-800/80 pt-8 sm:pt-10">
        <h2
          id="explore-further-title"
          className="text-2xl font-medium leading-snug text-zinc-100 sm:text-3xl"
        >
          Explore further
        </h2>
        <ul className="mt-6 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {destinations.map((destination) => (
            <li key={destination.href}>
              <NavigationCard href={destination.href} title={destination.title}>
                {destination.description}
              </NavigationCard>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
