import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const whyCopy = {
  cards: [
    {
      title: "Why now?",
      body: [
        "Software changes are becoming smaller, more frequent and increasingly AI-assisted.",
        "Teams can produce changes faster than ever, while many delivery processes were designed around a single model for every change.",
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
        "It helps teams make clearer delivery decisions in a world of continuous change.",
      ],
    },
    {
      title: "Philosophy",
      body: [
        "What does Ship It! simplify?",
        "Oversized delivery processes for continuous change.",
        "Ship It! does not remove process.",
        "It helps reduce process where the process has become larger than the change.",
      ],
    },
  ],
};

function WhyCard({ title, body }: { title: string; body: string[] }) {
  return (
    <Card className="ds-stack ds-stack--lg">
      <h3 className="text-2xl font-semibold leading-snug text-zinc-50 sm:text-3xl">
        {title}
      </h3>
      <div className="space-y-3 text-lg leading-relaxed text-zinc-300">
        {body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </Card>
  );
}

export default function Why() {
  return (
    <Section id="why" size="wide">
      <div className="grid gap-8 sm:grid-cols-2">
        {whyCopy.cards.map((card) => (
          <WhyCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </Section>
  );
}
