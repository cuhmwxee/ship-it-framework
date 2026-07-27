const closingCopy = {
  title: "Works with your existing way of working.",
  body: [
    "Keep the practices that help your team collaborate.",
    "Use Ship It! to think about what each software change actually needs before it ships.",
  ],
};

export default function Closing() {
  return (
    <section
      aria-labelledby="closing-title"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-3xl border-t border-zinc-800/80 pt-10 sm:pt-12">
        <h2
          id="closing-title"
          className="text-2xl font-medium leading-snug text-zinc-100 sm:text-3xl"
        >
          {closingCopy.title}
        </h2>
        <div className="mt-6 space-y-3 text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {closingCopy.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
