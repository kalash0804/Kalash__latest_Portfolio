import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-xl border transition-all duration-300 group flex items-center justify-center cursor-pointer ${
        isDark
          ? 'bg-[#121519] border-[#2A3036] text-[#A0A7AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/50 hover:bg-[#191E23]'
          : 'bg-[#F1F5F9] border-[#CBD5E1] text-[#475569] hover:text-[#0F172A] hover:border-[#94A3B8] hover:bg-[#FFFFFF]'
      } ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to Light Mode (T)" : "Switch to Dark Mode (T)"}
    >
      <div className="relative w-4 h-4">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#C6FF4D] transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#0F172A] transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
    </button>
  );
};
