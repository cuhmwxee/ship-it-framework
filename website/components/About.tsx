const aboutCopy = {
  title: "About",
  paragraphs: [
    "Ship It! was created from practical software development experience.",
    "It was inspired in part by Dave Thomas' ideas about software delivery, and the framework itself was developed independently.",
    "Similar concepts may appear in other methods because software engineering often converges on common ideas.",
    "The framework defines the minimum workflow required to deliver validated software.",
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

export default function About() {
  return (
    <SectionContainer>
      <div className="max-w-3xl space-y-8">
        <h2
          id="about-title"
          className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
        >
          {aboutCopy.title}
        </h2>
        <div className="space-y-4 text-xl leading-relaxed text-zinc-300 sm:text-2xl">
          {aboutCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
