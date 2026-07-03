const examplesCopy = {
  title: "Examples",
  subtitle: "Different situations.",
  subtitleContinued: "Same workflow.",
  examples: [
    {
      title: "New Feature",
      input: "Customer request",
      steps: ["Input", "Development", "Validation", "Ship"],
      output: null,
      conclusion: "The workflow didn't change. Only the Input changed.",
    },
    {
      title: "Production Bug",
      input: "Production issue",
      steps: ["Input", "Development", "Validation", "Ship"],
      output: null,
      conclusion: "The workflow didn't change. Only the Input changed.",
    },
    {
      title: "Validation Failed",
      input: null,
      steps: ["Input", "Development", "Validation", "New Input", "Development", "Validation", "Ship"],
      output: null,
      conclusion: "The workflow didn't change. Validation simply created new Input.",
    },
    {
      title: "Technical Debt",
      input: "Technical debt",
      steps: ["Input", "Development", "Validation", "Ship"],
      output: null,
      conclusion: "The workflow didn't change. Only the Input changed.",
    },
    {
      title: "AI-assisted Development",
      input: null,
      steps: ["Input", "Development (AI)", "Validation (Developer)", "Ship"],
      output: null,
      conclusion: "The workflow didn't change. Only the Development changed.",
    },
    {
      title: "Continuous Delivery",
      input: null,
      steps: ["Input", "Development", "Automated Validation", "Ship"],
      output: null,
      conclusion: "The workflow didn't change. Only the Validation changed.",
    },
  ],
  closing: "Everything else is implementation detail.",
};

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

function ExampleCard({
  title,
  input,
  steps,
  conclusion,
}: {
  title: string;
  input: string | null;
  steps: string[];
  conclusion: string;
}) {
  return (
    <article className="space-y-6 border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold leading-snug text-zinc-50 sm:text-3xl">
        {title}
      </h3>

      <div className="space-y-3">
        {input && (
          <div className="font-mono text-lg text-zinc-300">
            <div>{input}</div>
          </div>
        )}

        <div className="space-y-2 font-mono text-lg text-zinc-400">
          {steps.map((step, index) => (
            <div key={`${title}-${index}`}>
              {index > 0 && <div className="text-center text-zinc-500">↓</div>}
              <div className="text-center text-zinc-300">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-6">
        <p className="text-lg leading-relaxed text-zinc-300">
          {conclusion}
        </p>
      </div>
    </article>
  );
}

export default function Examples() {
  return (
    <SectionContainer>
      <div className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
            {examplesCopy.title}
          </h2>
          <p className="text-2xl leading-relaxed text-zinc-300">
            {examplesCopy.subtitle}
          </p>
          <p className="text-2xl leading-relaxed text-zinc-300">
            {examplesCopy.subtitleContinued}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {examplesCopy.examples.map((example) => (
            <ExampleCard
              key={example.title}
              title={example.title}
              input={example.input}
              steps={example.steps}
              conclusion={example.conclusion}
            />
          ))}
        </div>

        <div className="flex justify-center border-t border-zinc-800 pt-10">
          <p className="max-w-2xl text-center text-2xl leading-relaxed text-zinc-300">
            {examplesCopy.closing}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
