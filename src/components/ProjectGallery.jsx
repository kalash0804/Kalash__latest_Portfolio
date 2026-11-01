import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-[#0B0D0F] relative border-b border-[#2A3036]/60"
      aria-label="Featured Projects and Case Studies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[#C6FF4D] font-bold tracking-widest uppercase">
            03 / SELECTED WORK
          </span>
          <span className="h-px flex-1 max-w-xs bg-[#2A3036]" />
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F2] tracking-tight leading-[1.1]">
              Problems found.
              <br />
              <span className="text-[#C6FF4D]">Solutions refined.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-[#A0A7AF] mt-4 max-w-2xl">
              Curated case studies spanning fleet scheduling, oncology clinical dashboards,
              enterprise HRMS, smart ServiceNow workspace allocation, academic verification,
              and AI agents across Education, Healthcare, HRMS, Auction, and ServiceNow platforms.
            </p>
          </div>

          {/* Quick Metrics / Verification Pill */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121519] border border-[#2A3036] font-mono text-xs text-[#A0A7AF]">
            <CheckCircle2 className="w-4 h-4 text-[#74E3A1]" />
            <span>{PROJECTS_DATA.length} Verified Projects Documented</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
