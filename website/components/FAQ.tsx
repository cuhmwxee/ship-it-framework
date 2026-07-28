"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";

const faqCopy = {
  title: "FAQ",
  introduction:
    "Concise answers to common questions about the framework and how it fits into existing delivery workflows.",
  items: [
    {
      question: "What is Ship It!?",
      answer: [
        "Ship It! is a minimal software delivery framework.",
        "It describes the minimum workflow required to move a software change from Input to Ship.",
        "Rather than introducing a new methodology, it makes an existing delivery workflow explicit.",
      ],
    },
    {
      question: "Can Ship It! be used with Scrum or Kanban?",
      answer: [
        "Yes.",
        "Ship It! is designed to complement, not replace, your existing way of working.",
        "Whether your team uses Scrum, Kanban, or another approach, Ship It! helps determine what each software change needs before it ships.",
      ],
    },
    {
      question: "Is Ship It! a software development methodology?",
      answer: [
        "No.",
        "Ship It! intentionally defines less than traditional methodologies.",
        "It focuses on the workflow required to deliver software.",
        "Planning, estimation, ceremonies, team structure, and roles remain your team's choice.",
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
      question: "Where does Ship It! come from?",
      answer: [
        "It emerged from practical software delivery experience.",
        "It was created by observing how software is actually delivered.",
        "If better ideas emerge, the framework should evolve.",
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
    },    {
      question: "Is Ship It! an AI framework?",
      answer: [
        "No.",
        "Ship It! is technology-agnostic.",
        "AI is one reason software delivery is changing, but the framework applies regardless of how software is created.",
      ],
    },
    {
      question: "What happens when Validation fails?",
      answer: [
        "Validation does not end the workflow.",
        "Failed validation creates new Input.",
        "The framework does not define whether that Input is a bug report, a review comment, or a failed test.",
        "It defines only that the work continues.",
      ],
    },
    {
      question: "Why is the framework so small?",
      answer: [
        "Because every new concept increases complexity.",
        "The framework intentionally defines only the minimum workflow required to deliver validated software.",
      ],
    },
    {
      question: "Will the framework grow over time?",
      answer: [
        "Only when new ideas make the framework simpler, clearer or easier to apply.",
      ],
    },
    {
      question: "Does Ship It! require any specific tools or technologies?",
      answer: [
        "No.",
        "Use whatever works for your team.",
        "Ship It! is independent of tools, platforms, and technologies.",
        "It defines only the delivery workflow.",
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
  isOpen,
  onToggle,
  panelId,
  buttonId,
}: {
  question: string;
  answer: string[];
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  buttonId: string;
}) {
  return (
    <article className="border-t border-zinc-800/80 py-4 sm:py-5">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="ds-button-link flex w-full items-center justify-between gap-4 py-3 text-left text-base font-medium leading-snug text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:text-lg"
        >
          <span>{question}</span>
          <span
            aria-hidden="true"
            className={`text-lg text-zinc-400 transition-transform duration-200 motion-reduce:transition-none ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▾
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid overflow-hidden transition-all duration-200 motion-reduce:transition-none ${
          isOpen ? "mt-3 max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 pb-2 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {answer.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(current => current === index ? null : index);
  };

  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="ds-content">
        <PageHero title={faqCopy.title} titleId="faq-title" className="mb-6">
          <p className="ds-type-body">{faqCopy.introduction}</p>
        </PageHero>
        <div>
          {faqCopy.items.map((item, index) => {
            const isOpen = openItem === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={isOpen}
                onToggle={() => toggleItem(index)}
                panelId={panelId}
                buttonId={buttonId}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
