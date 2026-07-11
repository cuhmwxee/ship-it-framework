const whyCopy = {
  cards: [
    {
      title: "Why now?",
      body: [
        "Modern software produces small changes continuously.",
        "Many delivery processes were designed around a single model for every change.",
      ],
    },
    {
      title: "The problem",
      body: [
        "The problem appears when small changes travel through processes designed for something larger.",
        "Not every change needs the same process.",
      ],
    },
    {
      title: "What Ship It! does",
      body: [
        "Ship It! reveals the workflow teams already follow.",
        "It helps teams rethink software delivery in a world of continuous change.",
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
      <div className="grid gap-8 lg:grid-cols-3">
        {whyCopy.cards.map((card) => (
          <Card key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </SectionContainer>
  );
}
