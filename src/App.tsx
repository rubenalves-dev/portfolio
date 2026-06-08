import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/about/Hero";
import About from "./components/about/About";
import ExperienceSection from "./components/career/ExperienceSection";
import EducationSection from "./components/career/EducationSection";
import Projects from "./components/projects/Projects";
import type { ProjectData } from "./components/projects/Projects";
import StackDetail from "./components/career/StackDetail";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import ProjectModal from "./components/projects/ProjectModal";
import CoverLetterPortal from "./components/recruiter/CoverLetterPortal";

export default function App() {
  // Modal & Portal States
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [recruiterPortalOpen, setRecruiterPortalOpen] = useState(false);
  const [recruiterModeActive, setRecruiterModeActive] = useState(false);

  // Recruiter fields pre-fill state from URL
  const [urlCompany, setUrlCompany] = useState("Company");
  const [urlRole, setUrlRole] = useState("Software Engineering Internship");
  const [urlManager, setUrlManager] = useState("Hiring Manager");
  const [showRecruiterToast, setShowRecruiterToast] = useState(false);

  // URL Query Parameters inspection
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const companyParam = params.get("company");
    const roleParam = params.get("role") || params.get("job");
    const managerParam = params.get("manager") || params.get("recruiter") || params.get("hiring");

    if (companyParam || roleParam || managerParam) {
      setRecruiterModeActive(true);
      if (companyParam) setUrlCompany(companyParam);
      if (roleParam) setUrlRole(roleParam);
      if (managerParam) setUrlManager(managerParam);
      setShowRecruiterToast(true);
    }
  }, []);

  // IntersectionObserver reveal animation hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add("visible");
            observer.unobserve(el.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [selectedProject, recruiterPortalOpen]);

  // Smooth scroll handler helper
  const handleAnchorClick = (
    id: string,
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Navbar */}
      <Navbar
        onOpenRecruiterPortal={() => setRecruiterPortalOpen(true)}
        recruiterActive={recruiterModeActive}
      />

      {/* Recruiter Alert Toast */}
      {showRecruiterToast && (
        <div
          className="recruiter-toast"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 999,
            background: "var(--surface)",
            border: "1.5px solid var(--rose)",
            borderRadius: "8px",
            padding: "16px 20px",
            boxShadow: "0 10px 30px rgba(217, 99, 126, 0.15)",
            maxWidth: "360px",
            textAlign: "left",
            animation: "toast-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            className="recruiter-toast__header"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
          >
            <span
              className="recruiter-toast__title"
              style={{ fontSize: "14px", fontWeight: "bold", color: "var(--rose)" }}
            >
              💼 Recruiter Mode Active
            </span>
            <button
              onClick={() => setShowRecruiterToast(false)}
              className="recruiter-toast__close-btn"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "12px",
                color: "var(--muted)",
              }}
            >
              ✕
            </button>
          </div>
          <p
            className="recruiter-toast__desc"
            style={{
              fontSize: "12px",
              color: "var(--ink-soft)",
              marginTop: "6px",
              lineHeight: "1.5",
            }}
          >
            A personalized workspace for <strong>{urlCompany}</strong> has been loaded. Check your
            custom Cover Letter below.
          </p>
          <button
            onClick={() => {
              setRecruiterPortalOpen(true);
              setShowRecruiterToast(false);
            }}
            className="recruiter-toast__action-btn"
            style={{
              background: "var(--rose)",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "4px 8px",
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Open letter builder
          </button>
        </div>
      )}

      {/* Main Content Layout */}
      <main>
        <Hero
          onProjectsClick={(e) => handleAnchorClick("projects", e)}
          onContactClick={(e) => handleAnchorClick("contact", e)}
        />
        <About />
        <ExperienceSection />
        <EducationSection />
        <Projects onSelectProject={setSelectedProject} />
        <StackDetail />
        <Contact onScrollToTop={(e) => handleAnchorClick("top", e)} />
      </main>

      {/* Footer */}
      <Footer onOpenRecruiterPortal={() => setRecruiterPortalOpen(true)} />

      {/* Project Case Study Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Cover Letter Builder Portal Modal */}
      <CoverLetterPortal
        isOpen={recruiterPortalOpen}
        onClose={() => setRecruiterPortalOpen(false)}
        initialCompany={urlCompany}
        initialRole={urlRole}
        initialManager={urlManager}
      />
    </div>
  );
}
