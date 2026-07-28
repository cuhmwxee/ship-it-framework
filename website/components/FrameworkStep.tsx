type FrameworkStepProps = {
  title: string;
  body: readonly string[];
};

export default function FrameworkStep({ title, body }: FrameworkStepProps) {
  return (
    <article id={title.toLowerCase()} className="ds-framework-step">
      <h3 className="ds-framework-step__title">{title}</h3>
      <div className="ds-framework-step__body">
        {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </article>
  );
}
