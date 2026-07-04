const oneRuleCopy = {
  title: "One Rule",
  rule: "Every change must be independently validated before it is shipped.",
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
    <div className="mx-auto max-w-2xl text-center">
      <h2
        id="one-rule-title"
        className="mb-10 font-mono text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm"
      >
        {oneRuleCopy.title}
      </h2>

      <p className="text-3xl leading-tight text-blue-400 sm:text-4xl lg:text-5xl">
        {oneRuleCopy.rule}
      </p>
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