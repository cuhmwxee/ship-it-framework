const whyCopy = {
  cards: [
    {
      title: "The Problem",
      body: [
        "Software delivery is still more complicated than it needs to be.",
        "Teams use different tools, methodologies and processes.",
        "Yet every successful software delivery eventually follows the same simple pattern:",
        "Build.",
        "Validate.",
        "Ship.",
      ],
    },
    {
      title: "Inspiration",
      body: [
        "In 2023 I attended Dave Thomas' presentation "Innovation-Enabled, Value-Driven Architecture Evolution."",
        "One sentence stayed with me:",
        ""Shut up and ship."",
        "Ship It! is not Dave Thomas' framework.",
        "His presentation inspired me to ask:",
        ""What is the smallest software delivery framework that still works?"",
      ],
    },
    {
      title: "Experience",
      body: [
        "Ship It! wasn't created in academia.",
        "It wasn't created by a consulting company.",
        "It was created while building, maintaining and delivering software.",
        "This framework reflects practical experience rather than academic research.",
      ],
    },
    {
      title: "Philosophy",
      body: [
        "Ship It! doesn't replace Scrum, Kanban or XP.",
        "It simply describes the smallest workflow that has consistently worked in practice.",
        "If your team already ships software successfully...",
        "You might already be using Ship It! without calling it that.",
      ],
    },
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="why"
      className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function Card({ title, body }: { title: string; body: string[] }) {
  return (
    <article className="space-y-6 border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold leading-snug text-zinc-50 sm:text-3xl">
        {title}
      </h3>
      <div className="space-y-3 text-lg leading-relaxed text-zinc-300">
        {body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export default function Why() {
  return (
    <SectionContainer>
      <div className="grid gap-8 sm:grid-cols-2">
        {whyCopy.cards.map((card) => (
          <Card key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </SectionContainer>
  );
}
