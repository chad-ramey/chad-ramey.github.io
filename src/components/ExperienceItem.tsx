interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description?: string;
}

const ExperienceItem = ({ role, company, period, description }: ExperienceItemProps) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-base font-medium text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
          {role}
        </h3>
        <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
      </div>
      <p className="text-sm text-muted-foreground mt-0.5">{company}</p>
      {description && (
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default ExperienceItem;
