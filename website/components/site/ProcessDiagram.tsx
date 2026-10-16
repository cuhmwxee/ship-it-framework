import { useId } from "react";
import { siteBase, type SiteLocation } from "./config";
import styles from "@/app/v2/_site/site.module.css";

const concepts = ["Input", "Development", "Validation", "Ship"];
const description = "Input flows to Development, then Validation, then Ship. Failed Validation creates new Input and returns work for further Development.";

export default function ProcessDiagram({ direction, basePath }: SiteLocation) {
  const id = useId();
  const base = siteBase(direction, basePath);
  return <figure className={styles.graph} aria-label={description}>
    {([false, true] as const).map((vertical) => {
      const marker = `${id}-${vertical ? "vertical" : "horizontal"}`;
      return <svg key={marker} className={vertical ? styles.verticalGraph : styles.horizontalGraph} viewBox={vertical ? "0 0 340 480" : "0 0 1080 230"} fill="none" role="group" aria-label={description}>
        <defs><marker id={marker} markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M1 1L7 5L1 9" className={styles.arrowhead} /></marker></defs>
        <g className={styles.relationships} markerEnd={`url(#${marker})`}>
          {[0, 1, 2].map((index) => <path key={index} data-relationship={`${concepts[index]}-${concepts[index + 1]}`} d={vertical ? `M190 ${94 + index * 120}V${138 + index * 120}` : `M${222 + index * 280} 70H${298 + index * 280}`} />)}
          <path data-relationship="Validation-Development" d={vertical ? "M78 296H32V176H78" : "M680 112V190H400V112"} />
        </g>
        <text className={styles.graphAnnotation} x={vertical ? 18 : 540} y={vertical ? 236 : 178} textAnchor="middle" transform={vertical ? "rotate(-90 18 236)" : undefined}>New Input</text>
        {concepts.map((concept, index) => {
          const x = vertical ? 80 : 20 + index * 280;
          const y = vertical ? 20 + index * 120 : 30;
          const width = vertical ? 220 : 200;
          const height = vertical ? 72 : 80;
          return <a key={concept} className={styles.graphNode} href={`${base}/framework#${concept.toLowerCase()}`} aria-label={`Read about ${concept}`}>
            <rect x={x} y={y} width={width} height={height} className={styles.nodeShape} />
            <path d={`M${x} ${y + height}H${x + width}`} className={styles.nodeUnderline} />
            <text x={x + width / 2} y={y + height / 2} dominantBaseline="middle" textAnchor="middle" className={styles.nodeLabel}>{concept}</text>
          </a>;
        })}
      </svg>;
    })}
  </figure>;
}
