interface SectionLabelProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionLabel({
  label,
  title,
  description,
}: SectionLabelProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-accent text-sm font-mono font-medium tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl">{description}</p>
      )}
    </div>
  );
}
