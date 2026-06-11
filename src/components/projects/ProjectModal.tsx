type ProjectData = {
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
  codeSnippet: {
    language: string;
    code: string;
  };
};

type ProjectModalProps = {
  project: ProjectData | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="project-modal">
      {/* Backdrop */}
      <div className="project-modal__backdrop" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="project-modal__dialog reveal visible">
        {/* Header */}
        <div className="project-modal__header">
          <div>
            <div className="project-modal__eyebrow">Project Details — {project.category}</div>
            <h3 className="project-modal__title">{project.name}</h3>
          </div>
          <button className="project-modal__close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="project-modal__body">
          {/* Metadata Row */}
          <div className="project-modal__meta-row">
            <div className="project-modal__timeline">
              <span className="project-modal__timeline-label">Timeline: </span>
              <span className="project-modal__timeline-val">{project.period}</span>
            </div>
            <div className="project-modal__tags">
              {project.tags.map((t) => (
                <span key={t} className="project-modal__tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="project-modal__section">
            <h4 className="project-modal__section-title">Project Overview</h4>
            <p className="project-modal__text">{project.desc}</p>
          </div>

          {/* Architecture */}
          <div className="project-modal__section">
            <h4 className="project-modal__section-title">System Design & Architecture</h4>
            <p className="project-modal__text">{project.architecture}</p>
          </div>

          {/* Challenges Solved */}
          <div className="project-modal__section">
            <h4 className="project-modal__section-title">Key Challenges & Solutions</h4>
            <p className="project-modal__text">{project.challenges}</p>
          </div>

          {/* Code Snippet */}
          <div className="project-modal__section">
            <h4 className="project-modal__section-title">Architecture Implementation Snippet</h4>
            <div className="project-modal__code-block">
              <div className="project-modal__code-header">{project.codeSnippet.language}</div>
              <pre className="project-modal__code-pre">
                <code className="project-modal__code">{project.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="project-modal__footer">
          <span className="project-modal__footer-note">
            * This repository contains professional work or active research.
          </span>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal__github-btn"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
