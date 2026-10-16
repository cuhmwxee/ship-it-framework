import Link from "next/link";
import { directions } from "./_components/directions";
import styles from "./_components/index.module.css";

export default function PrototypeIndex() {
  return <main className={styles.index}>
    <div className={styles.inner}>
      <header><p>Ship It! / Phase 2</p><h1>Five visual directions</h1><p>The same homepage content, explored through five different visual identities. These are responsive prototypes for review; the production website is unchanged.</p></header>
      <ol>{directions.map((direction) => <li key={direction.id}><Link href={`/v2/${direction.id}`}><span className={styles.number}>{direction.id}</span><div><h2>{direction.name}</h2><p>{direction.description}</p></div><span aria-hidden="true">→</span></Link></li>)}</ol>
      <footer><Link href="/">Return to the current website →</Link><p>Prototype navigation leads to the existing production pages. Only the homepages are redesigned.</p></footer>
    </div>
  </main>;
}
