import SectionLabel from "../ui/SectionLabel";
import EducationCard from "./EducationCard";

export default function EducationSection() {
  const educationList = [
    {
      degree: "Bachelor in IT Engineering",
      school: "Instituto Politécnico de Santarém",
      location: "Santarém, Portugal",
      period: "Sep 2024 — Present",
      description:
        "Developing core skills in software engineering, database design, network architectures, and advanced systems design to engineer reliable technology solutions.",
    },
    {
      degree: "Higher Professional Technical Diploma in Web & Mobile Technologies",
      school: "Instituto Politécnico de Santarém",
      location: "Santarém, Portugal",
      period: "Sep 2021 — Jul 2023",
      description:
        "Acquired foundational knowledge in responsive web design, mobile app development, client-side scripting, and relational database integrations.",
    },
  ];

  return (
    <section id="education" className="section">
      <div className="reveal visible education__container">
        <SectionLabel className="education__label">Education</SectionLabel>
        <h2 className="section-title education__title">
          Academic <em>milestones.</em>
        </h2>
        <div className="education__grid">
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
