import type { MouseEvent } from "react";
import Logo from "../../assets/logo.svg";

export default function Footer() {
  const handleScrollToTop = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        </div>

        {/* Social Links */}
        <div className="footer__socials">
          <a
            href="https://github.com/rubenalves-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/raiiaa"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:hello@raiiaa.dev" className="footer__link">
            Email ↗
          </a>
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
