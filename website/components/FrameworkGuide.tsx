import FrameworkGraph from "@/components/FrameworkGraph";
import FrameworkStep from "@/components/FrameworkStep";
import InlineLink from "@/components/ui/InlineLink";
import PageHero from "@/components/PageHero";
import RelatedPages from "@/components/RelatedPages";
import Section from "@/components/ui/Section";

const frameworkGuideCopy = {
  introduction: [
    "The framework is built on four concepts: Input, Development, Validation, and Ship.",
    "Read the model first, then use the concept sections for definition and detail.",
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
        "Input can come from any source in your delivery system.",
      ],
    },
    {
      title: "Development",
      body: [
        "Development transforms an input into a change.",
        "That work may involve people, AI systems, automation or entire teams.",
        "How Development happens depends on the change and the team.",
      ],
    },
    {
      title: "Validation",
      body: [
        "Validation provides confidence that the change solves the intended problem and can survive in production.",
        "Validation may involve tests, reviews, monitoring, experimentation or human judgment.",
        "If Validation fails, it creates new Input and the workflow continues.",
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
            These assumptions are the conceptual foundation of the framework. For the
            rationale behind them, see the <InlineLink href="/manifesto">Manifesto</InlineLink>.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Read the graph from left to right: Input flows through Development and
            Validation to Ship. If Validation fails, it creates new Input and work
            returns for further Development.
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
