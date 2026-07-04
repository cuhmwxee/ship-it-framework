const manifestoCopy = {
  title: "Manifesto",
  intro: "Software delivery should be simple.",
  points: [
    "Every change begins with Input.",
    "Every Input becomes Development.",
    "Every Development deserves Validation.",
    "Validated work can be shipped.",
    "If validation fails, the work becomes new Input."
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
      id="manifesto"
      aria-labelledby={titleId}
      className="mx-auto w-full max-w-5xl px-6 py-28 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function SectionHeading({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <h2
      id={id}
      className="text-center text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
    >
      {title}
    </h2>
  );
}

function ManifestoPoints({ points }: { points: string[] }) {
  return (
    <ul className="mx-auto mt-14 flex max-w-2xl flex-col items-center space-y-8 text-center text-xl leading-relaxed text-zinc-300 sm:text-2xl">
      {points.map((point, index) => (
        <li key={point} className="flex flex-col items-center gap-8 leading-relaxed">
          <span>{point}</span>
          {index < points.length - 1 ? (
            <span aria-hidden="true" className="text-sm text-zinc-500">
              △
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function Manifesto() {
  const titleId = "manifesto-title";

  return (
    <SectionContainer titleId={titleId}>
      <div className="mx-auto max-w-3xl">
        <SectionHeading id={titleId} title={manifestoCopy.title} />
        <p className="mt-10 text-center text-xl leading-relaxed text-zinc-200 sm:text-2xl">
          {manifestoCopy.intro}
        </p>
        <ManifestoPoints points={manifestoCopy.points} />
      </div>
    </SectionContainer>
  );
}
