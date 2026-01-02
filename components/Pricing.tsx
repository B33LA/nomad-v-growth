import React from 'react';
import Button from './Button';
import { Target, Zap, Rocket, MessageSquare } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Choose Your <span className="text-brand-red">Growth</span> Path
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg">
            Flexible packages designed to scale with your outbound ambitions. Start with one channel or go all-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Single Service */}
          <div className="bg-brand-black border border-neutral-800 p-8 flex flex-col hover:border-brand-red/50 transition-all">
            <div className="mb-6">
              <Target className="text-brand-white mb-4" size={36} />
              <h3 className="text-xl font-bold text-white uppercase">Single Service</h3>
              <p className="text-brand-gray mt-2 text-sm">Focus on one channel</p>
            </div>
            <div className="space-y-3 mb-8 flex-grow text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">LinkedIn Outreach</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Email Campaigns</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Cold Calling</span>
              </div>
              <div className="text-brand-gray text-xs mt-4 italic">
                Pick one channel to dominate
              </div>
            </div>
            <Button variant="secondary" fullWidth onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth'})}>
              Request Quote
            </Button>
          </div>

          {/* Double Service */}
          <div className="bg-brand-black border border-neutral-800 p-8 flex flex-col hover:border-brand-red/50 transition-all">
            <div className="mb-6">
              <Zap className="text-brand-white mb-4" size={36} />
              <h3 className="text-xl font-bold text-white uppercase">Double Service</h3>
              <p className="text-brand-gray mt-2 text-sm">Multi-channel approach</p>
            </div>
            <div className="space-y-3 mb-8 flex-grow text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Any 2 Channels Combined</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Coordinated Messaging</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Unified Campaign Strategy</span>
              </div>
              <div className="text-brand-gray text-xs mt-4 italic">
                2x touchpoints, 2x results
              </div>
            </div>
            <Button variant="secondary" fullWidth onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth'})}>
              Request Quote
            </Button>
          </div>

          {/* Full Package */}
          <div className="bg-brand-black border border-brand-red p-8 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 uppercase">
              Most Popular
            </div>
            <div className="mb-6">
              <Rocket className="text-brand-red mb-4" size={36} />
              <h3 className="text-xl font-bold text-white uppercase">Full Package</h3>
              <p className="text-brand-gray mt-2 text-sm">Complete outbound system</p>
            </div>
            <div className="space-y-3 mb-8 flex-grow text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">LinkedIn + Email + Calling</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Full Campaign Orchestration</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Dedicated Account Manager</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-red mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Weekly Strategy Sessions</span>
              </div>
              <div className="text-brand-gray text-xs mt-4 italic">
                Maximum pipeline velocity
              </div>
            </div>
            <Button variant="primary" fullWidth onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth'})}>
              Request Quote
            </Button>
          </div>

          {/* Content & Engagement */}
          <div className="bg-brand-black border border-neutral-800 p-8 flex flex-col hover:border-brand-red/50 transition-all">
            <div className="mb-6">
              <MessageSquare className="text-brand-white mb-4" size={36} />
              <h3 className="text-xl font-bold text-white uppercase">Content Add-On</h3>
              <p className="text-brand-gray mt-2 text-sm">Boost engagement</p>
            </div>
            <div className="space-y-3 mb-8 flex-grow text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">LinkedIn Content Creation</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Profile Optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-brand-white mt-2 flex-shrink-0"></div>
                <span className="text-brand-white">Engagement Strategy</span>
              </div>
              <div className="text-brand-gray text-xs mt-4 italic">
                Add to any package
              </div>
            </div>
            <Button variant="secondary" fullWidth onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth'})}>
              Request Quote
            </Button>
          </div>

        </div>

        {/* Bottom CTA Section */}
        <div className="bg-brand-black border border-neutral-800 p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Not sure which package fits your needs?</h3>
          <p className="text-brand-gray mb-6 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We'll analyze your current outbound setup and recommend the perfect package to hit your pipeline goals.
          </p>
          <Button variant="primary" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth'})}>
            Schedule Strategy Call
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;