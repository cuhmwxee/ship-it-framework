import Section from "@/components/ui/Section";
import PageHero from "@/components/PageHero";

const exampleData = {
  title: "A dependency update, examined through Ship It!",
  label: "Illustrative scenario",
  body: [
    "A team needs to update Pino from 9.13.0 to 9.13.1. The change is small: one dependency version changes, no application code is modified, and the existing checks can be run against the change.",
    "But the change enters the same delivery path as a high-risk production change. There is a ticket, security review, architecture review, change approval, release-manager handoff, and a wait for the next deployment window.",
    "The team stops and asks a simple question:",
    "Does this change really need all of that?",
    "Under Ship It!, the team looks at the change itself rather than its category. What does this particular change need before it can ship?",
    "The ticket remains part of the process: it is the Input that describes and tracks the change. The existing checks provide the Validation needed to establish confidence. But the additional review and approval steps do not add enough value for this particular change to justify their cost.",
    "So the team changes the path for this change. It still develops the change and validates it; it simply does not add process that does not improve the confidence needed to ship.",
    "The result is not that validation becomes less important. The opposite: the team can direct more of its effort toward validation where it matters — for changes with greater risk, impact, or uncertainty — instead of spending the same effort on every change.",
    "This is not a rule for dependency updates. It is an example of making the delivery process proportional to the change.",
  ],
  takeaway:
    "The point is not to remove steps. It is to ask whether each step contributes to the confidence this change needs before it ships.",
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
