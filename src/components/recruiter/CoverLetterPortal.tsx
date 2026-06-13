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
    <div className="recruiter-portal">
      {/* Backdrop */}
      <div className="recruiter-portal__backdrop" onClick={onClose} />

      {/* Main Container */}
      <div className="recruiter-portal__dialog reveal visible">
        {/* Left Side: Builder Controls */}
        <div className="recruiter-portal__sidebar">
          <div>
            <h3 className="recruiter-portal__title">Recruiter Portal</h3>
            <p className="recruiter-portal__desc">
              Customize the fields to generate a personalized cover letter in real-time.
            </p>
          </div>

          <hr className="footer__divider" />

          {/* Form Fields */}
          <div className="recruiter-portal__form">
            <div className="recruiter-portal__field">
              <label className="recruiter-portal__label">Hiring Manager</label>
              <input
                type="text"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                className="recruiter-portal__input"
              />
            </div>

            <div className="recruiter-portal__field">
              <label className="recruiter-portal__label">Company Name</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="recruiter-portal__input"
              />
            </div>

            <div className="recruiter-portal__field">
              <label className="recruiter-portal__label">Target Product / Project</label>
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="recruiter-portal__input"
              />
            </div>

            <div className="recruiter-portal__field">
              <label className="recruiter-portal__label">Job Title</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="recruiter-portal__input"
              />
            </div>

            <div className="recruiter-portal__field">
              <label className="recruiter-portal__label">Letter Date</label>
              <input
                type="text"
                value={dateText}
                onChange={(e) => setDateText(e.target.value)}
                className="recruiter-portal__input recruiter-portal__input--date"
              />
            </div>
          </div>

          <div className="recruiter-portal__actions">
            <Button onClick={handleCopy} variant="primary" className="recruiter-portal__action-btn">
              {copied ? "✓ Copied!" : "Copy to Clipboard"}
            </Button>
            <Button onClick={handlePrint} variant="ghost" className="recruiter-portal__action-btn">
              Print Cover Letter
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              className="recruiter-portal__action-btn recruiter-portal__action-btn--close"
            >
              Close Portal
            </Button>
          </div>
        </div>

        {/* Right Side: Document Preview */}
        <div className="recruiter-portal__main print-section">
          {/* Printable Sheet */}
          <div className="recruiter-portal__sheet letter-card">
            {/* Letter Header */}
            <div className="recruiter-portal__header">
              <div className="recruiter-portal__logo">R</div>
              <div className="recruiter-portal__meta">
                <div className="recruiter-portal__meta-name">Rúben Alves</div>
                <div className="recruiter-portal__meta-subtitle">
                  raiiaa.dev · Full-Stack Developer
                </div>
              </div>
              <div className="recruiter-portal__date">{dateText}</div>
            </div>

            {/* Letter Body */}
            <div className="recruiter-portal__body">
              <p className="recruiter-portal__body-paragraph">
                Hi <strong className="recruiter-portal__strong">{manager}</strong>,
              </p>

              <p className="recruiter-portal__body-paragraph">
                I've been following <strong className="recruiter-portal__strong">{company}</strong>{" "}
                and your work on <span className="recruiter-portal__highlight">{product}</span>.
                Because I love building systems that actually solve real business problems, I knew I
                had to reach out regarding the{" "}
                <span className="recruiter-portal__highlight">{role}</span>.
              </p>

              <p className="recruiter-portal__body-paragraph">
                I've been working and studying in the software development world since I was 19.
                Over nearly 3 years of professional experience, I've tackled projects of all sizes,
                from custom CMS and E-commerce platforms to building modular desktop healthcare
                applications using C# (ASP.NET / MAUI) and Angular.
              </p>

              <p className="recruiter-portal__body-paragraph">
                But while that's my current professional core stack, I refuse to stay in a bubble. I
                am a tech-agnostic professional with a deep passion for software architecture and
                distributed networks. To push myself, I spend my spare time building complex side
                projects exploring Go (Golang), microservices, gRPC, and RabbitMQ, recently
                designing an AI-driven distributed IoT security system from scratch.
              </p>

              <p className="recruiter-portal__body-paragraph">
                Because of this constant hands-on experimentation, I don't get intimidated by a new
                stack. It's second nature for me to jump into an existing codebase, understand its
                architecture, and start contributing high-quality code quickly.
              </p>

              <p className="recruiter-portal__body-paragraph">
                I'm looking for a full-time internship opportunity of 600 hours starting on August
                3rd, 2026, where I'm eager to learn from your team.
              </p>

              <p className="recruiter-portal__body-paragraph">
                I've attached my CV, but you can also check out my code and past work at{" "}
                <a
                  href="https://raiiaa.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recruiter-portal__link"
                >
                  raiiaa.dev
                </a>
                .
              </p>

              <p>Let me know if you think I would be a good fit for your team.</p>
            </div>

            {/* Letter Signature */}
            <div className="recruiter-portal__signature">
              <div>
                <div className="recruiter-portal__signature-title">Atenciosamente,</div>
                <div className="recruiter-portal__signature-name">Rúben Alves</div>
              </div>
              <div className="recruiter-portal__signature-location">
                Benavente, Santarém, Portugal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
