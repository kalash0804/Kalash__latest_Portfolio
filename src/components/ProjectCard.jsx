import React from 'react';
import { ArrowUpRight, Shield, BookOpen, Layers } from 'lucide-react';
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

export const ProjectCard = ({ project, index, onSelect }) => {
  const Mockup = MOCKUP_MAP[project.mockupType] || ServiceNowFlowMockup;
  const isLarge = project.featured;

  return (
    <div
      className={`group relative rounded-2xl bg-[#121519] border border-[#2A3036] hover:border-[#C6FF4D]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-[#C6FF4D]/5 ${
        isLarge ? 'lg:col-span-12 xl:col-span-6' : 'lg:col-span-6 xl:col-span-6'
      }`}
    >
      {/* Top Border Indicator */}
      <div
        className="h-1 w-full bg-gradient-to-r from-transparent via-[#C6FF4D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />

      <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
        {/* Top Header: Category & Enterprise / Source Tag */}
        <div className="flex items-center justify-between gap-3">
          <span
            className={`font-mono text-[11px] px-2.5 py-1 rounded-md border uppercase font-semibold ${
              project.categoryColor === 'violet'
                ? 'bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/30'
                : 'bg-[#C6FF4D]/10 text-[#C6FF4D] border-[#C6FF4D]/30'
            }`}
          >
            {project.category}
          </span>

          {project.isEnterprise ? (
            <span className="font-mono text-[10px] text-[#A0A7AF] flex items-center gap-1.5 bg-[#0B0D0F] px-2.5 py-1 rounded-md border border-[#2A3036]">
              <Shield className="w-3 h-3 text-[#A78BFA]" />
              Enterprise Platform
            </span>
          ) : (
            <span className="font-mono text-[10px] text-[#A0A7AF] flex items-center gap-1.5 bg-[#0B0D0F] px-2.5 py-1 rounded-md border border-[#2A3036]">
              <Layers className="w-3 h-3 text-[#74E3A1]" />
              Web Application
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#F4F5F2] group-hover:text-[#C6FF4D] transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[#C6FF4D] font-medium">
            {project.subtitle}
          </p>
          <p className="font-body text-sm text-[#A0A7AF] leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Embedded Interactive/Sanitized Interface Mockup */}
        <div className="w-full transform group-hover:scale-[1.01] transition-transform duration-300">
          <Mockup />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#191E23] border border-[#2A3036] text-[#A0A7AF]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#2A3036] flex items-center justify-between gap-3">
          <button
            onClick={() => onSelect(project)}
            className="px-4 py-2 rounded-xl bg-[#191E23] hover:bg-[#C6FF4D] hover:text-[#0B0D0F] text-xs font-mono text-[#F4F5F2] border border-[#2A3036] hover:border-[#C6FF4D] transition-all flex items-center gap-1.5 font-bold cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-[#121519] border border-[#2A3036] text-[#A0A7AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors"
              title="View Public Profile / Repo"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
