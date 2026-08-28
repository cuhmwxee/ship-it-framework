import InlineLink from "@/components/ui/InlineLink";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";

const faqCopy = {
  title: "FAQ",
  items: [
    {
      question: "What is Ship It!?",
      answer: [
        "Ship It! is a minimal software delivery framework.",
        "It describes the minimum workflow required to move a software change from Input to Ship.",
      ],
    },
    {
      question: "Who is Ship It! for?",
      answer: [
        "Ship It! is for developers and teams who feel software delivery has become more complicated than necessary.",
        "It is especially useful when the delivery process feels heavier than the change itself.",
      ],
    },
    {
      question: "Is Ship It! a software development methodology?",
      answer: [
        "No.",
        "It defines a minimal delivery workflow.",
        "Planning, estimation, ceremonies, team structure, and roles remain your team's choice.",
      ],
    },
    {
      question: "Can Ship It! be used with Scrum or Kanban?",
      answer: [
        "Yes.",
        "Ship It! works with your existing way of working.",
      ],
    },
    {
      question: "What is Input?",
      answer: [
        "Input is the reason why a change exists.",
        "It can come from developers, users, monitoring, business requirements or automation.",
      ],
    },
    {
      question: "What is Development?",
      answer: [
        "Development is the activity that creates or modifies the change.",
        "It can be done by individuals, teams or automated systems.",
      ],
    },
    {
      question: "What is Validation?",
      answer: [
        "Validation provides confidence that the change solves the intended problem and can survive in production.",
        "Validation may involve people, automation or both.",
      ],
    },
    {
      question: "What is Ship?",
      answer: [
        "Ship makes the validated change available.",
        "How that happens depends on the team, the product and the change itself.",
      ],
    },
    {
      question: "What happens when Validation fails?",
      answer: [
        "Validation does not end the workflow.",
        "Failed validation creates new Input.",
        "The framework defines that work continues.",
      ],
    },
    {
      question: "Is Ship It! an AI framework?",
      answer: [
        "No.",
        "Ship It! is technology-agnostic.",
        "AI can participate in Development or Validation, but it does not redefine the framework.",
      ],
    },
    {
      question: "Does Ship It! require any specific tools or technologies?",
      answer: [
        "No.",
        "Use whatever works for your team.",
      ],
    },    {
      question: "Why doesn't Ship It! prescribe how teams should work day to day?",
      answer: [
        "Ship It! intentionally avoids prescribing day-to-day working practices. It does not define meetings, ceremonies, planning cadences, or team routines. Those are local decisions that depend on the team, organization, and context. Ship It! provides a shared language for reasoning about software delivery while allowing teams to keep the practices that already work well for them.",
      ],
    },
    {
      question: "Why is the framework so small?",
      answer: [
        "Because every new concept increases complexity.",
        "It intentionally defines only the minimum workflow required to deliver validated software.",
      ],
    },
    {
      question: "Will the framework grow over time?",
      answer: [
        "Only when new ideas make the framework simpler, clearer or easier to apply.",
      ],
    },
    {
      question: "Where does Ship It! come from?",
      answer: [
        "It emerged from practical software delivery experience.",
        "It was created by observing how software is actually delivered.",
      ],
    },
    {
      question: "I want to contact you.",
      answer: ["Mail to: captain <at> shipitframe.work."],
    },
  ],
};

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string[];
}) {
  return (
    <details className="group border-t border-zinc-800/80 py-4 sm:py-5">
      <summary className="ds-button-link ds-focusable flex w-full cursor-pointer list-none items-center justify-between gap-4 py-3 text-left text-base font-medium leading-snug text-zinc-50 [&::-webkit-details-marker]:hidden sm:text-lg">
          <span role="heading" aria-level={2}>{question}</span>
          <span
            aria-hidden="true"
            className="text-lg text-zinc-400 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180"
          >
            ▾
          </span>
      </summary>
      <div className="mt-3 space-y-2 pb-2 text-base leading-relaxed text-zinc-300 sm:text-lg">
        {answer.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </details>
  );
}

export default function FAQ() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="ds-content">
        <PageHero title={faqCopy.title} titleId="faq-title" className="mb-6" /> 
        <div>
          {faqCopy.items.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
        <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
          If your question is about applying these ideas in real delivery situations,
          continue in <InlineLink href="/examples">Examples</InlineLink>.
        </p>
      </div>
    </Section>
  );
}
