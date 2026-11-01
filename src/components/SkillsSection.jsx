import React, { useState, useMemo } from 'react';
import {
  SKILL_CATEGORIES,
  SKILLS_DATA
} from '../data/skillsData';
import {
  Search,
  CheckCircle2,
  Code2,
  Terminal,
  Send,
  Atom,
  Server,
  Layers,
  ChevronRight,
  X,
  FileCode,
  Zap,
  Cpu,
  Sliders,
  Repeat,
  Layout,
  Smartphone,
  Globe,
  CheckSquare,
  Bug,
  ShieldCheck,
  PlayCircle,
  BarChart2,
  Radio,
  FileCheck,
  Activity,
  AlertTriangle,
  Sparkles,
  Palette,
  Grid,
  Maximize2,
  Bot,
  Workflow
} from 'lucide-react';

// Icon Map
const ICON_COMPONENTS = {
  CheckCircle2,
  Cpu,
  Repeat,
  Layout,
  Smartphone,
  Globe,
  CheckSquare,
  Bug,
  ShieldCheck,
  Sliders,
  Zap,
  Code2,
  Terminal,
  FileCode,
  PlayCircle,
  BarChart2,
  Send,
  Radio,
  FileCheck,
  Activity,
  AlertTriangle,
  Atom,
  Sparkles,
  Palette,
  Layers,
  Grid,
  Maximize2,
  Server,
  Bot,
  Workflow,
  Sparkle: Sparkles,
};

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkillModal, setActiveSkillModal] = useState(null);

  // Filter skills based on category and search query
  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-[#0B0D0F] relative border-b border-[#2A3036]/60"
      aria-label="Skills and Technical Toolkit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[#C6FF4D] font-bold tracking-widest uppercase">
            02 / TOOLKIT
          </span>
          <span className="h-px flex-1 max-w-xs bg-[#2A3036]" />
        </div>

        {/* Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#F4F5F2] tracking-tight">
              My tools. My process. <span className="text-[#C6FF4D]">My craft.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-[#A0A7AF] mt-3 max-w-2xl">
              An honest, production-grounded toolkit organized across quality assurance,
              automation testing, API validation, frontend architecture, and AI workflows.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A7AF]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills or tools..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121519] border border-[#2A3036] text-sm text-[#F4F5F2] placeholder-[#A0A7AF]/60 focus:outline-none focus:border-[#C6FF4D] transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A7AF] hover:text-[#F4F5F2]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#C6FF4D] text-[#0B0D0F] font-bold shadow-md shadow-[#C6FF4D]/15'
                    : 'bg-[#121519] border border-[#2A3036] text-[#A0A7AF] hover:text-[#F4F5F2] hover:border-[#3E4752]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = ICON_COMPONENTS[skill.icon] || Code2;
            const isExperienced = skill.level === 'Experienced';
            const isLearning = skill.level === 'Currently Learning';

            return (
              <div
                key={index}
                onClick={() => setActiveSkillModal(skill)}
                className="group p-5 rounded-2xl bg-[#121519] border border-[#2A3036] hover:border-[#C6FF4D]/50 hover:bg-[#15191E] transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-[#C6FF4D]/5 transform hover:-translate-y-0.5"
                tabIndex={0}
                role="button"
                aria-label={`View details and test code for ${skill.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveSkillModal(skill);
                  }
                }}
              >
                {/* Card Top: Icon & Proficiency Label */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#191E23] border border-[#2A3036] group-hover:border-[#C6FF4D]/40 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-[#C6FF4D]" />
                  </div>

                  {/* Level Pill */}
                  <span
                    className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${
                      isExperienced
                        ? 'bg-[#C6FF4D]/10 text-[#C6FF4D] border-[#C6FF4D]/30'
                        : isLearning
                        ? 'bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/30'
                        : 'bg-[#191E23] text-[#A0A7AF] border-[#2A3036]'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Card Middle: Title & Short Description */}
                <div>
                  <h3 className="font-heading font-bold text-base text-[#F4F5F2] group-hover:text-[#C6FF4D] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="font-body text-xs text-[#A0A7AF] mt-2 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Card Bottom: Click to Inspect Snippet */}
                <div className="pt-3 border-t border-[#2A3036]/60 flex items-center justify-between text-[11px] font-mono text-[#A0A7AF] group-hover:text-[#F4F5F2]">
                  <span>Inspect Spec / Code</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C6FF4D] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#121519] border border-[#2A3036] space-y-3">
            <Search className="w-8 h-8 text-[#A0A7AF] mx-auto" />
            <h4 className="font-heading font-bold text-lg text-[#F4F5F2]">No matching tools found</h4>
            <p className="font-body text-sm text-[#A0A7AF]">
              Try adjusting your search query or reset the filter to "All Disciplines".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-[#191E23] text-xs font-mono text-[#C6FF4D] border border-[#2A3036] hover:border-[#C6FF4D]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Honest Proficiency Legend */}
        <div className="mt-12 p-4 rounded-xl bg-[#121519] border border-[#2A3036] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A0A7AF]">
          <span className="text-[#F4F5F2] font-semibold">Proficiency Taxonomy:</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6FF4D]" />
            <span className="text-[#F4F5F2]">Experienced:</span> Routine daily production use
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
            <span className="text-[#F4F5F2]">Working Knowledge:</span> Practical capability & applied scenarios
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#74E3A1]" />
            <span className="text-[#F4F5F2]">Currently Learning:</span> Actively studying & building hands-on
          </div>
        </div>
      </div>

      {/* Interactive Skill Code / Test Assertion Modal */}
      {activeSkillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveSkillModal(null)}
          />

          <div className="relative w-full max-w-xl rounded-2xl bg-[#121519] border border-[#C6FF4D]/40 p-6 shadow-2xl z-10 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#2A3036] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#C6FF4D]/10 text-[#C6FF4D] border border-[#C6FF4D]/20">
                    {activeSkillModal.level}
                  </span>
                  <span className="font-mono text-xs text-[#A0A7AF] uppercase">
                    {activeSkillModal.category}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#F4F5F2] mt-1">
                  {activeSkillModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveSkillModal(null)}
                className="p-1.5 rounded-lg bg-[#191E23] text-[#A0A7AF] hover:text-[#F4F5F2] hover:bg-[#222830]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description & Real-world details */}
            <div className="space-y-3">
              <p className="font-body text-sm text-[#F4F5F2] leading-relaxed">
                {activeSkillModal.description}
              </p>
              <div className="p-3 rounded-xl bg-[#0B0D0F] border border-[#2A3036] font-body text-xs text-[#A0A7AF] leading-relaxed">
                <span className="text-[#C6FF4D] font-mono font-bold block mb-1">
                  PRODUCTION CONTEXT:
                </span>
                {activeSkillModal.details}
              </div>
            </div>

            {/* Code / Test Spec Snippet */}
            {activeSkillModal.snippet && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#A0A7AF]">
                  <span>TECHNICAL SPECIFICATION // CODE SAMPLE</span>
                  <span className="text-[#74E3A1]">VERIFIED SYNTAX</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B0D0F] border border-[#2A3036] overflow-x-auto max-h-56">
                  <pre className="font-mono text-xs text-[#F4F5F2] leading-relaxed">
                    <code>{activeSkillModal.snippet}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveSkillModal(null)}
                className="px-4 py-2 rounded-xl bg-[#191E23] hover:bg-[#222830] text-xs font-mono text-[#F4F5F2] border border-[#2A3036] transition-colors"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
