
import React from 'react';

interface NavbarProps {
  onGetStartedClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGetStartedClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 md:px-12 md:py-4 w-full bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
          <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-black rounded-sm transform rotate-45"></div>
        </div>
        <div className="flex flex-col -space-y-0.5 md:-space-y-1">
          <span className="text-sm md:text-base lg:text-lg font-bold tracking-tight leading-none">BUILDHOUSE</span>
          <span className="text-[9px] md:text-[10px] lg:text-[11px] font-medium tracking-[0.25em] text-white/40 leading-none">LABS</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
        <a 
          href="#use-cases" 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('use-cases');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="hover:text-white transition-colors"
        >
          Use Cases
        </a>
        <a href="#" className="hover:text-white transition-colors">Live Products</a>
        <a href="#" className="hover:text-white transition-colors">Changelog</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>

      <button 
        onClick={onGetStartedClick}
        className="px-4 py-2 md:px-5 md:py-2.5 bg-white/10 border border-white/10 hover:border-white/30 hover:bg-white/20 rounded-full text-xs md:text-sm font-semibold transition-all backdrop-blur-sm"
      >
        Get started
      </button>
    </nav>
  );
};
