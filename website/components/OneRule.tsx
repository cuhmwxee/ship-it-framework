const oneRuleCopy = {
  title: "",
  rule: "Every change must be validated before it is shipped.",
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
    >
      {children}
    </div>
  );
}

function RuleStatement() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div
        className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-400 sm:text-xs"
      >
        {oneRuleCopy.title}
      </div>

      <p className="text-3xl leading-tight text-[var(--color-accent)] sm:text-4xl">
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
