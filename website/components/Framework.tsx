import FrameworkGraph from "@/components/FrameworkGraph";

const frameworkPreviewCopy = {
  lead: "Ship It! describes the minimum workflow required to move a software change from Input to Ship, using four concepts: Input, Development, Validation, and Ship.",
};

export default function Framework() {
  return (
    <section
      id="framework"
      aria-labelledby="framework-title"
      className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-10 lg:px-12"
    >
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
    </section>
  );
}
