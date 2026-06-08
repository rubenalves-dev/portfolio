import SectionLabel from "../ui/SectionLabel";
import EducationCard from "./EducationCard";

export default function EducationSection() {
  const educationList = [
    {
      degree: "BSc in Computer Science & Software Engineering",
      school: "University of Minho (Universidade do Minho)",
      location: "Braga, Portugal",
      period: "2023 — 2026 (Graduating July)",
      description:
        "Focused on core computing fundamentals including Distributed Systems, Advanced Algorithms, Relational Databases, Software Architecture, and Concurrent Programming. Active member of student tech clubs.",
    },
    {
      degree: "Technical Course in Software Development",
      school: "Braga Professional School (Escola Profissional de Braga)",
      location: "Braga, Portugal",
      period: "2020 — 2023",
      description:
        "Comprehensive introduction to software development. Built foundational skills in OOP (C#), web technologies (JS/HTML/CSS), databases (SQL Server), and systems administration. Graduated with honors.",
    },
  ];

  return (
    <section id="education" className="section">
      <div
        className="reveal visible education__container"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <SectionLabel className="education__label">Education</SectionLabel>
        <h2 className="section-title education__title">
          Academic <em>milestones.</em>
        </h2>
        <div
          className="education__grid"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}
        >
          {educationList.map((edu, idx) => (
            <EducationCard
              key={idx}
              degree={edu.degree}
              school={edu.school}
              location={edu.location}
              period={edu.period}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
