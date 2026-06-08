# Gemini Structural Changes Log

This document records the structural and architectural modifications applied to this codebase.

## 2026-06-08 - React Portfolio Migration

### Structural Changes

- Migrated static single-page HTML layout into React components using Vite+.
- Introduced **Atomic Design** directory structure inside `src/components`:
  - `src/components/atoms/`: Small UI elements (`Button`, `Badge`, `SectionLabel`, `StatItem`).
  - `src/components/molecules/`: Composite layouts (`PhotoFrame`, `ProjectCard`, `ExperienceCard`, `EducationCard`, `StackColumn`).
  - `src/components/cells/`: Complex sections (`Navbar`, `Hero`, `About`, `ExperienceSection`, `EducationSection`, `Projects`, `ProjectModal`, `StackDetail`, `Contact`, `Footer`, `CoverLetterPortal`).
- Updated project metadata and loaded custom Google Fonts in `index.html`.
- Rewrote `src/index.css` to adopt custom typography variables, dark mode styling, and design system variables.
- Created `public/profile.jpg` containing a generated profile picture.
- Custom recruiter query parameters configured in `src/App.tsx` to prefill cover letter states dynamically.
- Integrated detail case-study modals for projects, removing broken external `raiiaa.dev` references.

## 2026-06-08 - BEM Refactoring & HSL Design System

### Structural Changes

- Replaced the hardcoded hex design variables in `src/index.css` with a **shadcn-style HSL design system** (`--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--muted`, `--border`, `--ring`, `--radius`).
- Refactored all components and styling rules to follow **BEM (Block, Element, Modifier) methodology** (e.g. `hero`, `hero__title`, `hero__title--highlight`).
- Extracted and unified layout classes in CSS using HSL functional colors.

## 2026-06-08 - Component Directory Semantic Restructuring

### Structural Changes

- Reorganized the component directory structure from complexity naming (`atoms`, `molecules`, `cells`) to semantic, functional groupings under `src/components/`:
  - `ui/`: Core shared UI elements (`Button`, `Badge`, `SectionLabel`, `StatItem`, `PhotoFrame`).
  - `layout/`: Sticky shell containers (`Navbar`, `Footer`).
  - `about/`: Biography elements (`Hero`, `About`).
  - `career/`: Experience/education cards and stack grids (`ExperienceSection`, `ExperienceCard`, `EducationSection`, `EducationCard`, `StackDetail`, `StackColumn`).
  - `projects/`: Showcases and case-study modals (`Projects`, `ProjectCard`, `ProjectModal`).
  - `recruiter/`: Interactive dynamic cover letters (`CoverLetterPortal`).
  - `contact/`: Contact channel listings (`Contact`).
- Updated relative import paths in all component files and the application root `App.tsx`.
