import React from 'react';
import { X, Printer, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const ResumeModal = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto resume-modal-overlay print:static print:inset-auto print:block print:w-full print:h-auto print:max-h-none print:overflow-visible print:p-0 print:m-0 print:bg-transparent print:z-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E1114] border border-[#2A3036] rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200 resume-modal-container print:static print:max-w-none print:max-h-none print:w-full print:h-auto print:overflow-visible print:border-none print:shadow-none print:rounded-none print:bg-white print:p-0 print:m-0 print:animate-none">
        {/* Sticky Actions Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B0D0F]/95 backdrop-blur-md border-b border-[#2A3036] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF4D]" />
            <span className="font-heading font-bold text-sm text-[#F4F5F2]">
              Kalash Gupta &mdash; Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#C6FF4D] text-[#0B0D0F] font-heading font-bold text-xs hover:bg-[#b8f53a] transition-all flex items-center gap-1.5 shadow-md shadow-[#C6FF4D]/15"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#191E23] border border-[#2A3036] text-[#A0A7AF] hover:text-[#F4F5F2] hover:bg-[#222830]"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="p-6 sm:p-12 text-[#F4F5F2] space-y-8 font-sans max-w-3xl mx-auto w-full resume-printable-document print:p-0 print:max-w-none print:text-black print:bg-white print:space-y-4">
          {/* Header */}
          <div className="border-b border-[#2A3036] pb-6 space-y-3 resume-header-block">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F4F5F2]">
                  Kalash Gupta
                </h1>
                <p className="font-mono text-sm text-[#C6FF4D] font-semibold mt-1">
                  QA Engineer | UI/UX Designer | Frontend Developer
                </p>
              </div>

              <div className="text-xs font-mono text-[#A0A7AF] space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#74E3A1]" />
                  <span>kalashgupta2001@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C6FF4D]" />
                  <span>+91 7067119268</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>Durg, Chhattisgarh, India</span>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://www.linkedin.com/in/kalash-gupta08"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#C6FF4D] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span>&middot;</span>
                  <a
                    href="https://github.com/kalash0804"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#C6FF4D] transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="pt-2">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-bold mb-1.5">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#A0A7AF] leading-relaxed">
                QA Engineer, UI/UX Designer and Frontend Developer with nearly 2 years of experience
                working on enterprise web applications across Education, Healthcare, HRMS, Auction and
                ServiceNow platforms. Skilled in manual testing, functional testing, UI testing, regression testing,
                responsive testing, cross-browser testing, defect tracking, retesting and release verification, along
                with React.js, JavaScript, Tailwind CSS, Vite, HTML5, CSS3, Figma and REST API integration.
                Experienced in validating end-to-end user workflows, role-based access, form validations, error
                handling and UI consistency. Strong at collaborating with developers, designers, product
                managers and stakeholders to deliver reliable, user-friendly products.
              </p>
            </div>
          </div>

          {/* Core Skills */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-bold border-b border-[#2A3036] pb-1">
              CORE SKILLS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#121519] border border-[#2A3036]">
                <span className="text-[#C6FF4D] font-bold block mb-1">Frontend:</span>
                <span className="text-[#A0A7AF]">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design, Vite</span>
              </div>
              <div className="p-3 rounded-lg bg-[#121519] border border-[#2A3036]">
                <span className="text-[#74E3A1] font-bold block mb-1">UI/UX:</span>
                <span className="text-[#A0A7AF]">Figma, Wireframing, Prototyping, User Flows, Design Systems, Auto Layout</span>
              </div>
              <div className="p-3 rounded-lg bg-[#121519] border border-[#2A3036]">
                <span className="text-[#A78BFA] font-bold block mb-1">Testing / QA:</span>
                <span className="text-[#A0A7AF]">Manual Testing, Automation Testing (Selenium WebDriver, Playwright), Functional Testing, UI Testing, Regression Testing, Responsive Testing, Cross-Browser Testing, Retesting, Defect Tracking, Positive & Negative Testing, Test Case Design & Execution, Release Verification</span>
              </div>
              <div className="p-3 rounded-lg bg-[#121519] border border-[#2A3036]">
                <span className="text-[#FBBF24] font-bold block mb-1">Tools / Platforms:</span>
                <span className="text-[#A0A7AF]">Git, GitHub, VS Code, Postman, Figma, ServiceNow</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-bold border-b border-[#2A3036] pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-6">
              {/* Role 1 */}
              <div className="space-y-2 resume-item-block">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-heading font-bold text-base text-[#F4F5F2]">
                      QA Engineer | Automation Tester | UI/UX &amp; Frontend Developer
                    </span>
                    <span className="text-[#A0A7AF]"> &mdash; i-Connectresources International Pvt. Ltd.</span>
                  </div>
                  <span className="font-mono text-xs text-[#C6FF4D]">
                    July 2026 &ndash; Present
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#A0A7AF] leading-relaxed pl-1">
                  <li>Design, build, and maintain automated End-to-End (E2E) and regression test suites using Playwright and Selenium WebDriver.</li>
                  <li>Execute automated and manual cross-browser and cross-platform testing across Chromium, Firefox, WebKit, and mobile viewports.</li>
                  <li>Perform comprehensive functional, UI, regression, responsive, and exploratory testing across enterprise platforms.</li>
                  <li>Validate user workflows, form validations, navigation, role-based functionality, error handling, and edge cases.</li>
                  <li>Identify, document, track, and retest defects through the bug lifecycle, verifying fixes before release.</li>
                  <li>Develop and refine responsive React.js and Tailwind CSS components while validating Figma design system fidelity.</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="space-y-2 resume-item-block">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-heading font-bold text-base text-[#F4F5F2]">
                      Junior Software Developer &amp; QA Tester &mdash; UI/UX | Frontend | QA
                    </span>
                    <span className="text-[#A0A7AF]"> &mdash; i-Connectresources International Pvt. Ltd.</span>
                  </div>
                  <span className="font-mono text-xs text-[#A0A7AF]">
                    Apr 2025 &ndash; July 2026
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#A0A7AF] leading-relaxed pl-1">
                  <li>Served as QA Tester across multiple enterprise platforms: Healthcare (EHR), Education (LMS), HRMS (Payroll/Attendance), and Auction systems.</li>
                  <li>Executed exhaustive manual testing across all core modules: authentication, RBAC permissions, multi-step forms, payment workflows, and admin portals.</li>
                  <li>Formulated and executed comprehensive test scenarios, positive/negative test cases, boundary value analysis, and regression suites.</li>
                  <li>Identified, logged, and tracked functional defects and UI discrepancies; conducted thorough retesting and release verification.</li>
                  <li>Validated cross-browser and mobile responsive compatibility to guarantee consistent UI rendering across all client devices.</li>
                  <li>Designed Figma wireframes and developed responsive React.js and Tailwind CSS components with REST API integration.</li>
                </ul>
              </div>

              {/* Role 3 */}
              <div className="space-y-2 resume-item-block">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-heading font-bold text-base text-[#F4F5F2]">
                      IT Intern (Full Stack Development)
                    </span>
                    <span className="text-[#A0A7AF]"> &mdash; i-Connectresources International Pvt. Ltd.</span>
                  </div>
                  <span className="font-mono text-xs text-[#A0A7AF]">
                    Feb 2024 &ndash; March 2025
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#A0A7AF] leading-relaxed pl-1">
                  <li>Completed MERN Stack training.</li>
                  <li>Developed React modules, integrated APIs and assisted in debugging and deployments.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-bold border-b border-[#2A3036] pb-1">
              SELECTED PROJECTS
            </h2>

            <div className="space-y-4 text-xs">
              <div className="resume-item-block">
                <div className="flex items-center justify-between font-heading font-bold text-sm text-[#F4F5F2]">
                  <span>P1 &ndash; School Scheduling & Transport Management System</span>
                  <span className="font-mono text-[11px] text-[#C6FF4D]">UI/UX Designer, Frontend Developer & QA Engineer</span>
                </div>
                <ul className="list-disc list-inside text-[#A0A7AF] mt-1 space-y-0.5 leading-relaxed pl-1">
                  <li>Designed and developed responsive scheduling and transport management interfaces using React.js, Tailwind CSS and Vite.</li>
                  <li>Performed functional, UI, responsive and regression testing across key modules and user workflows; identified, documented, retested and verified defects throughout release cycles.</li>
                  <li>Validated UI consistency, usability, accessibility and cross-browser compatibility.</li>
                </ul>
              </div>

              <div className="resume-item-block">
                <div className="flex items-center justify-between font-heading font-bold text-sm text-[#F4F5F2]">
                  <span>Oncology Healthcare Platform</span>
                  <span className="font-mono text-[11px] text-[#74E3A1]">UI/UX Designer, Frontend Developer & QA Engineer</span>
                </div>
                <ul className="list-disc list-inside text-[#A0A7AF] mt-1 space-y-0.5 leading-relaxed pl-1">
                  <li>Designed and developed responsive healthcare interfaces and dashboards using React.js and modern UI practices.</li>
                  <li>Performed functional, UI, regression and responsive testing across healthcare workflows; verified form validations, navigation, data presentation and error handling.</li>
                </ul>
              </div>

              <div className="resume-item-block">
                <div className="flex items-center justify-between font-heading font-bold text-sm text-[#F4F5F2]">
                  <span>HRMS</span>
                  <span className="font-mono text-[11px] text-[#C6FF4D]">UI/UX Designer, Frontend Developer & QA Engineer</span>
                </div>
                <ul className="list-disc list-inside text-[#A0A7AF] mt-1 space-y-0.5 leading-relaxed pl-1">
                  <li>Performed functional, UI, regression, responsive and cross-browser testing across HRMS modules; validated employee workflows, form validations, data handling and user interactions.</li>
                  <li>Designed employee management, attendance and payroll interfaces using Figma and React.js.</li>
                </ul>
              </div>

              <div className="resume-item-block">
                <div className="flex items-center justify-between font-heading font-bold text-sm text-[#F4F5F2]">
                  <span>Hybrid Workspace Utilization System (ServiceNow Hackathon)</span>
                  <span className="font-mono text-[11px] text-[#A78BFA]">ServiceNow Developer</span>
                </div>
                <ul className="list-disc list-inside text-[#A0A7AF] mt-1 space-y-0.5 leading-relaxed pl-1">
                  <li>Developed a smart workspace management solution for seat and meeting-room booking using ServiceNow, implementing automated seat allocation and workspace booking workflows.</li>
                  <li>Configured ServiceNow tables, forms, workflows, business logic, role-based functionality (Employees, Managers, Admins), availability management, and My Bookings.</li>
                </ul>
              </div>

              <div className="resume-item-block">
                <div className="flex items-center justify-between font-heading font-bold text-sm text-[#F4F5F2]">
                  <span>Learning Outcome Platform</span>
                  <span className="font-mono text-[11px] text-[#74E3A1]">QA Engineer / Tester</span>
                </div>
                <ul className="list-disc list-inside text-[#A0A7AF] mt-1 space-y-0.5 leading-relaxed pl-1">
                  <li>Documented defects, performed retesting and verified fixes during release cycles.</li>
                  <li>Validated role-based workflows, key modules, input validation, navigation, error handling, UI behavior, and academic submission/integrity-verification workflows.</li>
                </ul>
              </div>

              <div className="resume-item-block">
                <div className="flex items-center justify-between font-heading font-bold text-sm text-[#F4F5F2]">
                  <span>Multilingual AI Learning Platform</span>
                  <span className="font-mono text-[11px] text-[#A78BFA]">QA Engineer / Tester</span>
                </div>
                <ul className="list-disc list-inside text-[#A0A7AF] mt-1 space-y-0.5 leading-relaxed pl-1">
                  <li>Tested an AI-powered multilingual learning platform for students, teachers, parents and administrators across CBSE, ICSE and State Board curricula.</li>
                  <li>Executed positive and negative test scenarios, performed regression testing after fixes, and validated submission processes, input fields, validation rules, status handling and error scenarios.</li>
                </ul>
              </div>

              <div className="resume-item-block">
                <div className="flex items-center justify-between font-heading font-bold text-sm text-[#F4F5F2]">
                  <span>Academic Integrity & Submission Verification Platform</span>
                  <span className="font-mono text-[11px] text-[#74E3A1]">QA Engineer / Tester</span>
                </div>
                <ul className="list-disc list-inside text-[#A0A7AF] mt-1 space-y-0.5 leading-relaxed pl-1">
                  <li>Performed functional and UI testing for academic submission and integrity-verification workflows, validating submission processes, input fields, validation rules, status handling, and error scenarios.</li>
                  <li>Executed positive and negative test scenarios, performed regression testing after fixes, and collaborated with dev teams.</li>
                </ul>
              </div>

              <div className="resume-item-block">
                <div className="flex items-center justify-between font-heading font-bold text-sm text-[#F4F5F2]">
                  <span>ServiceNow AI Agent</span>
                  <span className="font-mono text-[11px] text-[#A78BFA]">QA Engineer / Tester</span>
                </div>
                <ul className="list-disc list-inside text-[#A0A7AF] mt-1 space-y-0.5 leading-relaxed pl-1">
                  <li>Performed functional and end-to-end testing of ServiceNow AI Agents for incident classification, assignment routing, and automated resolution.</li>
                  <li>Designed and executed positive, negative, and edge-case test scenarios to validate AI agent behavior, response accuracy, UI behavior, and regression stability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 resume-item-block">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-bold border-b border-[#2A3036] pb-1">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <span className="font-heading font-bold text-sm text-[#F4F5F2]">
                  Bachelor of Science (Computer Science)
                </span>
                <span className="text-[#A0A7AF]"> &mdash; Durg University</span>
              </div>
              <span className="font-mono text-xs text-[#C6FF4D] font-bold">
                Score: 76.11%
              </span>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3 resume-item-block">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-bold border-b border-[#2A3036] pb-1">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF4D]" />
                <span className="text-[#F4F5F2]">ServiceNow System Administrator</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF4D]" />
                <span className="text-[#F4F5F2]">ServiceNow Application Developer</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#74E3A1]" />
                <span className="text-[#F4F5F2]">Full Stack Development (MERN Stack)</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3 resume-item-block">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-bold border-b border-[#2A3036] pb-1">
              ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-[#A0A7AF] leading-relaxed pl-1">
              <li>Delivered UI/UX and frontend solutions across multiple enterprise products.</li>
              <li>Collaborated with cross-functional teams to improve usability and product quality.</li>
              <li>Certified ServiceNow System Administrator and Application Developer.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0B0D0F] border-t border-[#2A3036] flex items-center justify-between text-xs font-mono text-[#A0A7AF] print:hidden">
          <span>Official resume of Kalash Gupta.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#191E23] text-[#F4F5F2] hover:bg-[#222830]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
