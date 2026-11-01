import React from 'react';
import { EXPERIENCE_DATA } from '../data/experienceData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-[#0B0D0F] relative border-b border-[#2A3036]/60"
      aria-label="Professional Experience Timeline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[#C6FF4D] font-bold tracking-widest uppercase">
            04 / EXPERIENCE
          </span>
          <span className="h-px flex-1 max-w-xs bg-[#2A3036]" />
        </div>

        {/* Title */}
        <div className="mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F2] tracking-tight">
            Engineering & Quality <span className="text-[#C6FF4D]">Milestones.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#A0A7AF] mt-3 max-w-2xl">
            A verified timeline of professional growth at i-Connectresources International,
            transitioning from intensive full-stack development training into production quality
            assurance and frontend engineering.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#2A3036] space-y-12 max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-[#C6FF4D] border-[#0B0D0F] ring-4 ring-[#C6FF4D]/20 shadow-lg shadow-[#C6FF4D]/40'
                    : 'bg-[#191E23] border-[#3E4752] group-hover:border-[#C6FF4D]'
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121519] border border-[#2A3036] group-hover:border-[#C6FF4D]/50 transition-all duration-300 space-y-5 shadow-xl">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2A3036] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#C6FF4D] font-bold">
                        {exp.company}
                      </span>
                      {exp.isCurrent && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#74E3A1]/10 text-[#74E3A1] border border-[#74E3A1]/30 uppercase font-semibold">
                          Active Role
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#F4F5F2] mt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#A0A7AF]">
                    <span className="flex items-center gap-1.5 bg-[#0B0D0F] px-3 py-1 rounded-md border border-[#2A3036]">
                      <Calendar className="w-3.5 h-3.5 text-[#C6FF4D]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#0B0D0F] px-2.5 py-1 rounded-md border border-[#2A3036]">
                      <MapPin className="w-3.5 h-3.5 text-[#A78BFA]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="font-body text-sm sm:text-base text-[#A0A7AF] leading-relaxed">
                  {exp.description}
                </p>

                {/* Core Responsibilities List */}
                <div className="space-y-2.5 pt-2">
                  <span className="font-mono text-xs text-[#F4F5F2] font-semibold uppercase block tracking-wider">
                    KEY CONTRIBUTIONS & RESPONSIBILITIES:
                  </span>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[#F4F5F2]/90 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C6FF4D] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applied Skills Badges */}
                <div className="pt-3 border-t border-[#2A3036]/60 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#191E23] border border-[#2A3036] text-[#A0A7AF]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
