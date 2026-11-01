import React, { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, Shield, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import {
  SchoolTransportMockup,
  OncologyHealthcareMockup,
  HRMSMockup,
  WorkspaceUtilizationMockup,
  LearningOutcomeMockup,
  MultilingualAIMockup,
  AcademicIntegrityMockup,
  ServiceNowFlowMockup
} from './ProjectMockups';

const MOCKUP_MAP = {
  'school-transport': SchoolTransportMockup,
  'oncology-healthcare': OncologyHealthcareMockup,
  'hrms-platform': HRMSMockup,
  'workspace-utilization': WorkspaceUtilizationMockup,
  'learning-outcome': LearningOutcomeMockup,
  'multilingual-ai': MultilingualAIMockup,
  'academic-integrity': AcademicIntegrityMockup,
  'servicenow-flow': ServiceNowFlowMockup,
};

export const ProjectCaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'scenarios' | 'challenges' | 'outcomes'

  if (!project) return null;

  const MockupComponent = MOCKUP_MAP[project.mockupType] || ServiceNowFlowMockup;
  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1114] border border-[#2A3036] rounded-2xl shadow-2xl overflow-y-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B0D0F]/90 backdrop-blur-md border-b border-[#2A3036]">
          <div className="flex items-center gap-3">
            <span
              className={`font-mono text-xs px-2.5 py-1 rounded-md border uppercase font-semibold ${
                project.categoryColor === 'violet'
                  ? 'bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/30'
                  : 'bg-[#C6FF4D]/10 text-[#C6FF4D] border-[#C6FF4D]/30'
              }`}
            >
              {project.category}
            </span>
            <span className="font-mono text-xs text-[#A0A7AF] hidden sm:inline">
              // CASE STUDY & QA REPORT
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#191E23] border border-[#2A3036] text-[#A0A7AF] hover:text-[#F4F5F2] hover:bg-[#222830] transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero of the Project */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F4F5F2]">
                {project.title}
              </h2>
              <p className="font-mono text-sm text-[#C6FF4D]">
                {project.subtitle}
              </p>
              <p className="font-body text-sm text-[#A0A7AF] leading-relaxed">
                {cs.overview}
              </p>

              {/* Meta tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#121519] border border-[#2A3036] text-[#A0A7AF]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Interface Preview */}
            <div className="lg:col-span-5">
              <MockupComponent />
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#2A3036] pb-3 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: '1. Objective & Role' },
              { id: 'scenarios', label: '2. Test Scenarios Matrix' },
              { id: 'challenges', label: '3. Challenges & Solutions' },
              { id: 'outcomes', label: '4. Outcomes & Deliverables' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl font-mono text-xs whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#C6FF4D] text-[#0B0D0F] font-bold shadow-md shadow-[#C6FF4D]/10'
                    : 'bg-[#121519] border border-[#2A3036] text-[#A0A7AF] hover:text-[#F4F5F2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Objective & Role */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#121519] border border-[#2A3036] space-y-2">
                  <span className="font-mono text-xs text-[#C6FF4D] uppercase font-bold block">
                    PROJECT OBJECTIVE
                  </span>
                  <p className="font-body text-sm text-[#F4F5F2] leading-relaxed">
                    {cs.objective}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#121519] border border-[#2A3036] space-y-2">
                  <span className="font-mono text-xs text-[#A78BFA] uppercase font-bold block">
                    MY SCOPE & RESPONSIBILITIES
                  </span>
                  <p className="font-body text-sm text-[#F4F5F2] leading-relaxed">
                    {cs.role}
                  </p>
                </div>
              </div>

              {/* Testing Approach */}
              <div className="p-5 rounded-xl bg-[#121519] border border-[#2A3036] space-y-3">
                <span className="font-mono text-xs text-[#74E3A1] uppercase font-bold block">
                  SYSTEMATIC METHODOLOGY & APPROACH
                </span>
                <ul className="space-y-2.5">
                  {cs.testingApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-body text-[#A0A7AF]">
                      <CheckCircle2 className="w-4 h-4 text-[#74E3A1] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Tech Stack */}
              <div>
                <span className="font-mono text-xs text-[#A0A7AF] uppercase block mb-2">
                  VERIFIED TOOLCHAIN & FRAMEWORKS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cs.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#191E23] border border-[#2A3036] font-mono text-xs text-[#F4F5F2]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Test Scenarios Matrix */}
          {activeTab === 'scenarios' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-base text-[#F4F5F2]">
                  Verification & Edge-Case Matrix
                </h4>
                <span className="font-mono text-xs text-[#74E3A1]">
                  {cs.scenariosMatrix.length} Documented Scenarios
                </span>
              </div>

              <div className="space-y-3">
                {cs.scenariosMatrix.map((tc) => (
                  <div
                    key={tc.id}
                    className="p-4 rounded-xl bg-[#121519] border border-[#2A3036] space-y-2.5 font-mono text-xs"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#C6FF4D] font-bold">{tc.id}</span>
                        <span className="text-[#3E4752]">&middot;</span>
                        <span className="px-2 py-0.5 rounded bg-[#191E23] text-[#A0A7AF] text-[10px] uppercase">
                          {tc.type}
                        </span>
                      </div>
                      <span className="text-[#74E3A1] bg-[#74E3A1]/10 px-2 py-0.5 rounded text-[10px] font-bold">
                        {tc.status}
                      </span>
                    </div>

                    <div className="text-[#F4F5F2] font-semibold font-body text-xs">
                      {tc.scenario}
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0B0D0F] border border-[#2A3036] space-y-1 text-[11px]">
                      <div>
                        <span className="text-[#A0A7AF]">Input Condition: </span>
                        <span className="text-[#C6FF4D]">{tc.input}</span>
                      </div>
                      <div>
                        <span className="text-[#A0A7AF]">Expected Assertion: </span>
                        <span className="text-[#F4F5F2]">{tc.expected}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Challenges & Solutions */}
          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-base text-[#F4F5F2]">
                Engineering Roadblocks & Applied Solutions
              </h4>
              <div className="space-y-4">
                {cs.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#121519] border border-[#2A3036] space-y-3"
                  >
                    <div className="flex items-start gap-2.5 text-xs font-body text-[#EF4444]">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-xs text-[#F87171] uppercase font-bold block mb-1">
                          CHALLENGE #{idx + 1}
                        </span>
                        <span className="text-[#F4F5F2]">{item.challenge}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs font-body text-[#74E3A1] pt-3 border-t border-[#2A3036]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-xs text-[#74E3A1] uppercase font-bold block mb-1">
                          SOLUTION APPLIED
                        </span>
                        <span className="text-[#A0A7AF]">{item.solution}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Outcomes & Deliverables */}
          {activeTab === 'outcomes' && (
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-base text-[#F4F5F2]">
                Key Deliverables & Usability Impact
              </h4>
              <div className="p-5 rounded-xl bg-[#121519] border border-[#2A3036] space-y-3">
                <ul className="space-y-3">
                  {cs.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-body text-[#F4F5F2]">
                      <div className="w-5 h-5 rounded-full bg-[#C6FF4D]/10 border border-[#C6FF4D]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[#C6FF4D] font-mono text-[10px] font-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <span className="leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Informative Link Notice */}
              {project.isEnterprise ? (
                <div className="p-4 rounded-xl bg-[#0B0D0F] border border-[#2A3036] flex items-center gap-3 font-mono text-xs text-[#A0A7AF]">
                  <Shield className="w-4 h-4 text-[#A78BFA] shrink-0" />
                  <span>
                    Enterprise / Production Project: Source code and internal instances
                    are protected under commercial non-disclosure. Case study demonstrates verified
                    technical methods and deliverables.
                  </span>
                </div>
              ) : project.repoUrl ? (
                <div className="p-4 rounded-xl bg-[#0B0D0F] border border-[#2A3036] flex items-center justify-between gap-3 font-mono text-xs">
                  <span className="text-[#A0A7AF]">Public Code & Repository Available:</span>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#191E23] text-[#C6FF4D] hover:bg-[#222830] transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : null}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0B0D0F] border-t border-[#2A3036] flex items-center justify-between">
          <span className="font-mono text-xs text-[#A0A7AF]">
            Kalash Gupta &middot; Project Case Study
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#C6FF4D] text-[#0B0D0F] font-heading font-bold text-xs hover:bg-[#b8f53a] transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
