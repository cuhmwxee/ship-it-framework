function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10 lg:px-12">
      {children}
    </section>
  );
}

export default function ReflectionStatement({
  lines,
}: {
  lines: string[];
}) {
  return (
    <SectionContainer>
      <div className="mx-auto flex max-w-3xl justify-center">
        <div className="space-y-4 text-center text-2xl leading-relaxed text-zinc-200 sm:text-3xl">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
