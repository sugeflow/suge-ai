type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-[var(--color-muted)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
