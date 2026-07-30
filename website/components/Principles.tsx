const principlesCopy = {
  title: "Ship It! assumes",
  statement:
    "Software delivery is already a shared workflow. Ship It! simply gives teams a language to reason about it.",
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

export default function Principles() {
  return (
    <SectionContainer>
      <div className="mx-auto flex max-w-3xl flex-col items-start">
        <h2
          id="principles-title"
          className="mb-4 text-lg font-medium leading-tight text-zinc-400 sm:text-xl"
        >
          {principlesCopy.title}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {principlesCopy.statement}
        </p>
      </div>
    </SectionContainer>
  );
}
