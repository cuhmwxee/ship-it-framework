const examplesCopy = {
  title: "Examples",
  items: [
    {
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
  ],
} as const;

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="examples"
      aria-labelledby="examples-title"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function Example({ example }: { example: (typeof examplesCopy.items)[number] }) {
  return (
    <article className="border-t border-zinc-800/80 py-12 sm:py-16">
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

export default function Examples() {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-3xl">
        <h1
          id="examples-title"
          className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
        >
          {examplesCopy.title}
        </h1>

        <div className="mt-12 border-b border-zinc-800/80">
          {examplesCopy.items.map((example) => (
            <Example key={example.title} example={example} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
