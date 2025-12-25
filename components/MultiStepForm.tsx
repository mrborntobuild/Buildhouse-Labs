import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface FormData {
  firstName: string;
  email: string;
  companyName: string;
  role: string;
  projectNeeds: string;
  phone: string;
  emailOptIn: boolean;
  smsOptIn: boolean;
}

export const MultiStepForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    companyName: '',
    role: '',
    projectNeeds: '',
    phone: '',
    emailOptIn: false,
    smsOptIn: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.firstName && formData.email;
      case 2: return formData.companyName && formData.role;
      case 3: return formData.projectNeeds;
      default: return true;
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add API call here
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else handleSubmit();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl" 
        onClick={onClose} 
      />
      <div className={`relative w-full ${isSubmitted ? 'max-w-4xl' : 'max-w-lg'} bg-[#080808] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl p-8 md:p-10 ${isSubmitted ? 'max-h-[90vh] flex flex-col' : ''}`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/50 border border-white/10 hover:bg-white/10 transition-colors z-10"
        >
          <X size={20} className="text-white" />
        </button>

        {!isSubmitted && (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white/60">Step {step} of {totalSteps}</span>
                <span className="text-sm text-white/60">{Math.round((step / totalSteps) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {step === 1 && "Let's get started"}
              {step === 2 && "Tell us about your company"}
              {step === 3 && "What do you need help with?"}
              {step === 4 && "Almost done"}
            </h2>
            <p className="text-white/50 text-sm mb-8">
              {step === 1 && "We just need a few details"}
              {step === 2 && "Help us understand your organization"}
              {step === 3 && "Describe your project needs"}
              {step === 4 && "Optional information"}
            </p>
          </>
        )}

        {/* Step Content */}
        {isSubmitted ? (
          <div className="flex-1 flex flex-col justify-center items-center space-y-6 overflow-y-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Thank you!</h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                We've received your information. Schedule a call with us to discuss your project.
              </p>
            </div>
            <div className="w-full h-[600px] rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://cal.com/buildhouse-labs/secret"
                className="w-full h-full border-0"
                title="Schedule a meeting"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6 mb-8 min-h-[200px]">
            {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => updateField('companyName', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Your Role *
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="e.g., CTO, Project Manager"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  How can we help? *
                </label>
                <textarea
                  value={formData.projectNeeds}
                  onChange={(e) => updateField('projectNeeds', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Describe your project needs..."
                />
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number <span className="text-white/40">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="+1 (555) 555-5555"
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.emailOptIn}
                    onChange={(e) => updateField('emailOptIn', e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-white focus:ring-2 focus:ring-white/20"
                  />
                  <span className="text-sm text-white/70">Opt into email list for exclusive offerings</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.smsOptIn}
                    onChange={(e) => updateField('smsOptIn', e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-white focus:ring-2 focus:ring-white/20"
                  />
                  <span className="text-sm text-white/70">Opt into SMS and text messages</span>
                </label>
              </div>
            </>
          )}
          </div>
        )}

        {/* Navigation Buttons */}
        {!isSubmitted && (
          <div className="flex gap-3">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <ChevronLeft size={18} />
                Back
              </button>
            )}
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex-1 px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                canProceed()
                  ? 'bg-white text-black hover:bg-white/90 active:scale-95'
                  : 'bg-white/10 text-white/30 cursor-not-allowed'
              }`}
            >
              {step === totalSteps ? 'Submit' : 'Continue'}
              {step < totalSteps && <ChevronRight size={18} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

