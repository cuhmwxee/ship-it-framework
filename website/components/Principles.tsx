const principlesCopy = {
  title: "Principles",
  items: [
    "The framework should define as little as possible.",
    [
      "If something can be left to implementation,",
      "leave it to implementation.",
    ],
    "Compatibility is better than replacement.",
    "Simple is better than clever.",
    "Clarity beats completeness.",
    "Practice before theory.",
    [
      "Metaphors describe the framework.",
      "They never define framework concepts.",
    ],
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

export default function Principles() {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="principles-title"
          className="mb-16 text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
        >
          {principlesCopy.title}
        </h2>

        <div className="flex flex-col items-center space-y-10">
          {principlesCopy.items.map((principle, index) => (
            <div key={index} className="flex flex-col items-center">
              {Array.isArray(principle) ? (
                <div className="space-y-10">
                  {principle.map((line) => (
                    <p
                      key={line}
                      className="text-2xl leading-relaxed text-zinc-300 sm:text-3xl"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-2xl leading-relaxed text-zinc-300 sm:text-3xl">
                  {principle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}