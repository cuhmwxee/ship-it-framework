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

const foundationExample = {
  title: "An example",
  situation: "A small, low-risk update needs to be delivered quickly.",
  question: "Does this still need the same delivery model as a larger change?",
  workflow: {
    input: "A small change request.",
    development: "Implement the update.",
    validation: "Verify that the update works as intended.",
    ship: "Release the change as soon as confidence is sufficient.",
  },
  takeaway:
    "The workflow stays the same even when the change is small and urgent.",
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

        <article className="mt-10 border-t border-zinc-800/80 pt-10 sm:mt-12 sm:pt-12">
          <h3 className="text-2xl font-semibold leading-tight text-zinc-50 sm:text-3xl">
            {foundationExample.title}
          </h3>

          <div className="mt-8 space-y-8">
            <div>
              <h4 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                Situation
              </h4>
              <p className="mt-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                {foundationExample.situation}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                Question
              </h4>
              <p className="mt-3 text-xl leading-relaxed text-zinc-100 sm:text-2xl">
                {foundationExample.question}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                Ship It!
              </h4>
              <ul className="mt-3 space-y-2 font-mono text-base leading-relaxed text-zinc-300 sm:text-lg">
                <li>Input: {foundationExample.workflow.input}</li>
                <li>Development: {foundationExample.workflow.development}</li>
                <li>Validation: {foundationExample.workflow.validation}</li>
                <li>Ship: {foundationExample.workflow.ship}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                Takeaway
              </h4>
              <p className="mt-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                {foundationExample.takeaway}
              </p>
            </div>
          </div>
        </article>

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
