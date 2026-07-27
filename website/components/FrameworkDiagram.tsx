const concepts = [
  { label: "Input", x: 24 },
  { label: "Development", x: 276 },
  { label: "Validation", x: 528 },
  { label: "Ship", x: 780 },
] as const;

export default function FrameworkDiagram({
  showReturnPath = false,
}: {
  showReturnPath?: boolean;
}) {
  return (
    <figure aria-labelledby="framework-diagram-caption" className="w-full">
      <div className="overflow-x-auto pb-2">
        <svg
          aria-hidden="true"
          viewBox="0 0 980 250"
          className="min-w-[620px] w-full"
          fill="none"
          role="img"
        >
          <defs>
            <marker
              id="framework-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M1 1L6 4L1 7" stroke="#60a5fa" strokeWidth="1.5" />
            </marker>
          </defs>

          <path d="M204 86H276M456 86H528M708 86H780" stroke="#52525b" strokeWidth="1.25" markerEnd="url(#framework-arrow)" />
          {showReturnPath && (
            <path
              d="M618 132V202C618 211 611 218 602 218H374C365 218 358 211 358 202V132"
              stroke="#52525b"
              strokeWidth="1.25"
              markerEnd="url(#framework-arrow)"
            />
          )}

          {concepts.map((concept) => (
            <g key={concept.label} transform={`translate(${concept.x} 40)`}>
              <rect width="180" height="92" rx="8" stroke="#3f3f46" strokeWidth="1.25" />
              <text
                x="90"
                y="56"
                fill="#f4f4f5"
                fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                fontSize="17"
                textAnchor="middle"
              >
                {concept.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption id="framework-diagram-caption" className="sr-only">
        {showReturnPath
          ? "Input, Development, Validation and Ship are equally important concepts. Validation can continue to Ship or return to Development."
          : "Input, Development, Validation and Ship are equally important concepts."}
      </figcaption>
    </figure>
  );
}
