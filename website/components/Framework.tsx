const workflowSteps = [
  {
    title: "Input",
    description: "Work that enters the framework.",
    examples: ["Feature request", "Bug report", "Technical debt"],
  },
  {
    title: "Development",
    description: "Turn the Input into a working change.",
    examples: ["Code", "Configuration", "Documentation"],
  },
  {
    title: "Validation",
    description: "Independently verify that the change is ready to ship.",
    examples: ["Code review", "Automated tests", "User acceptance"],
  },
  {
    title: "Ship",
    description: "Make the validated change available to its intended users.",
    examples: ["Production deployment", "Published package", "Released application"],
  },
];

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="framework"
      aria-label="Ship It! workflow"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function WorkflowStep({
  step,
}: {
  step: {
    title: string;
    description: string;
    examples?: string[];
  };
}) {
  return (
    <article className="border border-zinc-800/80 bg-zinc-950/40 p-8">
      <h2 className="font-mono text-2xl text-zinc-50 sm:text-3xl">
        {step.title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
        {step.description}
      </p>

      {step.examples && (
        <div className="mt-8 flex justify-end">
          <ul className="space-y-1 text-right font-mono text-xs leading-relaxed text-zinc-500 sm:text-sm">
            {step.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function WorkflowDiagram() {
  return (
    <figure
      className="mx-auto max-w-3xl"
      aria-label="Input. Development. Validation. Ship."
    >
      <ol>
        {workflowSteps.map((step, index) => (
          <li key={step.title}>
            <WorkflowStep step={step} />
            {index < workflowSteps.length - 1 && (
              <div
                className="flex justify-center py-5 font-mono text-blue-400"
                aria-hidden="true"
              >
                ↓
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default function Framework() {
  return (
    <SectionContainer>
      <WorkflowDiagram />
    </SectionContainer>
  );
}
