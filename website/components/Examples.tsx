const examplesCopy = {
  title: "Examples",
  items: [
    {
      id: "production-bug",
      title: "Production bug",
      situation: [
        "A customer reports a production issue.",
        "The fix is small, but it still needs to travel through the same process as a major feature.",
      ],
      question: "Does an urgent bug fix need the same delivery model as a larger change?",
      workflow: [
        "Input → customer report.",
        "Development → bug fix.",
        "Validation → reproduce the issue and verify the fix.",
        "Ship → release.",
      ],
    },
    {
      id: "dependency-update",
      title: "Dependency update",
      situation: [
        "An automated dependency update waits for approvals and the next release window.",
      ],
      question: "Does a version update require the same process as a product feature?",
      workflow: [
        "Input → automation.",
        "Development → dependency update.",
        "Validation → tests and compatibility checks.",
        "Ship → release.",
      ],
    },
    {
      id: "ai-assisted-development",
      title: "AI-assisted development",
      situation: [
        "A developer uses AI to create a change in minutes, while the surrounding delivery process was designed for much slower development.",
      ],
      question: "What changes when Development accelerates but the rest of the process stays the same?",
      workflow: [
        "Input → product or engineering need.",
        "Development → developer and AI.",
        "Validation → confidence in the produced change.",
        "Ship → release.",
      ],
    },
    {
      id: "automated-change",
      title: "Automated change",
      situation: [
        "Bots continuously update configuration, documentation or infrastructure.",
      ],
      question: "How much human involvement does an automated change actually need?",
      workflow: [
        "Input → automation.",
        "Development → system.",
        "Validation → automated checks.",
        "Ship → deployment.",
      ],
    },
    {
      id: "large-feature",
      title: "Large feature",
      situation: [
        "Not every change is small.",
        "Sometimes an organization is building an entirely new capability.",
      ],
      question: "When is a heavier delivery process justified?",
      workflow: [
        "Input → business requirement.",
        "Development → multiple developers and teams.",
        "Validation → testing, reviews and rollout.",
        "Ship → release.",
      ],
    },
    {
      id: "security-patch",
      title: "Security patch",
      situation: [
        "A security vulnerability requires an urgent update.",
        "The change itself is small, but delaying it increases risk.",
      ],
      question: "How quickly should a security-related change move through the delivery process?",
      workflow: [
        "Input → vulnerability report or dependency scanner.",
        "Development → patch or update.",
        "Validation → security and compatibility checks.",
        "Ship → deployment.",
      ],
    },
    {
      id: "infrastructure-migration",
      title: "Infrastructure migration",
      situation: [
        "Part of the system must move to new infrastructure.",
        "The work touches many components and may take weeks or months.",
      ],
      question: "Should every infrastructure change follow the same process, or can delivery happen incrementally?",
      workflow: [
        "Input → operational need.",
        "Development → infrastructure work.",
        "Validation → testing and monitoring.",
        "Ship → gradual rollout.",
      ],
    },
    {
      id: "feature-flag-rollout",
      title: "Feature flag rollout",
      situation: [
        "A feature already exists in production but remains disabled behind a flag.",
        "Enabling it becomes a separate delivery event.",
      ],
      question: "What actually counts as \"shipping\" when deployment and release happen at different times?",
      workflow: [
        "Input → product decision.",
        "Development → configuration change.",
        "Validation → metrics and monitoring.",
        "Ship → enable the feature.",
      ],
    },
    {
      id: "database-change",
      title: "Database change",
      situation: [
        "A schema change affects multiple systems and cannot always be released in a single step.",
      ],
      question: "How should complex technical changes be delivered safely?",
      workflow: [
        "Input → product or technical requirement.",
        "Development → schema and application changes.",
        "Validation → compatibility and migration testing.",
        "Ship → staged rollout.",
      ],
    },
  ],
} as const;

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="examples"
      aria-labelledby="examples-title"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

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
            {example.workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
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
        {examplesCopy.items.map((example) => (
          <li key={example.id}>
            <a
              href={`#${example.id}`}
              className="text-sm leading-relaxed text-zinc-400 transition-colors hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              {example.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function Examples() {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-5xl">
        <h1
          id="examples-title"
          className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
        >
          {examplesCopy.title}
        </h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
          <TableOfContents />
          <div className="border-b border-zinc-800/80 lg:order-1">
            {examplesCopy.items.map((example) => (
              <Example key={example.id} example={example} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
