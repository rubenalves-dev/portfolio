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
      <div className="about reveal visible">
        {/* About Left: Bio and Core Values Grid */}
        <div className="about__left">
          <div>
            <SectionLabel className="about__label">About</SectionLabel>
            <h2 className="section-title about__title">
              Versatile by design,
              <br />
              <em>curious by nature.</em>
            </h2>
            <div className="about__body">
              <p className="about__text">
                I've been working and studying in the software development world{" "}
                <strong>since I was 19</strong>. Over the years, I've tackled projects of all sizes
                — from custom CMS and e-commerce platforms to modular desktop healthcare
                applications.
              </p>
              <p className="about__text">
                My professional core revolves around{" "}
                <strong>C# (ASP.NET / MAUI) and Angular</strong>, delivering full-stack web and
                desktop applications that solve real business problems.
              </p>
              <p className="about__text">
                But I refuse to stay in a bubble. I spend my spare time building complex side
                projects exploring <strong>Go, microservices, gRPC, and RabbitMQ</strong> — most
                recently designing an AI-driven distributed IoT security system from scratch.
              </p>
              <p className="about__text">
                Because of this constant hands-on experimentation, jumping into any codebase,
                understanding its architecture, and contributing high-quality code quickly is second
                nature to me.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <h3 className="about__grid-label">How I approach software</h3>
            <div className="about__grid">
              {values.map((v, idx) => (
                <div key={idx} className="about__card">
                  <div className="about__card-icon">{v.icon}</div>
                  <div className="about__card-title">{v.title}</div>
                  <div className="about__card-text">{v.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Right: High-end PhotoFrame */}
        <div className="about__right">
          <PhotoFrame src="/profile.jpeg" alt="Rúben Alves Portrait" />
        </div>
      </div>
    </section>
  );
}
