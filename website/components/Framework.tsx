const workflowSteps = [
  {
    title: "Input",
    description: "Something worth changing.",
    examples: ["Need", "Idea", "Observation"],
    requirements: [
      "The framework does not define where Input comes from.",
      "It only requires that every change begins with Input.",
    ],
  },
  {
    title: "Development",
    description: "Turn the change into reality.",
    examples: ["Create", "Change", "Remove"],
    requirements: [
      "Development may be performed by a person, a team or a machine.",
      "The framework does not define how the work is done.",
    ],
  },
  {
    title: "Validation",
    description: "Confirm it is ready to ship.",
    examples: ["Review", "Verify", "Approve"],
    requirements: [
      "Validation may be automated or human.",
      "Successful validation leads to Ship.",
      "Failed validation creates new Input.",
    ],
  },
  {
    title: "Ship",
    description: "Deliver the validated change.",
    examples: ["Out."],
    requirements: [
      "The framework does not define how delivery happens.",
      "Only that validated work moves forward.",
    ],
  },
];

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="framework"
      aria-label="Ship It! workflow"
      className="mx-auto w-full max-w-5xl px-6 py-28 sm:px-10 lg:px-12"
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
    examples: string[];
    requirements: string[];
  };
}) {
  return (
    <article className="border border-zinc-800/80 bg-zinc-950/40 px-7 py-9 sm:px-10 sm:py-11 lg:px-12">
      <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-start">
        <div>
          <h2 className="font-mono text-3xl leading-tight text-zinc-50 sm:text-4xl">
            {step.title}
          </h2>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
            {step.description}
          </p>
        </div>

        <ul className="space-y-2 font-mono text-sm leading-relaxed text-zinc-500 sm:pt-2 sm:text-right sm:text-base">
          {step.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </div>

      <div className="my-10 flex items-center gap-5" aria-hidden="true">
        <div className="h-px flex-1 bg-zinc-800/80" />
        <div className="font-mono text-sm text-blue-400">↓</div>
        <div className="h-px flex-1 bg-zinc-800/80" />
      </div>

      <div className="max-w-3xl space-y-3 text-lg leading-relaxed text-zinc-200 sm:text-xl">
        {step.requirements.map((requirement) => (
          <p key={requirement}>{requirement}</p>
        ))}
      </div>
    </article>
  );
}

function WorkflowDiagram() {
  return (
    <figure
      className="mx-auto max-w-4xl"
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
