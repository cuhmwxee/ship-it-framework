type ReflectionStatementProps = {
  lines: string[];
  emphasis?: number;
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full px-6 py-32 sm:px-10 sm:py-40 lg:px-12 lg:py-48">
      {children}
    </section>
  );
}

export default function ReflectionStatement({
  lines,
  emphasis,
}: ReflectionStatementProps) {
  return (
    <SectionContainer>
      <div className="mx-auto flex max-w-[700px] justify-center">
        <article className="space-y-4 text-center">
          {lines.map((line, index) => (
            <p
              key={line}
              className={
                index === emphasis
                  ? "text-3xl font-semibold leading-relaxed text-blue-400 sm:text-4xl lg:text-5xl"
                  : "text-3xl leading-relaxed text-zinc-50 sm:text-4xl lg:text-5xl"
              }
            >
              {line}
            </p>
          ))}
        </article>
      </div>
    </SectionContainer>
  );
}