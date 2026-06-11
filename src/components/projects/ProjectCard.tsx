import Badge from "../ui/Badge";

type ProjectCardProps = {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  onViewDetails: () => void;
};

export default function ProjectCard({ num, name, desc, tags, onViewDetails }: ProjectCardProps) {
  return (
    <div className="project-card" onClick={onViewDetails}>
      <div className="project-card__num">{num}</div>
      <h3 className="project-card__name">{name}</h3>
      <p className="project-card__desc">{desc}</p>
      <div className="project-card__tags">
        {tags.map((tag) => (
          <Badge key={tag} variant="tag" className="project-card__tag">
            {tag}
          </Badge>
        ))}
      </div>
      <span className="project-card__link">View details & architecture →</span>
    </div>
  );
}
