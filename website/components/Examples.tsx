import Section from "@/components/ui/Section";
import PageHero from "@/components/PageHero";

const exampleData = {
  title: "A dependency update, examined through Ship It!",
  label: "Illustrative scenario",
  body: [
    "A team needs to update Pino from 9.13.0 to 9.13.1. One dependency version changes, no application code is modified, and the existing checks can be run against the change.",
    "The change enters the team's usual delivery path. There is a ticket, security review, architecture review, change approval, release-manager handoff, and a wait for the next deployment window.",
    "The team stops and asks a simple question:",
    "Does this change really need all of that?",
    "Under Ship It!, the team looks at the change itself rather than its category. What does this particular change need before it ships?",
    "The ticket remains part of the process: it is the Input that describes and tracks the change. The team considers this particular update and the evidence from the existing checks. It finds that those checks provide enough confidence that this change is ready to ship, and that additional review and approval steps do not meaningfully contribute to what it needs.",
    "So the team skips those steps for this change. It still develops and validates the update. The skipped steps remain part of the process for other changes that need them.",
    "The decision rests on relevant evidence that this update is ready to ship. Removing an inherited step must not remove evidence needed for that decision or bypass a required control.",
    "This is not a rule for dependency updates. Another change may need every practice it would normally inherit.",
  ],
  takeaway:
    "The team questioned what this update needed from its usual delivery process. It omitted steps that did not contribute while preserving the evidence needed for Validation.",
};

export default function Examples() {
  return (
    <Section id="examples" labelledBy="examples-title">
      <div className="ds-content">
        <PageHero title="Examples" titleId="examples-title" className="mb-12">
          <p className="ds-type-body">
            A concrete worked example showing how Ship It! is applied to a software change.
          </p>
        </PageHero>

        <article
          id="dependency-update"
          className="scroll-mt-24 border-t border-zinc-800/80 pt-10 sm:pt-12"
        >
          <h2 className="text-2xl font-semibold leading-tight text-zinc-50 sm:text-3xl">
            {exampleData.title}
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            <p>{exampleData.body[0]}</p>
            <p>{exampleData.body[1]}</p>
            <p>{exampleData.body[2]}</p>

            <blockquote className="border-l border-zinc-700 pl-6 text-xl font-medium text-[var(--color-interactive-hover)] sm:pl-8 sm:text-2xl">
              <p>{exampleData.body[3]}</p>
            </blockquote>

            <p>{exampleData.body[4]}</p>
            <p>{exampleData.body[5]}</p>
            <p>{exampleData.body[6]}</p>
            <p>{exampleData.body[7]}</p>
            <p>{exampleData.body[8]}</p>
          </div>

          <footer className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 sm:text-sm">
            {exampleData.label}
          </footer>

          <div className="mt-12 border-t border-zinc-800/80 pt-8">
            <h3 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
              Takeaway
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {exampleData.takeaway}
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
