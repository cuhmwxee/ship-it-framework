const workflowObservationCopy = {
  title: "Why this exists",
  observation: [
    "Ship It! doesn't introduce a new workflow.",
    "It reveals the one that was already there.",
  ],
  body: [
    "Every software process has its own language.",
    "Some teams plan in sprints. Some manage flow. Some use a process they shaped themselves.",
    "Those choices can all work.",
    "Underneath them, successful delivery still depends on the same small loop: build the change, validate it, ship it with confidence.",
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="workflow-observation-title"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

export default function WorkflowObservation() {
  return (
    <SectionContainer>
      <div className="max-w-3xl">
        <h2
          id="workflow-observation-title"
          className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
        >
          {workflowObservationCopy.title}
        </h2>

        <div className="mt-10 space-y-4 border-t border-zinc-800 pt-8">
          {workflowObservationCopy.observation.map((line, index) => (
            <p
              key={line}
              className={
                index === 1
                  ? "text-2xl font-semibold leading-relaxed text-blue-400 sm:text-3xl"
                  : "text-2xl leading-relaxed text-zinc-50 sm:text-3xl"
              }
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {workflowObservationCopy.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
