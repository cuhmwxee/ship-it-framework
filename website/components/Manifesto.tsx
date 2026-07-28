import Section from "@/components/ui/Section";

const manifestoCopy = {
  title: "Manifesto",
  statements: [
    "Software delivery has changed.",
    "Software changes are becoming smaller, more frequent and increasingly AI-assisted.",
    "AI accelerates change. Ship It! brings proportion to delivery.",
    "Not every software change needs the same delivery process.",
    "Ship It! works with your existing way of working.",
    "It provides a common language for delivery decisions.",
  ],
} as const;

export default function Manifesto() {
  return (
    <Section id="manifesto" labelledBy="manifesto-title" spacing="compact" className="pt-10 sm:pt-12 pb-8 sm:pb-10">
      <div className="ds-content border-t border-zinc-800/80 pt-8 sm:pt-10">
        <h2
          id="manifesto-title"
          className="text-2xl font-medium leading-snug text-zinc-100 sm:text-3xl"
        >
          {manifestoCopy.title}
        </h2>
        <ul className="mt-6 space-y-3 text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {manifestoCopy.statements.map((statement) => (
            <li key={statement}>{statement}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
