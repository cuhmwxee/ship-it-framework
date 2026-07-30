import Card from "@/components/ui/Card";
import InlineLink from "@/components/ui/InlineLink";
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
      title: "Why it helps",
      body: [
        "Small changes often move through processes designed for larger, riskier work.",
        "Teams can interpret the same change differently, especially around what is ready to ship.",
        "Ship It! gives teams a shared language for deciding what each change actually needs before it ships.",
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
      <p className="mt-8 text-lg leading-relaxed text-zinc-300 sm:text-xl">
        The <InlineLink href="/framework">Framework</InlineLink> defines that language, and{" "}
        <InlineLink href="/examples">Examples</InlineLink> shows how it adapts to different
        kinds of changes.
      </p>
    </Section>
  );
}
