
import React from 'react';
import { Leaf } from 'phosphor-react';

const CaseStudyItem = ({ 
  quote, 
  stats, 
  logo, 
  logoIcon, 
  reversed = false, 
  gradientClass,
  isTymeless = false,
  usePlayfair = false,
  onGetStartedClick
}: { 
  quote: string; 
  stats: { label: string; value: string }[]; 
  logo: string; 
  logoIcon: React.ReactNode; 
  reversed?: boolean;
  gradientClass: string;
  isTymeless?: boolean;
  usePlayfair?: boolean;
  onGetStartedClick?: () => void;
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-16 md:py-28`}>
      {/* Text Content Block */}
      <div className="flex-1 space-y-10">
        <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] text-white max-w-xl tracking-tight">
          "{quote}"
        </h3>
        
        <div className="flex gap-12 md:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{stat.value}</p>
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">{stat.label}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={onGetStartedClick}
          className="px-8 py-3.5 bg-neutral-900 border border-white/10 hover:border-white/20 text-white rounded-full text-sm font-bold transition-all hover:bg-neutral-800 active:scale-95"
        >
          Get started
        </button>
      </div>

      {/* Visual Card Block */}
      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <div 
          className={`relative w-full max-w-[440px] aspect-square rounded-[2.5rem] overflow-hidden group border border-white/5 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-white/5 flex items-center justify-center`}
        >
          {/* Iridescent Gradient Background */}
          <div className={`absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700 ${gradientClass}`}></div>
          
          {/* Subtle Noise Texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          {/* Centered Logo Asset */}
          <div className="relative z-10 flex items-center gap-4 transition-transform duration-700 group-hover:scale-105">
             <div className="drop-shadow-2xl flex items-center justify-center">
              {logoIcon}
             </div>
             <span className={`text-4xl md:text-5xl tracking-tight text-white drop-shadow-xl ${
               isTymeless 
                 ? 'font-tymeless font-serif' 
                 : usePlayfair 
                   ? 'font-playfair font-medium' 
                   : 'md:text-4xl font-bold'
             }`}>
               {logo}
             </span>
          </div>

          {/* Glassy overlay at bottom for depth */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export const CaseStudies: React.FC<{ onGetStartedClick?: () => void }> = ({ onGetStartedClick }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
          Built with Buildhouse
        </h2>
        <p className="text-base md:text-lg text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
          We've built complete solutions for the challenges our clients face.
        </p>
      </div>

      <div className="flex flex-col">
        {/* Tymeless Case Study */}
        <CaseStudyItem 
          quote="It transformed how our staff connects with residents through preserved stories that create lasting impact."
          logo="Tymeless"
          isTymeless={true}
          logoIcon={(
            <Leaf weight="light" className="w-14 h-14 md:w-16 md:h-16 text-primary" />
          )}
          gradientClass="bg-[radial-gradient(circle_at_20%_20%,_#1a1a1a_0%,_#000000_100%)] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_80%_80%,_oklch(0.65_0.15_45),_transparent_60%)] after:opacity-10"
          stats={[
            { label: 'CONVERSION', value: '+50%' },
            { label: 'ROI', value: '+145%' }
          ]}
          onGetStartedClick={onGetStartedClick}
        />

        {/* Purple Studio Case Study */}
        <CaseStudyItem 
          reversed
          quote="Purple Studio transformed our workflow delivering cinema quality content faster while cutting costs."
          logo="Purple Studio"
          usePlayfair={true}
          logoIcon={(
            <div className="w-12 h-12 bg-[#7C3AED] rounded-full shadow-[0_0_15px_rgba(124,58,237,0.4)]"></div>
          )}
          gradientClass="bg-[radial-gradient(circle_at_50%_50%,_#C4B5FD_0%,_#A78BFA_50%,_#8B5CF6_100%)]"
          stats={[
            { label: 'CONVERSION', value: '+120%' },
            { label: 'ROI', value: '+210%' }
          ]}
          onGetStartedClick={onGetStartedClick}
        />
      </div>
    </div>
  );
};
