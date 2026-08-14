import NavigationCard from "@/components/NavigationCard";
import ReflectionStatement from "@/components/ReflectionStatement";
import Section from "@/components/ui/Section";
import { reflections } from "@/content/reflections";

const foundationCopy = {
  title: "Foundation",
  body: [
    "Software changes are becoming smaller, more frequent and increasingly AI-assisted.",
    "Teams can produce changes faster than many delivery processes were designed to handle.",
    "Most software delivery frameworks describe everything. Ship It! asks what remains after everything unnecessary has been removed.",
    "The result is a minimal workflow that still describes every software change.",
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
    "Ship It! describes the same four concepts regardless of the size or urgency of the change.",
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
    <Section spacing="default">
      <div className="ds-content">
        <div className="mb-4">
          <ReflectionStatement emphasis={0} lines={reflections.aiEra} />
        </div>

        <article className="border-t border-zinc-800/80 pt-10 sm:pt-12">
          <h3 className="text-xl font-semibold leading-tight text-zinc-100 sm:text-2xl">
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
              <p className="mt-3 text-lg leading-relaxed text-zinc-100 sm:text-xl">
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

        <article className="mt-16 border-t border-zinc-800/80 pt-10 sm:mt-20 sm:pt-12">
          <h2 className="ds-type-section-heading text-zinc-100">
            What changes in practice?
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            <p>
              Not every software change needs the full delivery process. Ship It!
              makes the minimum workflow explicit: identify the Input, develop the
              change, validate it independently, and Ship when there is sufficient
              confidence.
            </p>
            <p>
              When a process is heavier than the change, teams naturally compress
              or work around steps. Ship It! makes that reduction an intentional
              delivery decision instead of an informal exception.
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
          <ReflectionStatement
            emphasis={0}
            lines={["Keep your process. Improve your delivery decisions."]}
          />
        </div>

        <h2
          id="foundation-title"
          className="mb-4 mt-4 ds-type-section-heading text-zinc-100"
        >
          {foundationCopy.title}
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {foundationCopy.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <ReflectionStatement
            emphasis={0}
            lines={["Ship It! is an exercise in reduction."]}
          />
        </div>

        <h2 className="mb-4 mt-4 ds-type-section-heading text-zinc-100">
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
