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
  repo: string;
  codeSnippet: {
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
      id: "healthcare",
      num: "01 — Healthcare",
      name: "Modular Desktop Healthcare App",
      desc: "Full-stack desktop application designed for clinical workflows in healthcare systems, enabling medical professionals to manage electronic health records, organize scheduling, and capture sensor metrics.",
      category: "Desktop & API Integration",
      period: "Oct 2023 — Present",
      tags: ["C#", "MAUI", "ASP.NET", "Angular"],
      architecture:
        "Built on clean architecture principles separating the Core domain, Application use-cases, Infrastructure adapters, and Presentation. The client desktop application uses a custom dynamic assembly injector. This allows hospital IT systems to hot-swap compiled modules (DLLs) dynamically to load custom clinic-specific extensions and device configurations without requiring full client redeployment.",
      challenges:
        "Dynamic DLL loading required strict security sandboxing and reflection validation to verify assembly integrity. We solved this by using cryptography hashing signatures for each DLL before loading, and caching reflection descriptors to prevent overhead on startup.",
      repo: "https://github.com/raiiaa/healthcare-modular-app",
      codeSnippet: {
        language: "csharp",
        code: `// Dynamic assembly injection using System.Reflection
public void LoadExtensionModule(string dllPath)
{
    var assembly = Assembly.LoadFrom(dllPath);
    var extensionTypes = assembly.GetTypes()
        .Where(t => typeof(IHealthcareExtension).IsAssignableFrom(t) && !t.IsInterface);

    foreach (var type in extensionTypes)
    {
        var extension = (IHealthcareExtension)Activator.CreateInstance(type);
        extension.Initialize(this.ServiceProvider);
        this.ExtensionRegistry.Register(extension);
    }
}`,
      },
    },
    {
      id: "iot",
      num: "02 — Distributed Systems",
      name: "AI-Driven IoT Security System",
      desc: "A distributed IoT security platform built to stream and monitor real-time security events across network-edge sensors, using machine learning pipelines to flag anomalous device behaviors.",
      category: "Microservices & Message Brokering",
      period: "Jan 2024 — Jul 2024",
      tags: ["Go", "gRPC", "RabbitMQ", "Microservices"],
      architecture:
        "An event-driven pub-sub microservices layout. Distributed IoT edge devices publish stream payloads to a RabbitMQ message broker. Go-based ingest microservices consume events, buffer them in Redis, and pipe tasks to high-performance AI inference workers over multiplexed gRPC connections. Alerts are immediately broadcasted to an admin control plane.",
      challenges:
        "Preventing bottlenecks on massive telemetry bursts. We implemented a custom sliding-window rate-limiter in Go, combined with batch-packaging RabbitMQ consumers to send optimized batches to PyTorch inference servers, maintaining latencies below 12ms under peak stress.",
      repo: "https://github.com/raiiaa/iot-security-pubsub",
      codeSnippet: {
        language: "go",
        code: `// Go worker pool consuming from RabbitMQ channel
func (c *Consumer) Start(ctx context.Context, workers int) {
	for i := 0; i < workers; i++ {
		go func() {
			for delivery := range c.deliveries {
				var event TelemetryEvent
				if err := json.Unmarshal(delivery.Body, &event); err != nil {
					delivery.Nack(false, true)
					continue
				}
				// Route event to AI inspector over gRPC client connection
				if isThreat := c.grpcClient.Inspect(ctx, &event); isThreat {
					c.publisher.PublishAlert(ctx, event)
				}
				delivery.Ack(false)
			}
		}()
	}
}`,
      },
    },
    {
      id: "ecommerce",
      num: "03 — E-Commerce",
      name: "Custom CMS & E-Commerce Platform",
      desc: "An end-to-end e-commerce solution integrating a dynamic CMS to let retailers define highly flexible product models and scale online inventory operations.",
      category: "Web Platforms",
      period: "Aug 2022 — Aug 2023",
      tags: ["C#", "ASP.NET", "TypeScript", "SQL"],
      architecture:
        "Domain-Driven Design (DDD) with a modular monolithic framework. Designed a dynamic schema EAV (Entity-Attribute-Value) mapper, enabling shop managers to add custom product variables dynamically. SQL schemas feature custom indexing maps for rapid filtering queries. Integrates Stripe webhook handlers for secure transactions.",
      challenges:
        "Traditional EAV schemas are slow to query. We resolved this by building a background job database sync that periodically indexes customized EAV models into a flattened search table, achieving search query response times of under 8ms.",
      repo: "https://github.com/raiiaa/custom-commerce-platform",
      codeSnippet: {
        language: "csharp",
        code: `// C# Query mapping dynamic EAV attributes to flat product models
public async Task<List<ProductDto>> GetFilteredProductsAsync(FilterRequest filter)
{
    var query = _dbContext.Products.AsNoTracking();
    
    if (filter.CustomAttributes.Any())
    {
        foreach (var attr in filter.CustomAttributes)
        {
            query = query.Where(p => p.Attributes.Any(a => 
                a.Key == attr.Key && a.Value == attr.Value));
        }
    }
    
    return await query.Select(p => new ProductDto {
        Id = p.Id,
        Name = p.Name,
        Price = p.Price
    }).ToListAsync();
}`,
      },
    },
  ];

  return (
    <section id="projects" className="section section--surface-2">
      <div className="reveal visible projects__container">
        <SectionLabel className="projects__label">Work</SectionLabel>
        <h2 className="section-title projects__title">
          Selected <em>projects.</em>
        </h2>
        <div
          className="projects__grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border-med)",
            border: "0.5px solid var(--border-med)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
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
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <a
            href="https://github.com/raiiaa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost projects__footer-link"
            style={{
              display: "inline-flex",
              color: "var(--muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              letterSpacing: "0.04em",
              textDecoration: "none",
              alignItems: "center",
              gap: "6px",
            }}
          >
            See all work at GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
