import Button from "../ui/Button";
import Badge from "../ui/Badge";
import StatItem from "../ui/StatItem";

type HeroProps = {
  onProjectsClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  onContactClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
};

export default function Hero({ onProjectsClick, onContactClick }: HeroProps) {
  return (
    <section
      className="hero"
      id="top"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: "80px",
        gap: "2rem",
      }}
    >
      {/* Hero Left Content */}
      <div className="hero__left" style={{ padding: "6rem 3rem 6rem 3.5rem" }}>
        {/* Glow badge for internship */}
        <div
          className="hero__status-glow"
          style={{
            alignSelf: "flex-start",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "linear-gradient(135deg, var(--rose-pale) 0%, #fff 100%)",
            border: "1.5px solid var(--rose)",
            borderRadius: "99px",
            padding: "8px 18px",
            marginBottom: "2rem",
            boxShadow:
              "0 10px 30px -10px rgba(217, 99, 126, 0.4), inset 0 2px 4px rgba(217, 99, 126, 0.05)",
            animation: "pulse-glowing 2.5s infinite alternate",
          }}
        >
          <span
            className="hero__pulse-glow-dot"
            style={{
              width: "8px",
              height: "8px",
              background: "var(--rose)",
              borderRadius: "50%",
              display: "block",
              boxShadow: "0 0 10px var(--rose)",
            }}
          />
          <span
            className="hero__status-text"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--rose-dark)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Available for Internship — Aug 2026 (600h)
          </span>
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

      {/* Hero Right Card */}
      <div className="hero__right">
        <div className="hero__deco-cross">✦</div>
        <div className="hero__stack-label">Core technologies</div>
        <div className="hero__stack-grid">
          <Badge variant="core" className="hero__stack-badge">
            C# / ASP.NET
          </Badge>
          <Badge variant="core" className="hero__stack-badge">
            Angular
          </Badge>
          <Badge variant="core" className="hero__stack-badge">
            MAUI
          </Badge>
          <Badge className="hero__stack-badge">Go (Golang)</Badge>
          <Badge className="hero__stack-badge">gRPC</Badge>
          <Badge className="hero__stack-badge">RabbitMQ</Badge>
          <Badge className="hero__stack-badge">TypeScript</Badge>
          <Badge className="hero__stack-badge">Microservices</Badge>
          <Badge className="hero__stack-badge">SQL / NoSQL</Badge>
        </div>
        <div className="hero__stat-row">
          <StatItem value="3" label="yrs experience" className="hero__stat-item" />
          <StatItem value="∞" label="stacks learned" className="hero__stat-item" />
          <StatItem value="600h" label="internship ready" className="hero__stat-item" />
        </div>
      </div>
    </section>
  );
}
