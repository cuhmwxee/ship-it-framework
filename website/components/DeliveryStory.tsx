const story = {
  title: "A familiar delivery story",
  label: "Illustrative scenario",
  paragraphs: [
    "The dependency update was small: Pino 9.13.0 to 9.13.1. We changed a version, ran the existing checks, and made no application-code changes.",
    "But it entered the same path as a high-risk production change: a ticket, security review, architecture review, change approval, release-manager handoff, and the next deployment window.",
    "The question was never whether to validate it. The question was whether this change needed the same delivery process as a change that could affect the whole system.",
  ],
  conclusion:
    "Ship It! makes that question explicit: what does this change need before it ships?",
};

export default function DeliveryStory() {
  return (
    <article className="border-t border-zinc-800/80 pt-10 sm:pt-12">
      <h2 className="ds-type-section-heading">{story.title}</h2>
      <blockquote className="relative mt-8 border-l border-zinc-700 pl-6 sm:pl-8">
        <span
          aria-hidden="true"
          className="absolute -left-1 -top-9 font-serif text-7xl leading-none text-zinc-700 sm:-top-11 sm:text-8xl"
        >
          “
        </span>
        <div className="space-y-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <footer className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 sm:text-sm">
          {story.label}
        </footer>
      </blockquote>
      <p className="mt-8 text-xl font-medium leading-relaxed text-zinc-100 sm:text-2xl">
        {story.conclusion}
      </p>
    </article>
  );
}
