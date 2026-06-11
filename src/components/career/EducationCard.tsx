type EducationCardProps = {
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
};

export default function EducationCard({
  degree,
  school,
  location,
  period,
  description,
}: EducationCardProps) {
  return (
    <div className="education-card about-block">
      <div className="education-card__header">
        <div>
          <h3 className="education-card__title">{degree}</h3>
          <div className="education-card__school">
            {school} · {location}
          </div>
        </div>
        <div className="education-card__period">{period}</div>
      </div>
      {description && <p className="education-card__desc">{description}</p>}
    </div>
  );
}
