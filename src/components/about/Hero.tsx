import Button from "../ui/Button";
import Badge from "../ui/Badge";

type HeroProps = {
  onProjectsClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  onContactClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
};

export default function Hero({ onProjectsClick, onContactClick }: HeroProps) {
  const startDate = new Date("2022-07-15");

  const workPauseDates = [
    [new Date("2022-10-14"), new Date("2023-02-11")],
    [new Date("2023-07-01"), new Date("2023-11-06")],
    [new Date("2025-02-01"), new Date("2025-06-06")],
  ];

  const currentDate = new Date();

  const totalPausedMs = workPauseDates.reduce((total, [pauseStart, pauseEnd]) => {
    return total + (pauseEnd.getTime() - pauseStart.getTime());
  }, 0);

  const workedMs = currentDate.getTime() - startDate.getTime() - totalPausedMs;

  const workDurationInYears = workedMs / (1000 * 60 * 60 * 24 * 365.25);

  return (
    <section className="hero" id="top">
      <div className="hero__container">
        {/* Glow badge for internship */}
        <div className="hero__status-glow">
          <span className="hero__pulse-glow-dot" />
          <span className="hero__status-text">Available for Internship — Aug 2026 (600h)</span>
        </div>

        <h1 className="hero__title">
          Building systems
          <br />
          that <em className="hero__title--highlight">actually</em>
          <br />
          solve problems.
        </h1>
        <p className="hero__sub">
          Full-stack developer with a passion for software architecture and distributed systems.
          Tech-agnostic by conviction, precise by habit.
        </p>

        {/* Experience and Core Tech Stack metadata */}
        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-val">{workDurationInYears.toFixed(0)}</span>
            <span className="hero__meta-label">yrs experience</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <span className="hero__meta-stack-title">Core Stack</span>
            <div className="hero__meta-badges">
              <Badge variant="core" className="hero__meta-badge">
                C# / ASP.NET
              </Badge>
              <Badge variant="core" className="hero__meta-badge">
                Angular
              </Badge>
              <Badge variant="core" className="hero__meta-badge">
                MAUI
              </Badge>
            </div>
          </div>
        </div>

        <div className="hero__actions">
          <Button
            href="#contact"
            variant="primary"
            onClick={onContactClick}
            className="hero__action-btn"
          >
            Let's talk →
          </Button>
          <Button
            href="#projects"
            variant="ghost"
            onClick={onProjectsClick}
            className="hero__action-link"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="5" height="5" rx="0.5" />
              <rect x="9" y="2" width="5" height="5" rx="0.5" />
              <rect x="2" y="9" width="5" height="5" rx="0.5" />
              <rect x="9" y="9" width="5" height="5" rx="0.5" />
            </svg>
            View projects
          </Button>
        </div>
      </div>
    </section>
  );
}
