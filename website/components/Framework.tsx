import Link from "next/link";

const frameworkPreviewCopy = {
  description: "Ship It! provides a simple way to describe software delivery.",
  flow: "Input → Development → Validation → Ship",
  link: "Explore the framework →",
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
          {frameworkPreviewCopy.description}
        </p>
        <p className="mt-8 font-mono text-xl leading-relaxed text-zinc-50 sm:text-2xl">
          {frameworkPreviewCopy.flow}
        </p>
        <Link
          href="/framework"
          className="mt-10 inline-flex text-lg font-medium text-zinc-400 transition-colors hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:text-xl"
        >
          {frameworkPreviewCopy.link}
        </Link>
      </div>
    </section>
  );
}
