import InlineLink from "@/components/ui/InlineLink";

const story = {
  title: "A familiar delivery story",
  label: "Illustrative scenario",
  paragraphs: [
    "The dependency update was small: Pino 9.13.0 to 9.13.1. We changed a version, ran the existing checks, and made no application-code changes. Yet it entered the same delivery path as a high-risk production change.",
    "The team stopped and asked: does this change really need the same process?",
    "The team considered this particular change and the evidence from the existing checks. Those checks provided enough confidence that it was ready to ship. Additional review and approval steps did not meaningfully contribute to what this change needed, so the team skipped them for this change.",
    "Those steps remained part of the process for changes that needed them. This was a decision about this update, not a general rule for dependency updates.",
  ],
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
        <footer className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 sm:text-sm">
          {story.label}
        </footer>
      </blockquote>
      <div className="mt-8">
        <InlineLink href="/examples#dependency-update" className="text-base font-medium sm:text-lg">
          Read the full dependency update example →
        </InlineLink>
      </div>
    </article>
  );
}
