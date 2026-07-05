const simplifiesCopy = {
  title: "What gets simpler",
  intro:
    "Ship It! leaves room for the way your team already works. It only removes the parts that do not help a change reach production with confidence.",
  groups: [
    {
      label: "Less to carry",
      items: [
        "Debate about which process should own the work.",
        "Ceremony around decisions the team has already made.",
        "Rules that add weight without making delivery safer.",
      ],
    },
    {
      label: "More to trust",
      items: [
        "Changes that have been checked before they ship.",
        "A clear path from input to production.",
        "Software that reaches users instead of waiting for permission.",
      ],
    },
  ],
};

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      aria-labelledby="simplifies-title"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
      {children}
    </section>
  );
}

function Group({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="border-t border-zinc-800 pt-6">
      <h3 className="font-mono text-xs uppercase tracking-[0.35em] text-blue-400">
        {label}
      </h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <p key={item} className="text-lg leading-relaxed text-zinc-200">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Simplifies() {
  return (
    <SectionContainer>
      <div className="max-w-3xl space-y-5">
        <h2
          id="simplifies-title"
          className="text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl"
        >
          {simplifiesCopy.title}
        </h2>
        <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {simplifiesCopy.intro}
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {simplifiesCopy.groups.map((group) => (
          <Group key={group.label} label={group.label} items={group.items} />
        ))}
      </div>
    </SectionContainer>
  );
}
