import DeliveryStory from "@/components/DeliveryStory";
import NavigationCard from "@/components/NavigationCard";
import Container from "@/components/ui/Container";

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
    <div className="ds-section ds-section--default">
      <Container>
        <div className="ds-content">
          <DeliveryStory />

        <p className="mt-8 text-lg leading-relaxed text-zinc-300 sm:mt-10 sm:text-xl">
          If you&apos;ve ever skipped a step because the change was tiny, you already get it.
        </p>

        <article className="mt-16 border-t border-zinc-800/80 pt-10 sm:mt-20 sm:pt-12">
          <h2 className="ds-type-section-heading text-zinc-100">
            What changes in practice?
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            <p>
              Start with the change. Develop the solution. Validate it
              independently. Ship when the evidence gives the appropriate level
              of confidence.
            </p>
            <p>
              The workflow remains the same; the depth of each step grows with
              the change&apos;s risk and impact. This turns informal shortcuts into
              intentional delivery decisions.
            </p>
            <p>
              Small changes can stay small. Critical changes can receive the
              validation they deserve. Teams spend their effort where it creates
              confidence, instead of carrying process that adds none.
            </p>
          </div>
        </article>

        <article className="mt-14 sm:mt-16">
          <h2 className="ds-type-section-heading text-zinc-100">
            Does this replace our process?
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            <p>No.</p>
            <p>
              Teams can keep Scrum, Kanban, continuous delivery, pull requests,
              automated testing, release management, and their own delivery
              practices. Ship It! is not another comprehensive process layered on
              top of them.
            </p>
            <p>
              It describes the smaller workflow underneath them: the work required
              for this change to become shippable. The question is not which
              process to replace, but what this change actually needs to reach
              production with appropriate validation.
            </p>
          </div>
        </article>

        <div className="mt-16 sm:mt-20">
          <p className="text-2xl font-semibold leading-tight tracking-tight text-[var(--color-interactive-hover)] sm:text-3xl lg:text-4xl">
            Turns out, the process can be smaller.
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Empirically tested. In production.
          </p>
        </div>

        <h2 className="mb-4 mt-16 ds-type-section-heading text-zinc-100 sm:mt-20">
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
      </Container>
    </div>
  );
}
