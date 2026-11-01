import React from 'react';
import { ArrowUpRight, FileDown, CheckCircle2 } from 'lucide-react';
import { QualityInterface } from './QualityInterface';

export const HeroSection = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-grid-pattern"
      aria-label="Hero Introduction"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C6FF4D]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#121519] border border-[#2A3036] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#74E3A1] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#74E3A1]" />
              </span>
              <span className="font-mono text-xs text-[#F4F5F2] tracking-wide">
                Open to QA, UI/UX & Frontend Opportunities
              </span>
            </div>

            {/* Eyebrow Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6FF4D]" />
              <p className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-semibold">
                QA ENGINEER &middot; UI/UX DESIGNER &middot; FRONTEND DEVELOPER
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-[#F4F5F2] leading-[1.08]">
              I break things.
              <br />
              <span className="text-[#F4F5F2]">I make them </span>
              <span className="text-[#C6FF4D] underline decoration-[#C6FF4D]/40 decoration-4 underline-offset-8 text-glow-lime">
                better.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="font-body text-base sm:text-lg text-[#A0A7AF] leading-relaxed max-w-2xl">
              QA Engineer, UI/UX Designer, and Frontend Developer with nearly 2 years of experience
              building and testing enterprise web applications across Education, Healthcare, HRMS,
              Auction, and ServiceNow platforms.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-[#C6FF4D] text-[#0B0D0F] font-heading font-bold text-sm tracking-wide hover:bg-[#b8f53a] transition-all duration-200 flex items-center gap-2 shadow-xl shadow-[#C6FF4D]/15 hover:shadow-[#C6FF4D]/30 transform active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-[#121519] border border-[#2A3036] text-[#F4F5F2] font-heading font-semibold text-sm hover:border-[#C6FF4D] hover:bg-[#191E23] transition-all duration-200 flex items-center gap-2"
              >
                <FileDown className="w-4 h-4 text-[#C6FF4D]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Key Technical Highlights Pills */}
            <div className="pt-4 border-t border-[#2A3036]/70 flex flex-wrap gap-4 text-xs font-mono text-[#A0A7AF]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#74E3A1]" />
                <span>Manual & Automated QA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C6FF4D]" />
                <span>Figma UI/UX & Design Systems</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#74E3A1]" />
                <span>React.js, Tailwind CSS & Vite</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />
                <span>ServiceNow & REST APIs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Quality Control System Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <QualityInterface />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between">
        <a
          href="#about"
          className="group flex items-center gap-2 font-mono text-xs text-[#A0A7AF] hover:text-[#C6FF4D] transition-colors focus:outline-none"
          aria-label="Scroll to About Me section"
        >
          <div className="w-5 h-8 rounded-full border border-[#2A3036] group-hover:border-[#C6FF4D] flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#C6FF4D] animate-bounce" />
          </div>
          <span className="hidden sm:inline">SCROLL TO DISCOVER</span>
        </a>

        <div className="flex items-center gap-3 font-mono text-xs text-[#A0A7AF]">
          <span>LOC: DURG, CHHATTISGARH, INDIA</span>
          <span>&middot;</span>
          <span className="text-[#C6FF4D]">UTC+05:30</span>
        </div>
      </div>
    </section>
  );
};
