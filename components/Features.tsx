
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, X, PlayCircle, Maximize2, Calendar } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  gradient: string;
  isCTA?: boolean;
}

interface FeatureCardProps {
  feature: Feature;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative flex-shrink-0 w-[300px] md:w-[380px] aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 ${feature.isCTA ? 'ring-1 ring-white/20' : ''}`}
    >
      {/* Mesh Background */}
      <div className={`absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700 ${feature.gradient}`}></div>
      
      {/* Icon button */}
      <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-90">
        {feature.isCTA ? <Calendar size={18} /> : <Plus size={18} />}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">{feature.title}</h3>
        <p className="text-sm md:text-base text-white/60 leading-relaxed font-medium line-clamp-2 mb-6 group-hover:text-white/80 transition-colors">
          {feature.description}
        </p>
        
        {/* Subtle CTA at the bottom */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] uppercase tracking-[0.1em] font-bold text-white/40 group-hover:text-white transition-colors">
          <span>{feature.isCTA ? 'Book an appointment' : 'Click to see demo'}</span>
          {feature.isCTA ? <Calendar size={14} className="opacity-40 group-hover:opacity-100" /> : <PlayCircle size={14} className="opacity-40 group-hover:opacity-100" />}
        </div>
      </div>
    </div>
  );
};

interface DemoModalProps {
  feature: Feature;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ feature, onClose }) => {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (feature.isCTA) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl animate-fade-in" 
          onClick={onClose} 
        />
        <div className="relative w-full max-w-2xl bg-[#080808] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-fade-in-up p-8 md:p-12 text-center">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white transition-colors"
          >
            <X size={22} />
          </button>
          <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-600/20">
             <Calendar size={40} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's build together</h2>
          <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
            Schedule a free discovery call to explore how our specialized AI builds can transform your business workflows.
          </p>
          <button className="w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-neutral-200 transition-all active:scale-[0.98]">
            Schedule a free Call
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl animate-fade-in" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-6xl bg-[#080808] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-fade-in-up flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[850px]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white transition-colors"
        >
          <X size={22} />
        </button>

        {/* Visual Side (Larger Demo Area) */}
        <div className={`relative flex-[1.6] ${feature.gradient} flex items-center justify-center overflow-hidden min-h-[350px] md:min-h-[500px]`}>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Main Demo Video/UI Container */}
          <div className="relative z-10 w-[92%] h-[85%] bg-black/40 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden group/demo">
             {/* Fake UI Header */}
             <div className="w-full h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                </div>
                <div className="mx-auto bg-white/5 px-4 py-1 rounded-md text-[10px] text-white/30 font-mono">
                  mono-ai.cloud/demo/{feature.title.toLowerCase().replace(/ /g, '-')}
                </div>
             </div>

             {/* Dynamic Content Area */}
             <div className="flex-1 p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-48 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Maximize2 size={14} className="text-white/40" />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-6 flex-1">
                   <div className="col-span-8 bg-white/5 rounded-2xl border border-white/5 p-6 flex flex-col gap-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                      <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                      <div className="h-4 w-1/2 bg-white/5 rounded-full"></div>
                      <div className="mt-auto h-32 w-full bg-white/5 rounded-xl border border-white/5 animate-pulse"></div>
                   </div>
                   <div className="col-span-4 flex flex-col gap-4">
                      <div className="h-24 bg-white/5 rounded-2xl border border-white/5 animate-pulse"></div>
                      <div className="h-24 bg-white/5 rounded-2xl border border-white/5 animate-pulse delay-75"></div>
                      <div className="flex-1 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 p-4">
                         <div className="h-3 w-full bg-indigo-400/20 rounded-full mb-2"></div>
                         <div className="h-3 w-2/3 bg-indigo-400/20 rounded-full"></div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Play Button Overlay (Simulated) */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-500 cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white scale-90 group-hover/demo:scale-100 transition-transform">
                  <PlayCircle size={40} fill="white" className="text-white" />
                </div>
             </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center opacity-30 pointer-events-none select-none">
            <span className="text-white text-7xl md:text-9xl font-bold tracking-tighter italic opacity-10 uppercase">Simulation</span>
          </div>
        </div>

        {/* Text Side (Compact Sidebar Style) */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-[#080808] border-l border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-8 w-fit">
            <PlayCircle size={12} />
            Live Demo Instance
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            {feature.title}
          </h2>
          
          <p className="text-base md:text-lg text-white/50 leading-relaxed mb-10 font-medium">
            {feature.description} We've built a robust architecture to handle high-concurrency requests while maintaining sub-millisecond latency. 
            <br /><br />
            Explore how our AI models interpret complex datasets to provide the clarity your operations require.
          </p>

          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-neutral-200 transition-all active:scale-[0.98] text-sm md:text-base">
              Start Building Now
            </button>
            <p className="text-center text-[10px] text-white/20 uppercase tracking-widest font-bold">
              Available on Enterprise Tier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('Healthcare Services');
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const industries = [
    'Healthcare Services',
    'Professional Services',
    'Home Services',
    'Advertising & Marketing Agencies',
    'Senior Living & Retirement Homes',
    'And More'
  ];

  const industryData: Record<string, Feature[]> = {
    'Healthcare Services': [
      {
        title: 'Patient Intake & Scheduling Automation',
        description: 'Streamline the patient journey with intelligent intake forms and automated scheduling that reduces wait times and no-shows.',
        gradient: 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-indigo-600 to-cyan-500'
      },
      {
        title: 'Clinical Documentation & Coding',
        description: 'Reduce clinician burnout with AI-driven voice-to-text transcription and automated medical coding for faster, more accurate billing.',
        gradient: 'bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-500 via-emerald-600 to-indigo-700'
      },
      {
        title: 'Staff Scheduling & Labor Optimization',
        description: 'Predict patient volume fluctuations and optimize shifts to ensure high quality care while reducing labor overhead.',
        gradient: 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-800'
      }
    ],
    'Professional Services': [
      {
        title: 'Document Review & Contract Analysis',
        description: 'Instantly identify critical clauses, risk factors, and compliance gaps across high volumes of legal and financial documents.',
        gradient: 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-700 via-blue-900 to-black'
      },
      {
        title: 'Knowledge Base & Expertise Capture',
        description: 'Transform internal documentation and tacit knowledge into a searchable, intelligent assistant for staff onboarding and daily operations.',
        gradient: 'bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-800 via-violet-900 to-blue-950'
      },
      {
        title: 'Client Communication & Reporting Automation',
        description: 'Generate high-fidelity client reports and automate routine correspondence while maintaining a personalized, professional touch.',
        gradient: 'bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-800 via-cyan-900 to-slate-900'
      }
    ],
    'Home Services': [
      {
        title: 'AI Dispatching & Route Optimization',
        description: 'Dynamically assign service calls based on technician skill set, proximity, and real-time traffic to maximize billable hours.',
        gradient: 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600 via-red-700 to-amber-950'
      },
      {
        title: 'Call Center & Lead Qualification',
        description: 'Automated voice and text interaction that qualifies leads and schedules appointments 24/7 without human intervention.',
        gradient: 'bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-stone-700 via-orange-900 to-black'
      },
      {
        title: 'Technician Enablement & Upsell Prompting',
        description: 'Provide on-site staff with real-time equipment history and AI-driven recommendations for relevant service upgrades.',
        gradient: 'bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900 via-indigo-950 to-emerald-900'
      }
    ],
    'Advertising & Marketing Agencies': [
      {
        title: 'Creative Production Acceleration',
        description: 'Scale content generation across all formats with AI that understands brand voice, visual style, and campaign goals.',
        gradient: 'bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-700 via-rose-800 to-indigo-950'
      },
      {
        title: 'Campaign Performance & Reporting Automation',
        description: 'Synthesize data from fragmented channels into actionable insights and client-ready decks in minutes, not days.',
        gradient: 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500 via-orange-700 to-red-950'
      },
      {
        title: 'Media Planning & Audience Intelligence',
        description: 'Predict high-performing audience segments and optimize spend allocation using advanced pattern recognition.',
        gradient: 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-indigo-900 to-violet-950'
      }
    ],
    'Senior Living & Retirement Homes': [
      {
        title: 'Family Communication & Engagement Platform',
        description: 'Automated updates and personalized memory sharing that keeps families connected to their loved ones\' daily life.',
        gradient: 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-indigo-700 to-slate-950'
      },
      {
        title: 'Resident Monitoring & Fall Prevention',
        description: 'Predictive analytics that identify movement changes or activity patterns indicative of health risks or potential falls.',
        gradient: 'bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-600 via-pink-800 to-black'
      },
      {
        title: 'Staff Scheduling & Compliance Documentation',
        description: 'Streamline complex labor management and ensure every care interaction is accurately logged for regulatory compliance.',
        gradient: 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-teal-900 to-blue-950'
      },
      {
        title: 'AI tools for story and memory',
        description: 'Preserve resident history through AI-assisted storytelling and memory cognitive exercises designed to improve quality of life.',
        gradient: 'bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-600 via-purple-800 to-stone-900'
      }
    ],
    'And More': [
      {
        title: "Let's hear from you",
        description: "Schedule a free Call with our specialized engineers to discuss how we can build a custom AI layer for your unique industry needs.",
        gradient: 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-purple-800 to-black',
        isCTA: true
      }
    ]
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const activeFeatures = useMemo(() => industryData[activeTab] || [], [activeTab]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Use Cases</h2>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-10 border-b border-white/5 mb-10">
        {industries.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-white text-black shadow-lg shadow-white/10 scale-105' 
                : 'text-white/40 hover:text-white/70 bg-white/5 border border-white/5 hover:border-white/20'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex-shrink-0 w-4 md:w-0" /> {/* Spacer for start padding */}
        {activeFeatures.map((feature, idx) => (
          <FeatureCard 
            key={`${activeTab}-${idx}`} 
            feature={feature}
            onClick={() => setSelectedFeature(feature)}
          />
        ))}
        <div className="flex-shrink-0 w-4 md:w-0" /> {/* Spacer for end padding */}
      </div>

      {/* Demo Modal */}
      {selectedFeature && (
        <DemoModal 
          feature={selectedFeature} 
          onClose={() => setSelectedFeature(null)} 
        />
      )}
    </div>
  );
};
