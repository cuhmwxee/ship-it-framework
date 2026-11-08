import Section from "@/components/ui/Section";
import PageHero from "@/components/PageHero";

import { example as exampleData } from "@/components/site/content";

export default function Examples() {
  return (
    <Section id="examples" labelledBy="examples-title">
      <div className="ds-content">
        <PageHero title="Examples" titleId="examples-title" className="mb-12">
          <p className="ds-type-body">
            A concrete worked example showing how Ship It! is applied to a software change.
          </p>
        </PageHero>

        <article
          id="configuration-message"
          className="scroll-mt-24 border-t border-zinc-800/80 pt-10 sm:pt-12"
        >
          <h2 className="text-2xl font-semibold leading-tight text-zinc-50 sm:text-3xl">
            {exampleData.title}
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
            <p>{exampleData.body[0]}</p>
            <p>{exampleData.body[1]}</p>
            <p>{exampleData.body[2]}</p>

            <blockquote className="border-l border-zinc-700 pl-6 text-xl font-medium text-[var(--color-interactive-hover)] sm:pl-8 sm:text-2xl">
              <p>{exampleData.body[3]}</p>
            </blockquote>

            <p>{exampleData.body[4]}</p>
            <ul className="list-disc space-y-3 pl-6">
              {exampleData.practices.map((practice) => (
                <li key={practice.title}><strong>{practice.title}:</strong> {practice.contribution}</li>
              ))}
            </ul>
            <p>{exampleData.body[5]}</p>
            <p>{exampleData.body[6]}</p>
            <p>{exampleData.body[7]}</p>
            <p>{exampleData.body[8]}</p>
          </div>

          <footer className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 sm:text-sm">
            {exampleData.label}
          </footer>

          <div className="mt-12 border-t border-zinc-800/80 pt-8">
            <h3 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
              Takeaway
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {exampleData.takeaway}
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
