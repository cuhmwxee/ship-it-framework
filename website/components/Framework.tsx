import FrameworkGraph from "@/components/FrameworkGraph";
import Section from "@/components/ui/Section";

const frameworkPreviewCopy = {
  lead: "Ship It! describes the minimum workflow required to move a software change from Input to Ship, using four concepts: Input, Development, Validation, and Ship.",
};

export default function Framework() {
  return (
    <Section size="wide" spacing="compact">
      <div className="mx-auto max-w-4xl">
        <p
          id="framework-title"
          className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl"
        >
          {frameworkPreviewCopy.lead}
        </p>
        <div className="mt-12 sm:mt-14">
          <FrameworkGraph variant="overview" />
        </div>
      </div>
    </Section>
  );
}
