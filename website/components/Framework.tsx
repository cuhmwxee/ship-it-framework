const workflowSteps = ["Input", "Development", "Validation", "Ship it!"];

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
      className="mx-auto max-w-3xl"
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
      <WorkflowDiagram />
    </SectionContainer>
  );
}
