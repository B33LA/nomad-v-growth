import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-brand-red text-sm font-bold uppercase tracking-widest px-4 py-1 border border-brand-red/30 bg-brand-red/5">
              Our Proven System
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            From First Contact To <span className="text-brand-red">Closed Deal</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            A battle-tested 5-step framework that turns cold prospects into booked meetings. No guesswork, just results.
          </p>
        </div>

        <div className="relative">
            {/* Vertical Progress Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red via-brand-red/50 to-transparent -translate-x-1/2"></div>

            <div className="space-y-16 lg:space-y-24">
                {PROCESS_STEPS.map((step, index) => {
                    const isEven = index % 2 === 0;
                    const isLast = index === PROCESS_STEPS.length - 1;
                    
                    return (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                            {/* Content Card */}
                            <div className="w-full lg:w-[45%]">
                                <div className={`group relative bg-gradient-to-br from-brand-charcoal to-brand-black p-8 border border-neutral-800 hover:border-brand-red/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.1)] ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                                    {/* Glowing Corner Accent */}
                                    <div className={`absolute ${isEven ? 'top-0 left-0' : 'top-0 right-0'} w-12 h-12 border-t-2 border-l-2 border-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className={`absolute ${isEven ? 'bottom-0 right-0' : 'bottom-0 left-0'} w-12 h-12 border-b-2 border-r-2 border-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    
                                    {/* Step Number Badge */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 bg-brand-red/10 border border-brand-red flex items-center justify-center">
                                            <span className="text-2xl font-black text-brand-red">{step.number}</span>
                                        </div>
                                        <div className="h-px flex-grow bg-gradient-to-r from-brand-red/50 to-transparent"></div>
                                    </div>
                                    
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-brand-red transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    
                                    <p className="text-brand-gray leading-relaxed mb-4">
                                        {step.description}
                                    </p>
                                    
                                    {/* Optional: Add deliverables or key points */}
                                    <div className="flex items-center gap-2 text-sm text-brand-red/70 group-hover:text-brand-red transition-colors">
                                        <ArrowRight size={16} />
                                        <span className="font-semibold">Key Deliverable</span>
                                    </div>
                                </div>
                            </div>

                            {/* Center Timeline Indicator (Desktop) */}
                            <div className="hidden lg:flex w-[10%] justify-center items-center z-10">
                                <div className="relative">
                                    {/* Outer Ring */}
                                    <div className="w-8 h-8 rounded-full border-4 border-brand-black bg-brand-red animate-pulse"></div>
                                    {/* Pulsing Effect */}
                                    <div className="absolute inset-0 w-8 h-8 rounded-full bg-brand-red opacity-20 animate-ping"></div>
                                </div>
                            </div>

                            {/* Spacer (Desktop) */}
                            <div className="hidden lg:block w-[45%]"></div>

                            {/* Mobile Arrow Connector */}
                            {!isLast && (
                                <div className="lg:hidden flex justify-center">
                                    <ArrowRight size={32} className="text-brand-red rotate-90" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <div className="inline-block p-8 border border-brand-red/30 bg-gradient-to-br from-brand-red/5 to-transparent">
                <p className="text-white text-xl font-bold mb-2">Ready to see this system in action?</p>
                <p className="text-brand-gray mb-6">Let's map out your custom outbound strategy in a free 30-minute call.</p>
                <button 
                    onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-brand-redDark transition-all hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] inline-flex items-center gap-2"
                >
                    Book Your Strategy Session <ArrowRight size={20} />
                </button>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Process;