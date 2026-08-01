import BrandMark from "@/components/BrandMark";

const heroCopy = {
  title: "Ship It!",
  subtitle: "The minimal software delivery framework.",
  motto: ["Build.", "Validate.", "Ship."],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-[82vh] w-full max-w-5xl items-center px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="w-full">{children}</div>
    </section>
  );
}

function TextStack({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl space-y-10">{children}</div>;
}

function HeroMotto({ words }: { words: string[] }) {
  return (
    <p
      aria-label={words.join(" ")}
      className="flex flex-col gap-1 font-mono text-sm uppercase tracking-[0.2em] text-zinc-500 sm:flex-row sm:gap-3 sm:text-base"
    >
      {words.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </p>
  );
}

export default function Hero() {
  return (
    <SectionContainer>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <div className="flex justify-center lg:justify-start">
          <BrandMark
            width={180}
            height={180}
            className="h-32 w-32 sm:h-44 sm:w-44 lg:h-56 lg:w-56"
          />
        </div>
        <TextStack>
          <div className="space-y-5">
            <h1
              id="hero-title"
              className="ds-type-hero leading-none"
            >
              {heroCopy.title}
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              {heroCopy.subtitle}
            </p>
          </div>
          <HeroMotto words={heroCopy.motto} />
        </TextStack>
      </div>
    </SectionContainer>
  );
}
