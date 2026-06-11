import SectionLabel from "../ui/SectionLabel";
import StackColumn from "./StackColumn";

export default function StackDetail() {
  const stackGroups = [
    {
      title: "Professional core",
      items: [
        { name: "C# / ASP.NET Core", active: true },
        { name: ".NET MAUI", active: true },
        { name: "Angular", active: true },
        { name: "TypeScript", active: true },
        { name: "SQL Server / EF Core", active: true },
      ],
    },
    {
      title: "Side project stack",
      items: [
        { name: "Go (Golang)", active: true },
        { name: "gRPC / Protobuf", active: true },
        { name: "RabbitMQ", active: true },
        { name: "Microservices", active: true },
        { name: "Docker", active: true },
      ],
    },
    {
      title: "Architecture",
      items: [
        { name: "Distributed systems", active: true },
        { name: "Event-driven design", active: true },
        { name: "RESTful APIs", active: true },
        { name: "DDD & EDA", active: true },
        { name: "MVC", active: true },
      ],
    },
    {
      title: "Explored / learning",
      items: [
        { name: "Kubernetes", active: false },
        { name: "Apache Kafka", active: false },
        { name: "Rust", active: false },
        { name: "React", active: false },
        { name: "AI / ML integration", active: false },
      ],
    },
  ];

  return (
    <section id="stack" className="section stack">
      <div className="reveal visible stack__container">
        <SectionLabel className="stack__label">Stack</SectionLabel>
        <h2 className="section-title stack__title">
          The full <em>toolkit.</em>
        </h2>
        <div className="stack__columns">
          {stackGroups.map((group, idx) => (
            <StackColumn key={idx} title={group.title} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
