const principlesCopy = {
  title: "Principles",
  items: [
    "Define as little as possible.",
    "Leave implementation to implementation.",
    "Compatibility beats replacement.",
    "Simple beats clever.",
    "Clarity beats completeness.",
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function PrincipleItem({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  return (
    <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-6 sm:py-6">
      <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-zinc-500">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">{text}</p>
    </div>
  );
}

export default function Principles() {
  return (
    <SectionContainer>
      <div className="mx-auto flex max-w-3xl flex-col items-start">
        <h2
          id="principles-title"
          className="mb-10 text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
        >
          {principlesCopy.title}
        </h2>
        <div className="w-full">
          {principlesCopy.items.map((principle, index) => (
            <PrincipleItem key={principle} text={principle} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
