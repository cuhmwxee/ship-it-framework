import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";

const manifestoCopy = {
  title: "Manifesto",
  intro:
    "Ship It! is built on a simple belief: delivery should match the nature of the change. The goal is not more process. The goal is proportional confidence.",
  principles: [
    "Not every software change needs the same delivery process.",
    "Validation should be proportional to risk.",
    "Small changes should remain small.",
    "Critical changes deserve stronger validation.",
    "Feedback improves development.",
    "Delivery decisions should be intentional.",
    "Keep your existing way of working.",
    "AI accelerates change. Engineering judgment remains essential.",
  ],
  closing: "Keep your process. Improve your delivery decisions.",
} as const;

function ManifestoPrincipleItem({
  text,
  index,
}: {
  text: string;
  index: number;
}) {
  return (
    <li className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-6 sm:py-6">
      <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-zinc-500">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">{text}</p>
    </li>
  );
}

export default function Manifesto() {
  return (
    <Section id="manifesto" labelledBy="manifesto-title" spacing="compact">
      <div className="ds-content">
        <PageHero title={manifestoCopy.title} titleId="manifesto-title">
          <p className="ds-type-body">{manifestoCopy.intro}</p>
        </PageHero>

        <ol className="mt-10 w-full divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {manifestoCopy.principles.map((principle, index) => (
            <ManifestoPrincipleItem key={principle} text={principle} index={index} />
          ))}
        </ol>

        <p className="mt-10 text-xl font-semibold leading-relaxed text-blue-400 sm:text-2xl">
          {manifestoCopy.closing}
        </p>
      </div>
    </Section>
  );
}
