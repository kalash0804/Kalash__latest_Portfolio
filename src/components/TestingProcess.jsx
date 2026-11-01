import React, { useState } from 'react';
import { TESTING_PIPELINE } from '../data/testingPhilosophyData';
import { Compass, Search, CheckCheck, Zap, TrendingUp, ChevronRight, Terminal, ArrowRight, ShieldAlert } from 'lucide-react';

const ICON_MAP = {
  Compass,
  Search,
  CheckCheck,
  Zap,
  TrendingUp,
};

export const TestingProcess = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Default to Step 03: Validate

  const currentStep = TESTING_PIPELINE[activeStepIndex];
  const StepIcon = ICON_MAP[currentStep.icon] || CheckCheck;

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#0B0D0F] relative border-b border-[#2A3036]/60 overflow-hidden"
      aria-label="Testing Philosophy and Process"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C6FF4D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[#C6FF4D] font-bold tracking-widest uppercase">
            SIGNATURE METHODOLOGY
          </span>
          <span className="h-px flex-1 max-w-xs bg-[#2A3036]" />
        </div>

        {/* Title */}
        <div className="mb-14">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F2] tracking-tight leading-[1.12]">
            Quality isn't a final step.
            <br />
            <span className="text-[#C6FF4D]">It's the entire process.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#A0A7AF] mt-4 max-w-2xl leading-relaxed">
            A proactive, five-stage quality engineering pipeline designed to intercept defects
            early, ensure architectural consistency, and establish release confidence.
          </p>
        </div>

        {/* Horizontal Pipeline Step Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {TESTING_PIPELINE.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || CheckCheck;
            const isActive = activeStepIndex === idx;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 relative group ${
                  isActive
                    ? 'bg-[#191E23] border-[#C6FF4D] shadow-xl shadow-[#C6FF4D]/10'
                    : 'bg-[#121519] border-[#2A3036] hover:border-[#3E4752]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#C6FF4D]' : 'text-[#A0A7AF]'
                    }`}
                  >
                    STEP {item.step}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#C6FF4D] text-[#0B0D0F]'
                        : 'bg-[#191E23] text-[#A0A7AF] group-hover:text-[#F4F5F2]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3
                    className={`font-heading font-bold text-base ${
                      isActive ? 'text-[#F4F5F2]' : 'text-[#A0A7AF] group-hover:text-[#F4F5F2]'
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p className="font-body text-[11px] text-[#A0A7AF] mt-1 line-clamp-1">
                    {item.tagline}
                  </p>
                </div>

                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute -bottom-px left-4 right-4 h-0.5 bg-[#C6FF4D]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Deep Dive */}
        <div className="rounded-3xl bg-[#121519] border border-[#2A3036] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Step Explanations & Key Questions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#191E23] border border-[#C6FF4D]/40 flex items-center justify-center">
                  <StepIcon className="w-5 h-5 text-[#C6FF4D]" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase text-[#C6FF4D] font-bold">
                    STAGE {currentStep.step} OF 05
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#F4F5F2]">
                    {currentStep.name} — {currentStep.tagline}
                  </h3>
                </div>
              </div>

              <p className="font-body text-sm sm:text-base text-[#A0A7AF] leading-relaxed">
                {currentStep.summary}
              </p>

              {/* Critical Questions Asked in this Phase */}
              <div className="p-4 rounded-xl bg-[#0B0D0F] border border-[#2A3036] space-y-2.5">
                <span className="font-mono text-xs text-[#C6FF4D] uppercase font-bold block">
                  CRITICAL INQUIRIES & AUDIT CRITERIA:
                </span>
                <ul className="space-y-2">
                  {currentStep.keyQuestions.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-body text-[#F4F5F2]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Concrete QA Deliverable / Artifact Snippet */}
            <div className="lg:col-span-6 space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs text-[#A0A7AF]">
                <span className="flex items-center gap-1.5 text-[#74E3A1]">
                  <Terminal className="w-3.5 h-3.5" />
                  PRODUCED ARTIFACT: {currentStep.deliverableType}
                </span>
                <span className="text-[10px] text-[#A0A7AF]">STANDARD SPEC</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0D0F] border border-[#2A3036] overflow-x-auto shadow-inner">
                <pre className="text-xs text-[#F4F5F2] leading-relaxed font-mono">
                  <code>{currentStep.artifactSnippet}</code>
                </pre>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#A0A7AF] pt-1">
                <span>STAGE STATUS: VERIFIED ACCORDING TO PLAN</span>
                <button
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev + 1) % TESTING_PIPELINE.length)
                  }
                  className="text-[#C6FF4D] hover:underline flex items-center gap-1 cursor-pointer font-bold"
                >
                  <span>Advance Pipeline</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
