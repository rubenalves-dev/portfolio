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
      <div className="nav__status">
        <span className="nav__status-dot" />
        <span>Internship Aug '26</span>
      </div>

      <ul className="nav__links">
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
            <a href="#letter" className="nav__link nav__link--recruiter">
              Cover Letter
            </a>
          </li>
        )}
      </ul>

      <div className="nav__actions">
        <button
          onClick={onOpenRecruiterPortal}
          className="nav__recruiter-btn"
          title="Recruiter Portal"
        >
          🔑 <span className="nav__recruiter-btn-text">Recruiter Area</span>
        </button>
        <Button href="#contact" variant="nav-cta" className="nav__cta">
          Get in touch
        </Button>
      </div>
    </nav>
  );
}
