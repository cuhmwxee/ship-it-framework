type FrameworkGraphProps = {
  variant: "overview" | "process";
};

export const frameworkGraphScale = {
  nodeWidth: 216,
  nodeHeight: 104,
  nodePaddingX: 32,
  nodePaddingY: 24,
  nodeBorderWidth: 2,
  nodeRadius: 10,
  nodeGap: 96,
  nodeFontSize: 18,
  nodeFontWeight: 500,
  arrowWidth: 2,
  arrowRadius: 14,
  arrowHeadSize: 10,
  graphMaxWidth: 1152,
} as const;

const graphOrigin = 24;
const graphTop = 50;
const graphCenterY = graphTop + frameworkGraphScale.nodeHeight / 2;
const concepts = ["Input", "Development", "Validation", "Ship"].map((label, index) => ({
  label,
  href: `/framework#${label.toLowerCase()}`,
  x: graphOrigin + index * (frameworkGraphScale.nodeWidth + frameworkGraphScale.nodeGap),
}));

const graphCopy = {
  overview:
    "Input, Development, Validation and Ship are four equally important Ship It! concepts.",
  process:
    "Input flows to Development, then Validation, then Ship. Validation can also return work to Development.",
} as const;

export default function FrameworkGraph({ variant }: FrameworkGraphProps) {
  const isProcess = variant === "process";
  const markerId = `framework-graph-arrow-${variant}`;
  const nodeRight = (index: number) => concepts[index].x + frameworkGraphScale.nodeWidth;
  const nodeMiddle = (index: number) => concepts[index].x + frameworkGraphScale.nodeWidth / 2;
  const nodeBottom = graphTop + frameworkGraphScale.nodeHeight;
  const returnY = 240;

  return (
    <figure
      aria-labelledby={`framework-graph-caption-${variant}`}
      className="framework-graph"
      style={{ maxWidth: frameworkGraphScale.graphMaxWidth }}
    >
      <div className="framework-graph-scroll">
        <svg
          aria-label={graphCopy[variant]}
          viewBox="0 0 1200 300"
          className="framework-graph-svg"
          fill="none"
          role="img"
        >
          <defs>
            <marker
              id={markerId}
              markerWidth={frameworkGraphScale.arrowHeadSize}
              markerHeight={frameworkGraphScale.arrowHeadSize}
              refX="7"
              refY="5"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path className="framework-graph-arrowhead" d="M1 1L7 5L1 9" strokeWidth={frameworkGraphScale.arrowWidth} />
            </marker>
          </defs>

          {isProcess && (
            <>
              <path className="framework-graph-relationship" d={`M${nodeRight(0)} ${graphCenterY}H${concepts[1].x}`} markerEnd={`url(#${markerId})`} />
              <path className="framework-graph-relationship" d={`M${nodeRight(1)} ${graphCenterY}H${concepts[2].x}`} markerEnd={`url(#${markerId})`} />
              <path className="framework-graph-relationship" d={`M${nodeRight(2)} ${graphCenterY}H${concepts[3].x}`} markerEnd={`url(#${markerId})`} />
              <path
                className="framework-graph-relationship"
                d={`M${nodeMiddle(2)} ${nodeBottom}V${returnY - frameworkGraphScale.arrowRadius}Q${nodeMiddle(2)} ${returnY} ${nodeMiddle(2) - frameworkGraphScale.arrowRadius} ${returnY}H${nodeMiddle(1) + frameworkGraphScale.arrowRadius}Q${nodeMiddle(1)} ${returnY} ${nodeMiddle(1)} ${returnY - frameworkGraphScale.arrowRadius}V${nodeBottom}`}
                markerEnd={`url(#${markerId})`}
              />
            </>
          )}

          {concepts.map((concept) => (
            <a
              key={concept.label}
              href={concept.href}
              aria-label={`Read about ${concept.label}`}
              className="framework-graph-node"
            >
              <g transform={`translate(${concept.x} ${graphTop})`}>
                <rect
                  className="framework-graph-node-shape"
                  width={frameworkGraphScale.nodeWidth}
                  height={frameworkGraphScale.nodeHeight}
                  rx={frameworkGraphScale.nodeRadius}
                  strokeWidth={frameworkGraphScale.nodeBorderWidth}
                />
                <text
                  className="framework-graph-node-label"
                  x={frameworkGraphScale.nodeWidth / 2}
                  y={graphCenterY - graphTop + frameworkGraphScale.nodeFontSize / 3}
                  fontSize={frameworkGraphScale.nodeFontSize}
                  fontWeight={frameworkGraphScale.nodeFontWeight}
                  textAnchor="middle"
                >
                  {concept.label}
                </text>
              </g>
            </a>
          ))}
        </svg>
      </div>
      <figcaption id={`framework-graph-caption-${variant}`} className="sr-only">
        {graphCopy[variant]}
      </figcaption>
    </figure>
  );
}
