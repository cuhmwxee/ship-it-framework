"use client";

import { useState } from "react";

const faqCopy = {
  title: "FAQ",
  items: [
    {
      question: "Why is the framework so small?",
      answer: [
        "Because every new concept increases complexity.",
        "The framework intentionally defines only the minimum workflow required to deliver validated software."
      ],
    },
    {
      question: "Does Ship It! require Scrum, Kanban, GitHub Flow, Jira, AI, or any specific tool?",
      answer: [
        "No.",
        "Use whatever works.",
        "Ship It! only defines the workflow."
      ],
    },
    {
      question: "Will the framework grow over time?",
      answer: [
        "Only if it makes the framework simpler."
      ],
    },
    {
      question: "Can AI perform Development?",
      answer: ["Yes."],
    },
    {
      question: "Can AI perform Validation?",
      answer: ["Yes."],
    },
    {
      question: "Can one person validate their own work?",
      answer: [
        "Sometimes.",
        "Independent validation is recommended whenever possible.",
      ],
    },
    {
      question: "Is this a process?",
      answer: ["Yes.", "A very small one."],
    },
    {
      question: "What is this based on? Is there some science behind this idea?",
      answer: [
        "It is based on practical software development experience.",
        "It is not based on academic research.",
        "If future research challenges these ideas, the framework should evolve."
      ],
    },
    {
      question: "I want to contact you.",
      answer: ["Mail to captain <at> shipitframe.work."],
    },
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

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
    <article className="border-t border-zinc-800 py-4 sm:py-5">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-2 text-left text-lg font-medium leading-snug text-zinc-50 transition-colors duration-200 hover:text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:text-xl"
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
    <SectionContainer>
      <div className="space-y-8">
        <h2
          id="faq-title"
          className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
        >
          {faqCopy.title}
        </h2>
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
    </SectionContainer>
  );
}
