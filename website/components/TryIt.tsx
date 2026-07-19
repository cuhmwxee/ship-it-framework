const tryItCopy = {
  title: "Try it.",
  body: [
    "Think about the last dependency update, bug fix or automated change.",
    "Would you design its delivery process the same way today?",
  ],
};

export default function TryIt() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl">
          {tryItCopy.title}
        </h2>
        <div className="mt-8 space-y-3 text-2xl leading-snug text-zinc-200 sm:text-3xl">
          {tryItCopy.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
