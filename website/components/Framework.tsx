const frameworkCopy = {
  title: "The Framework",
  description: [
    "Every piece of work starts as Input.",
    "Development creates a solution.",
    "Validation has only two possible outcomes.",
    "The solution is ready for production.",
    "Or validation creates new Input.",
    "That's it.",
  ],
};

const workflowSteps = ["Input", "Development", "Validation", "Ship it!"];

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="framework"
      aria-labelledby="framework-title"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function FrameworkIntro() {
  return (
    <div className="max-w-3xl space-y-5">
      <h2
        id="framework-title"
        className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
      >
        {frameworkCopy.title}
      </h2>
      <div className="space-y-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
        {frameworkCopy.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function WorkflowStep({ label }: { label: string }) {
  return (
    <li className="flex min-h-20 items-center justify-center border border-zinc-800/80 bg-zinc-950/40 px-5 py-5 text-center font-mono text-base text-zinc-100 sm:text-lg">
      {label}
    </li>
  );
}

function WorkflowDiagram() {
  return (
    <figure
      className="mt-12 max-w-3xl"
      aria-label="Input. Development. Validation. Ship it!. Or validation creates new Input."
    >
      <ol className="grid gap-3 sm:grid-cols-4">
        {workflowSteps.map((step) => (
          <WorkflowStep key={step} label={step} />
        ))}
      </ol>
      <figcaption className="mt-4 font-mono text-sm leading-relaxed text-zinc-500 sm:text-base">
        Or validation creates new Input.
      </figcaption>
    </figure>
  );
}

export default function Framework() {
  return (
    <SectionContainer>
      <FrameworkIntro />
      <WorkflowDiagram />
    </SectionContainer>
  );
}
