import React, { useEffect } from 'react';
import { X, Command, Terminal, Sparkles, Keyboard, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const HUDControls = ({ isOpen, onClose, onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.key === '?') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true); // Toggle open
      } else if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        toggleTheme();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        onOpenResume();
      } else if (e.key === '1') {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === '2') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === '3') {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === '4') {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === '5') {
        document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === '6') {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === '7') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onOpenResume, toggleTheme]);

  if (!isOpen) return null;

  const shortcuts = [
    { key: 'T', label: `Toggle Theme (Currently ${theme === 'dark' ? 'Dark' : 'Light'})` },
    { key: '1', label: 'Jump to Home Hero' },
    { key: '2', label: 'Jump to 01 / About Me' },
    { key: '3', label: 'Jump to 02 / Technical Toolkit' },
    { key: '4', label: 'Jump to 03 / Selected Projects' },
    { key: '5', label: 'Jump to Signature Testing Pipeline' },
    { key: '6', label: 'Jump to 04 / Experience Timeline' },
    { key: '7', label: 'Jump to 06 / Contact & Message' },
    { key: 'R', label: 'Open Verified Printable Resume' },
    { key: '?', label: 'Toggle this Shortcuts Guide' },
    { key: 'Esc', label: 'Close Active Modals' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => onClose()}
      />

      <div className="relative w-full max-w-md rounded-2xl bg-[#121519] border border-[#C6FF4D]/40 p-6 shadow-2xl z-10 space-y-5 animate-in fade-in zoom-in-95 duration-150 font-mono text-xs">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2A3036] pb-3">
          <div className="flex items-center gap-2 text-[#C6FF4D]">
            <Keyboard className="w-4 h-4" />
            <span className="font-bold text-sm text-[#F4F5F2]">KEYBOARD NAVIGATION HUD</span>
          </div>
          <button
            onClick={() => onClose()}
            className="p-1 rounded-lg bg-[#191E23] text-[#A0A7AF] hover:text-[#F4F5F2]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[#A0A7AF] leading-relaxed">
          Navigate directly across Kalash Gupta's portfolio using single keystrokes:
        </p>

        {/* Shortcuts list */}
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {shortcuts.map((sc, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2 rounded-lg bg-[#0B0D0F] border border-[#2A3036]"
            >
              <span className="text-[#F4F5F2]">{sc.label}</span>
              <kbd className="px-2 py-1 rounded bg-[#191E23] text-[#C6FF4D] border border-[#C6FF4D]/30 font-bold min-w-6 text-center">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="pt-2 text-[10px] text-[#A0A7AF] text-center border-t border-[#2A3036]">
          Press <span className="text-[#C6FF4D]">Esc</span> to exit
        </div>
      </div>
    </div>
  );
};
