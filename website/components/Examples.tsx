"use client";

import { useState, type KeyboardEvent } from "react";

const examplesCopy = {
  title: "Examples",
  examples: [
    {
      title: "New Feature",
      input: "Customer request",
      steps: ["Input", "Development", "Validation", "Ship"],
      conclusion: "The workflow didn't change. Only the Input changed.",
    },
    {
      title: "Production Bug",
      input: "Production issue",
      steps: ["Input", "Development", "Validation", "Ship"],
      conclusion: "The workflow didn't change. Only the Input changed.",
    },
    {
      title: "Validation Failed",
      input: null,
      steps: ["Input", "Development", "Validation", "New Input", "Development", "Validation", "Ship"],
      conclusion: "The workflow didn't change. Validation simply created new Input.",
    },
    {
      title: "Technical Debt",
      input: "Technical debt",
      steps: ["Input", "Development", "Validation", "Ship"],
      conclusion: "The workflow didn't change. Only the Input changed.",
    },
    {
      title: "AI-assisted Development",
      input: null,
      steps: ["Input", "Development (AI)", "Validation (Developer)", "Ship"],
      conclusion: "The workflow didn't change. Only the Development changed.",
    },
    {
      title: "Continuous Delivery",
      input: null,
      steps: ["Input", "Development", "Automated Validation", "Ship"],
      conclusion: "The workflow didn't change. Only the Validation changed.",
    },
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="examples"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function ExampleCard({
  title,
  input,
  steps,
  conclusion,
}: {
  title: string;
  input: string | null;
  steps: string[];
  conclusion: string;
}) {
  const conclusionParts = conclusion.split(". ");
  const invariant = conclusionParts[0] ? `${conclusionParts[0]}.` : "";
  const variation = conclusionParts[1] ?? "";

  return (
    <article className="space-y-8 border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold leading-snug text-zinc-50 sm:text-3xl">
        {title}
      </h3>

      <div className="space-y-3">
        {input && (
          <div className="font-mono text-lg text-zinc-300">
            <div>{input}</div>
          </div>
        )}

        <div className="space-y-2 font-mono text-lg text-zinc-400">
          {steps.map((step, index) => (
            <div key={`${title}-${index}`}>
              {index > 0 && <div className="text-center text-zinc-500">↓</div>}
              <div className="text-center text-zinc-300">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 border-t border-zinc-800 pt-8">
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500">
            Invariant
          </p>
          <p className="text-lg leading-relaxed text-zinc-200">{invariant}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500">
            Variation
          </p>
          <p className="text-lg leading-relaxed text-zinc-200">{variation}</p>
        </div>
      </div>
    </article>
  );
}

export default function Examples() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExample = examplesCopy.examples[activeIndex];

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const total = examplesCopy.examples.length;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((index + 1) % total);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((index - 1 + total) % total);
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(total - 1);
    }
  };

  return (
    <SectionContainer>
      <div className="space-y-10">
        <h2 className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
          {examplesCopy.title}
        </h2>

        <div className="space-y-4">
          <div
            role="tablist"
            aria-label={examplesCopy.title}
            className="flex gap-2 overflow-x-auto pb-2"
          >
            {examplesCopy.examples.map((example, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={example.title}
                  type="button"
                  role="tab"
                  id={`example-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={`example-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`shrink-0 rounded-md border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950 sm:text-base ${
                    isActive
                      ? "border-zinc-100 bg-zinc-100 text-zinc-950"
                      : "border-zinc-800 bg-transparent text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  {example.title}
                </button>
              );
            })}
          </div>

          <div
            key={activeExample.title}
            role="tabpanel"
            id={`example-panel-${activeIndex}`}
            aria-labelledby={`example-tab-${activeIndex}`}
          >
            <ExampleCard
              title={activeExample.title}
              input={activeExample.input}
              steps={activeExample.steps}
              conclusion={activeExample.conclusion}
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
