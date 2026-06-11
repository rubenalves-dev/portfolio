import SectionLabel from "../ui/SectionLabel";

type ContactProps = {
  onScrollToTop: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
};

export default function Contact({ onScrollToTop }: ContactProps) {
  return (
    <section id="contact" className="section contact">
      <div className="reveal visible contact__grid">
        {/* Contact Left Info */}
        <div className="contact__left">
          <SectionLabel className="contact__label">Contact</SectionLabel>
          <h2 className="section-title contact__title">
            Ready for the <em>next challenge.</em>
          </h2>
          <p className="contact__sub">
            I'm looking for a full-time 600h internship starting August 3rd, 2026. If you think I'd
            be a good fit — let's talk.
          </p>
          <div className="contact__links">
            <a href="#top" className="contact__link" onClick={onScrollToTop}>
              <div className="contact__link-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="contact__link-label">Portfolio</div>
                <div className="contact__link-val">raiiaa.dev (Scroll to top)</div>
              </div>
            </a>
            <a
              href="https://github.com/rubenalves-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <div className="contact__link-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <div className="contact__link-label">GitHub</div>
                <div className="contact__link-val">github.com/rubenalves-dev</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/raiiaa"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <div className="contact__link-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="contact__link-label">LinkedIn</div>
                <div className="contact__link-val">Rúben Alves</div>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Right Card */}
        <div className="contact__right-cta">
          <div className="contact__right-cta-title">
            Internship ready.
            <br />
            August 2026.
          </div>
          <div className="contact__right-cta-sub">
            600 hours. Full-time. Eager to learn and contribute from day one.
          </div>
          <a href="mailto:hello@raiiaa.dev" className="button button--white">
            Send me an email →
          </a>
        </div>
      </div>
    </section>
  );
}
