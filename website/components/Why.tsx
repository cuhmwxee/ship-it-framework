import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const whyCopy = {
  cards: [
    {
      title: "Why now?",
      body: [
        "Software changes are becoming smaller, more frequent and increasingly AI-assisted. Teams can produce changes faster than many delivery processes were designed to handle.",
      ],
    },
    {
      title: "The problem",
      body: [
        "Small changes often travel through processes designed for larger, riskier work.",
        "When every change follows the same path, delivery effort can become disproportionate.",
      ],
    },
    {
      title: "What Ship It! does",
      body: [
        "Ship It! reveals the workflow teams already follow.",
        "It helps teams make proportional delivery decisions for each change.",
      ],
    },
    {
      title: "Philosophy",
      body: [
        "Ship It! does not remove process. It keeps process proportional so the workflow matches the change.",
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
