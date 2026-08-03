/**
 * Shared "section name" label — Selected Works, Coming Soon, etc.
 * One component so these can't independently drift in color, size or
 * alignment the way they did when each section hand-rolled its own.
 */
export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <h2 className="font-main text-2xl font-semibold text-[color:var(--color-orange-text)]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-main text-sm text-[#4a5463]">{subtitle}</p>
      )}
    </div>
  );
}
