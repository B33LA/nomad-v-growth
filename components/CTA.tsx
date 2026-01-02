import React, { useEffect } from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

const CTA: React.FC = () => {
  useEffect(() => {
    // Load HubSpot Meetings Embed Script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="cta" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Copy */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-block mb-6">
              <span className="text-brand-red text-sm font-bold uppercase tracking-widest px-4 py-1 border border-brand-red/30 bg-brand-red/5">
                Book Your Call
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
              Ready To Fill Your <span className="text-brand-red">Pipeline?</span>
            </h2>

            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              Book a free 30-60 minute strategy call. We'll analyze your current outbound approach and show you exactly how to generate 30-50+ qualified meetings per month.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-red flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white font-semibold">No-Pressure Consultation</p>
                  <p className="text-brand-gray text-sm">We'll assess your needs and see if we're a fit</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-red flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white font-semibold">Custom Outbound Strategy</p>
                  <p className="text-brand-gray text-sm">Get a tailored plan for your specific market</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-red flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white font-semibold">Actionable Next Steps</p>
                  <p className="text-brand-gray text-sm">Walk away with concrete tactics you can implement</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-black border border-neutral-800 p-6">
              <div className="flex items-start gap-3">
                <Calendar className="text-brand-red flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold mb-1">What to Expect:</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    A 30-60 minute video call where we dive deep into your current sales process, identify gaps in your outbound strategy, and map out a custom plan to scale your pipeline. No sales pitch—just value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - HubSpot Booking Embed */}
          <div className="bg-brand-black border border-neutral-800 p-8 lg:p-10 shadow-2xl">
            <h3 className="text-white font-bold text-xl uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red animate-pulse"></span>
              Schedule Your Call
            </h3>

            {/* HubSpot Meetings Embed */}
            <div 
              className="meetings-iframe-container" 
              data-src="https://meetings-eu1.hubspot.com/belmin?embed=true"
              style={{ minHeight: '600px' }}
            ></div>

            <p className="text-brand-gray text-xs text-center mt-6 uppercase tracking-wider">
              🔒 Your information is safe and will never be shared
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;