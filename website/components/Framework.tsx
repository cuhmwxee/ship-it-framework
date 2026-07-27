import Link from "next/link";
import FrameworkDiagram from "@/components/FrameworkDiagram";

const frameworkPreviewCopy = {
  lead: "Ship It! defines four concepts for describing software delivery.",
  flow: ["Input", "Development", "Validation", "Ship"],
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

        <div className="mt-12">
          <FrameworkDiagram />
        </div>

        <nav aria-label="Framework concepts" className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {frameworkPreviewCopy.flow.map((step) => (
            <Link
              key={step}
              href={`/framework#${step.toLowerCase()}`}
              className="group rounded-md border border-zinc-800 px-4 py-5 text-left font-mono text-base tracking-tight text-zinc-300 transition-[border-color,color] duration-200 hover:border-blue-400/70 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-5"
            >
              <span className="border-b border-transparent pb-1 transition-colors duration-200 group-hover:border-blue-400/70">
                {step}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
