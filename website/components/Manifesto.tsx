const manifestoCopy = {
  title: "Manifesto",
  intro: "Software delivery should be simple.",
  points: [
    "Every change begins with Input.",
    "Every Input becomes Development.",
    "Every Development deserves Validation.",
    "Validated work can be shipped.",
    "If validation fails, the work becomes new Input.",
    "Keep building.",
    "Keep validating.",
    "Keep shipping.",
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
    <ul className="mt-8 space-y-4 text-xl leading-relaxed text-zinc-300 sm:text-2xl">
      {points.map((point) => (
        <li key={point} className="leading-relaxed">
          {point}
        </li>
      ))}
    </ul>
  );
}

export default function Manifesto() {
  const titleId = "manifesto-title";

  return (
    <SectionContainer titleId={titleId}>
      <div className="max-w-3xl">
        <SectionHeading id={titleId} title={manifestoCopy.title} />
        <p className="mt-8 text-xl leading-relaxed text-zinc-200 sm:text-2xl">
          {manifestoCopy.intro}
        </p>
        <ManifestoPoints points={manifestoCopy.points} />
      </div>
    </SectionContainer>
  );
}
