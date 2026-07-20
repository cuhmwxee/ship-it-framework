import Link from "next/link";

const frameworkPreviewCopy = {
  lead: "Ship It! defines four concepts for describing software delivery.",
  flow: ["Input", "Development", "Validation", "Ship"],
  description:
    "A framework for understanding what was actually needed before software shipped.",
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {frameworkPreviewCopy.flow.map((step) => (
            <span
              key={step}
              className="rounded-full border border-zinc-800 px-4 py-2 font-mono text-sm text-zinc-100"
            >
              {step}
            </span>
          ))}
        </div>

        <p className="mt-8 text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {frameworkPreviewCopy.description}
        </p>
      </div>
    </section>
  );
}