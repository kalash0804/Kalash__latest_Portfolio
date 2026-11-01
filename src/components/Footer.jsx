import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090B] border-t border-[#2A3036] py-16 relative select-none print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#2A3036]/60">
          {/* Brand & Monogram */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#121519] border border-[#2A3036] flex items-center justify-center font-mono font-bold text-sm text-[#F4F5F2]">
                <span>K</span>
                <span className="text-[#C6FF4D]">G</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-[#F4F5F2] block">
                  Kalash Gupta
                </span>
                <span className="font-mono text-xs text-[#A0A7AF]">
                  QA Engineer &middot; UI/UX Designer &middot; Frontend Developer
                </span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#A0A7AF] leading-relaxed max-w-sm">
              "QA Engineer, UI/UX Designer and Frontend Developer delivering reliable, user-friendly
              enterprise software across Education, Healthcare, HRMS, Auction, and ServiceNow platforms."
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/kalash-gupta08"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#121519] border border-[#2A3036] flex items-center justify-center text-[#A0A7AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/kalash0804"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#121519] border border-[#2A3036] flex items-center justify-center text-[#A0A7AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:kalashgupta2001@gmail.com"
                className="w-9 h-9 rounded-xl bg-[#121519] border border-[#2A3036] flex items-center justify-center text-[#A0A7AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Shortcuts */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[#C6FF4D] font-bold uppercase tracking-wider block">
              SYSTEM DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-2 text-[#A0A7AF]">
              <a href="#hero" className="hover:text-[#F4F5F2] transition-colors">00. Home</a>
              <a href="#about" className="hover:text-[#F4F5F2] transition-colors">01. About Me</a>
              <a href="#skills" className="hover:text-[#F4F5F2] transition-colors">02. Toolkit</a>
              <a href="#projects" className="hover:text-[#F4F5F2] transition-colors">03. Selected Work</a>
              <a href="#process" className="hover:text-[#F4F5F2] transition-colors">04. Philosophy</a>
              <a href="#experience" className="hover:text-[#F4F5F2] transition-colors">05. Experience</a>
              <a href="#certifications" className="hover:text-[#F4F5F2] transition-colors">06. Credentials</a>
              <a href="#contact" className="hover:text-[#F4F5F2] transition-colors">07. Contact</a>
            </div>
          </div>

          {/* Quick Actions & Status */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[#F4F5F2] font-bold uppercase tracking-wider block">
              STATUS & ACTIONS
            </span>
            <div className="p-3 rounded-xl bg-[#121519] border border-[#2A3036] space-y-2">
              <div className="flex items-center gap-2 text-[#74E3A1]">
                <span className="w-2 h-2 rounded-full bg-[#74E3A1] animate-ping" />
                <span className="text-[11px] font-bold">READY FOR HIRE</span>
              </div>
              <p className="text-[10px] text-[#A0A7AF]">
                Available for QA, UI/UX & Frontend Development roles.
              </p>
              <button
                onClick={onOpenResume}
                className="w-full py-1.5 rounded-lg bg-[#191E23] hover:bg-[#222830] text-[11px] text-[#C6FF4D] border border-[#2A3036] transition-colors block text-center"
              >
                Curriculum Vitae
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A0A7AF]">
          <div>
            &copy; {currentYear} Kalash Gupta &middot; All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121519] border border-[#2A3036] text-[#A0A7AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
