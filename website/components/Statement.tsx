const statementCopy = {
  line1: "Ship It! wasn't created to change software development.",
  line2: "It was created to simplify software delivery.",
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="statement"
      className="mx-auto w-full px-6 py-32 sm:px-10 sm:py-40 lg:px-12 lg:py-48"
    >
      {children}
    </section>
  );
}

export default function Statement() {
  return (
    <SectionContainer>
      <div className="mx-auto flex max-w-[700px] justify-center">
        <article className="space-y-4 text-center">
          <p className="text-3xl leading-relaxed text-zinc-50 sm:text-4xl lg:text-5xl">
            {statementCopy.line1}
          </p>
          <p className="text-3xl font-semibold leading-relaxed text-blue-400 sm:text-4xl lg:text-5xl">
            {statementCopy.line2}
          </p>
        </article>
      </div>
    </SectionContainer>
  );
}
