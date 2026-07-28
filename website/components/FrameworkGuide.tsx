import FrameworkDiagram from "@/components/FrameworkDiagram";
import FrameworkStep from "@/components/FrameworkStep";
import PageHero from "@/components/PageHero";
import RelatedPages from "@/components/RelatedPages";
import Section from "@/components/ui/Section";

const frameworkGuideCopy = {
  introduction: [
    "Ship It! is not a replacement for Scrum, Kanban or existing delivery practices.",
    "It does not prescribe workflows, roles or ceremonies.",
    "Instead, it exposes the workflow that already exists underneath them and asks what is actually required before software ships.",
    "Ship It! intentionally stays small.",
    "It defines four concepts.",
    "Everything else is implementation detail.",
  ],
  concepts: [
    {
      title: "Input",
      body: [
        "Every change starts somewhere.",
        "An incident report, a product idea, a dependency update or an automated system may all become inputs.",
        "Ship It! does not prescribe where inputs come from.",
        "It only recognizes that every delivery process begins with one.",
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
        "Deployment and release are sometimes the same thing.",
        "Sometimes they are separate.",
        "Ship It! focuses on the outcome rather than the mechanism.",
      ],
    },
  ],
  principles: [
    "Software changes continuously.",
    "Not every change carries the same risk.",
    "Different changes may require different delivery processes.",
    "Teams do not necessarily need a new methodology.",
  ],
  relatedPages: [
    { href: "/examples", label: "Examples", description: "shows those concepts in practice." },
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

        <div className="mt-14 sm:mt-16">
          <FrameworkDiagram variant="process" />
        </div>

        <section aria-labelledby="concepts-title" className="mt-20 sm:mt-24">
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

        <section aria-labelledby="principles-title" className="mt-20 sm:mt-24">
          <h2
            id="principles-title"
            className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
          >
            Principles
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Ship It! assumes:
          </p>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {frameworkGuideCopy.principles.map((principle) => (
              <li key={principle} className="flex gap-3">
                <span aria-hidden="true" className="text-zinc-500">•</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            The framework provides a common language for reasoning about delivery.
          </p>
        </section>

        <div className="mt-20 sm:mt-24">
          <RelatedPages pages={frameworkGuideCopy.relatedPages} intro="Framework explains the concepts." />
        </div>
      </div>
    </Section>
  );
}
