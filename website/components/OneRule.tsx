const oneRuleCopy = {
  title: "",
  rule: "Every change must be independently validated before it is shipped.",
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="one-rule-title"
      className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
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
        className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs"
      >
        {oneRuleCopy.title}
      </h2>

      <p className="text-3xl leading-tight text-blue-400 sm:text-4xl">
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