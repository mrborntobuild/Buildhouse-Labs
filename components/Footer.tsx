
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-20 gap-12">
          {/* Brand Section */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-lg font-bold tracking-tight leading-none text-white uppercase">BUILDHOUSE</span>
                <span className="text-[10px] font-medium tracking-[0.25em] text-white/40 leading-none">LABS</span>
              </div>
            </div>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              We turn operational chaos into streamlined workflows—so you can serve more clients, better.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-8">
          <p className="text-white/20 text-[13px] font-medium tracking-tight">
            © 2025 Buildhouse Labs. Built with precision and clarity.
          </p>
          <div className="flex items-center gap-10">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-[0.2em]">TWITTER</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-[0.2em]">GITHUB</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-[0.2em]">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
