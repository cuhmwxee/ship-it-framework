import InlineLink from "@/components/ui/InlineLink";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";

const examplesCopy = {
  title: "Examples",
  introduction: [
    "These examples show how the framework is applied to different software changes.",
    "They are grouped by delivery style to show how the same framework supports both developer-led and automated changes.",
    "For concept definitions, see the Framework page.",
  ],
  sections: [
    {
      id: "developer-led",
      title: "Developer-led changes",
      subtitle:
        "Changes where developers actively shape the delivery process.",
      items: [
        "production-bug",
        "large-feature",
        "infrastructure-migration",
        "feature-flag-rollout",
        "database-change",
      ],
    },
    {
      id: "automated-assisted",
      title: "Automated and assisted changes",
      subtitle:
        "Changes where the framework helps reduce repeated delivery decisions while maintaining confidence.",
      items: [
        "dependency-update",
        "automated-change",
        "ai-assisted-development",
        "security-patch",
      ],
    },
  ],
  items: [
    {
      id: "production-bug",
      title: "Production bug",
      situation: [
        "A customer reports a production issue.",
        "The fix is small, but it still needs to travel through the same process as a major feature.",
      ],
      question: "Does an urgent bug fix need the same delivery model as a larger change?",
      workflow: {
        input: "Customer report.",
        development: "Implement the bug fix.",
        validation: "Reproduce the issue and verify the fix.",
        ship: "Release the fix.",
      },
      takeaway: "The workflow stays the same even when the change is urgent and small.",
    },
    {
      id: "dependency-update",
      title: "Dependency update",
      situation: [
        "An automated dependency update waits for approvals and the next release window.",
      ],
      question: "Does a version update require the same process as a product feature?",
      workflow: {
        input: "Automated update request.",
        development: "Apply the dependency update.",
        validation: "Run tests and compatibility checks.",
        ship: "Release the update.",
      },
      takeaway: "Automation can trigger Input, but it does not remove the need for Validation.",
    },
    {
      id: "automated-change",
      title: "Automated change",
      situation: [
        "Bots continuously update configuration, documentation or infrastructure.",
      ],
      question: "How much human involvement does an automated change actually need?",
      workflow: {
        input: "Automation signal.",
        development: "System applies the change.",
        validation: "Run automated checks and policy gates.",
        ship: "Deploy the validated change.",
      },
      takeaway: "Automation changes who performs the work, not the structure of the workflow.",
    },
    {
      id: "ai-assisted-development",
      title: "AI-assisted development",
      situation: [
        "A developer uses AI to create a change in minutes.",
        "The surrounding delivery process was designed for much slower development.",
      ],
      question: "What changes when Development accelerates but the rest of the process stays the same?",
      workflow: {
        input: "Product or engineering need.",
        development: "Developer and AI produce the change.",
        validation: "Establish confidence in the produced change.",
        ship: "Release the validated change.",
      },
      takeaway: "Faster Development increases pressure on decision quality in Validation.",
    },
    {
      id: "large-feature",
      title: "Large feature",
      situation: [
        "Not every change is small.",
        "Sometimes an organization is building an entirely new capability.",
      ],
      question: "When is a heavier delivery process justified?",
      workflow: {
        input: "Business requirement.",
        development: "Coordinate work across teams.",
        validation: "Combine testing, reviews and staged rollout checks.",
        ship: "Release with controlled exposure.",
      },
      takeaway: "Larger scope justifies deeper Validation while preserving the same workflow.",
    },
    {
      id: "infrastructure-migration",
      title: "Infrastructure migration",
      situation: [
        "Part of the system must move to new infrastructure.",
        "The work touches many components and may take weeks or months.",
      ],
      question: "Should every infrastructure change follow the same process, or can delivery happen incrementally?",
      workflow: {
        input: "Operational requirement.",
        development: "Execute infrastructure changes incrementally.",
        validation: "Use testing and monitoring at each step.",
        ship: "Roll out gradually.",
      },
      takeaway: "Incremental delivery can reduce risk without changing the framework.",
    },
    {
      id: "feature-flag-rollout",
      title: "Feature flag rollout",
      situation: [
        "A feature already exists in production but remains disabled behind a flag.",
        "Enabling it becomes a separate delivery event.",
      ],
      question: "What actually counts as \"shipping\" when deployment and release happen at different times?",
      workflow: {
        input: "Product decision.",
        development: "Prepare the configuration change.",
        validation: "Use metrics and monitoring as release checks.",
        ship: "Enable the feature for users.",
      },
      takeaway: "Ship is defined by user availability, not only by deployment timing.",
    },
    {
      id: "database-change",
      title: "Database change",
      situation: [
        "A schema change affects multiple systems and cannot always be released in a single step.",
      ],
      question: "How should complex technical changes be delivered safely?",
      workflow: {
        input: "Product or technical requirement.",
        development: "Coordinate schema and application updates.",
        validation: "Verify compatibility and migration safety.",
        ship: "Release in stages.",
      },
      takeaway: "Complexity increases validation depth, not framework complexity.",
    },
    {
      id: "security-patch",
      title: "Security patch",
      situation: [
        "A security vulnerability requires an urgent update.",
        "The change itself is small, but delaying it increases risk.",
      ],
      question: "How quickly should a security-related change move through the delivery process?",
      workflow: {
        input: "Vulnerability report or scanner alert.",
        development: "Prepare the patch or update.",
        validation: "Run security and compatibility checks under time pressure.",
        ship: "Deploy as soon as confidence is sufficient.",
      },
      takeaway: "Urgency changes delivery tempo, but validated confidence remains mandatory.",
    },
  ],
} as const;

const examplesById = Object.fromEntries(
  examplesCopy.items.map((example) => [example.id, example]),
) as Record<(typeof examplesCopy.items)[number]["id"], (typeof examplesCopy.items)[number]>;

const developerExampleIds = examplesCopy.sections[0].items;
const automatedExampleIds = examplesCopy.sections[1].items;
const orderedExampleIds = [
  ...developerExampleIds,
  ...automatedExampleIds,
] as Array<(typeof examplesCopy.items)[number]["id"]>;

function Example({ example }: { example: (typeof examplesCopy.items)[number] }) {
  return (
    <article
      id={example.id}
      className="scroll-mt-24 border-t border-zinc-800/80 py-12 sm:py-16"
    >
      <h2 className="text-2xl font-semibold leading-tight text-zinc-50 sm:text-3xl">
        {example.title}
      </h2>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Situation
          </h3>
          <div className="mt-3 space-y-2 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {example.situation.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Question
          </h3>
          <p className="mt-3 text-xl leading-relaxed text-zinc-100 sm:text-2xl">
            {example.question}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Ship It!
          </h3>
          <ul className="mt-3 space-y-2 font-mono text-base leading-relaxed text-zinc-300 sm:text-lg">
            <li>Input: {example.workflow.input}</li>
            <li>Development: {example.workflow.development}</li>
            <li>Validation: {example.workflow.validation}</li>
            <li>Ship: {example.workflow.ship}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Takeaway
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {example.takeaway}
          </p>
        </div>
      </div>
    </article>
  );
}

function TableOfContents() {
  return (
    <nav
      aria-label="Examples table of contents"
      className="border-y border-zinc-800/80 py-6 lg:sticky lg:top-24 lg:order-2 lg:self-start lg:border-y-0 lg:border-l lg:py-0 lg:pl-6"
    >
      <h2 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
        Examples
      </h2>
      <ol className="mt-4 space-y-2">
        {orderedExampleIds.map((id) => (
          <li key={id}>
            {id === automatedExampleIds[0] ? (
              <div className="mb-3 border-t border-zinc-800/80 pt-3">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                  Automated and assisted changes
                </p>
              </div>
            ) : null}
            <a
              href={`#${id}`}
              className="ds-text-link text-sm leading-relaxed text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              {examplesById[id].title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function Examples() {
  return (
    <Section id="examples" labelledBy="examples-title" size="page">
      <div className="mx-auto max-w-5xl">
        <PageHero title={examplesCopy.title} titleId="examples-title" className="mx-auto">
          {examplesCopy.introduction.map((paragraph) => (
            <p key={paragraph} className="ds-type-body">{paragraph}</p>
          ))}
        </PageHero>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
          <TableOfContents />
          <div className="border-b border-zinc-800/80 lg:order-1">
            {developerExampleIds.map((id) => (
              <Example key={id} example={examplesById[id]} />
            ))}

            <section aria-labelledby="automated-assisted-title" className="py-6 sm:py-8">
              <p
                id="automated-assisted-title"
                className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500"
              >
                Automated and assisted changes
              </p>
              <p className="mt-2 text-base leading-relaxed text-zinc-400 sm:text-lg">
                The same framework also applies to changes that are automated or AI-assisted.
              </p>
            </section>

            {automatedExampleIds.map((id) => (
              <Example key={id} example={examplesById[id]} />
            ))}

            <section aria-labelledby="examples-conclusion-title" className="py-12 sm:py-16">
              <h2
                id="examples-conclusion-title"
                className="text-2xl font-semibold leading-tight text-zinc-50 sm:text-3xl"
              >
                Conclusion
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                These scenarios show how one framework supports very different kinds of
                delivery decisions.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                For concept definitions, return to the <InlineLink href="/framework">Framework</InlineLink>.
                For boundary questions, see the <InlineLink href="/faq">FAQ</InlineLink>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Section>
  );
}
