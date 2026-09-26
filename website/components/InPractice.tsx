import PageHero from "@/components/PageHero";
import RelatedPages from "@/components/RelatedPages";
import Section from "@/components/ui/Section";

const sections = [
  {
    id: "scrum-kanban",
    title: "How does Ship It! fit with Scrum or Kanban?",
    lead: "Ship It! works within the process a team already uses.",
    paragraphs: [
      "A team can keep its existing backlog, board, ceremonies, Definition of Done, or other process practices. Input, Development, Validation, and Ship are not proposed Jira columns, board states, or Scrum ceremonies. They describe the delivery path of an individual change within that environment.",
      "For example, a bug discovered during a sprint gives a team a reason to change the software. The team develops a fix, checks that it addresses the bug without breaking related behavior, and makes the validated change available through its usual release process. Its existing practices organize that work.",
      "The same reasoning applies to work flowing through a Kanban system. A backlog item may contain several changes, and validation may happen throughout development. There is no one-to-one mapping between the four concepts and the team's process artifacts.",
    ],
  },
  {
    id: "ai-assisted-development",
    title: "How does Ship It! fit with AI-assisted development?",
    lead: "AI can make changes faster. It doesn't make unnecessary steps necessary — or necessary validation unnecessary.",
    paragraphs: [
      "AI can change how Development happens and how quickly a team produces changes. It does not remove the need to understand the Input: what problem is being solved, and what would count as a useful result?",
      "An assistant might generate a bug fix quickly. The reported failure still needs to be understood, and the fix still needs appropriate Validation before Ship. For example, reproducing the failure and testing the affected behavior can provide evidence that the generated change solves the problem.",
      "When Development becomes faster, time spent on surrounding delivery practices can become more visible. That does not make those practices unnecessary. Speed alone does not determine what this change needs before it ships.",
    ],
  },
  {
    id: "vibe-coding",
    title: "How does Ship It! fit with vibe coding?",
    lead: "How a change is produced does not determine what it needs before it ships.",
    paragraphs: [
      "In a conversational workflow, someone may describe a desired result, try the generated software, and ask for adjustments. Ship It! uses the same concepts whether the change is written manually, with a coding assistant, through an agent, or through vibe coding.",
      "Input may become clearer through that conversation, and Development may involve many quick iterations. Trying the result can reveal new Input. There is still a decision about whether Validation provides enough confidence to Ship.",
      "A disposable prototype and a change to customer access controls need different levels of confidence, even if both were produced through the same conversation-driven workflow. Validation should be proportional to the change and its context, rather than simply to how quickly or by what method the code was produced.",
    ],
  },
];

export default function InPractice() {
  return (
    <Section labelledBy="in-practice-title">
      <div className="ds-content">
        <PageHero title="In practice" titleId="in-practice-title">
          <p className="ds-type-body">
            Ship It! does not require a particular process, tool, or way of writing
            software. It provides a shared way to reason about a change through
            Input, Development, Validation, and Ship. These examples show how it
            fits with practices teams may already use.
          </p>
        </PageHero>

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="mt-12 scroll-mt-24 sm:mt-16"
          >
            <h2 id={`${section.id}-title`} className="ds-type-section-heading">
              {section.title}
            </h2>
            <p
              className="ds-type-body mt-[var(--space-sm)] font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {section.lead}
            </p>
            <div className="ds-stack ds-stack--lg mt-8 ds-type-body">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-20 sm:mt-24">
          <RelatedPages pages={[
            { href: "/framework", label: "Framework", description: "defines the four concepts." },
            { href: "/examples", label: "Examples", description: "examines the delivery decisions for a dependency update." },
          ]} />
        </div>
      </div>
    </Section>
  );
}
