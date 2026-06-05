# Cultre Boat - AI Agent Operating Manual

This document is the authoritative instruction set for any AI agent working inside the Cultre Boat codebase.

All agents MUST read and follow this file before making any code changes.

---

# Project Identity

Project Name: Cultre Boat

Type:
Premium Creative Agency Website

Purpose:
Generate high-value enterprise leads through immersive storytelling, WebGL experiences, cinematic animations, and premium branding presentation.

Primary Audience:

- CMOs
- Brand Managers
- Founders
- Design Directors
- Enterprise Clients

Business Goal:

Position Cultre Boat as a premium creative technology studio capable of delivering:

- Branding
- Creative Direction
- Interactive Websites
- WebGL Experiences
- 3D Experiences
- Digital Storytelling

---

# Core Technology Stack

Frontend

- React 18
- TypeScript
- Vite

Styling

- TailwindCSS
- shadcn/ui
- Radix UI

Animations

- GSAP
- ScrollTrigger
- SplitText
- Framer Motion
- Lenis

3D / WebGL

- Three.js
- React Three Fiber
- Drei
- OGL

Data Layer

- TanStack Query
- Supabase Client

Validation

- React Hook Form
- Zod

Testing

- Vitest

---

# Mandatory First Step

Before performing ANY task:

1. Read agents.md
2. Read existing implementation
3. Understand feature scope
4. Analyze architecture impact
5. Propose smallest safe change

Never begin coding immediately.

---

# Existing Agent Skills

Before creating new implementations:

Check:

```txt
.agents/
└── skills/