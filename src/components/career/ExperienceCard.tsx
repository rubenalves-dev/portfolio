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
    <div
      className="experience-card"
      style={{
        borderLeft: "2px solid var(--rose-light)",
        paddingLeft: "2rem",
        paddingBottom: "2.5rem",
        position: "relative",
        textAlign: "left",
      }}
    >
      {/* Node indicator */}
      <div
        className="experience-card__node"
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "var(--rose)",
          position: "absolute",
          left: "-7px",
          top: "6px",
          border: "2px solid var(--surface)",
        }}
      />
      <div
        className="experience-card__header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "0.75rem",
        }}
      >
        <div>
          <h3
            className="experience-card__title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              color: "var(--ink)",
              lineHeight: 1.2,
            }}
          >
            {role}
          </h3>
          <div
            className="experience-card__meta"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--muted)",
              marginTop: "4px",
            }}
          >
            <strong>{company}</strong> · {location}
          </div>
        </div>
        <div
          className="experience-card__period"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--rose)",
            background: "var(--rose-pale)",
            padding: "4px 8px",
            borderRadius: "4px",
            border: "0.5px solid var(--rose-light)",
          }}
        >
          {period}
        </div>
      </div>
      <p
        className="experience-card__desc"
        style={{
          fontSize: "0.95rem",
          color: "var(--ink-soft)",
          lineHeight: "1.7",
          marginBottom: "1rem",
        }}
      >
        {description}
      </p>
      <ul className="experience-card__list" style={{ listStyleType: "none", paddingLeft: "0" }}>
        {highlights.map((highlight, idx) => (
          <li
            key={idx}
            className="experience-card__item"
            style={{
              fontSize: "0.9rem",
              color: "var(--muted)",
              marginBottom: "0.45rem",
              lineHeight: "1.6",
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span
              className="experience-card__bullet"
              style={{ color: "var(--rose)", flexShrink: 0 }}
            >
              ✦
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
