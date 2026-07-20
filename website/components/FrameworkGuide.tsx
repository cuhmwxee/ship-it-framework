import Link from "next/link";

const frameworkGuideCopy = {
  introduction: [
    "Ship It! is not a replacement for Scrum, Kanban or existing delivery practices.",
    "It does not prescribe workflows, roles or ceremonies.",
    "Instead, it exposes the workflow that already exists underneath them and asks what is actually required before software ships.",
    "Ship It! intentionally stays small.",
    "It defines four concepts.",
    "Everything else is implementation detail.",
  ],
  concepts: [
    {
      title: "Input",
      body: [
        "Every change starts somewhere.",
        "An incident report, a product idea, a dependency update or an automated system may all become inputs.",
        "Ship It! does not prescribe where inputs come from.",
        "It only recognizes that every delivery process begins with one.",
      ],
    },
    {
      title: "Development",
      body: [
        "Development transforms an input into a change.",
        "That work may involve people, AI systems, automation or entire teams.",
        "The framework intentionally does not define how development should happen.",
      ],
    },
    {
      title: "Validation",
      body: [
        "Validation provides confidence that the change solves the intended problem and can survive in production.",
        "Validation may involve tests, reviews, monitoring, experimentation or human judgment.",
        "The framework does not prescribe a single form of validation.",
      ],
    },
    {
      title: "Ship",
      body: [
        "Shipping is the moment a change becomes available.",
        "Deployment and release are sometimes the same thing.",
        "Sometimes they are separate.",
        "Ship It! focuses on the outcome rather than the mechanism.",
      ],
    },
  ],
  principles: [
    "Software changes continuously.",
    "Not every change carries the same risk.",
    "Different changes may require different delivery processes.",
    "Teams do not necessarily need a new methodology.",
  ],
  relatedPages: [
    { href: "/examples", label: "Examples", description: "shows those concepts in practice." },
    { href: "/faq", label: "FAQ", description: "answers common questions." },
  ],
} as const;

export default function FrameworkGuide() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <header>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
            Framework
          </h1>
          <div className="mt-8 space-y-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {frameworkGuideCopy.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <section aria-labelledby="concepts-title" className="mt-20 sm:mt-24">
          <h2
            id="concepts-title"
            className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
          >
            The four concepts
          </h2>
          <div className="mt-8 border-y border-zinc-800/80">
            {frameworkGuideCopy.concepts.map((concept) => (
              <article key={concept.title} className="border-t border-zinc-800/80 py-10 first:border-t-0 sm:py-12">
                <h3 className="font-mono text-2xl leading-tight text-zinc-50 sm:text-3xl">
                  {concept.title}
                </h3>
                <div className="mt-5 space-y-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                  {concept.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="principles-title" className="mt-20 sm:mt-24">
          <h2
            id="principles-title"
            className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
          >
            Principles
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Ship It! assumes:
          </p>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {frameworkGuideCopy.principles.map((principle) => (
              <li key={principle} className="flex gap-3">
                <span aria-hidden="true" className="text-zinc-500">•</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            The framework provides a common language for reasoning about delivery.
          </p>
        </section>

        <nav aria-labelledby="related-pages-title" className="mt-20 border-t border-zinc-800/80 pt-10 sm:mt-24 sm:pt-12">
          <h2
            id="related-pages-title"
            className="text-2xl font-semibold leading-tight text-zinc-50 sm:text-3xl"
          >
            Related pages
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Framework explains the concepts.
          </p>
          <ul className="mt-3 space-y-3 text-lg leading-relaxed sm:text-xl">
            {frameworkGuideCopy.relatedPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-zinc-50 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  {page.label}
                </Link>{" "}
                <span className="text-zinc-400">{page.description}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
