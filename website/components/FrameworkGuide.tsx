import FrameworkGraph from "@/components/FrameworkGraph";
import FrameworkStep from "@/components/FrameworkStep";
import PageHero from "@/components/PageHero";
import RelatedPages from "@/components/RelatedPages";
import Section from "@/components/ui/Section";

const frameworkGuideCopy = {
  introduction: [
    "Ship It! does not replace Scrum, Kanban, or existing delivery practices.",
    "It does not prescribe workflows, roles, or ceremonies.",
    "It makes the underlying delivery workflow explicit and asks what is actually required before software ships.",
    "The framework stays intentionally small: four concepts, then implementation detail.",
  ],
  assumptions: [
    "Software changes continuously.",
    "Not every change carries the same risk.",
    "Different changes may require different delivery processes.",
    "Teams do not necessarily need a new methodology.",
  ],
  concepts: [
    {
      title: "Input",
      body: [
        "Every change starts somewhere.",
        "An incident report, a product idea, a dependency update, or an automated system can all become Input.",
        "Ship It! does not prescribe where Input comes from.",
      ],
    },
    {
      title: "Development",
      body: [
        "Development transforms an input into a change.",
        "That work may involve people, AI systems, automation or entire teams.",
        "The framework intentionally does not define how development should happen.",
      ],
    },
    {
      title: "Validation",
      body: [
        "Validation provides confidence that the change solves the intended problem and can survive in production.",
        "Validation may involve tests, reviews, monitoring, experimentation or human judgment.",
        "The framework does not prescribe a single form of validation.",
      ],
    },
    {
      title: "Ship",
      body: [
        "Shipping is the moment a change becomes available.",
        "Deployment and release are sometimes the same step, and sometimes separate.",
        "Ship It! focuses on the outcome rather than the mechanism.",
      ],
    },
  ],
  relatedPages: [
    { href: "/examples", label: "Examples", description: "shows the concepts in practice." },
    { href: "/faq", label: "FAQ", description: "answers common questions." },
  ],
} as const;

export default function FrameworkGuide() {
  return (
    <Section spacing="default">
      <div className="ds-content">
        <PageHero title="Framework" titleId="framework-title">
          {frameworkGuideCopy.introduction.map((paragraph) => (
            <p key={paragraph} className="ds-type-body">{paragraph}</p>
          ))}
        </PageHero>

        <section aria-labelledby="assumptions-title" className="mt-12 sm:mt-16">
          <h2
            id="assumptions-title"
            className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
          >
            Ship It! assumes
          </h2>
          <ul className="mt-6 space-y-2 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {frameworkGuideCopy.assumptions.map((assumption) => (
              <li key={assumption} className="flex gap-3">
                <span aria-hidden="true" className="text-zinc-500">✓</span>
                <span>{assumption}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            These assumptions are the conceptual foundation of the framework.
          </p>
        </section>

        <div className="mt-12 sm:mt-16">
          <FrameworkGraph variant="process" />
        </div>

        <section aria-labelledby="concepts-title" className="mt-12 sm:mt-16">
          <h2
            id="concepts-title"
            className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
          >
            The four concepts
          </h2>
          <div className="mt-8 border-y border-zinc-800/80">
            {frameworkGuideCopy.concepts.map((concept) => (
              <FrameworkStep key={concept.title} title={concept.title} body={concept.body} />
            ))}
          </div>
        </section>

        <div className="mt-20 sm:mt-24">
          <RelatedPages pages={frameworkGuideCopy.relatedPages} intro="Explore how these concepts apply in practice." />
        </div>
      </div>
    </Section>
  );
}
