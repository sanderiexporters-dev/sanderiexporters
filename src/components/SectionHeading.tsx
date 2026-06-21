interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  eyebrow?: string;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false, eyebrow }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`label-eyebrow mb-4 inline-flex items-center ${centered ? "justify-center" : ""} ${
            light ? "text-primary-foreground/70" : ""
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl font-semibold mb-4 ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-8 ${centered ? "mx-auto" : ""} ${
            light ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <span className={`h-px w-16 ${light ? "bg-primary-foreground/20" : "bg-border"}`} />
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className={`h-px w-16 ${light ? "bg-primary-foreground/20" : "bg-border"}`} />
      </div>
    </div>
  );
};

export default SectionHeading;
