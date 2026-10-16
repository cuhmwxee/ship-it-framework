import Link from "next/link";
import { reflections } from "@/content/reflections";
import { destinations, homepage as copy, story } from "@/app/v2/_components/content";
import styles from "@/app/v2/_components/prototype.module.css";
import { siteBase, type SiteLocation } from "./config";

function Intro({ production }: { production: boolean }) {
  const titleId = production ? "hero-title" : "intro-title";
  return <section id={production ? "hero" : undefined} className={styles.intro} aria-labelledby={titleId}>
    <h1 id={titleId}>{copy.title}</h1>
    <p className={styles.answer}>{copy.answer}</p>
    <div className={styles.hook}><p>{copy.hook}</p><p>{copy.detail}</p></div>
  </section>;
}

function Context() {
  return <div className={styles.context}>
    <p>{copy.context}</p>
    {reflections.seen.slice(0, 2).map((line) => <p key={line}>{line}</p>)}
    <p>{copy.changing} <strong>{copy.ai}</strong></p>
  </div>;
}

// The homepage presents the four-concept overview, not an expanded process model.
// All four labels retain equal visual weight and link to existing definitions.
function Diagram({ base }: { base: string }) {
  return <ol className={styles.diagram} aria-label="Input, Development, Validation and Ship are four equally important Ship It! concepts.">
    {["Input", "Development", "Validation", "Ship"].map((concept, index) => <li key={concept}>
      <a href={`${base}/framework#${concept.toLowerCase()}`}>{concept}</a>
      {index < 3 && <span className={styles.connector} aria-hidden="true" />}
    </li>)}
  </ol>;
}

function Model({ base }: { base: string }) {
  return <section id="framework" className={styles.model} aria-label="The four concepts">
    <p id={base === "" ? "framework-title" : undefined}>{copy.model}</p><Diagram base={base} />
  </section>;
}

function Question() {
  return <p className={styles.question}>{copy.question}</p>;
}

function Story({ base }: { base: string }) {
  return <article id="delivery-story" className={styles.story} aria-labelledby="story-title">
    <header><h2 id="story-title">{story.title}</h2><span className={styles.caption}>{story.label}</span></header>
    <blockquote>{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</blockquote>
    <Link href={`${base}/examples#dependency-update`} className={styles.storyLink}>Read the full dependency update example →</Link>
    <p className={styles.contribution}>{copy.contribution}</p>
  </article>;
}

function Practice() {
  return <section id="in-practice" className={styles.practice} aria-labelledby="practice-title">
    <h2 id="practice-title">{copy.changesTitle}</h2>
    <div>{copy.changes.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    <p className={styles.obligations}>{copy.obligations}</p>
  </section>;
}

function Process() {
  return <section id="existing-process" className={styles.process} aria-labelledby="process-title">
    <h2 id="process-title">{copy.processTitle}</h2>
    <div>{copy.process.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
  </section>;
}

function Closing() {
  return <div className={styles.closing}><p>{copy.closing}</p><p>{copy.closingDetail}</p></div>;
}

function Reading({ base }: { base: string }) {
  return <section id="continue-reading" className={styles.reading} aria-labelledby="reading-title">
    <h2 id="reading-title">Continue reading</h2>
    <ul>{destinations.map((item) => <li key={item.href}><Link href={`${base}${item.href}`}><span>{item.title}<span aria-hidden="true"> ↗</span></span><p>{item.description}</p></Link></li>)}</ul>
  </section>;
}


export default function Home({ direction, basePath }: SiteLocation) {
  const base = siteBase(direction, basePath);
  if (direction === "02") return <div className={styles.drawingGrid}><div className={styles.drawingOpening}><Intro production={base === ""} /><Question /></div><Model base={base} /><Context /><Story base={base} /><div className={styles.drawingDetails}><Practice /><Process /></div><Closing /><Reading base={base} /></div>;
  return <><div className={styles.statementOpening}><Intro production={base === ""} /><Question /></div><Model base={base} /><div className={styles.statementBody}><Context /><Story base={base} /><Practice /><Process /><Closing /><Reading base={base} /></div></>;
}
