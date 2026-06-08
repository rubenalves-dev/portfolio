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
    <div
      className="education-card about-block"
      style={{
        border: "0.5px solid var(--border-med)",
        borderRadius: "6px",
        padding: "1.25rem 1.5rem",
        background: "var(--surface)",
        textAlign: "left",
        transition: "border-color 0.2s",
      }}
    >
      <div
        className="education-card__header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "0.5rem",
        }}
      >
        <div>
          <h3
            className="education-card__title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              color: "var(--ink)",
              lineHeight: 1.2,
            }}
          >
            {degree}
          </h3>
          <div
            className="education-card__school"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--muted)",
              marginTop: "4px",
            }}
          >
            {school} · {location}
          </div>
        </div>
        <div
          className="education-card__period"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--muted)",
            background: "var(--surface-2)",
            padding: "2px 6px",
            borderRadius: "3px",
            border: "0.5px solid var(--border)",
          }}
        >
          {period}
        </div>
      </div>
      {description && (
        <p
          className="education-card__desc"
          style={{
            fontSize: "0.9rem",
            color: "var(--ink-soft)",
            lineHeight: "1.6",
            marginTop: "0.5rem",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
