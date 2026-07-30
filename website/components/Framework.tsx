import FrameworkGraph from "@/components/FrameworkGraph";

const frameworkPreviewCopy = {
  lead: "Ship It! describes the minimum workflow required to move a software change from Input to Ship, using four concepts: Input, Development, Validation, and Ship.",
};

export default function Framework() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        id="framework-title"
        className="text-2xl leading-snug text-zinc-200 sm:text-3xl"
      >
        {frameworkPreviewCopy.lead}
      </p>
      <div className="mt-10">
        <FrameworkGraph variant="overview" />
      </div>
    </div>
  );
}
