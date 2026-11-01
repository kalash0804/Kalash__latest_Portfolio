import React from 'react';
import { CERTIFICATIONS_DATA, EDUCATION_DATA, ACHIEVEMENTS_DATA, CURRENTLY_EXPLORING } from '../data/certificationsData';
import { Award, ExternalLink, Zap, Terminal, Bot, CheckCircle2, Sparkles, BookOpen, GraduationCap, Trophy, Palette } from 'lucide-react';

const EXPLORING_ICONS = {
  Zap,
  Terminal,
  Bot,
  Palette,
};

export const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-24 sm:py-32 bg-[#0B0D0F] relative border-b border-[#2A3036]/60"
      aria-label="Certifications, Education and Credentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[#C6FF4D] font-bold tracking-widest uppercase">
            05 / CREDENTIALS & EDUCATION
          </span>
          <span className="h-px flex-1 max-w-xs bg-[#2A3036]" />
        </div>

        {/* Title */}
        <div className="mb-14">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#F4F5F2] tracking-tight">
            Verified Credentials & <span className="text-[#C6FF4D]">Achievements.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#A0A7AF] mt-3 max-w-2xl">
            A verified inventory of professional certifications, formal academic background,
            and key achievements across enterprise software products.
          </p>
        </div>

        {/* Part 1: Completed & Verified Certifications */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#C6FF4D]" />
            <h3 className="font-heading font-bold text-xl text-[#F4F5F2]">
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#121519] border border-[#2A3036] hover:border-[#C6FF4D]/40 transition-colors flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-[#C6FF4D] uppercase font-bold">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#74E3A1]/10 text-[#74E3A1] border border-[#74E3A1]/30">
                      {cert.badge}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-[#F4F5F2]">
                    {cert.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#A0A7AF] mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#2A3036]/60">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#191E23] text-[#A0A7AF] border border-[#2A3036]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A0A7AF] hover:text-[#C6FF4D] transition-colors"
                    >
                      <span>Issuer Verification Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Formal Education & Key Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Formal Education Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#121519] border border-[#2A3036] flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#C6FF4D] uppercase font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C6FF4D]" />
                  ACADEMIC BACKGROUND
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#C6FF4D]/10 text-[#C6FF4D] border border-[#C6FF4D]/30 font-bold">
                  Score: {EDUCATION_DATA.score}
                </span>
              </div>

              <h4 className="font-heading font-bold text-xl text-[#F4F5F2]">
                {EDUCATION_DATA.degree}
              </h4>
              <p className="font-mono text-xs text-[#74E3A1] mt-1 font-semibold">
                {EDUCATION_DATA.institution} &middot; {EDUCATION_DATA.location}
              </p>
              <p className="font-body text-xs sm:text-sm text-[#A0A7AF] mt-3 leading-relaxed">
                {EDUCATION_DATA.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#2A3036] flex items-center gap-2 font-mono text-xs text-[#A0A7AF]">
              <CheckCircle2 className="w-4 h-4 text-[#74E3A1]" />
              <span>Verified Bachelor Degree Credentials</span>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#121519] border border-[#2A3036] space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-[#C6FF4D]" />
              <span className="font-mono text-xs text-[#C6FF4D] uppercase font-bold">
                CORE ACHIEVEMENTS & MILESTONES
              </span>
            </div>

            <div className="space-y-3">
              {ACHIEVEMENTS_DATA.map((ach, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#0B0D0F] border border-[#2A3036] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#191E23] border border-[#C6FF4D]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#C6FF4D] font-mono text-xs font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-sm text-[#F4F5F2]">
                      {ach.title}
                    </h5>
                    <p className="font-body text-xs text-[#A0A7AF] mt-0.5 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 3: Active Growth & Learning Roadmap */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#A78BFA]" />
              <h3 className="font-heading font-bold text-xl text-[#F4F5F2]">
                Active Exploration & Development
              </h3>
            </div>
            <span className="font-mono text-xs text-[#A78BFA] hidden sm:inline">
              // ACTIVE LEARNING ROADMAP
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CURRENTLY_EXPLORING.map((item) => {
              const Icon = EXPLORING_ICONS[item.icon] || BookOpen;
              return (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-[#121519] border border-[#2A3036] hover:border-[#A78BFA]/50 transition-colors flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#191E23] border border-[#A78BFA]/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#A78BFA]" />
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/30 uppercase font-bold">
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#F4F5F2]">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-[#A0A7AF] mt-1.5 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#2A3036]/60 font-mono text-[10px] text-[#A0A7AF]">
                    DISCIPLINE: {item.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
