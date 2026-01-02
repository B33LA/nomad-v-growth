import React from 'react';
import Button from './Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(#FF0000 1px, transparent 1px), linear-gradient(90deg, #FF0000 1px, transparent 1px)', 
             backgroundSize: '50px 50px',
             animation: 'gridMove 20s linear infinite'
           }}>
      </div>
      
      {/* Multiple Gradient Overlays for Depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-brand-black/80 to-brand-black"></div>
      <div className="absolute inset-0 z-0 bg-gradient-radial from-brand-red/5 via-transparent to-transparent"></div>

      {/* Floating Red Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-brand-red/40 bg-brand-red/5 backdrop-blur-sm">
          <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Limited Spots Available for Q1 2025</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-6">
          Stop Guessing.<br />
          Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-redDark to-brand-red animate-gradient">Closing.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-2xl md:text-3xl text-brand-gray max-w-4xl mx-auto mb-8 font-light leading-tight">
          We turn your LinkedIn, Email, and Cold Calls into a <span className="text-white font-semibold">predictable pipeline</span> of qualified meetings.
        </p>

        {/* Social Proof / Key Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-brand-gray text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-brand-red" />
            <span>No Long-Term Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-brand-red" />
            <span>Transparent Reporting</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-brand-red" />
            <span>Guaranteed Response Rates</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button 
            variant="primary" 
            className="text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] transition-all" 
            onClick={() => scrollTo('cta')}
          >
            Get Your Free Outbound Audit <ArrowRight size={20} />
          </Button>
          <Button 
            variant="secondary" 
            className="text-lg px-8 py-4 w-full sm:w-auto" 
            onClick={() => scrollTo('process')}
          >
            How It Works
          </Button>
        </div>

        {/* Trust Bar - Industries Served */}
        <div className="border-t border-brand-charcoal/50 pt-10">
          <p className="text-brand-gray text-xs uppercase tracking-widest mb-6 font-semibold">Trusted By Leaders In</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-brand-gray/60 hover:text-brand-gray transition-colors">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-2xl font-black uppercase tracking-tight group-hover:text-brand-red transition-colors">SaaS</span>
              <span className="text-xs text-brand-gray/40">B2B Software</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-2xl font-black uppercase tracking-tight group-hover:text-brand-red transition-colors">Agencies</span>
              <span className="text-xs text-brand-gray/40">Marketing & Sales</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-2xl font-black uppercase tracking-tight group-hover:text-brand-red transition-colors">Consulting</span>
              <span className="text-xs text-brand-gray/40">Professional Services</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="text-2xl font-black uppercase tracking-tight group-hover:text-brand-red transition-colors">Tech</span>
              <span className="text-xs text-brand-gray/40">Enterprise Solutions</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;