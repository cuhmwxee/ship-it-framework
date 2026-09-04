import BrandMark from "@/components/BrandMark";

const heroCopy = {
  title: "Ship It!",
  answer:
    "Ship It! is a lightweight software delivery framework for teams that already have a process.",
  hook: "Not every software change needs the same delivery process.",
  detail:
    "Ship It! helps you decide what each change needs before it ships, without replacing the practices that already work.",
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

export default function Hero() {
  return (
    <SectionContainer>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <div className="flex justify-center lg:justify-start">
          <BrandMark
            width={180}
            height={180}
            className="h-32 w-32 sm:h-44 sm:w-44 lg:h-56 lg:w-56"
            priority
          />
        </div>
        <TextStack>
          <div className="space-y-6">
            <h1
              id="hero-title"
              className="ds-type-hero leading-none"
            >
              {heroCopy.title}
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              {heroCopy.answer}
            </p>
          </div>
          <div className="max-w-2xl space-y-4 border-l border-zinc-700 pl-5 sm:pl-6">
            <p className="text-lg font-medium leading-relaxed text-zinc-100 sm:text-xl">
              {heroCopy.hook}
            </p>
            <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
              {heroCopy.detail}
            </p>
          </div>
        </TextStack>
      </div>
    </SectionContainer>
  );
}
