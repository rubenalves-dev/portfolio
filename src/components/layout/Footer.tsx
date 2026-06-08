type FooterProps = {
  onOpenRecruiterPortal: () => void;
};

export default function Footer({ onOpenRecruiterPortal }: FooterProps) {
  return (
    <footer
      className="footer"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--ink)",
        borderTop: "0.5px solid rgba(250,249,247,0.08)",
        padding: "2rem 3.5rem",
      }}
    >
      <span className="footer__copy">
        © {new Date().getFullYear()} Rúben Alves. All rights reserved.
      </span>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button
          onClick={onOpenRecruiterPortal}
          className="footer__recruiter-link"
          style={{
            background: "none",
            border: "none",
            color: "rgba(250,249,247,0.4)",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            cursor: "pointer",
            textDecoration: "underline",
            letterSpacing: "0.04em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rose)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,249,247,0.4)")}
        >
          Recruiter Access
        </button>
        <span className="footer__url">raiiaa.dev</span>
      </div>
    </footer>
  );
}
