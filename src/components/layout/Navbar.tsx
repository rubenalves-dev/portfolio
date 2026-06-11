import Button from "../ui/Button";
import Logo from "../../assets/logo.svg";

type NavbarProps = {
  onOpenRecruiterPortal: () => void;
  recruiterActive: boolean;
};

export default function Navbar({ onOpenRecruiterPortal, recruiterActive }: NavbarProps) {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo" aria-label="Rúben Alves Logo">
        <img src={Logo} className="nav__logo-svg" alt="Rúben Alves Logo" />
      </a>

      {/* Floating Active Pulse for Internship */}
      <div
        className="nav__status"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "var(--rose-pale)",
          border: "0.5px solid var(--rose-light)",
          borderRadius: "99px",
          padding: "4px 10px",
          fontSize: "11px",
          fontFamily: "var(--font-mono)",
          color: "var(--rose)",
          marginLeft: "15px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            background: "var(--rose)",
            borderRadius: "50%",
            boxShadow: "0 0 6px var(--rose)",
          }}
        />
        <span>Internship Aug '26</span>
      </div>

      <ul className="nav__links" style={{ marginLeft: "auto", marginRight: "2.5rem" }}>
        <li>
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="nav__link">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="nav__link">
            Projects
          </a>
        </li>
        <li>
          <a href="#stack" className="nav__link">
            Stack
          </a>
        </li>
        {recruiterActive && (
          <li>
            <a
              href="#letter"
              className="nav__link"
              style={{
                color: "var(--rose)",
                fontWeight: "500",
                borderBottom: "1px dashed var(--rose)",
              }}
            >
              Cover Letter
            </a>
          </li>
        )}
      </ul>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          onClick={onOpenRecruiterPortal}
          className="nav__recruiter-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--muted)",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
          title="Recruiter Portal"
        >
          🔑 <span style={{ textDecoration: "underline" }}>Recruiter Area</span>
        </button>
        <Button href="#contact" variant="nav-cta" className="nav__cta">
          Get in touch
        </Button>
      </div>
    </nav>
  );
}
