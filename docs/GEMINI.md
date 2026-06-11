# Gemini Structural Changes Log

This document records the structural and architectural modifications applied to this codebase.

## 2026-06-11 - Header Transparency Fix & CSS Syntax Clean Up

### Structural Changes

- Corrected invalid `hsla(var(...), ...)` syntax to the standard CSS `hsl(var(...) / ...)` format throughout `src/index.css` (36 occurrences). This resolved a layout issue where the fixed navigation header backdrop became fully transparent due to browser syntax errors, restoring the light translucent background and maintaining text readability above all backgrounds.
- Fixed the logo import in `src/components/layout/Navbar.tsx` from an unresolved `@/` alias import to a relative path import (`../../assets/logo.svg`), resolving the production build failure, and applied the `nav__logo-svg` class name to constrain the image size to 52px.

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

## 2026-06-08 - UI Fixes & Component Refinement

### Structural Changes

- Defined missing theme custom properties (`--surface`, `--surface-2`, `--border-med`, `--rose`, `--rose-light`, `--rose-pale`, `--rose-dark`, `--ink`, `--ink-soft`) in `src/index.css` to resolve transparent/black backgrounds in projects modals and other inline-styled cards.
- Refactored `ProjectModal` to conditionally render the "View on GitHub" button based on whether a repository link (`repo` property) is passed, preventing empty repo links from exposing placeholders or leaking private project details. Made `repo` optional in the `ProjectData` type declaration.
- Replaced the unstyled `btn-ghost` project link in `Hero.tsx` with the standardized, reusable `Button` component using the `ghost` variant.

## 2026-06-09 - Contact and Footer Light Theme Redesign

### Structural Changes

- Transitioned both the Contact section (`#contact`) and the Footer component (`Footer.tsx`) to a clean light theme matching the rest of the application.
- Corrected BEM class mismatches in the Contact component styling and cleaned up redundant inline layout styles in `Contact.tsx`.
- Redesigned and refactored the footer component in `src/components/layout/Footer.tsx` to feature a BEM-structured grid layout.
- Added branding column to the footer with the portfolio SVG logo configured with dark fill styles (`fill: "hsl(var(--foreground))"`) to ensure visibility on the light warm-gray footer background.
- Introduced Quick Links columns inside the footer for "Navigation" (About, Experience, Projects, Stack) and "Connect" (GitHub, LinkedIn, Email, Recruiter Access).
- Replaced unstyled copyright and URL labels with styled CSS-defined elements (`.footer__copy`, `.footer__url`, `.footer__scroll-top`).
- Added a "Back to Top" smooth scrolling button and styled interactive link hover effects (color transitions, micro-translate movements).
- Refactored `src/index.css` to define footer cell styles following BEM methodology, removing outdated class names (`.footer-copy`, `.footer-url`) and redundant inline style overrides.
