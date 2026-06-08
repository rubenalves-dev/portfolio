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
  repo: string;
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
    <div
      className="project-modal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Backdrop */}
      <div
        className="project-modal__backdrop"
        onClick={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(26, 21, 18, 0.45)",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Modal Dialog */}
      <div
        className="project-modal__dialog reveal visible"
        style={{
          position: "relative",
          background: "var(--surface)",
          border: "0.5px solid var(--border-med)",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 60px -15px rgba(26, 21, 18, 0.25)",
          display: "flex",
          flexDirection: "column",
          zIndex: 1001,
          animation: "modal-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header */}
        <div
          className="project-modal__header"
          style={{
            padding: "1.75rem 2rem",
            borderBottom: "0.5px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="project-modal__eyebrow"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--rose)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Project Details — {project.category}
            </div>
            <h3
              className="project-modal__title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                color: "var(--ink)",
                marginTop: "4px",
              }}
            >
              {project.name}
            </h3>
          </div>
          <button
            className="project-modal__close"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: "var(--surface-2)",
              border: "0.5px solid var(--border)",
              borderRadius: "4px",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.1rem",
              color: "var(--ink-soft)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--rose)";
              e.currentTarget.style.color = "var(--rose)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--ink-soft)";
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div
          className="project-modal__body"
          style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            overflowY: "auto",
          }}
        >
          {/* Metadata Row */}
          <div
            className="project-modal__meta-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "var(--surface-2)",
              borderRadius: "6px",
              padding: "1rem 1.5rem",
              border: "0.5px solid var(--border)",
            }}
          >
            <div className="project-modal__timeline">
              <span
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)" }}
              >
                Timeline:{" "}
              </span>
              <span
                className="project-modal__timeline-val"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--ink)" }}
              >
                {project.period}
              </span>
            </div>
            <div className="project-modal__tags" style={{ display: "flex", gap: "6px" }}>
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="project-modal__tag"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    background: "var(--surface)",
                    color: "var(--rose)",
                    border: "0.5px solid var(--rose-light)",
                    borderRadius: "3px",
                    padding: "2px 6px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="project-modal__section" style={{ textAlign: "left" }}>
            <h4
              className="project-modal__section-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                color: "var(--ink)",
                marginBottom: "0.5rem",
              }}
            >
              Project Overview
            </h4>
            <p
              className="project-modal__text"
              style={{ fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "1.7" }}
            >
              {project.desc}
            </p>
          </div>

          {/* Architecture */}
          <div className="project-modal__section" style={{ textAlign: "left" }}>
            <h4
              className="project-modal__section-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                color: "var(--ink)",
                marginBottom: "0.5rem",
              }}
            >
              System Design & Architecture
            </h4>
            <p
              className="project-modal__text"
              style={{ fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "1.7" }}
            >
              {project.architecture}
            </p>
          </div>

          {/* Challenges Solved */}
          <div className="project-modal__section" style={{ textAlign: "left" }}>
            <h4
              className="project-modal__section-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                color: "var(--ink)",
                marginBottom: "0.5rem",
              }}
            >
              Key Challenges & Solutions
            </h4>
            <p
              className="project-modal__text"
              style={{ fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "1.7" }}
            >
              {project.challenges}
            </p>
          </div>

          {/* Code Snippet */}
          <div className="project-modal__section" style={{ textAlign: "left" }}>
            <h4
              className="project-modal__section-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                color: "var(--ink)",
                marginBottom: "0.5rem",
              }}
            >
              Architecture Implementation Snippet
            </h4>
            <div
              className="project-modal__code-block"
              style={{
                background: "var(--ink)",
                color: "#faf9f7",
                borderRadius: "6px",
                padding: "1.25rem",
                overflowX: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                lineHeight: "1.6",
                border: "0.5px solid var(--border-med)",
              }}
            >
              <div
                className="project-modal__code-header"
                style={{
                  color: "var(--rose-light)",
                  borderBottom: "0.5px solid rgba(255,255,255,0.15)",
                  paddingBottom: "0.5rem",
                  marginBottom: "0.75rem",
                  fontSize: "11px",
                  textTransform: "uppercase",
                }}
              >
                {project.codeSnippet.language}
              </div>
              <pre className="project-modal__code-pre" style={{ margin: 0 }}>
                <code className="project-modal__code">{project.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="project-modal__footer"
          style={{
            padding: "1.5rem 2rem",
            borderTop: "0.5px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "var(--surface-2)",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        >
          <span
            className="project-modal__footer-note"
            style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--muted)" }}
          >
            * This repository contains professional work or active research.
          </span>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal__github-btn"
            style={{
              background: "var(--ink)",
              color: "#fff",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              padding: "0.6rem 1.25rem",
              borderRadius: "4px",
              transition: "background 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--rose)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
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
        </div>
      </div>
    </div>
  );
}
