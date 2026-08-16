type Step = {
  title: string;
  description: string;
  task?: string;
};

export function StepTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-4">
      {steps.map((step, index) => (
        <li key={step.title} className="grid gap-4 border-l border-sage pl-5">
          <div className="-ml-[35px] flex h-9 w-9 items-center justify-center rounded-full border border-sage bg-forest text-sm font-semibold text-cream">
            {index + 1}
          </div>
          <div className="-mt-12 ml-8 pb-6">
            <h3 className="text-lg font-semibold text-forest-deep">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
            {step.task ? (
              <p className="mt-3 border-l-2 border-terracotta pl-3 text-sm font-medium text-ink">
                Úkol: {step.task}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
