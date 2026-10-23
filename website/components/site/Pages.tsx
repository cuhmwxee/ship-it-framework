import Link from "next/link";
import type { ReactNode } from "react";
import { framework, manifesto, example, practice, faq, about } from "./content";
import { siteBase, type PageSlug, type SiteLocation } from "./config";
import ProcessDiagram from "./ProcessDiagram";
import styles from "@/app/v2/_site/site.module.css";

type DirectionProps = SiteLocation;
function Paragraphs({ items }: { items: readonly string[] }) { return <>{items.map((text) => <p key={text}>{text}</p>)}</>; }
function Title({ title, children, aside, production }: { title: string; children?: ReactNode; aside?: ReactNode; production?: boolean }) {
  return <>
    <header className={styles.pageTitle}><h1 id={production ? `${title.toLowerCase().replaceAll(" ", "-")}-title` : undefined}>{title}</h1></header>
    {aside ? <div className={styles.introRow}>{aside}<div className={styles.pageIntro}>{children}</div></div> : children && <div className={styles.pageIntro}>{children}</div>}
  </>;
}
function Contents({ items }: { items: readonly { id: string; title: string }[] }) {
  return <nav className={styles.contents} aria-label="On this page"><span>On this page</span>{items.map((item) => <a key={item.id} href={`#${item.id}`}>{item.title}</a>)}</nav>;
}
function Related({ direction, basePath, pages, intro }: DirectionProps & { pages: readonly { href: string; label: string; description: string }[]; intro?: string }) {
  return <nav className={styles.related} aria-labelledby="related-pages-title"><h2 id="related-pages-title">Related pages</h2>{intro && <p>{intro}</p>}<ul>{pages.map((page) => <li key={page.href}><Link href={`${siteBase(direction, basePath)}${page.href}`}>{page.label}</Link>{" "}<span>{page.description}</span></li>)}</ul></nav>;
}
function Framework({ direction, basePath }: DirectionProps) {
  return <div className={`${styles.page} ${styles.framework}`}>
    <Title title="Framework" aside={<Contents items={framework.concepts.map((concept) => ({ id: concept.title.toLowerCase(), title: concept.title }))} />} production={basePath === ""}><Paragraphs items={framework.introduction} /></Title>
    <div className={styles.frameworkTop}>
      <section className={styles.assumptions} aria-labelledby="assumptions-title"><h2 id="assumptions-title">Ship It! assumes</h2><ul>{framework.assumptions.map((text) => <li key={text}>{text}</li>)}</ul>
        <p>These assumptions are the conceptual foundation of the framework. For the rationale behind them, see the <Link href={`${siteBase(direction, basePath)}/manifesto`}>Manifesto</Link>.</p>
        <p>Read the graph from left to right: Input flows through Development and Validation to Ship. If Validation fails, it creates new Input and work returns for further Development.</p>
      </section>
    </div>
    <ProcessDiagram direction={direction} basePath={basePath} />
    <section className={styles.concepts} aria-labelledby="concepts-title"><h2 id="concepts-title">The four concepts</h2><div>{framework.concepts.map((concept) => <article key={concept.title} id={concept.title.toLowerCase()} className={styles.concept}><h3>{concept.title}</h3><div><Paragraphs items={concept.body} /></div></article>)}</div></section>
    <Related direction={direction} basePath={basePath} pages={framework.relatedPages} intro="Explore how these concepts apply in practice." />
  </div>;
}
function Manifesto({ direction, basePath }: DirectionProps) {
  const production = basePath === "";

  return <div id="manifesto" className={`${styles.page} ${styles.manifesto}`}>
    <Title
      title={manifesto.title}
      production={production}
      aside={production ? <h2 className={styles.manifestoStatement}>{manifesto.intro[0]}</h2> : undefined}
    >
      <Paragraphs items={production ? manifesto.intro.slice(1) : manifesto.intro} />
    </Title>
    <div>
      <ol className={styles.principles}>{manifesto.principles.map((text, index) => <li key={text}><span>{String(index + 1).padStart(2, "0")}</span><p>{text}</p></li>)}</ol>
    </div>
    <p className={styles.manifestoLink}>The Manifesto explains why. The <Link href={`${siteBase(direction, basePath)}/framework`}>Framework</Link> defines the model.</p>
  </div>;
}
function Examples({ basePath }: DirectionProps) {
  const production = basePath === "";
  return <div id="examples" className={`${styles.page} ${styles.examples}`}>
    <Title title="Examples" production={production} aside={production ? <h2 className={styles.manifestoStatement}>{example.title}</h2> : undefined}><p>A concrete worked example showing how Ship It! is applied to a software change.</p></Title>
    <article id="dependency-update" className={styles.caseStudy}>
      {!production && <header><h2>{example.title}</h2></header>}
      <div className={styles.caseBody}>{example.body.map((text, index) => index === 3 ? <blockquote key={text}><p>{text}</p></blockquote> : <p key={text}>{text}</p>)}<p className={styles.caption}>{example.label}</p></div>
    </article>
  </div>;
}
function InPractice({ direction, basePath }: DirectionProps) {
  return <div className={`${styles.page} ${styles.inPractice}`}>
    <Title title="In practice" aside={<Contents items={practice.map((section) => ({ id: section.id, title: section.title.replace("How does Ship It! fit with ", "").replace(/\?$/, "") }))} />} production={basePath === ""}><p>Ship It! does not require a particular process, tool, or way of writing software. It provides a shared way to reason about a change through Input, Development, Validation, and Ship. These examples show how it fits with practices teams may already use.</p></Title>
    <div className={styles.practiceLayout}><div className={styles.practiceArticles}>{practice.map((section) => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}><h2 id={`${section.id}-title`}>{section.title}</h2><p className={styles.sectionLead}>{section.lead}</p><div><Paragraphs items={section.paragraphs} /></div></section>)}</div></div>
    <Related direction={direction} basePath={basePath} pages={[{ href: "/framework", label: "Framework", description: "defines the four concepts." }, { href: "/examples", label: "Examples", description: "examines the delivery decisions for a dependency update." }]} />
  </div>;
}
function FAQ({ direction, basePath }: DirectionProps) {
  return <div id="faq" className={`${styles.page} ${styles.faq}`}>
    <Title title={faq.title} production={basePath === ""} />
    {basePath === "" && <h2 className={`${styles.manifestoStatement} ${styles.faqStatement}`}>A few questions. Just as many answers.</h2>}
    <div className={styles.questions}>{faq.items.map((item, index) => <details key={item.question} id={`question-${index + 1}`}><summary><h2>{item.question}</h2><span aria-hidden="true">+</span></summary><div className={styles.answer}><Paragraphs items={item.answer} /></div></details>)}</div>
    <p className={styles.faqClosing}>If your question is about applying these ideas in real delivery situations, continue in <Link href={`${siteBase(direction, basePath)}/examples`}>Examples</Link>.</p>
  </div>;
}
function About({ basePath }: DirectionProps) {
  return <div id="about" className={`${styles.page} ${styles.about}`}>
    <Title title={about.title} production={basePath === ""} />
    {basePath === "" && <h2 className={styles.manifestoStatement}>A simple observation about software delivery.</h2>}
    <div className={styles.aboutBody}><Paragraphs items={about.paragraphs} /><p className={styles.support}><Link href="https://buymeacoffee.com/hmaattaf">Support the project.</Link></p></div>
  </div>;
}
export default function SitePage({ page, direction, basePath }: { page: PageSlug } & DirectionProps) {
  switch (page) {
    case "framework": return <Framework direction={direction} basePath={basePath} />;
    case "manifesto": return <Manifesto direction={direction} basePath={basePath} />;
    case "examples": return <Examples direction={direction} basePath={basePath} />;
    case "in-practice": return <InPractice direction={direction} basePath={basePath} />;
    case "faq": return <FAQ direction={direction} basePath={basePath} />;
    case "about": return <About direction={direction} basePath={basePath} />;
  }
}
