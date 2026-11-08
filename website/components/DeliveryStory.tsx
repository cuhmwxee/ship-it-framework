import InlineLink from "@/components/ui/InlineLink";

import { story } from "@/app/v2/_components/content";

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
        <InlineLink href="/examples#configuration-message" className="text-base font-medium sm:text-lg">
          Read the full message correction example →
        </InlineLink>
      </div>
    </article>
  );
}
