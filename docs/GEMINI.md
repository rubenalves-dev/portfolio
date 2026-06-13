# Gemini Structural Changes Log

This document records the structural and architectural modifications applied to this codebase.

## 2026-06-13 - Modular CSS Refactoring

### Structural Changes

- Extracted monolithic styles from [index.css](file:///Users/rubenalves/Documents/repos/portfolio/src/index.css) into modular CSS files grouped under a new `src/styles/` directory:
  - Created [base.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/base.css) for fonts, resets, CSS variables, body styles, scrollbars, and print layout modifiers.
  - Created [animations.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/animations.css) for standard keyframe definitions and reveal animation classes.
  - Created [atoms.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/atoms.css) for primitive UI atoms (buttons, badges, section labels/titles) and the PhotoFrame layout styles.
  - Created [navbar.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/navbar.css) for top navigation headers, active modes, and status dots.
  - Created [hero.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/hero.css) for the hero layout, text alignments, network canvas overlays, and live indicators.
  - Created [about.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/about.css) for biographical grid structures, text blocks, and descriptive cards.
  - Created [career.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/career.css) for career path cards, timeline trees, and stack columns lists.
  - Created [projects.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/projects.css) for project showcase cards, grids, hover highlights, and overlay dialog modals.
  - Created [contact.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/contact.css) for contact cards links, social icons, and right call-to-actions.
  - Created [footer.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/footer.css) for footer brand grids, logo vectors, quick links flexes, and copyrights.
  - Created [recruiter.css](file:///Users/rubenalves/Documents/repos/portfolio/src/styles/recruiter.css) for recruiter warning toasts and the interactive cover letter sheet modals.
- Rewrote [index.css](file:///Users/rubenalves/Documents/repos/portfolio/src/index.css) to act solely as a clean stylesheet hub referencing the modular files via native CSS `@import` statements.

## 2026-06-12 - Footer Redesign & Simplification

### Structural Changes

- Simplified [Footer.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/layout/Footer.tsx) layout by removing the Navigation links column and the brand description paragraph, and cleaning up the unused `handleNavLinkClick` function.
- Updated [index.css](file:///Users/rubenalves/Documents/repos/portfolio/src/index.css) to increase the footer logo svg width to `14rem` (~224px, satisfying >200px) and styled the layout to place the logo on the left and social/connect links in a horizontal flexbox row (`.footer__socials`) on the right.
- Streamlined footer height by reducing vertical paddings (from `4.5rem` to `3rem` on desktop, and `3rem` to `2rem` on mobile) and bottom margins.

## 2026-06-12 - Typography Simplification & Font Streamlining

### Structural Changes

- Added custom [Arciform](file:///Users/rubenalves/Documents/repos/portfolio/src/assets/fonts/Arciform.otf) font asset in `src/assets/fonts/` as the main sans-serif typeface to align visual identity with the customized logo.
- Modified [index.html](file:///Users/rubenalves/Documents/repos/portfolio/index.html) Google Fonts imports to remove `Instrument Sans` and retain only `DM Serif Display` and `DM Mono`.
- Updated [index.css](file:///Users/rubenalves/Documents/repos/portfolio/src/index.css) to load local `Arciform` font-face, declare unified fluid typography variables (`--font-size-h1`, `--font-size-h2`, `--font-size-h3`, `--font-size-body`, `--font-size-info` using rem units), and remove all hardcoded font-sizes throughout.
- Restrained the serif font (`var(--font-display)`) exclusively to the main page section titles and hero headings, re-mapping all other headings, card names, modal sections, and portal elements to the sans-serif `Arciform` font (`var(--font-body)`).
- Swapped navbar links `.nav__links a` from using `--font-mono` (monospace) to `--font-body` (sans-serif / Arciform) to simplify visual headers.

## 2026-06-12 - Secret Recruiter Portal Shortcut

### Structural Changes

- Modified [Navbar.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/layout/Navbar.tsx) to remove the visible `Cover Letter` link and the `🔑 Recruiter Area` button. Implemented a secret shortcut on the "Get in touch" `Button` using `metaKey + altKey` (Command + Option on macOS) and `ctrlKey + altKey` (Control + Alt on Windows) to open the Recruiter Portal modal without triggering normal scroll navigation.
- Modified [Footer.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/layout/Footer.tsx) to completely remove the visible `🔑 Recruiter Access` button and simplified its props.
- Modified [App.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/App.tsx) to update component instances of `<Navbar>` and `<Footer>` by removing outdated properties no longer required.

## 2026-06-11 - Portfolio Content Sync with CV

### Structural Changes

- Updated [Projects.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/projects/Projects.tsx) and [ProjectModal.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/projects/ProjectModal.tsx) to support an optional `website` link parameter on the `ProjectData` type interface.
- Integrated the `.project-modal__actions` CSS styling block in [index.css](file:///Users/rubenalves/Documents/repos/portfolio/src/index.css) to group the action buttons (e.g. GitHub and live URL links) in the modal footer using BEM spacing without inline styles.
- Updated the content of [EducationSection.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/career/EducationSection.tsx), [ExperienceSection.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/career/ExperienceSection.tsx), and [Projects.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/projects/Projects.tsx) to match the official CV details (Santarém, Freelance medical app, Bomsite projects/jobs, Link Consulting, rabbit mobile GmbH) using professional, portfolio-differentiated copy.

## 2026-06-11 - Interactive Hero Network Graph

### Structural Changes

- Created [NetworkGraph.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/ui/NetworkGraph.tsx) to handle canvas-based floating physics node particles, connecting links, and dynamic mouse-attraction interactions (listening on parent section hover for full-area coverage). Fixed node initialization to size particles dynamically inside the animation loop when non-zero bounds are first loaded, resolving initial Y-axis bottom clustering.
- Restructured [Hero.tsx](file:///Users/rubenalves/Documents/repos/portfolio/src/components/about/Hero.tsx) to overlay a single `.hero__content` text panel on top of the sibling `<NetworkGraph />` canvas.
- Configured [index.css](file:///Users/rubenalves/Documents/repos/portfolio/src/index.css) to make the network graph canvas fill the entire hero section background (styled with a radial light gradient highlighting the right side), centering and offsetting the text panel by `10%` to the left for an asymmetric premium visual. Automatically disabled canvas rendering on touch screens and mobile viewports.

## 2026-06-11 - Refactor Inline Styles to BEM CSS Rules

### Structural Changes

- Removed all static inline `style={{ ... }}` declarations across all component files and root `src/App.tsx`.
- Appended BEM class styling definitions at the end of `src/index.css` for all page sections, controls, forms, panels, and custom cards.
- Restructured `src/components/ui/PhotoFrame.tsx` into a stateless functional component by replacing manual React state-driven hover shadows and transforms with pure CSS `:hover` states.
- Cleaned up manual React event-based hover styling in `src/components/projects/ProjectModal.tsx` for close and link buttons using CSS `:hover` overrides.
- Converted SVG path fill properties in `src/components/layout/Footer.tsx` from React style attributes to BEM class rules (`.footer__logo-path`, `.footer__logo-path--accent`).
- Added a dynamic `badge--clickable` class in `src/components/ui/Badge.tsx` to encapsulate button badge pointer configurations inside BEM rules.

## 2026-06-11 - Hero Section Simplification

### Structural Changes

- Refactored `src/components/about/Hero.tsx` to simplify the layout from a split two-column grid to a single-column container structure.
- Removed the redundant right-hand card containing excessive tech badges and stats (`∞ stacks learned`, `600h internship ready`).
- Integrated the core information (`3+ yrs experience` and main core stack badges: `C# / ASP.NET`, `Angular`, and `MAUI`) into a clean metadata section (`.hero__meta`) situated between the subheading and action buttons.
- Cleaned up obsolete styles in `src/index.css` and added classes to support the new metadata layout and responsive behaviors.

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
