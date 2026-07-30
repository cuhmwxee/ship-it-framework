import NavigationCard from "@/components/NavigationCard";
import Section from "@/components/ui/Section";

const foundationCopy = {
  title: "Foundation",
  body: [
    "Software changes are becoming smaller, more frequent and increasingly AI-assisted.",
    "Teams can produce changes faster than many delivery processes were designed to handle.",
    "Software delivery is already a shared workflow.",
    "Ship It! simply gives teams a language to reason about it.",
  ],
};

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
        <h2
          id="foundation-title"
          className="mb-4 ds-type-section-heading text-zinc-100"
        >
          {foundationCopy.title}
        </h2>
        <div className="space-y-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {foundationCopy.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <h2 className="mb-4 mt-10 ds-type-section-heading text-zinc-100">
          Continue reading
        </h2>
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
