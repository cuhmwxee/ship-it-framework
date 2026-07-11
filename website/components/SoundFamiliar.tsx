const soundFamiliarCopy = {
  title: "Sound familiar?",
  statements: [
    ["The feature was ready.", "The release process wasn't."],
    ["The team added new tools.", "Shipping did not become simpler."],
    ["Validation existed.", "Nobody could agree where."],
    ["Every project seemed different.", "The workflow rarely was."],
    ["The workflow was never the problem.", "Sometimes it was simply buried."],
  ],
};

function SectionContainer({
  children,
  titleId,
}: {
  children: React.ReactNode;
  titleId: string;
}) {
  return (
    <section
      aria-labelledby={titleId}
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function StatementPair({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-3 text-center">
      {lines.map((line) => (
        <p
          key={line}
          className="text-2xl leading-snug text-zinc-200 sm:text-3xl"
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default function SoundFamiliar() {
  const titleId = "sound-familiar-title";

  return (
    <SectionContainer titleId={titleId}>
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id={titleId}
          className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
        >
          {soundFamiliarCopy.title}
        </h2>

        <div className="mt-14">
          {soundFamiliarCopy.statements.map((statement, index) => (
            <div key={statement.join(" ")}>
              <StatementPair lines={statement} />

              {index < soundFamiliarCopy.statements.length - 1 && (
                <div
                  className="mx-auto my-12 h-px w-full max-w-2xl bg-zinc-800/70"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
