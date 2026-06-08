import { useState } from "react";
import Button from "../ui/Button";

type CoverLetterPortalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialCompany?: string;
  initialRole?: string;
  initialManager?: string;
};

export default function CoverLetterPortal({
  isOpen,
  onClose,
  initialCompany = "Company",
  initialRole = "Software Engineering Internship",
  initialManager = "Hiring Manager",
}: CoverLetterPortalProps) {
  const [manager, setManager] = useState(initialManager);
  const [company, setCompany] = useState(initialCompany);
  const [product, setProduct] = useState("your product");
  const [role, setRole] = useState(initialRole);
  const [dateText, setDateText] = useState(
    new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  );

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const letterText = `Hi ${manager},

I've been following ${company} and your work on ${product}. Because I love building systems that actually solve real business problems, I knew I had to reach out regarding the ${role}.

I've been working and studying in the software development world since I was 19. Over nearly 3 years of professional experience, I've tackled projects of all sizes, from custom CMS and E-commerce platforms to building modular desktop healthcare applications using C# (ASP.NET / MAUI) and Angular.

But while that's my current professional core stack, I refuse to stay in a bubble. I am a tech-agnostic professional with a deep passion for software architecture and distributed networks. To push myself, I spend my spare time building complex side projects exploring Go (Golang), microservices, gRPC, and RabbitMQ, recently designing an AI-driven distributed IoT security system from scratch.

Because of this constant hands-on experimentation, I don't get intimidated by a new stack. It's second nature for me to jump into an existing codebase, understand its architecture, and start contributing high-quality code quickly.

I'm looking for a full-time internship opportunity of 600 hours starting on August 3rd, 2026, where I'm eager to learn from your team.

I've attached my CV, but you can also check out my code and past work at raiiaa.dev.

Let me know if you think I would be a good fit for your team.

Atenciosamente,
Rúben Alves`;

  const handleCopy = () => {
    void navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="recruiter-portal"
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
        padding: "1.5rem",
      }}
    >
      {/* Backdrop */}
      <div
        className="recruiter-portal__backdrop"
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

      {/* Main Container */}
      <div
        className="recruiter-portal__dialog reveal visible"
        style={{
          position: "relative",
          background: "var(--surface)",
          border: "0.5px solid var(--border-med)",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "1100px",
          height: "85vh",
          boxShadow: "0 30px 70px -15px rgba(26, 21, 18, 0.3)",
          display: "grid",
          gridTemplateColumns: "350px 1fr",
          overflow: "hidden",
          zIndex: 1001,
          animation: "modal-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Left Side: Builder Controls */}
        <div
          className="recruiter-portal__sidebar"
          style={{
            borderRight: "0.5px solid var(--border-med)",
            padding: "2rem",
            background: "var(--surface-2)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            overflowY: "auto",
          }}
        >
          <div>
            <h3
              className="recruiter-portal__title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.35rem",
                color: "var(--ink)",
              }}
            >
              Recruiter Portal
            </h3>
            <p
              className="recruiter-portal__desc"
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginTop: "4px",
                lineHeight: "1.5",
              }}
            >
              Customize the fields to generate a personalized cover letter in real-time.
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "0.5px solid var(--border-med)" }} />

          {/* Form Fields */}
          <div
            className="recruiter-portal__form"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              className="recruiter-portal__field"
              style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "left" }}
            >
              <label
                className="recruiter-portal__label"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)" }}
              >
                Hiring Manager
              </label>
              <input
                type="text"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                className="recruiter-portal__input"
                style={{
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "0.5px solid var(--border-med)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              />
            </div>

            <div
              className="recruiter-portal__field"
              style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "left" }}
            >
              <label
                className="recruiter-portal__label"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)" }}
              >
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="recruiter-portal__input"
                style={{
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "0.5px solid var(--border-med)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              />
            </div>

            <div
              className="recruiter-portal__field"
              style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "left" }}
            >
              <label
                className="recruiter-portal__label"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)" }}
              >
                Target Product / Project
              </label>
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="recruiter-portal__input"
                style={{
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "0.5px solid var(--border-med)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              />
            </div>

            <div
              className="recruiter-portal__field"
              style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "left" }}
            >
              <label
                className="recruiter-portal__label"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)" }}
              >
                Job Title
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="recruiter-portal__input"
                style={{
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "0.5px solid var(--border-med)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              />
            </div>

            <div
              className="recruiter-portal__field"
              style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "left" }}
            >
              <label
                className="recruiter-portal__label"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)" }}
              >
                Letter Date
              </label>
              <input
                type="text"
                value={dateText}
                onChange={(e) => setDateText(e.target.value)}
                className="recruiter-portal__input"
                style={{
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "0.5px solid var(--border-med)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              />
            </div>
          </div>

          <div
            className="recruiter-portal__actions"
            style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <Button
              onClick={handleCopy}
              variant="primary"
              style={{ justifyContent: "center" }}
              className="recruiter-portal__action-btn"
            >
              {copied ? "✓ Copied!" : "Copy to Clipboard"}
            </Button>
            <Button
              onClick={handlePrint}
              variant="ghost"
              style={{ justifyContent: "center" }}
              className="recruiter-portal__action-btn"
            >
              Print Cover Letter
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              style={{ justifyContent: "center", color: "var(--rose)" }}
              className="recruiter-portal__action-btn"
            >
              Close Portal
            </Button>
          </div>
        </div>

        {/* Right Side: Document Preview */}
        <div
          className="recruiter-portal__main print-section"
          style={{
            padding: "3rem",
            overflowY: "auto",
            background: "var(--surface)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Printable Sheet */}
          <div
            className="recruiter-portal__sheet letter-card"
            style={{
              width: "100%",
              maxWidth: "650px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              border: "1px solid var(--border-med)",
              background: "#fff",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            {/* Letter Header */}
            <div
              className="recruiter-portal__header"
              style={{
                padding: "2rem",
                borderBottom: "0.5px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                className="recruiter-portal__logo"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--rose-pale)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--rose)",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  fontFamily: "var(--font-display)",
                }}
              >
                R
              </div>
              <div className="recruiter-portal__meta" style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: "var(--ink)",
                    fontWeight: 500,
                  }}
                >
                  Rúben Alves
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    marginTop: "2px",
                  }}
                >
                  raiiaa.dev · Full-Stack Developer
                </div>
              </div>
              <div
                className="recruiter-portal__date"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)" }}
              >
                {dateText}
              </div>
            </div>

            {/* Letter Body */}
            <div
              className="recruiter-portal__body"
              style={{
                padding: "2.5rem 2.5rem 2rem",
                fontSize: "0.95rem",
                color: "var(--ink-soft)",
                lineHeight: "1.85",
              }}
            >
              <p style={{ marginBottom: "1.1rem" }}>
                Hi <strong style={{ color: "var(--rose)", fontWeight: 500 }}>{manager}</strong>,
              </p>

              <p style={{ marginBottom: "1.1rem" }}>
                I've been following{" "}
                <strong style={{ color: "var(--rose)", fontWeight: 500 }}>{company}</strong> and
                your work on{" "}
                <span
                  className="recruiter-portal__highlight"
                  style={{
                    background: "var(--rose-pale)",
                    padding: "2px 4px",
                    borderRadius: "3px",
                    border: "0.5px dashed var(--rose-light)",
                  }}
                >
                  {product}
                </span>
                . Because I love building systems that actually solve real business problems, I knew
                I had to reach out regarding the{" "}
                <span
                  className="recruiter-portal__highlight"
                  style={{
                    background: "var(--rose-pale)",
                    padding: "2px 4px",
                    borderRadius: "3px",
                    border: "0.5px dashed var(--rose-light)",
                  }}
                >
                  {role}
                </span>
                .
              </p>

              <p style={{ marginBottom: "1.1rem" }}>
                I've been working and studying in the software development world since I was 19.
                Over nearly 3 years of professional experience, I've tackled projects of all sizes,
                from custom CMS and E-commerce platforms to building modular desktop healthcare
                applications using C# (ASP.NET / MAUI) and Angular.
              </p>

              <p style={{ marginBottom: "1.1rem" }}>
                But while that's my current professional core stack, I refuse to stay in a bubble. I
                am a tech-agnostic professional with a deep passion for software architecture and
                distributed networks. To push myself, I spend my spare time building complex side
                projects exploring Go (Golang), microservices, gRPC, and RabbitMQ, recently
                designing an AI-driven distributed IoT security system from scratch.
              </p>

              <p style={{ marginBottom: "1.1rem" }}>
                Because of this constant hands-on experimentation, I don't get intimidated by a new
                stack. It's second nature for me to jump into an existing codebase, understand its
                architecture, and start contributing high-quality code quickly.
              </p>

              <p style={{ marginBottom: "1.1rem" }}>
                I'm looking for a full-time internship opportunity of 600 hours starting on August
                3rd, 2026, where I'm eager to learn from your team.
              </p>

              <p style={{ marginBottom: "1.1rem" }}>
                I've attached my CV, but you can also check out my code and past work at{" "}
                <a
                  href="https://raiiaa.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--rose)", textDecoration: "none" }}
                >
                  raiiaa.dev
                </a>
                .
              </p>

              <p>Let me know if you think I would be a good fit for your team.</p>
            </div>

            {/* Letter Signature */}
            <div
              className="recruiter-portal__signature"
              style={{
                padding: "1.5rem 2.5rem 2rem",
                borderTop: "0.5px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "var(--ink)",
                  }}
                >
                  Rúben Alves
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  Atenciosamente
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--muted)",
                  textAlign: "right",
                }}
              >
                Braga, Portugal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
