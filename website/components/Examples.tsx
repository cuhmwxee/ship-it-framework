const examplesCopy = {
  title: "Examples",
  subtitle: "Validation can create new Input.",
  steps: [
    { type: "step", label: "Input" },
    { type: "arrow", label: "↓" },
    { type: "step", label: "Development" },
    { type: "arrow", label: "↓" },
    { type: "step", label: "Validation" },
    { type: "failure", label: "✕" },
    { type: "note", label: "Validation created new Input." },
    { type: "arrow", label: "↓" },
    { type: "step", label: "Input" },
    { type: "arrow", label: "↓" },
    { type: "step", label: "Development" },
    { type: "arrow", label: "↓" },
    { type: "step", label: "Validation" },
    { type: "success", label: "✓" },
    { type: "arrow", label: "↓" },
    { type: "step", label: "Ship" },
  ],
} as const;

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="examples"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function WorkflowItem({
  item,
}: {
  item: (typeof examplesCopy.steps)[number];
}) {
  const styles = {
    step: "font-mono text-xl text-zinc-200 sm:text-2xl",
    arrow: "font-mono text-lg text-zinc-600 sm:text-xl",
    failure: "font-mono text-2xl text-zinc-500 sm:text-3xl",
    note: "mx-auto max-w-xl py-5 text-2xl text-blue-400 sm:text-3xl",
    success: "font-mono text-2xl text-blue-400 sm:text-3xl",
  };

  return (
    <li className={`text-center leading-relaxed ${styles[item.type]}`}>
      <span aria-hidden={item.type === "arrow" ? "true" : undefined}>
        {item.label}
      </span>
      {item.type === "failure" && (
        <span className="sr-only">Validation failed.</span>
      )}
      {item.type === "success" && (
        <span className="sr-only">Validation passed.</span>
      )}
    </li>
  );
}

function WorkflowExample() {
  return (
    <ol
      className="mt-12 space-y-3"
      aria-label="Validation failed, created new Input, then passed and shipped."
    >
      {examplesCopy.steps.map((item, index) => (
        <WorkflowItem key={`${item.label}-${index}`} item={item} />
      ))}
    </ol>
  );
}

export default function Examples() {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
          {examplesCopy.title}
        </h2>
        <p className="mt-6 text-2xl leading-snug text-zinc-300 sm:text-3xl">
          {examplesCopy.subtitle}
        </p>

        <WorkflowExample />
      </div>
    </SectionContainer>
  );
}
