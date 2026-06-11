import type { MouseEvent } from "react";
import Logo from "../../assets/logo.svg";

type FooterProps = {
  onOpenRecruiterPortal: () => void;
};

export default function Footer({ onOpenRecruiterPortal }: FooterProps) {
  const handleScrollToTop = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = (id: string, e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Branding Column */}
        <div className="footer__brand">
          <a
            href="#"
            className="footer__logo-link"
            onClick={handleScrollToTop}
            aria-label="Go to top"
          >
            <img src={Logo} className="footer__logo-svg" alt="Rúben Alves Logo" />
          </a>
          <p className="footer__description">
            Software Engineer building high-performance systems and dynamic client applications.
          </p>
        </div>

        {/* Links Column 1: Navigation */}
        <div className="footer__column">
          <span className="footer__column-title">Navigation</span>
          <ul className="footer__links">
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavLinkClick("about", e)}
                className="footer__link"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleNavLinkClick("experience", e)}
                className="footer__link"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavLinkClick("projects", e)}
                className="footer__link"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#stack"
                onClick={(e) => handleNavLinkClick("stack", e)}
                className="footer__link"
              >
                Stack
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Connect */}
        <div className="footer__column">
          <span className="footer__column-title">Connect</span>
          <ul className="footer__links">
            <li>
              <a
                href="https://github.com/raiiaa"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href="mailto:ruben@raiiaa.dev" className="footer__link">
                Email ↗
              </a>
            </li>
            <li>
              <button onClick={onOpenRecruiterPortal} className="footer__button-link">
                🔑 Recruiter Access
              </button>
            </li>
          </ul>
        </div>
      </div>

      <hr className="footer__divider" />

      {/* Bottom section */}
      <div className="footer__bottom">
        <span className="footer__copy">
          © {new Date().getFullYear()} Rúben Alves. All rights reserved.
        </span>
        <a
          href="https://raiiaa.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__url"
        >
          raiiaa.dev
        </a>
        <button
          onClick={handleScrollToTop}
          className="footer__scroll-top"
          aria-label="Scroll to top"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
