import NavigationCard from "@/components/NavigationCard";
import Section from "@/components/ui/Section";

const destinations = [
  {
    href: "/framework",
    title: "Framework",
    description: "Learn the four core concepts and how they describe delivery from Input to Ship.",
  },
  {
    href: "/manifesto",
    title: "Manifesto",
    description: "Read the principles behind proportional delivery decisions.",
  },
  {
    href: "/examples",
    title: "Examples",
    description: "See how different kinds of changes move through the same workflow.",
  },
  {
    href: "/faq",
    title: "FAQ",
    description: "Find concise answers to common questions about scope and usage.",
  },
  {
    href: "/about",
    title: "About",
    description: "Learn more about the team and the project.",
  },
];

export default function ExploreFurther() {
  return (
    <Section spacing="compact">
      <div className="ds-content border-t border-zinc-800/80 pt-8 sm:pt-10">
        <ul className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
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
