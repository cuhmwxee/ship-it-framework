import Image from "next/image";
import Link from "next/link";
import { reflections } from "@/content/reflections";
import { destinations, homepage as copy, story } from "./content";
import { directions, type Direction } from "./directions";
import styles from "./prototype.module.css";

function ReviewBar({ direction }: { direction: Direction }) {
  const index = directions.findIndex((item) => item.id === direction);
  return (
    <div className={styles.review}>
      <Link href="/v2">← All directions</Link>
      <span>{direction} / {directions[index].name}</span>
      <nav aria-label="Visual prototypes">
        {directions.map((item) => <Link href={`/v2/${item.id}`} key={item.id} aria-label={item.name} aria-current={item.id === direction ? "page" : undefined}>{item.id}</Link>)}
      </nav>
    </div>
  );
}

function Navigation({ sidebar = false }: { sidebar?: boolean }) {
  const links = <><Link href="/" aria-current="page">Home</Link>{destinations.map((item) => <Link key={item.href} href={item.href}>{item.title}</Link>)}</>;
  return (
    <header className={`${styles.navigation} ${sidebar ? styles.sidebar : ""}`}>
      <Link href="/" className={styles.brand} aria-label="Ship It! — Home">
        <Image src="/brand/shipit-icon.png" alt="" width={28} height={28} loading="eager" />
        <span>Ship It!</span>
      </Link>
      <nav className={styles.desktopNav} aria-label="Primary navigation">{links}</nav>
      <details className={styles.mobileMenu}>
        <summary>Menu <span aria-hidden="true">+</span></summary>
        <nav aria-label="Mobile primary navigation">{links}</nav>
      </details>
    </header>
  );
}

function Contents() {
  return <nav className={styles.contents} aria-label="On this page">
    <span>On this page</span>
    <a href="#framework">Framework</a>
    <a href="#delivery-story">A familiar delivery story</a>
    <a href="#in-practice">What changes in practice?</a>
    <a href="#existing-process">Does this replace our process?</a>
    <a href="#continue-reading">Continue reading</a>
  </nav>;
}

function Intro() {
  return <section className={styles.intro} aria-labelledby="intro-title">
    <h1 id="intro-title">{copy.title}</h1>
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
function Diagram() {
  return <ol className={styles.diagram} aria-label="Input, Development, Validation and Ship are four equally important Ship It! concepts.">
    {["Input", "Development", "Validation", "Ship"].map((concept, index) => <li key={concept}>
      <a href={`/framework#${concept.toLowerCase()}`}>{concept}</a>
      {index < 3 && <span className={styles.connector} aria-hidden="true" />}
    </li>)}
  </ol>;
}

function Model() {
  return <section id="framework" className={styles.model} aria-label="The four concepts">
    <p>{copy.model}</p><Diagram />
  </section>;
}

function Question() {
  return <p className={styles.question}>{copy.question}</p>;
}

function Story() {
  return <article id="delivery-story" className={styles.story} aria-labelledby="story-title">
    <header><h2 id="story-title">{story.title}</h2><span className={styles.caption}>{story.label}</span></header>
    <blockquote>{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</blockquote>
    <Link href="/examples#dependency-update" className={styles.storyLink}>Read the full dependency update example →</Link>
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

function Reading() {
  return <section id="continue-reading" className={styles.reading} aria-labelledby="reading-title">
    <h2 id="reading-title">Continue reading</h2>
    <ul>{destinations.map((item) => <li key={item.href}><Link href={item.href}><span>{item.title}<span aria-hidden="true"> ↗</span></span><p>{item.description}</p></Link></li>)}</ul>
  </section>;
}

function Footer() {
  return <footer className={styles.footer}><Link href="/">Ship It!</Link><p>{copy.footer}</p></footer>;
}

// Each composition responds to the direction's reading and navigation model.
// Content units are shared solely to keep the five explorations copy-identical.
export default function Prototype({ direction, fonts }: { direction: Direction; fonts: string }) {
  let content;
  if (direction === "01") {
    content = <><Navigation /><div className={styles.manualGrid}><Contents /><main id="main-content"><Intro /><Model /><Context /><Question /><Story /><Practice /><Process /><Closing /><Reading /></main></div><Footer /></>;
  } else if (direction === "02") {
    content = <><Navigation /><main id="main-content" className={styles.drawingGrid}><div className={styles.drawingOpening}><Intro /><Question /></div><Model /><Context /><Story /><div className={styles.drawingDetails}><Practice /><Process /></div><Closing /><Reading /></main><Footer /></>;
  } else if (direction === "03") {
    content = <><div className={styles.instrumentGrid}><Navigation sidebar /><main id="main-content"><div className={styles.instrumentOpening}><Intro /><Model /></div><Contents /><Context /><Question /><Story /><Practice /><Process /><Closing /><Reading /><Footer /></main></div></>;
  } else if (direction === "04") {
    content = <><Navigation /><main id="main-content"><div className={styles.statementOpening}><Intro /><Question /></div><Model /><div className={styles.statementBody}><Context /><Story /><Practice /><Process /><Closing /><Reading /></div></main><Footer /></>;
  } else {
    content = <><Navigation /><div className={styles.notebookGrid}><Contents /><main id="main-content"><Intro /><Context /><Question /><Model /><Story /><div className={styles.notebookDetails}><Practice /><Process /></div><Closing /><Reading /></main></div><Footer /></>;
  }
  return <div className={`${styles.prototype} ${fonts}`} data-direction={direction}>
    <a href="#main-content" className={styles.skip}>Skip to content</a>
    <ReviewBar direction={direction} />
    <div className={styles.site}>{content}</div>
  </div>;
}
