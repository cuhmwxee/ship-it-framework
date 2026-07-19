type SupportingStatementProps = {
  lines: string[];
  className?: string;
};

export default function SupportingStatement({
  lines,
  className = "",
}: SupportingStatementProps) {
  return (
    <div
      className={`space-y-3 text-xl leading-relaxed text-zinc-400 sm:text-2xl ${className}`}
    >
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}
