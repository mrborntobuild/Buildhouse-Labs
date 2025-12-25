
import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onGetStartedClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <div className="px-6 pt-24 pb-12 text-center max-w-4xl mx-auto flex flex-col items-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 md:mb-8 rounded-full bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-md text-[12px] md:text-[13px] text-white/90 animate-fade-in-up">
        <Sparkles size={12} className="text-emerald-400" />
        <span>Your AI Partner</span>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] text-white animate-fade-in-up delay-100">
        The AI layer that powers <br />
        <span className="italic font-normal opacity-90 font-serif inline-block px-1 pb-1">
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">service</span> businesses.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl md:text-xl text-white/60 max-w-2xl mb-10 md:mb-12 leading-relaxed animate-fade-in-up delay-200">
        We turn operational chaos into streamlined workflows—so you can serve more clients, better.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
        <button 
          onClick={onGetStartedClick}
          className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-bold text-sm md:text-base hover:from-green-500 hover:to-blue-600 transition-all shadow-lg shadow-green-500/20 active:scale-95"
        >
          Get started
        </button>
        <button className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-white/5 border border-green-500/30 text-white rounded-full font-bold text-sm md:text-base hover:bg-green-500/10 hover:border-green-500/50 transition-all backdrop-blur-md active:scale-95">
          Learn more
        </button>
      </div>
    </div>
  );
};
