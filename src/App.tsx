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
    <div className="portfolio-app">
      {/* Navbar */}
      <Navbar
        onOpenRecruiterPortal={() => setRecruiterPortalOpen(true)}
        recruiterActive={recruiterModeActive}
      />

      {/* Recruiter Alert Toast */}
      {showRecruiterToast && (
        <div className="recruiter-toast">
          <div className="recruiter-toast__header">
            <span className="recruiter-toast__title">💼 Recruiter Mode Active</span>
            <button
              onClick={() => setShowRecruiterToast(false)}
              className="recruiter-toast__close-btn"
            >
              ✕
            </button>
          </div>
          <p className="recruiter-toast__desc">
            A personalized workspace for <strong>{urlCompany}</strong> has been loaded. Check your
            custom Cover Letter below.
          </p>
          <button
            onClick={() => {
              setRecruiterPortalOpen(true);
              setShowRecruiterToast(false);
            }}
            className="recruiter-toast__action-btn"
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
