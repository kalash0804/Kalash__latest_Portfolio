// Skills and Technical Toolkit data - Accurate to Kalash Gupta's Core Skills
export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'qa', label: 'Testing & QA' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'tools-platforms', label: 'Tools & Platforms' },
];

export const SKILLS_DATA = [
  // Testing & QA
  {
    name: 'Manual Testing',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'CheckCircle2',
    description: 'Systematic requirement analysis, scenario design, exploratory testing, and end-to-end user-flow validation.',
    details: 'Validating user workflows, business rules, acceptance criteria against PRDs, and identifying UI/functional discrepancies across enterprise products.',
    snippet: `// Test Execution Record - Manual Scenario
Scenario: User modifies profile with non-ASCII characters
Step 1: Navigate to /settings/profile
Step 2: Enter "Kalash_ü_🚀" in displayName
Expected: Sanitized preview renders; persistence succeeds without encoding corruption.
Status: PASS [Observed: UTF-8 encoding handled cleanly]`
  },
  {
    name: 'Functional Testing',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Cpu',
    description: 'Verifying end-to-end features against software specifications, business logic rules, and role permissions.',
    details: 'Validating role-based access, form submissions, state management transitions, academic submission flows, and healthcare workflows.',
    snippet: `// Functional Validation Rule
const validateRoleAccess = (userRole, targetRoute) => {
  const permissions = { ADMIN: ['*'], QA: ['/test-suites', '/reports'], USER: ['/dashboard'] };
  return permissions[userRole]?.includes(targetRoute) || permissions[userRole]?.includes('*');
};`
  },
  {
    name: 'UI Testing',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Layout',
    description: 'Validating pixel precision, typography hierarchy, visual states, and interactive feedback across components.',
    details: 'Testing focus states, active button interactions, hover triggers, layout shifts, modal focus traps, and design system fidelity.',
    snippet: `// UI State Assertion
expect(submitButton).toHaveAttribute('aria-disabled', 'false');
expect(modalDialog).toHaveFocus();
expect(container).not.toHaveClass('overflow-x-scroll');`
  },
  {
    name: 'Regression Testing',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Repeat',
    description: 'Executing targeted and full regression suites following hotfixes, code refactors, and sprint releases.',
    details: 'Ensuring new code merges, dependency updates, and bug fixes do not disrupt existing system workflows in Education, Healthcare, and HRMS applications.',
    snippet: `// Regression Sign-off Matrix
[x] Auth token refresh on 401 response
[x] Grid pagination state preserved upon page re-entry
[x] Form state validation after async network delay
[x] Session persistence across multi-tab navigations`
  },
  {
    name: 'Responsive Testing',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Smartphone',
    description: 'Auditing layout responsiveness across mobile (375px), tablet (768px), laptop, and high-DPI displays.',
    details: 'Verifying fluid typography, dynamic clamp() calculations, navigation drawer transitions, touch-target padding (48px), and zero horizontal overflow.',
    snippet: `@media (max-width: 640px) {
  /* Audit: Touch targets minimum 48x48px */
  .interactive-btn { min-height: 48px; min-width: 48px; }
}`
  },
  {
    name: 'Cross-Browser Testing',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Globe',
    description: 'Cross-browser compatibility validation across Chromium (Chrome, Edge), WebKit (Safari), and Gecko (Firefox).',
    details: 'Ensuring CSS grid layouts, webkit-specific styles, backdrop filters, flex wrapping, and JavaScript APIs function consistently without layout breaks.',
    snippet: `// Browser Matrix Config
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  { name: 'Mobile Safari', use: { ...devices['iPhone 14'] } }
]`
  },
  {
    name: 'Retesting & Defect Tracking',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Bug',
    description: 'Authoring clear, reproducible bug tickets with expected vs actual results, logs, and screenshots, followed by retesting.',
    details: 'Confirming root-cause resolution, verifying pull requests, documenting defect life cycles in Jira, and verifying fixes before production release.',
    snippet: `// Defect Tracking & Retest Ticket #BUG-409
Initial Defect: Null pointer when incident description exceeded 4000 characters
Developer Fix: Sanitization & substring truncation with toast notification
Retest Result: PASS - Tested with 5000 chars lorem ipsum; proper warning shown.`
  },
  {
    name: 'Positive & Negative Testing',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Sliders',
    description: 'Testing expected happy paths along with adversarial inputs, edge boundaries, and error conditions.',
    details: 'Boundary value analysis (BVA), equivalence partitioning, SQL/script injection input rejection, and graceful error scenario handling.',
    snippet: `// Equivalence & Boundary Matrix
Input: Age Field (Valid: 18 - 99)
- Test Case A: 17 (Negative - Boundary Min - 1) -> Rejection expected
- Test Case B: 18 (Positive - Boundary Min) -> Acceptance expected
- Test Case C: 99 (Positive - Boundary Max) -> Acceptance expected
- Test Case D: 100 (Negative - Boundary Max + 1) -> Rejection expected`
  },
  {
    name: 'Test Case Design & Execution',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'CheckSquare',
    description: 'Designing structured test suites with prerequisites, inputs, step-by-step actions, and verifiable expected assertions.',
    details: 'Mapping test cases against business requirements to maintain full traceability across sprint deliverables and customer user stories.',
    snippet: `// Test Spec Template
Test ID: TC-PAY-04
Feature: Payroll Overtime Calculation
Preconditions: Employee authenticated with valid hours log
Execution: Submit 4.5 OT hours -> Verify 1.5x multiplier applied
Expected Result: Correct net pay computed; payslip PDF matches table`
  },
  {
    name: 'Release Verification',
    category: 'qa',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'ShieldCheck',
    description: 'Sanity, smoke, and pre-release verification testing of candidate builds prior to client and production deployment.',
    details: 'Executing smoke checklists on staging environments, validating migration integrity, and monitoring post-deployment telemetry.',
    snippet: `// Release Sign-off Checklist
[✓] Smoke suite passed 100% (42/42 tests)
[✓] SSL & security headers active
[✓] Critical path checkout / workflow operational
[✓] Zero high-severity defects outstanding`
  },
  {
    name: 'Automation Testing (Playwright)',
    category: 'qa',
    level: 'Working Knowledge',
    levelColor: 'violet',
    icon: 'Zap',
    description: 'End-to-end browser automation with auto-waiting locators, network assertions, and cross-browser test execution.',
    details: 'Writing resilient locator-based assertions, handling async components, capturing traces, and executing headless tests.',
    snippet: `import { test, expect } from '@playwright/test';

test('verify school transport schedule clash check', async ({ page }) => {
  await page.goto('/transport/schedules');
  await page.locator('[data-testid="assign-bus"]').selectOption('Bus-12');
  await page.locator('button:has-text("Confirm Dispatch")').click();
  await expect(page.locator('.toast-alert')).toContainText('Clash Detected');
});`
  },
  {
    name: 'Automation Testing (Selenium WebDriver)',
    category: 'qa',
    level: 'Working Knowledge',
    levelColor: 'violet',
    icon: 'Code2',
    description: 'Browser automation testing using Selenium WebDriver, explicit waits, and Page Object Model (POM) design patterns.',
    details: 'Automating repetitive user journeys, managing WebDriver lifecycles, and configuring cross-browser execution.',
    snippet: `// Selenium WebDriver Test
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(By.id("submit-order")));
submitBtn.click();
Assert.assertTrue(driver.findElement(By.className("success-banner")).isDisplayed());`
  },

  // Frontend Development
  {
    name: 'React.js',
    category: 'frontend',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Atom',
    description: 'Building modern component-driven architectures, custom hooks, dynamic state management, and accessible UIs.',
    details: 'Leveraging functional components, useEffect cleanup, useMemo optimization, and reusable component libraries across enterprise portals.',
    snippet: `import React, { useState, useMemo } from 'react';

export const ScheduleWidget = ({ routes }) => {
  const activeRoutes = useMemo(() => routes.filter(r => r.status === 'ACTIVE'), [routes]);
  return (
    <div className="p-4 rounded-lg bg-[#121519] border border-[#2A3036]">
      <span className="text-[#C6FF4D] font-mono font-bold text-lg">{activeRoutes.length} Active</span>
    </div>
  );
};`
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'FileCode',
    description: 'Modern ES6+ syntax, asynchronous promises, async/await, DOM APIs, and data transformation routines.',
    details: 'Utilizing closures, array higher-order functions (map, filter, reduce), modular architecture, and robust event handling.',
    snippet: `// Asynchronous API Fetch with Error Guard
export const fetchPatientRecords = async (patientId) => {
  try {
    const res = await fetch(\`/api/v1/patients/\${patientId}\`);
    if (!res.ok) throw new Error(\`HTTP error: \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error('Failed to load patient records:', err);
    throw err;
  }
};`
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Palette',
    description: 'Utility-first styling, responsive layouts, design token implementation, and custom dark-mode systems.',
    details: 'Implementing scalable design systems, fluid spacing scales, transitions, glassmorphism backdrops, and accessible color contrast.',
    snippet: `<div className="backdrop-blur-md bg-[#121519]/80 border border-[#2A3036] hover:border-[#C6FF4D]/50 transition-colors p-6 rounded-xl">
  <span className="text-xs uppercase font-mono tracking-widest text-[#C6FF4D]">Verified</span>
</div>`
  },
  {
    name: 'HTML5 & Semantic Structure',
    category: 'frontend',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Layers',
    description: 'Accessible DOM hierarchies, ARIA landmarks, keyboard accessibility, and semantic web tags.',
    details: 'Writing accessible landmarks (nav, main, section, footer), form labels, tabindexes, and keyboard focus trap management.',
    snippet: `<main id="main-content" aria-label="Enterprise Dashboard">
  <section aria-labelledby="heading-schedules">
    <h2 id="heading-schedules" className="sr-only">Fleet Schedules</h2>
  </section>
</main>`
  },
  {
    name: 'CSS3 & Modern Layouts',
    category: 'frontend',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Grid',
    description: 'CSS Grid, Flexbox, custom CSS variables, fluid clamp() typography, and hardware-accelerated transitions.',
    details: 'Building robust responsive grids, sticky table headers, smooth drawer animations, and high-contrast accessible palettes.',
    snippet: `:root {
  --fluid-h1: clamp(2.5rem, 5vw + 1rem, 5.5rem);
  --glass-bg: rgba(25, 30, 35, 0.7);
}`
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Layout',
    description: 'Rapid UI prototyping, responsive grid scaffolding, modal components, and enterprise layout templates.',
    details: 'Utilizing Bootstrap grid breakpoints, utility classes, and components to deliver functional enterprise interfaces efficiently.',
    snippet: `<div className="container-fluid py-4">
  <div className="row g-3">
    <div className="col-12 col-md-6 col-lg-4">...</div>
  </div>
</div>`
  },
  {
    name: 'Responsive Design',
    category: 'frontend',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Maximize2',
    description: 'Mobile-first design principles, fluid viewport scaling, touch-friendly hit areas, and zero overflow.',
    details: 'Ensuring seamless rendering across portrait mobiles, landscape tablets, laptops, and ultra-wide desktop monitors.',
    snippet: `/* Clean responsive container clamp */
.container-clamp {
  width: min(100% - 2rem, 1280px);
  margin-inline: auto;
}`
  },
  {
    name: 'Vite',
    category: 'frontend',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Sparkles',
    description: 'Next-generation frontend tooling, lightning-fast Hot Module Replacement (HMR), and optimized production bundling.',
    details: 'Configuring modern build pipelines, asset bundling, environment variable resolution, and optimizing client chunk sizes.',
    snippet: `// vite.config.js configuration
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: { manualChunks: { vendor: ['react', 'react-dom'] } }
    }
  }
});`
  },

  // UI/UX Design
  {
    name: 'Figma',
    category: 'uiux',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Palette',
    description: 'End-to-end UI/UX design, interactive prototyping, component variant sets, and developer handoffs.',
    details: 'Building high-fidelity mockups, responsive layouts, interactive click-through prototypes, and maintainable design libraries.',
    snippet: `// Figma Design System Component Token
{
  "card.background": "#121519",
  "card.border": "#2A3036",
  "accent.active": "#C6FF4D",
  "typography.heading": "Space Grotesk, sans-serif"
}`
  },
  {
    name: 'Wireframing & Prototyping',
    category: 'uiux',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Layout',
    description: 'Translating product requirements into low and high-fidelity wireframes and interactive user prototypes.',
    details: 'Validating concepts with stakeholders before code implementation to eliminate costly rework and clarify user journeys.',
    snippet: `// User Journey Flow
[User Login] -> [Role Detection: Manager] -> [Team Schedule View] -> [Bulk Slot Approval Modal]`
  },
  {
    name: 'User Flows',
    category: 'uiux',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Workflow',
    description: 'Mapping end-to-end user journeys, decision branches, error states, and alternate recovery flows.',
    details: 'Ensuring optimal information architecture, minimal click-depth to key tasks, and intuitive navigation across complex workflows.',
    snippet: `Flow: Patient Consultation Booking
Start -> Search Specialist -> Filter Date/Time -> Check Slot Conflict
-> [If Conflict: Suggest Nearest Slot] -> Confirm Details -> Issue Receipt`
  },
  {
    name: 'Design Systems',
    category: 'uiux',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Layers',
    description: 'Constructing scalable design systems with atomic components, color palettes, spacing variables, and typography tokens.',
    details: 'Maintaining consistency across multiple products and teams through standardized component libraries and guidelines.',
    snippet: `Design System Tokens:
- Primary: #C6FF4D (High-contrast lime)
- Surface: #121519 (Dark elevation-1)
- Border: #2A3036 (Subtle boundary)
- Text-Muted: #A0A7AF`
  },
  {
    name: 'Auto Layout',
    category: 'uiux',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Grid',
    description: 'Building adaptive, responsive Figma layouts with horizontal/vertical flex direction, padding, and constraints.',
    details: 'Leveraging min/max bounds, hugging, and filling containers in Figma to model exact CSS flexbox behavior for developers.',
    snippet: `Figma Auto Layout Properties:
Direction: Vertical | Spacing: 16px | Padding: 24px
Width: Fill Container | Height: Hug Contents | Resizing: Responsive`
  },

  // Tools & Platforms
  {
    name: 'ServiceNow',
    category: 'tools-platforms',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Server',
    description: 'Certified ServiceNow System Administrator & Application Developer: tables, forms, Flow Designer, business rules, and AI Agents.',
    details: 'Configuring custom scoped applications, GlideRecord queries, business rules, client scripts, table schemas, and AI agent testing.',
    snippet: `// GlideRecord Query Pattern
var grIncident = new GlideRecord('incident');
grIncident.addQuery('state', '1'); // New
grIncident.addQuery('priority', '1'); // Critical
grIncident.query();
while (grIncident.next()) {
    gs.info('Critical Incident Flagged: ' + grIncident.number);
}`
  },
  {
    name: 'Postman',
    category: 'tools-platforms',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Send',
    description: 'API testing, collection test runners, environment variable parameterization, pre-request scripts, and test assertions.',
    details: 'Testing GET, POST, PUT, DELETE REST endpoints, validating JSON schemas, status codes (2xx, 4xx, 5xx), and error payloads.',
    snippet: `// Postman Tests Assertion
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});
pm.test("Response contains valid reservation ID", function () {
    const data = pm.response.json();
    pm.expect(data).to.have.property("booking_id");
});`
  },
  {
    name: 'Git & GitHub',
    category: 'tools-platforms',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Code2',
    description: 'Version control, feature branching, pull requests, merge conflict resolution, and collaborative code reviews.',
    details: 'Managing repositories, maintaining clean commit histories, collaborating with cross-functional engineering teams, and code releases.',
    snippet: `// Git Feature Workflow
git checkout -b feature/school-transport-scheduler
git commit -m "feat(scheduler): implement responsive route conflict guard"
git push origin feature/school-transport-scheduler`
  },
  {
    name: 'VS Code',
    category: 'tools-platforms',
    level: 'Experienced',
    levelColor: 'lime',
    icon: 'Terminal',
    description: 'Primary IDE for frontend development and QA test scripting with ESLint, Prettier, GitLens, and live debugging tools.',
    details: 'Configuring workspace settings, multi-cursor editing, terminal automation runs, and integrated debugging sessions.',
    snippet: `// launch.json configuration
{
  "type": "node",
  "request": "launch",
  "name": "Run Playwright Tests",
  "program": "\${workspaceFolder}/node_modules/.bin/playwright",
  "args": ["test"]
}`
  }
];
