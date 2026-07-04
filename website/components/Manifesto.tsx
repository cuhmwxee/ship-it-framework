const manifestoCopy = {
  title: "Manifesto",
  points: [
    "Software delivery should be simple.",
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
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
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
      className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
    >
      {title}
    </h2>
  );
}

function ManifestoPoints({ points }: { points: string[] }) {
  return (
    <div className="mt-12 flex flex-col items-center">
      {points.map((point, index) => (
        <div key={point} className="flex flex-col items-center">
          <p
            className={`max-w-3xl text-center leading-relaxed ${
              index === 0
                ? "text-3xl text-zinc-50 sm:text-4xl"
                : "text-2xl text-zinc-300 sm:text-3xl"
            }`}
          >
            {point}
          </p>

          {index < points.length - 1 && (
            <div className="my-8 text-blue-400" aria-hidden="true">
              ▲
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Manifesto() {
  const titleId = "manifesto-title";

  return (
    <SectionContainer titleId={titleId}>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading id={titleId} title={manifestoCopy.title} />
        <ManifestoPoints points={manifestoCopy.points} />
      </div>
    </SectionContainer>
  );
}
