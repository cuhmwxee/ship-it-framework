import InlineLink from "@/components/ui/InlineLink";

const story = {
  title: "A familiar delivery story",
  label: "Illustrative scenario",
  paragraphs: [
    "The dependency update was small: Pino 9.13.0 to 9.13.1. We changed a version, ran the existing checks, and made no application-code changes. Yet it entered the same delivery path as a high-risk production change.",
    "The team stopped and asked: does this change really need the same process?",
    "Under Ship It!, the answer was no. The existing checks provided the validation this change needed, so the additional review and approval steps were removed from its path.",
    "From then on, the team could spend that effort where it created more value — including testing and validation that mattered for changes with greater risk and impact.",
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
