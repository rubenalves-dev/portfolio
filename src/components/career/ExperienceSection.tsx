import SectionLabel from "../ui/SectionLabel";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Fullstack Freelancer",
      company: "Healthcare SaaS Desktop App",
      location: "Remote, Portugal",
      period: "Apr 2026 — Present",
      description:
        "Architected and built, alongside with another freelancer, a C# desktop application for a private clinic, designed with a modular architecture to support future commercialization as a SaaS platform.",
      highlights: [
        "Designed and implemented a modular desktop system using C# and .NET MAUI to isolate clinical workflows.",
        "Developed a secure Document Management System (DMS) enabling file categorization, storage, and inline previews.",
        "Built organization management modules (CRUD) mapping relationships between healthcare personnel, clinics, and roles.",
      ],
    },
    {
      role: "Fullstack Freelancer",
      company: "Bomsite",
      location: "Salvaterra de Magos, Santarém, Portugal",
      period: "Jul 2025 — Present",
      description:
        "Developing and maintaining custom CMS and e-commerce platforms for corporate and public sector clients.",
      highlights: [
        "Engineered production-ready web platforms using C# (ASP.NET), JavaScript, jQuery, and Bootstrap.",
        "Designed background schedulers and cron tasks to automate business workflows and financial operations.",
        "Oversaw the full software lifecycle, taking projects from initial requirements and architecture to QA and delivery.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Link Consulting",
      location: "Saldanha, Lisboa, Portugal",
      period: "Nov 2023 — Feb 2025",
      description:
        "Contributed to enterprise web applications, focusing on document management and custom productivity integrations.",
      highlights: [
        "Developed workflows and document administration interfaces in Angular.",
        "Created secure Microsoft Office add-ins utilizing custom authentication to facilitate document metadata indexing and uploading.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "rabbit mobile GmbH",
      location: "Sete Rios, Lisboa, Portugal",
      period: "Feb 2023 — Jul 2023",
      description:
        "Gained hands-on experience building design-to-code tooling and working with design systems.",
      highlights: [
        "Created a custom Figma plugin to transpile Figma design elements into clean Angular components.",
        "Conducted validation tests by applying the plugin to real-world projects, measuring developer handoff efficiency.",
        "Completed structured training on Figma layout constraints and design system architectures.",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Bomsite",
      location: "Salvaterra de Magos, Santarém, Portugal",
      period: "Jul 2022 — Oct 2022",
      description:
        "Acquired foundational experience building business management utilities for automotive operations.",
      highlights: [
        "Built a dedicated back-office management application for a truck repair center.",
        "Completed professional development training focused on C# and ASP.NET MVC.",
      ],
    },
  ];

  return (
    <section id="experience" className="section section--surface-2">
      <div className="reveal visible experience__container">
        <SectionLabel className="experience__label">Experience</SectionLabel>
        <h2 className="section-title experience__title">
          Professional <em>history.</em>
        </h2>
        <div className="experience__timeline">
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
