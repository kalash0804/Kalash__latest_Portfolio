# Kalash Gupta — Personal Portfolio Website
### Concept: *"Quality in Every Pixel"*

A premium, futuristic personal portfolio website for **Kalash Gupta** working across:
- **Software Quality Assurance (QA)** & Manual / Functional Testing
- **UI & Frontend Testing** with Responsive & Cross-Browser Verification
- **Automation Testing** with Playwright & Selenium WebDriver (Java)
- **API Testing** with Postman & REST Schema Assertions
- **Frontend Engineering** using React, JavaScript (ES6+), & Tailwind CSS
- **AI Agent Testing** & ServiceNow Incident Workflow QA

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

---

## ⚡ Highlights & Key Features

1. **Futuristic Sticky Navigation (`Navbar.jsx` & `ThemeToggle.jsx`)**
   - Minimalist `KG` monogram logo with live pulse indicator.
   - Fully functional **Light / Dark Theme Toggle** with persistent `localStorage` memory and keyboard shortcut (`T`).
   - The dark theme is preserved with 100% fidelity, and the light theme transforms the interface into a crisp daylight lab aesthetic.
   - Smooth section spy with active highlight indicators.
   - Animated mobile drawer with backdrop blur and focus trap.
   - Quick triggers for printable resume and keyboard navigation HUD (`?`).

2. **Interactive Quality Control System (`QualityInterface.jsx` & `HeroSection.jsx`)**
   - High-tech software testing interface mockup resembling modern E2E test runners.
   - Real-time test suite simulation with Playwright/Chromium execution assertions.
   - Interactive DOM locator inspector (`page.locator('[data-testid="agent-triage"]')`).
   - Animated scanning line, live terminal traces, and glowing status badges.

3. **Philosophy Marquee Strip (`Marquee.jsx`)**
   - Continuously moving text strip with acid-lime separators:
     `TEST WITH PURPOSE · DESIGN WITH EMPATHY · BUILD WITH PRECISION · SHIP WITH CONFIDENCE`.
   - Pauses on hover and fully respects `prefers-reduced-motion`.

4. **Editorial About Section (`AboutSection.jsx`)**
   - *"Curious by nature. Quality by mindset."*
   - Asymmetric editorial layout with custom SVG radar target visualization.
   - 4 Mindset Pillars: Quality Mindset, User-First Thinking, Continuous Learning, and Detail-Oriented Execution.

5. **Interactive Technical Toolkit (`SkillsSection.jsx`)**
   - Filterable skills across QA, Automation, API Testing, Frontend, and AI Platforms.
   - Honest proficiency taxonomy: `Experienced`, `Working Knowledge`, `Currently Learning`.
   - Interactive code/spec inspection modal for each skill with real assertions.

6. **Curated Case Study Gallery (`ProjectGallery.jsx` & `ProjectCard.jsx`)**
   - Real, verified projects:
     1. **ServiceNow AI Agent Testing** *(AI Quality Assurance)*
     2. **RASAO — Product Quality Assurance** *(Automation & Regression QA)*
     3. **Prescripto — Doctor Appointment Platform** *(Frontend / Full-Stack)*
     4. **DocuMind — AI Document Analyzer** *(AI Application Development)*
     5. **Smart Study Planner** *(Web Application Development)*
   - Detailed Case Study Modal with tabs for Objectives, Testing Approaches, Scenarios Matrix, Challenges & Solutions, and Verified Outcomes.

7. **Signature Testing Philosophy Pipeline (`TestingProcess.jsx`)**
   - *"Quality isn't a final step. It's the entire process."*
   - Interactive 5-step pipeline: `01 Understand` &rarr; `02 Explore` &rarr; `03 Validate` &rarr; `04 Automate` &rarr; `05 Improve`.
   - Live sample deliverables: Requirements Matrix, Risk Matrix, API Assertions, Playwright POM scripts, and Bug Report tickets.

8. **Experience Timeline (`ExperienceTimeline.jsx`)**
   - Verified milestones at **i-Connectresources International Pvt. Ltd.**:
     - *Junior Software Developer* (October 2024 – Present)
     - *IT Intern* (February 2024 – September 2024)
   - Verified achievements, responsibilities, and technical stacks without fabricated metrics.

9. **Certifications & Active Roadmap (`CertificationsSection.jsx`)**
   - Verified credentials: ServiceNow CSA, ServiceNow Developer Training, Oracle Cloud Infrastructure (OCI) Foundations, Full-Stack Training.
   - Active learning roadmap: Playwright E2E, Selenium POM in Java, Agentic AI testing, CI/CD pipeline tests.

10. **Interactive Contact & Functional Form (`ContactSection.jsx`)**
    - Client-side validation for Name, Email, Subject, Category, and Message.
    - One-click copy for `kalashgupta.work@gmail.com`.
    - Direct `mailto:` pre-fill launcher with formatted payload.
    - Celebratory confetti trigger upon verified submission.

11. **Printable Resume Viewer (`ResumeModal.jsx`)**
    - High-fidelity formatted CV with print-to-PDF support (`window.print()`).

12. **Keyboard Navigation HUD (`HUDControls.jsx`)**
    - Single-key jumps (`1` through `7` for sections, `R` for resume, `?` for HUD guide, `Esc` to close).

---

## 🛠️ Technology Stack

- **Framework**: React 19
- **Build Tooling**: Vite 8 with `@tailwindcss/vite`
- **Styling**: Tailwind CSS v4 (Dark-first visual identity)
  - Main background: `#0B0D0F`
  - Secondary background: `#121519`
  - Elevated surface: `#191E23`
  - Primary accent: `#C6FF4D` (acid lime)
  - Secondary accent: `#A78BFA` (violet)
  - Text main: `#F4F5F2`
  - Borders: `#2A3036`
- **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code/Status)
- **Icons**: Lucide React + custom SVGs
- **Motion & Interactions**: Framer Motion & Canvas Confetti

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+` or `v20+` (verified on Node `v22.20.0`)
- npm `v9+` or `v10+`

### Installation
```bash
# Clone or navigate to the directory
cd c:\Portfolio

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub (`https://github.com/KalashGupta/portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your repository. Vercel automatically detects Vite.
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Click **Deploy Site**.

---

## 📄 License
Created by **Kalash Gupta**. All rights reserved.
