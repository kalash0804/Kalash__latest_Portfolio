// Testing Philosophy Data - "Quality isn't a final step. It's the entire process."
export const TESTING_PIPELINE = [
  {
    step: '01',
    name: 'Understand',
    tagline: 'Study requirements, user journeys, and expected behavior.',
    icon: 'Compass',
    accentColor: 'lime',
    summary: 'Before writing a single test case or line of code, understand the business domain, user expectations, and functional acceptance criteria.',
    keyQuestions: [
      'What user problem does this feature solve?',
      'What are the explicit acceptance criteria vs unspoken assumptions?',
      'What are the critical happy paths and role permissions?'
    ],
    deliverableType: 'Requirements Traceability Matrix (RTM)',
    artifactSnippet: `[RTM-CHECKLIST]
Requirement: REQ-042 - Doctor Availability Real-time Lock
- Acceptance Criteria AC-1: Slot disabled when another session initiates checkout
- Acceptance Criteria AC-2: Lock expires after 10 minutes of inactivity
- Priority: High | Impact: Prevents patient double-booking collision`
  },
  {
    step: '02',
    name: 'Explore',
    tagline: 'Identify edge cases, risks, and potential failure points.',
    icon: 'Search',
    accentColor: 'violet',
    summary: 'Think adversarially. Explore boundary conditions, unexpected inputs, race conditions, and network irregularities that could break the application.',
    keyQuestions: [
      'What happens if the user double-clicks rapidly on submit?',
      'How does the system respond if the network drops mid-transaction?',
      'What are the minimum, maximum, and extreme boundary values?'
    ],
    deliverableType: 'Risk Assessment & Edge Case Matrix',
    artifactSnippet: `[RISK-MATRIX]
Risk Factor: Asynchronous state mismatch during concurrent bookings
Severity: High | Likelihood: Medium
Edge Scenario: 2 patients select 10:00 AM slot at exact same millisecond
Mitigation: Enforce database optimistic locking with instant client notification`
  },
  {
    step: '03',
    name: 'Validate',
    tagline: 'Perform functional, UI, API, and regression testing.',
    icon: 'CheckCheck',
    accentColor: 'lime',
    summary: 'Execute structured testing across layers: verify API contracts, validate UI state transitions, inspect responsive viewports, and audit cross-browser behavior.',
    keyQuestions: [
      'Do REST endpoints return correct status codes, schemas, and error bodies?',
      'Is the UI responsive, accessible, and compliant with design guidelines?',
      'Does the hotfix introduce any regression in existing workflows?'
    ],
    deliverableType: 'Multi-Layer Test Execution Suite',
    artifactSnippet: `// Postman + Playwright Combined Validation
pm.test("Status is 200 and schema complies", () => {
  pm.response.to.have.status(200);
  pm.expect(pm.response.json().data).to.be.an('array');
});
// UI Assertion:
await expect(page.locator('.booking-confirmation')).toBeVisible();`
  },
  {
    step: '04',
    name: 'Automate',
    tagline: 'Automate suitable repeatable scenarios using appropriate tools.',
    icon: 'Zap',
    accentColor: 'violet',
    summary: 'Identify deterministic, repetitive test scenarios and translate them into robust, maintainable automated test scripts using Playwright and Selenium.',
    keyQuestions: [
      'Which tests provide the highest return on automation investment (ROI)?',
      'Are locators resilient against frequent UI refactors?',
      'Can these tests execute reliably in headless CI pipelines?'
    ],
    deliverableType: 'Maintainable Page Object Model (POM) Suite',
    artifactSnippet: `// Playwright POM Automation
export class IncidentTriagePage {
  constructor(page) {
    this.page = page;
    this.urgencyDropdown = page.locator('[data-testid="urgency-select"]');
  }
  async triageIncident(urgency) {
    await this.urgencyDropdown.selectOption(urgency);
    await expect(this.page.locator('.badge-assigned')).toHaveText(/Tier-1/);
  }
}`
  },
  {
    step: '05',
    name: 'Improve',
    tagline: 'Report defects clearly, retest fixes, and strengthen release confidence.',
    icon: 'TrendingUp',
    accentColor: 'lime',
    summary: 'Quality does not end with finding a bug. Document clear reproduction steps, collaborate with developers, retest thoroughly, and prevent regression.',
    keyQuestions: [
      'Can the developer reproduce this issue on their first attempt from my report?',
      'Did the bug fix create unexpected side effects?',
      'What test can we add to ensure this bug never reoccurs?'
    ],
    deliverableType: 'High-Clarity Defect Report & Sign-off',
    artifactSnippet: `[DEFECT-TICKET] #BUG-1082
Severity: S2 (High) | Environment: Staging v2.3.1
Repro Steps:
1. Open /appointments -> Filter "Cardiology"
2. Rapidly switch to "Pediatrics" before response resolves
Expected: Cancel in-flight query or show loading skeleton
Actual: Race condition causes Cardiology list to overwrite Pediatrics
Status: FIXED & RE-TESTED [PASS on build 2.3.2]`
  }
];
