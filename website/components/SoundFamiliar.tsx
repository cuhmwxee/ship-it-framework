const soundFamiliarCopy = {
  title: "Sound familiar?",
  cases: [
    "A dependency update waits two weeks.",
    "A one-line fix follows the same process as a major feature.",
    "An automated change needs the same approvals as manual work.",
  ],
  reflection: [
    "You may not need a new process.",
    "You may need a simpler one.",
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

function CasesList({ cases }: { cases: string[] }) {
  return (
    <ul className="mx-auto max-w-3xl divide-y divide-zinc-800/80 border-y border-zinc-800/80">
      {cases.map((example) => (
        <li
          key={example}
          className="py-7 text-xl leading-relaxed text-zinc-200 sm:py-8 sm:text-2xl"
        >
          {example}
        </li>
      ))}
    </ul>
  );
}

export default function SoundFamiliar() {
  const titleId = "sound-familiar-title";

  return (
    <SectionContainer titleId={titleId}>
      <div className="mx-auto max-w-3xl text-center">
        <CasesList cases={soundFamiliarCopy.cases} />

        <h2
          id={titleId}
          className="mt-20 text-3xl font-semibold leading-tight text-zinc-50 sm:mt-24 sm:text-4xl"
        >
          {soundFamiliarCopy.title}
        </h2>

        <div className="mt-8 space-y-3">
          {soundFamiliarCopy.reflection.map((line) => (
            <p
              key={line}
              className="text-2xl leading-snug text-zinc-200 sm:text-3xl"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
