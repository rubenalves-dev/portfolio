import type { MouseEvent } from "react";

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
            <svg
              className="footer__logo-svg"
              viewBox="255 270 490 330"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
            >
              <g transform="matrix(1.7869,0,0,1.7869,-456.036,-481.824)">
                <g transform="matrix(1,0,0,1,-23.3757,6.57343)">
                  <path
                    d="M347.032,532.11C347.032,528.11 351.127,520.853 359.032,516.11C364.032,513.11 375.032,512.11 380.032,513.11C380.032,513.11 386.829,513.781 391.376,516.5L384.133,530.985C381.133,528.828 378.204,527.75 375.344,527.75C366.719,527.75 362.407,534.266 362.407,547.297L362.407,582.805L346.587,582.805C346.587,582.805 347.032,541.395 347.032,532.11Z"
                    style={{ fill: "hsl(var(--foreground))", fillRule: "nonzero" }}
                  />
                </g>
                <g transform="matrix(1,0,0,1,3.77277,6.89043)">
                  <path
                    d="M466.032,540.11C466.032,553.11 465.837,582.805 465.837,582.805L449.946,582.805L449.946,575.633C443.43,581.727 436.532,583.11 429.032,583.11C419.563,583.11 411.626,581.352 405.438,574.508C399.298,567.524 396.227,558.805 396.227,548.352C396.227,538.086 399.298,529.531 405.438,522.688C411.579,515.844 421.029,512.586 432.032,512.422C453.032,512.11 466.032,528.11 466.032,540.11ZM412.399,548.352C412.399,554.914 413.382,558.797 416.032,562.11C420.032,567.11 425.548,569.11 431.032,569.11C436.891,569.11 443.423,566.141 447.032,562.11C449.718,559.11 451.032,554.11 450.93,548.703C450.81,542.283 449.126,536.985 445.516,532.813C441.907,528.735 437.219,526.696 431.454,526.696C426.016,526.696 421.469,528.758 417.813,532.883C414.204,537.055 412.399,542.211 412.399,548.352Z"
                    style={{ fill: "hsl(var(--foreground))", fillRule: "nonzero" }}
                  />
                </g>
                <g transform="matrix(1,0,0,1,223.773,6.89043)">
                  <path
                    d="M466.032,540.11C466.032,553.11 465.837,582.805 465.837,582.805L449.946,582.805L449.946,575.633C443.43,581.727 436.532,583.11 429.032,583.11C419.563,583.11 411.626,581.352 405.438,574.508C399.298,567.524 396.227,558.805 396.227,548.352C396.227,538.086 399.298,529.531 405.438,522.688C411.579,515.844 421.029,512.586 432.032,512.422C453.032,512.11 466.032,528.11 466.032,540.11ZM412.399,548.352C412.399,554.914 413.382,558.797 416.032,562.11C420.032,567.11 425.548,569.11 431.032,569.11C436.891,569.11 443.423,566.141 447.032,562.11C449.718,559.11 451.032,554.11 450.93,548.703C450.81,542.283 449.126,536.985 445.516,532.813C441.907,528.735 437.219,526.696 431.454,526.696C426.016,526.696 421.469,528.758 417.813,532.883C414.204,537.055 412.399,542.211 412.399,548.352Z"
                    style={{ fill: "hsl(var(--foreground))", fillRule: "nonzero" }}
                  />
                </g>
                <g transform="matrix(1,0,0,1,325.577,6.89043)">
                  <path
                    d="M466.032,540.11C466.032,553.11 465.837,582.805 465.837,582.805L449.946,582.805L449.946,575.633C443.43,581.727 436.532,583.11 429.032,583.11C419.563,583.11 411.626,581.352 405.438,574.508C399.298,567.524 396.227,558.805 396.227,548.352C396.227,538.086 399.298,529.531 405.438,522.688C411.579,515.844 421.029,512.586 432.032,512.422C453.032,512.11 466.032,528.11 466.032,540.11ZM412.399,548.352C412.399,554.914 413.382,558.797 416.032,562.11C420.032,567.11 425.548,569.11 431.032,569.11C436.891,569.11 443.423,566.141 447.032,562.11C449.718,559.11 451.032,554.11 450.93,548.703C450.81,542.283 449.126,536.985 445.516,532.813C441.907,528.735 437.219,526.696 431.454,526.696C426.016,526.696 421.469,528.758 417.813,532.883C414.204,537.055 412.399,542.211 412.399,548.352Z"
                    style={{ fill: "hsl(var(--foreground))", fillRule: "nonzero" }}
                  />
                </g>
                <g transform="matrix(0.870782,0,0,0.870782,131.552,-46.024)">
                  <g transform="matrix(169.757,0,0,169.757,423.161,730.406)">
                    <path
                      d="M0.179,-0.476L0.179,-0L0.069,-0L0.069,-0.476L0.179,-0.476ZM0.053,-0.673C0.053,-0.693 0.06,-0.709 0.074,-0.723C0.088,-0.737 0.104,-0.744 0.124,-0.744C0.144,-0.744 0.161,-0.737 0.175,-0.723C0.189,-0.709 0.196,-0.693 0.196,-0.673C0.196,-0.653 0.189,-0.636 0.175,-0.622C0.161,-0.608 0.144,-0.601 0.125,-0.601C0.105,-0.601 0.088,-0.608 0.074,-0.622C0.06,-0.636 0.053,-0.653 0.053,-0.673Z"
                      style={{ fill: "var(--rose)", fillRule: "nonzero" }}
                    />
                  </g>
                </g>
                <g transform="matrix(0.870782,0,0,0.870782,184.7,-46.6457)">
                  <g transform="matrix(169.757,0,0,169.757,423.161,730.406)">
                    <path
                      d="M0.179,-0.476L0.179,-0L0.069,-0L0.069,-0.476L0.179,-0.476ZM0.053,-0.673C0.053,-0.693 0.06,-0.709 0.074,-0.723C0.088,-0.737 0.104,-0.744 0.124,-0.744C0.144,-0.744 0.161,-0.737 0.175,-0.723C0.189,-0.709 0.196,-0.693 0.196,-0.673C0.196,-0.653 0.189,-0.636 0.175,-0.622C0.161,-0.608 0.144,-0.601 0.125,-0.601C0.105,-0.601 0.088,-0.608 0.074,-0.622C0.06,-0.636 0.053,-0.653 0.053,-0.673Z"
                      style={{ fill: "var(--rose)", fillRule: "nonzero" }}
                    />
                  </g>
                </g>
                <g transform="matrix(1.40385,0,0,1.30476,-63.7392,-370.371)">
                  <path
                    d="M511.519,754.862C502.441,778.017 471.238,795.442 434,795.442C396.762,795.442 365.559,778.017 356.481,754.862L355.152,751.47L363.398,751.47L363.995,752.926C372.457,773.545 400.69,788.384 434,788.384C467.31,788.384 495.543,773.545 504.005,752.926L504.602,751.47L512.848,751.47L511.519,754.862Z"
                    style={{ fill: "var(--rose)" }}
                  />
                </g>
              </g>
            </svg>
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
