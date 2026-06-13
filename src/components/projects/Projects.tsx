import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "./ProjectCard";

export type ProjectData = {
  id: string;
  num: string;
  name: string;
  desc: string;
  category: string;
  period: string;
  tags: string[];
  architecture: string;
  challenges: string;
  repo?: string;
  website?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
};

type ProjectsProps = {
  onSelectProject: (project: ProjectData) => void;
};

export default function Projects({ onSelectProject }: ProjectsProps) {
  const projects: ProjectData[] = [
    {
      id: "smartlock",
      num: "01 — Security & IoT",
      name: "Smartlock Distributed System",
      desc: "A high-scale, event-driven IoT security ecosystem designed to integrate real-time edge authentication with AI-driven threat classification.",
      category: "Distributed Systems & IoT",
      period: "Apr 2026 — Jun 2026",
      tags: ["Go", "gRPC", "RabbitMQ", "Python (AI)", "C++ (ESP32)", "MQTT"],
      architecture:
        "Leverages an event-driven pub-sub architecture. Hardware validation nodes run on ESP32 microcontrollers communicating telemetry data over MQTT. Go-based ingestion microservices consume these streams, buffer events in Redis, and dispatch tasks to high-performance AI inference workers over multiplexed gRPC connections. Alerts and anomaly reports are routed instantly to the administrative control plane.",
      challenges:
        "Preventing ingestion bottlenecks during high-frequency telemetry bursts from multiple hardware sensors. This was resolved by implementing a dynamic, sliding-window rate-limiter in Go and batch-packaging RabbitMQ queue consumers to optimize resource utilization at the PyTorch inference servers, keeping end-to-end processing latency under 12ms.",
    },
    {
      id: "fightclub",
      num: "02 — Back-office",
      name: "SalvaterraFightClub Platform",
      desc: "A sports management back-office portal designed to automate club administration, membership tracking, billing cycles, and internal registration workflows.",
      category: "Enterprise Back-office",
      period: "Jan 2026 — Present",
      tags: ["C#", "ASP.NET", "jQuery", "Bootstrap", "SQL Server"],
      architecture:
        "Developed using ASP.NET Core MVC with SQL Server handling complex relational storage. The backend incorporates automated workflows and cron-based background jobs to run daily membership status checks, calculate seasonal fee updates, and trigger billing updates automatically. An integrated billing worker handles bulk operations and schedules document rendering in the background.",
      challenges:
        "Managing bulk database state transitions for billing statuses and membership renewals without causing transaction deadlocks or blocking concurrent user operations. Resolved by using database-level batch updates scheduled during off-peak hours and utilizing transactional unit-of-work patterns in C# to ensure full rollback capabilities on error.",
    },
    {
      id: "crvbi",
      num: "03 — E-Commerce",
      name: "CRVBI - Vinhos da Beira Interior",
      desc: "An institutional e-commerce platform featuring an administrative partner module, inventory control systems, and live social media integrations.",
      category: "Web Systems & E-Commerce",
      period: "Oct 2025 — Present",
      tags: ["C#", "ASP.NET", "Meta API", "SQL Server"],
      architecture:
        "Designed using C# and ASP.NET Core. Integrates the Meta Graph API to dynamically poll and display social content feeds locally while minimizing API rate-limit exposure. Implements a dual-purpose storefront for physical and digital inventories, utilizing secure API webhooks to synchronize real-time product quantities with an external ERP platform.",
      challenges:
        "Minimizing page loading latencies while maintaining real-time Meta feed updates and ERP inventory sync. Solved by implementing a background polling worker that fetches and caches social feeds, and using Redis to cache product inventory states while processing ERP updates asynchronously via secure webhook endpoints.",
      website: "https://vinhosdabeirainterior.pt",
    },
    {
      id: "jf-alcoentre",
      num: "04 — Public Sector",
      name: "JF Alcoentre & CSPM Portals",
      desc: "A suite of web applications designed to digitize public sector administrative tasks and local community service management.",
      category: "Web Portals & Security",
      period: "Jul 2025 — Oct 2025",
      tags: ["C#", "ASP.NET", "jQuery", "Bootstrap"],
      architecture:
        "Built using C# and ASP.NET Core with an Attribute-Based Access Control (ABAC) security model. Designed custom Content Management Systems (CMS) and structured Document Management Systems (DMS) tailored to municipal requirements, categorizing and storing regulatory files and official communications chronologically.",
      challenges:
        "Ensuring high security and strict separation of administrative actions in a multi-tenant public sector platform. Achieved this by designing an Attribute-Based Access Control system that evaluates user attributes, role constraints, and context dynamically before permitting document modifications or administrative access.",
    },
  ];

  return (
    <section id="projects" className="section section--surface-2">
      <div className="reveal visible projects__container">
        <SectionLabel className="projects__label">Work</SectionLabel>
        <h2 className="section-title projects__title">
          Selected <em>projects.</em>
        </h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              num={project.num}
              name={project.name}
              desc={project.desc}
              tags={project.tags}
              onViewDetails={() => onSelectProject(project)}
            />
          ))}
        </div>
        <div className="projects__footer">
          <a
            href="https://github.com/rubenalves-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost projects__footer-link"
          >
            See all work at GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
