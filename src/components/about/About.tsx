import SectionLabel from "../ui/SectionLabel";
import PhotoFrame from "../ui/PhotoFrame";

export default function About() {
  const values = [
    {
      icon: "🏗️",
      title: "Architecture first",
      text: "Deep passion for software architecture and system design. Every project starts with understanding the structure.",
    },
    {
      icon: "🌐",
      title: "Tech-agnostic",
      text: "Comfortable in any codebase. From CMS to distributed IoT systems — the problem shapes the tools, not the other way around.",
    },
    {
      icon: "⚡",
      title: "Fast ramp-up",
      text: "Constant side-project experimentation means I can understand a new architecture and start contributing quality code quickly.",
    },
    {
      icon: "🎓",
      title: "Always learning",
      text: "Software development since 19, and still the most curious person in the room. That never changes.",
    },
  ];

  return (
    <section id="about" className="section">
      <div
        className="about reveal visible"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* About Left: Bio and Core Values Grid */}
        <div
          className="about__left"
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
        >
          <div>
            <SectionLabel className="about__label">About</SectionLabel>
            <h2 className="section-title about__title" style={{ marginBottom: "1.5rem" }}>
              Versatile by design,
              <br />
              <em>curious by nature.</em>
            </h2>
            <div className="about__body" style={{ textAlign: "left" }}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--ink-soft)",
                  lineHeight: "1.8",
                  marginBottom: "1.25rem",
                }}
              >
                I've been working and studying in the software development world{" "}
                <strong>since I was 19</strong>. Over the years, I've tackled projects of all sizes
                — from custom CMS and e-commerce platforms to modular desktop healthcare
                applications.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--ink-soft)",
                  lineHeight: "1.8",
                  marginBottom: "1.25rem",
                }}
              >
                My professional core revolves around{" "}
                <strong>C# (ASP.NET / MAUI) and Angular</strong>, delivering full-stack web and
                desktop applications that solve real business problems.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--ink-soft)",
                  lineHeight: "1.8",
                  marginBottom: "1.25rem",
                }}
              >
                But I refuse to stay in a bubble. I spend my spare time building complex side
                projects exploring <strong>Go, microservices, gRPC, and RabbitMQ</strong> — most
                recently designing an AI-driven distributed IoT security system from scratch.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--ink-soft)", lineHeight: "1.8" }}>
                Because of this constant hands-on experimentation, jumping into any codebase,
                understanding its architecture, and contributing high-quality code quickly is second
                nature to me.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <h3
              className="about__grid-label"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.5rem",
                textAlign: "left",
              }}
            >
              How I approach software
            </h3>
            <div
              className="about__grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.25rem",
              }}
            >
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="about__card"
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
                    className="about__card-icon"
                    style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}
                  >
                    {v.icon}
                  </div>
                  <div
                    className="about__card-title"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--muted)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {v.title}
                  </div>
                  <div
                    className="about__card-text"
                    style={{ fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: "1.5" }}
                  >
                    {v.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Right: High-end PhotoFrame */}
        <div
          className="about__right"
          style={{ display: "flex", justifyContent: "center", position: "sticky", top: "120px" }}
        >
          <PhotoFrame src="/profile.png" alt="Rúben Alves Portrait" />
        </div>
      </div>
    </section>
  );
}
