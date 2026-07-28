type FrameworkDiagramProps = {
  variant: "overview" | "process";
};

const concepts = [
  { label: "Input", href: "/framework#input", x: 24 },
  { label: "Development", href: "/framework#development", x: 276 },
  { label: "Validation", href: "/framework#validation", x: 528 },
  { label: "Ship", href: "/framework#ship", x: 780 },
] as const;

const diagramCopy = {
  overview:
    "Input, Development, Validation and Ship are four equally important Ship It! concepts.",
  process:
    "Input flows to Development, then Validation, then Ship. Validation can also return work to Development.",
} as const;

export default function FrameworkDiagram({ variant }: FrameworkDiagramProps) {
  const isProcess = variant === "process";

  return (
    <figure aria-labelledby={`framework-diagram-caption-${variant}`} className="framework-diagram">
      <div className="framework-diagram-scroll">
        <svg
          aria-label={diagramCopy[variant]}
          viewBox="0 0 980 250"
          className="framework-diagram-svg"
          fill="none"
          role="img"
        >
          <defs>
            <marker
              id={`framework-arrow-${variant}`}
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path className="framework-diagram-arrowhead" d="M1 1L6 4L1 7" />
            </marker>
          </defs>

          {isProcess && (
            <>
              <path
                className="framework-diagram-connection"
                d="M204 86H276"
                markerEnd={`url(#framework-arrow-${variant})`}
              />
              <path
                className="framework-diagram-connection"
                d="M456 86H528"
                markerEnd={`url(#framework-arrow-${variant})`}
              />
              <path
                className="framework-diagram-connection"
                d="M708 86H780"
                markerEnd={`url(#framework-arrow-${variant})`}
              />
            </>
          )}
          {isProcess && (
            <path
              className="framework-diagram-connection"
              d="M618 132V202C618 211 611 218 602 218H374C365 218 358 211 358 202V132"
              markerEnd={`url(#framework-arrow-${variant})`}
            />
          )}

          {concepts.map((concept) => (
            <a
              key={concept.label}
              href={concept.href}
              aria-label={`Read about ${concept.label}`}
              className="framework-diagram-concept"
            >
              <g transform={`translate(${concept.x} 40)`}>
                <rect className="framework-diagram-box" width="180" height="92" />
                <text className="framework-diagram-label" x="90" y="56" textAnchor="middle">
                  {concept.label}
                </text>
              </g>
            </a>
          ))}
        </svg>
      </div>
      <figcaption id={`framework-diagram-caption-${variant}`} className="sr-only">
        {diagramCopy[variant]}
      </figcaption>
    </figure>
  );
}
