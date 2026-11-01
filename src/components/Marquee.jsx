import React from 'react';
import { Sparkles, Terminal, Shield, Cpu } from 'lucide-react';

export const Marquee = () => {
  const phrases = [
    { text: 'TEST WITH PURPOSE', icon: Shield },
    { text: 'DESIGN WITH EMPATHY', icon: Sparkles },
    { text: 'BUILD WITH PRECISION', icon: Cpu },
    { text: 'SHIP WITH CONFIDENCE', icon: Terminal },
  ];

  // Repeat for continuous marquee loop
  const repeatedPhrases = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div
      className="relative w-full py-4 bg-[#121519] border-y border-[#2A3036] overflow-hidden select-none"
      aria-label="Core Engineering Philosophy Strip"
    >
      {/* Edge Soft Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0B0D0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0B0D0F] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {repeatedPhrases.map((phrase, idx) => {
          const Icon = phrase.icon;
          return (
            <div key={idx} className="flex items-center gap-6 mx-6 shrink-0">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-widest text-[#F4F5F2] hover:text-[#C6FF4D] transition-colors">
                {phrase.text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C6FF4D] shadow-sm shadow-[#C6FF4D]/50" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
