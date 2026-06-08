import SectionLabel from "../ui/SectionLabel";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Full-Stack Developer (Internship & Junior Developer)",
      company: "Healthcare Solutions Lab",
      location: "Braga, Portugal (Hybrid)",
      period: "Oct 2023 — Present",
      description:
        "Designing and maintaining full-stack modular desktop and web applications tailored for clinical workflows, handling patient telemetry and scheduling configurations.",
      highlights: [
        "Architected cross-platform features using C# and .NET MAUI to allow hot-pluggable feature loading at hospital sites.",
        "Engineered secure back-end services in ASP.NET Core, implementing clean architecture and CQRS patterns.",
        "Migrated legacy medical report views into reactive Angular components, increasing UI load speed by 40%.",
        "Optimized relational schemas and written complex queries in SQL Server, utilizing Entity Framework Core for entity tracking.",
      ],
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Bespoke Web Solutions",
      location: "Braga, Portugal",
      period: "Jun 2021 — Sep 2023",
      description:
        "Delivered customized e-commerce storefronts, inventory portals, and custom back-office Content Management Systems (CMS) for SME businesses.",
      highlights: [
        "Crafted custom product catalog engines using C# and SQL Server, handling high-volume product options.",
        "Integrated payment gateways including Stripe and local Portuguese methods (Multibanco / MBWay).",
        "Developed responsive frontends in TypeScript and Angular, implementing clean layouts and accessibility rules.",
        "Built customized light-weight CMS engines to give non-technical shop managers easy product modeling control.",
      ],
    },
  ];

  return (
    <section id="experience" className="section section--surface-2">
      <div
        className="reveal visible experience__container"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <SectionLabel className="experience__label">Experience</SectionLabel>
        <h2 className="section-title experience__title">
          Professional <em>history.</em>
        </h2>
        <div
          className="experience__timeline"
          style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}
        >
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              role={exp.role}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              highlights={exp.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
