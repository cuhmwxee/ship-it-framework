import FrameworkGraph from "@/components/FrameworkGraph";

const frameworkPreviewCopy = {
  lead: "Ship It! describes the minimum workflow required to move a software change from Input to Ship, using four concepts: Input, Development, Validation, and Ship.",
};

export default function Framework() {
  return (
    <div className="mx-auto max-w-4xl">
      <p
        id="framework-title"
        className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-200 sm:text-2xl"
      >
        {frameworkPreviewCopy.lead}
      </p>
      <div className="mt-12 sm:mt-14">
        <FrameworkGraph variant="overview" />
      </div>
    </div>
  );
}
