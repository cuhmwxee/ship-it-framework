type ReflectionStatementProps = {
  lines: string[];
  emphasis?: number;
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
      {children}
    </section>
  );
}

export default function ReflectionStatement({
  lines,
  emphasis,
}: ReflectionStatementProps) {
  const emphasisIndex = emphasis ?? -1;

  return (
    <SectionContainer>
      <div className="mx-auto max-w-3xl">
        <article className="space-y-5">
          {lines.map((line, index) => (
            <p
              key={line}
              className={
                index === emphasisIndex
                  ? "text-2xl font-semibold leading-tight tracking-tight text-[var(--color-interactive-hover)] sm:text-3xl lg:text-4xl"
                  : "mx-auto max-w-[56ch] text-lg leading-relaxed text-zinc-300 sm:text-xl"
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
