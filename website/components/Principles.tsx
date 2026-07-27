const principlesCopy = {
  title: "Ship It! assumes",
  items: [
    "Software changes continuously.",
    "Not every change carries the same risk.",
    "Different changes may require different delivery processes.",
    "Teams do not necessarily need another methodology.",
  ],
  conclusion: "These assumptions form the foundation of the framework.",
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
          className="mb-8 text-2xl font-medium leading-tight text-zinc-50 sm:text-3xl"
        >
          {principlesCopy.title}
        </h2>
        <div className="w-full divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {principlesCopy.items.map((principle, index) => (
            <PrincipleItem key={principle} text={principle} index={index} />
          ))}
        </div>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {principlesCopy.conclusion}
        </p>
      </div>
    </SectionContainer>
  );
}
