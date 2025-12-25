
import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onGetStartedClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <div className="px-6 pt-24 pb-12 text-center max-w-4xl mx-auto flex flex-col items-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 md:mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[12px] md:text-[13px] text-white/80 animate-fade-in-up">
        <Sparkles size={12} className="text-white/60" />
        <span>Your AI Partner</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] text-white animate-fade-in-up delay-100">
        The AI layer that powers <br />
        <span className="italic font-normal opacity-90 font-serif inline-block px-1 pb-1">service businesses.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-xl text-white/60 max-w-2xl mb-10 md:mb-12 leading-relaxed animate-fade-in-up delay-200">
        We turn operational chaos into streamlined workflows—so you can serve more clients, better.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
        <button 
          onClick={onGetStartedClick}
          className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-white text-black rounded-full font-bold text-sm md:text-base hover:bg-white/90 transition-all shadow-lg shadow-white/5 active:scale-95"
        >
          Get started
        </button>
        <button className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all backdrop-blur-md active:scale-95">
          Learn more
        </button>
      </div>
    </div>
  );
};
