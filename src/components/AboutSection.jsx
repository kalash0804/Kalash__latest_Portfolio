import React from 'react';
import { Target, Users, Palette, Code2 } from 'lucide-react';

export const AboutSection = () => {
  const mindsetPillars = [
    {
      icon: Target,
      title: 'Quality Assurance Mindset',
      description: 'Systematic manual, functional, regression, and cross-browser testing to detect defects and edge cases before release.',
      tag: 'Core Focus'
    },
    {
      icon: Palette,
      title: 'UI/UX & Design Systems',
      description: 'Crafting user flows, wireframes, and prototypes in Figma with auto layout and consistent design systems.',
      tag: 'Design'
    },
    {
      icon: Code2,
      title: 'Frontend Engineering',
      description: 'Developing high-performance, responsive web interfaces using React.js, Tailwind CSS, Vite, and JavaScript (ES6+).',
      tag: 'Development'
    },
    {
      icon: Users,
      title: 'Cross-Functional Synergy',
      description: 'Collaborating closely with developers, designers, product managers, and stakeholders to ship reliable products.',
      tag: 'Collaboration'
    }
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#0B0D0F] relative border-b border-[#2A3036]/60"
      aria-label="About Kalash Gupta"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[#C6FF4D] font-bold tracking-widest uppercase">
            01 / ABOUT
          </span>
          <span className="h-px flex-1 max-w-xs bg-[#2A3036]" />
        </div>

        {/* Editorial Layout: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Text */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F2] tracking-tight leading-[1.12]">
              Curious by nature.
              <br />
              <span className="text-[#C6FF4D]">Quality by design.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#A0A7AF] font-body leading-relaxed">
              <p className="border-l-2 border-[#C6FF4D] pl-4 text-[#F4F5F2] font-medium">
                "QA Engineer, UI/UX Designer and Frontend Developer with nearly 2 years of experience
                working on enterprise web applications across Education, Healthcare, HRMS, Auction and
                ServiceNow platforms. Skilled in manual testing, functional testing, UI testing, regression testing,
                responsive testing, cross-browser testing, defect tracking, retesting and release verification, along
                with React.js, JavaScript, Tailwind CSS, Vite, HTML5, CSS3, Figma and REST API integration."
              </p>

              <p>
                Experienced in validating end-to-end user workflows, role-based access, form validations,
                error handling, and UI consistency. Bridging design, engineering, and quality assurance
                enables me to understand how an application should look, how its components are coded,
                and where unexpected edge cases are likely to occur.
              </p>

              <p>
                Strong at collaborating with developers, designers, product managers, and stakeholders to
                deliver reliable, user-friendly products that scale seamlessly across devices and browsers.
              </p>
            </div>

            {/* Quick Status / Principles Strip */}
            <div className="p-4 rounded-xl bg-[#121519] border border-[#2A3036] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#74E3A1]" />
                <span className="text-[#F4F5F2]">QA Engineer &middot; UI/UX Designer &middot; Frontend Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                <span className="text-[#F4F5F2]">Platforms: Education, Healthcare, HRMS, Auction, ServiceNow</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Geometric Monogram Graphic & Mindset Pillars */}
          <div className="lg:col-span-5 space-y-6">
            {/* Abstract QA Radar Monogram Graphic */}
            <div className="relative rounded-2xl bg-[#121519] border border-[#2A3036] p-6 overflow-hidden group hover:border-[#C6FF4D]/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6FF4D]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[#2A3036] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C6FF4D]" />
                  <span className="font-mono text-xs text-[#F4F5F2] font-bold">RADAR : QUALITY & USABILITY</span>
                </div>
                <span className="font-mono text-[10px] text-[#A0A7AF] uppercase">AUDITED METRICS</span>
              </div>

              {/* Custom SVG Geometric Monogram & Target Radar */}
              <div className="relative w-full h-48 flex items-center justify-center my-2">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                  {/* Concentric Coordinate Rings */}
                  <circle cx="100" cy="100" r="90" stroke="#2A3036" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="100" cy="100" r="65" stroke="#2A3036" strokeWidth="1" />
                  <circle cx="100" cy="100" r="40" stroke="#C6FF4D" strokeOpacity="0.3" strokeWidth="1" />
                  <circle cx="100" cy="100" r="15" fill="#191E23" stroke="#C6FF4D" strokeWidth="1.5" />

                  {/* Crosshairs */}
                  <line x1="10" y1="100" x2="190" y2="100" stroke="#2A3036" strokeWidth="1" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke="#2A3036" strokeWidth="1" />

                  {/* Sweep line */}
                  <line x1="100" y1="100" x2="170" y2="40" stroke="#C6FF4D" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="170" cy="40" r="4" fill="#C6FF4D" className="animate-ping" />
                  <circle cx="170" cy="40" r="3" fill="#C6FF4D" />

                  {/* Target Nodes */}
                  <circle cx="55" cy="70" r="3" fill="#74E3A1" />
                  <circle cx="145" cy="135" r="3" fill="#A78BFA" />

                  {/* Center Monogram Typography */}
                  <text x="100" y="104" textAnchor="middle" fill="#C6FF4D" fontSize="12" fontWeight="bold" fontFamily="monospace">
                    KG
                  </text>
                </svg>

                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#A0A7AF]">
                  TARGET: RELIABLE PRODUCTS
                </div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-[#74E3A1]">
                  ZERO CRITICAL DEFECTS
                </div>
              </div>
            </div>

            {/* Mindset Pillars 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mindsetPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#121519] border border-[#2A3036] hover:border-[#3E4752] transition-colors group flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-[#191E23] border border-[#2A3036] group-hover:border-[#C6FF4D]/40 flex items-center justify-center transition-colors">
                        <Icon className="w-4 h-4 text-[#C6FF4D]" />
                      </div>
                      <span className="font-mono text-[10px] uppercase text-[#A0A7AF] bg-[#0B0D0F] px-2 py-0.5 rounded border border-[#2A3036]">
                        {pillar.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-sm text-[#F4F5F2] group-hover:text-[#C6FF4D] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-xs text-[#A0A7AF] mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
