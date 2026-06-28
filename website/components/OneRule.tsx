const oneRuleCopy = {
  title: "One Rule",
  body: [
    "Every change must be independently validated before it is shipped.",
    "Validation may be performed by another developer, an automated process, or any combination that fits your team.",
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="one-rule-title"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function RuleStatement() {
  return (
    <div className="max-w-3xl space-y-6">
      <h2
        id="one-rule-title"
        className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
      >
        {oneRuleCopy.title}
      </h2>
      <div className="space-y-4 text-2xl leading-snug text-zinc-200 sm:text-3xl">
        {oneRuleCopy.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function OneRule() {
  return (
    <SectionContainer>
      <RuleStatement />
    </SectionContainer>
  );
}
