# AI Coding Agent Instructions: Cultre Boat Homepage Redesign

This document serves as the single source of truth for the architecture, engineering standards, UI/UX guidelines, performance limits, and workflows for the **Cultre Boat Homepage Redesign** project. Every AI coding assistant modifying this codebase must strictly adhere to these rules.

---

## 1. Project Identity

* **Project Name:** Cultre Boat
* **Project Type:** Creative Agency & Digital Branding Studio (Homepage Redesign)
* **Project Goal:** Build an immersive, visually striking, interactive, and high-performance agency homepage that showcases design talent, digital storytelling capabilities, and WebGL animations.
* **Target Users:** CMOs, Brand Managers, Founders, Design Directors, and prospective creative clients looking for high-end design, branding, and interactive experiences.
* **Business Purpose:** Position Cultre Boat as a premier, technologically advanced creative studio to capture high-value enterprise branding and WebGL development contracts.
* **Core Features:**
  * **Smooth Scroll Page Wrapper:** Global momentum-based physics scroll using Lenis.
  * **Immersive Hero Section:** High-impact bold typography, micro-interactions, floating portfolio previews, and interactive branding story content.
  * **Bento Grid Layout:** Dynamic grid highlighting core agency services, creative processes, and interactive feature highlights.
  * **Service Categories:** Interactive reveal tabs showing core disciplines (Branding, Content, Interactive Dev, Campaigns).
  * **Circular 3D Gallery:** An advanced WebGL cylindrical gallery component wrapping portfolio screenshots using React Three Fiber / OGL / GSAP.
  * **Cursor Interactive Effects:** Custom mouse triggers (e.g. `ClickSpark` physics particles) to make user interaction feel responsive and alive.
  * **Case Study / Product Grid:** Curated showcase of detailed case studies, digital collectibles, or branding packages with sleek card layouts.

---

## 2. Project Overview

* **Overview:** Cultre Boat is a modern website designed to wow users immediately. It blends standard HTML layout elements with high-performance creative coding (WebGL, canvas particle physics, advanced typography, and smooth transitions).
* **Why it exists:** Agency homepage markets are highly competitive. A mediocre, static website fails to establish prestige. This site acts as a living demonstration of the studio's technical and visual expertise.
* **Primary Workflows:** 
  1. User lands -> receives instant visual hook (Hero typography, floating media, particle cursor).
  2. User scrolls -> experience seamless smooth-scrolling parallax effects and text reveals.
  3. User interacts with 3D/WebGL assets -> engages with custom Circular gallery.
  4. User browses Product Grid -> views case studies and services.
  5. User converts -> clicks high-contrast, interactive CTAs to contact the team.
* **Expected Experience:** Ultra-premium visual styling, fluid 60FPS motion, sophisticated typography, subtle color gradients, dark mode aesthetics, and immediate responsive layouts.

---

## 3. Tech Stack

To ensure performance and maintainability, stick strictly to these validated technologies:

* **Frontend Framework:** React (v18.3.1) with TypeScript and Vite
* **Database & API Client:** Supabase Database (via `@supabase/supabase-js` client wrapper)
* **Server State Management:** TanStack Query (`@tanstack/react-query` v5)
* **Styling System:** Tailwind CSS (v3.4) + PostCSS + Tailwind CSS Animate
* **UI Components:** Radix UI primitives integrated via **shadcn/ui** configurations
* **Smooth Scrolling:** Lenis Scroll (`@studio-freight/lenis`)
* **3D & Creative Canvas:** Three.js, React Three Fiber (R3F), React Three Drei, and OGL
* **Motion & Animations:** GSAP (`gsap` + `@gsap/react`) for timeline animations; Framer Motion for scroll-triggered page layout triggers
* **Testing Suite:** Vitest + React Testing Library + jsdom
* **Linting / Tooling:** ESLint, TypeScript-ESLint

Do **NOT** introduce alternative libraries (e.g. framer-motion alternatives, custom state machines, or other CSS-in-JS libraries) without explicit approval.

---

## 4. Development Philosophy

1. **Simplicity First:** Keep layout markup clean. Defer code to sub-components once a file grows beyond 200 lines.
2. **Readability Over Cleverness:** Write clear math and vector formulas when doing Three.js / Canvas logic. Document complex equations inline.
3. **Feature-by-Feature Development:** Complete individual sections, including responsive design and transitions, before moving to the next.
4. **Avoid Overengineering:** Use native CSS transitions and animations where possible. Only use R3F or canvas loops for experiences that cannot be achieved with plain DOM elements.
5. **Security First:** Never expose database keys in public directories. Ensure Supabase Row Level Security (RLS) is planned for any data transactions.
6. **WebGL Context Management:** Always clean up event listeners, dispose of Geometries/Materials/Textures in Three.js on unmount to prevent severe memory leaks.

---

## 5. Architecture Guidelines

### Recommended Folder Structure
```
src/
├── assets/          # Compressed images, SVGs, custom 3D assets/textures
├── components/      # React components
│   ├── ui/          # Low-level shadcn/ui components (Radix primitives)
│   ├── Header.tsx   # Global site header navigation
│   ├── Hero.tsx     # Hero presentation layout
│   ├── WebGL/       # Modular WebGL / 3D Canvas wrapper components
│   └── ...          # Feature sections (Bento, Gallery, ProductGrid)
├── hooks/           # Custom React hooks (e.g. mouse trackers, query hooks)
├── integrations/    # Supabase initialization client configurations
├── lib/             # Utilities (Tailwind merge helpers, constants)
├── pages/           # Page containers (Index, NotFound)
├── test/            # Global Vitest configuration and setups
├── App.tsx          # Global router, query provider, global layouts
└── main.tsx         # Root mounting point
```

### Responsibility Matrix
* **Pages:** Fetch state dependencies and assemble sections. They do not contain design system CSS or complex layout definitions directly.
* **Components:** Self-contained UI elements. Design-system compliant.
* **WebGL Components:** Isolated 3D render loops, canvas layouts, and custom shaders. Exposed to pages/components via basic React interfaces.
* **Integrations:** Global API instances (e.g., Supabase client). Do not place business logic here.

---

## 6. UI/UX Rules

* **Design Consistency:** All elements must align with our premium dark-mode theme. Use neutral backdrops (e.g., `#09090b` / Tailwind `zinc-950`) combined with HSL-based accents (e.g., `#3b82f6` blue/accent gradients).
* **Responsive Behavior:** Every component must adapt elegantly to breakpoints. 
  * *R3F/WebGL:* Scale the field of view (FOV) or camera position dynamically on resize.
  * *Mobile Grid:* Convert multi-column Bento configurations to stacked rows.
* **Typography:** Main headers use `font-display` (heavy sans-serif, uppercase style). Body text must use legible font sizes with structured line-heights (`leading-relaxed`).
* **Color System:** Use HSL variables to support clean theme values. Prefer dark, deep colors to make neon gradients and interactive click feedback POP.
* **Accessibility (a11y):**
  * Provide `aria-label` or `aria-hidden` attributes appropriately on images, interactive components, and canvas controls.
  * Interactive components must support keyboard navigation (`tabIndex={0}`, `:focus-visible`).
* **Micro-interactions:** Buttons must use subtle scaling (`whileHover={{ scale: 1.02 }}`), hover offsets, and text reveal transitions.

---

## 7. Component Rules

* **When to Create:** Create a new component if an element is duplicated, represents a clear visual block (like a specific section of the landing page), or contains complex animations that bloat the parent component.
* **Reusability:** Code components in `components/` to accept dynamic props (e.g., arrays, custom styles, titles) rather than hardcoding static datasets inside layout files.
* **Naming Conventions:** 
  * Files: PascalCase for components (`BentoSection.tsx`, `CircularGallery.tsx`).
  * Functions: PascalCase matching the file name.
* **Premature Abstraction:** Do not write global wrapper hooks or reusable UI primitives unless a component pattern is repeated 3 or more times.

---

## 8. State Management Rules

* **Local UI State:** Use React `useState` and `useRef` for visual controls (toggles, hover-states, viewport-entered triggers, canvas render states).
* **Global Context:** Use React Context sparingly (e.g., cursor coordinate sharing, global sound controllers).
* **Server State:** Handle all data queries/mutations with TanStack Query (`@tanstack/react-query`). Ensure keys are structured: `['resource', id]`.
* **WebGL States:** Store variables optimized for animations (e.g., target scroll speed, rotation velocity) in mutable `useRef` variables to bypass React render cycles inside high-performance `requestAnimationFrame` loops.

---

## 9. API & Backend Rules

* **Client Invocation:** Interact with Supabase via the centralized client in `@/integrations/supabase/client`.
* **Validation:** Validate any data passing to or from APIs with **Zod** schema parser models.
* **Errors:** Gracefully handle failed queries. Display generic toast alerts (`sonner`) instead of raw technical database trace details.
* **Rate Limits:** Debounce rapid user events (e.g., form submissions, window resizes) before initiating backend requests.

---

## 10. Security Rules

* **Input Filtering:** Sanitize any custom user strings to prevent Cross-Site Scripting (XSS).
* **DOM Injection:** Avoid using `dangerouslySetInnerHTML`. If mandatory, sanitize inputs using safe escaping scripts.
* **Secret Isolation:** API tokens, database passwords, and analytics keys must reside in `.env`. Never commit keys to Git.
* **Supabase Security:** Make sure database tables are protected by Row Level Security (RLS) policies.

---

## 11. Database Rules

* **Conventions:** Follow `snake_case` naming for tables and columns (e.g., `featured_projects`).
* **Relationships:** Define clear foreign keys and cascade operations in Supabase configurations.
* **Indexes:** Create indexes on columns targeted by filters (`where`) or ordering rules to maintain fast API response times.

---

## 12. Performance Rules

* **Asset Optimization:** Ensure all background and hero images are compressed (preferably `.webp` format), optimized for resolution, and lazy-loaded (except hero above-the-fold content).
* **Frame Rate Integrity (60FPS):**
  * Avoid updating React state variables inside R3F `useFrame` or custom canvas animation loops. Use refs to manipulate Three.js mesh positions directly.
  * Implement scroll performance optimization (e.g., skip complex calculations on elements out of the viewport).
* **Lazy Loading:** Dynamically import heavier 3D packages or interactive WebGL canvas wrappers (e.g. `CircularGallery` or `DomeGallery`) using `React.lazy` and `Suspense` to improve Initial Page Load speed.

---

## 13. Testing Requirements

* **Core Focus:** Run tests to confirm basic layouts, routing, page responses, utility functions, and responsive behaviors.
* **Test Command:** Execute `npm run test` to execute the Vitest suite.
* **Component Testing:** Utilize `@testing-library/react` and `jsdom` to verify components mount correctly and respond to simulated click actions.

---

## 14. Code Quality Rules

* **Strict TypeScript:** Do not bypass compiler type safety. Use of `any` is strictly prohibited. Define rigorous interfaces and types for all props, states, and return parameters.
* **Lint Compliance:** Clean all lint issues (`npm run lint`) before committing. Ensure code matches formatting settings.
* **Comments & Docs:** Add JSDoc headers to elaborate on custom hooks, matrix calculations, canvas physics, and complex layout logic.

---

## 15. AI Assistant Behavior

When working on this codebase, the AI assistant **MUST**:
1. **Acknowledge and Read:** Confirm it has read and understands this `agents.md` file before proposing any edits.
2. **Context-Preservation:** Keep existing page sections intact unless specifically requested to rebuild them.
3. **No Redundant Refactors:** Do not rewrite fully functioning styles, folder structures, or dependencies simply to adopt a preferred library or stylistic change.
4. **GLSL & 3D Math Safety:** If adding custom shaders or Three.js effects, explain the math and performance tradeoffs (e.g. vertex calculations, texture resolution limits).
5. **No Breakages:** Ensure all scripts, routers, and imports remain fully operational.

---

## 16. Communication Style

* **Professional & Concise:** Use clear, technical, architectural language.
* **Explicit Tradeoffs:** Document design/performance choices, specifically when balancing premium animations with initial page load speed.
* **Checklist Outlines:** Provide a brief summary of modification steps and testing details when ending a conversation.

---

## 17. Project-Specific Constraints

* **Strict Tailwind Integration:** All HTML layout modifications must utilize Tailwind utility classes or custom animations defined in `tailwind.config.ts`. Avoid raw inline styling.
* **Graceful Degradation:** If the user's browser does not support WebGL or encounters an error initializing the 3D context, degrade gracefully to a clean 2D layout grid instead of crashing the site.
* **Lovable Synchronicity:** Maintain standard structure configurations to ensure continuous builds and seamless syncing.

---

## 18. Agent Skills Integration

Before implementing any feature, fixing any bug, performing any refactor, generating any documentation, designing architecture, writing tests, or making technical decisions:

1. **Directory Check:** Check whether an `agents/` or `.agents/` directory exists in the project.
2. **Inspect Available Skills:** Inspect all available agent files, skills, workflows, playbooks, instructions, and specialized knowledge contained within that directory.
3. **Identify & Follow:** Identify the most relevant skill(s) for the current task, and follow those skills and workflows before creating a solution.
4. **Prioritize Skills:** Prefer existing project-specific skills over generic AI assumptions. Reuse established patterns, conventions, architectures, and implementation strategies defined by those skills.
5. **Skill Integration:** If multiple skills are relevant, combine them appropriately while preserving project consistency. Do not ignore available agent skills unless they are clearly unrelated to the current task.

### Skill Discovery Workflow
For every new task:
* First read `agents.md`
* Then inspect the `agents/` or `.agents/` folder
* Discover relevant skills
* Apply those skills to planning and implementation
* Only then begin coding or modifying files

### Priority Order
Use the following priority hierarchy:
1. User instructions
2. agents.md
3. Relevant skills from the `agents/` or `.agents/` folder
4. Existing project architecture
5. General development best practices

### Required Behavior
Before making changes, explicitly determine:
* Which agent skills are relevant
* Why they are relevant
* How they affect the implementation

If a specialized skill exists for the requested task, use it (e.g., UI tasks check UI/Design skills, API tasks check Backend/API skills, testing tasks check Testing skills). Never bypass project-specific skills when they are available.

