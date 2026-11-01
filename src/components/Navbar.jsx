import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = ({ onOpenResume, onOpenShortcuts }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Monitor scroll for glassmorphism backdrop & section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'process', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 print:hidden ${
          isScrolled
            ? 'bg-[#0B0D0F]/85 backdrop-blur-md border-b border-[#2A3036] py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF4D] rounded-lg p-1"
              aria-label="Kalash Gupta Portfolio Home"
            >
              <div className="relative w-10 h-10 rounded-lg bg-[#121519] border border-[#2A3036] flex items-center justify-center font-mono font-bold text-sm text-[#F4F5F2] group-hover:border-[#C6FF4D] transition-colors overflow-hidden">
                <span className="text-[#F4F5F2]">K</span>
                <span className="text-[#C6FF4D]">G</span>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#C6FF4D] animate-ping" />
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#C6FF4D]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base tracking-tight text-[#F4F5F2] group-hover:text-[#C6FF4D] transition-colors">
                  Kalash Gupta
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A0A7AF] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#74E3A1]" />
                  QA &middot; UI/UX &middot; Frontend
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#121519]/70 border border-[#2A3036] px-3 py-1.5 rounded-full backdrop-blur-sm" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#0B0D0F] bg-[#C6FF4D] font-semibold shadow-sm'
                        : 'text-[#A0A7AF] hover:text-[#F4F5F2] hover:bg-[#191E23]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Resume + Let's Talk + Theme Toggle */}
            <div className="hidden md:flex items-center gap-2.5">
              <ThemeToggle />

              <button
                onClick={onOpenResume}
                className="px-3.5 py-1.5 rounded-lg border border-[#2A3036] bg-[#121519] text-xs font-mono text-[#A0A7AF] hover:text-[#F4F5F2] hover:border-[#3E4752] transition-colors flex items-center gap-1.5"
                title="View verified resume"
              >
                <span>CV / Resume</span>
              </button>

              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-[#C6FF4D] text-[#0B0D0F] text-xs font-heading font-bold tracking-wide hover:bg-[#b8f53a] transition-all duration-200 flex items-center gap-1.5 shadow-lg shadow-[#C6FF4D]/10 hover:shadow-[#C6FF4D]/25 transform active:scale-95"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              {/* Keyboard shortcuts trigger */}
              <button
                onClick={onOpenShortcuts}
                className="w-8 h-8 rounded-lg border border-[#2A3036] bg-[#121519] text-[#A0A7AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors flex items-center justify-center font-mono text-xs"
                title="Keyboard Shortcuts (?)"
                aria-label="View Keyboard Shortcuts"
              >
                ?
              </button>
            </div>

            {/* Mobile Hamburger Button & Theme Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-md bg-[#C6FF4D] text-[#0B0D0F] text-xs font-bold font-heading"
              >
                Talk
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#121519] border border-[#2A3036] text-[#F4F5F2] hover:text-[#C6FF4D] focus:outline-none focus:ring-2 focus:ring-[#C6FF4D]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0B0D0F] border-l border-[#2A3036] p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-200">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2A3036]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#121519] border border-[#C6FF4D]/40 flex items-center justify-center font-mono font-bold text-xs text-[#C6FF4D]">
                    KG
                  </div>
                  <span className="font-heading font-bold text-sm text-[#F4F5F2]">Kalash Gupta</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-[#121519] border border-[#2A3036] text-[#A0A7AF] hover:text-[#F4F5F2]"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 mt-6" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-heading transition-colors ${
                        isActive
                          ? 'bg-[#191E23] text-[#C6FF4D] font-bold border border-[#C6FF4D]/30'
                          : 'text-[#A0A7AF] hover:text-[#F4F5F2] hover:bg-[#121519]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#C6FF4D]" />}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#2A3036] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-xl border border-[#2A3036] bg-[#121519] text-xs font-mono text-[#F4F5F2] hover:border-[#C6FF4D] transition-colors flex items-center justify-center gap-2"
              >
                <span>View Full Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#C6FF4D] text-[#0B0D0F] font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#C6FF4D]/15"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <div className="text-center pt-2">
                <span className="font-mono text-[10px] text-[#A0A7AF]">Durg, Chhattisgarh &middot; Open to Roles</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
