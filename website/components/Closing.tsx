import Section from "@/components/ui/Section";

const closingCopy = {
  title: "Works with your existing way of working.",
  body: "Ship It! complements Scrum, Kanban and other existing ways of working. It helps teams make proportional delivery decisions without replacing your current process.",
};

export default function Closing() {
  return (
    <Section labelledBy="closing-title" className="pb-10 sm:pb-12">
      <div className="ds-content border-t border-zinc-800/80 pt-10 sm:pt-12">
        <h2
          id="closing-title"
          className="text-2xl font-semibold leading-snug text-blue-400 sm:text-3xl"
        >
          {closingCopy.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {closingCopy.body}
        </p>
      </div>
    </Section>
  );
}
