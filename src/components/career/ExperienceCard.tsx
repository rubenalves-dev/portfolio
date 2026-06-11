type ExperienceCardProps = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

export default function ExperienceCard({
  role,
  company,
  location,
  period,
  description,
  highlights,
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      {/* Node indicator */}
      <div className="experience-card__node" />
      <div className="experience-card__header">
        <div>
          <h3 className="experience-card__title">{role}</h3>
          <div className="experience-card__meta">
            <strong>{company}</strong> · {location}
          </div>
        </div>
        <div className="experience-card__period">{period}</div>
      </div>
      <p className="experience-card__desc">{description}</p>
      <ul className="experience-card__list">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="experience-card__item">
            <span className="experience-card__bullet">✦</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
