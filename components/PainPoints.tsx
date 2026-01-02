import React from 'react';
import { AlertTriangle, TrendingDown, XCircle, SearchX, ArrowRight } from 'lucide-react';
import { PAIN_POINTS } from '../constants';

const icons = [AlertTriangle, SearchX, TrendingDown, XCircle];

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Dramatic Background Elements */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: 'linear-gradient(#FF0000 1px, transparent 1px), linear-gradient(90deg, #FF0000 1px, transparent 1px)', 
             backgroundSize: '60px 60px'
           }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-red/40 bg-brand-red/10 mb-6">
            <AlertTriangle size={18} className="text-brand-red" />
            <span className="text-brand-red text-sm font-bold uppercase tracking-widest">The Hard Truth</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.95]">
            Your Pipeline Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-redDark">Broken</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Most B2B companies rely on <span className="text-white font-semibold">luck, referrals, or expensive ads</span>. Stop gambling with your revenue.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {PAIN_POINTS.map((pain, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="relative bg-gradient-to-br from-brand-charcoal to-brand-black p-8 border border-neutral-800 hover:border-brand-red transition-all duration-500 group hover:shadow-[0_0_50px_rgba(255,0,0,0.15)] hover:-translate-y-2"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-brand-black border border-brand-red/20 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red/10 transition-all duration-300">
                    <Icon className="text-brand-red group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  {/* Glowing effect behind icon */}
                  <div className="absolute inset-0 bg-brand-red/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-brand-red transition-colors duration-300">
                  {pain.title}
                </h3>
                
                <p className="text-brand-gray leading-relaxed text-sm mb-4">
                  {pain.description}
                </p>

                {/* Subtle indicator */}
                <div className="flex items-center gap-2 text-brand-red/50 group-hover:text-brand-red transition-colors text-xs font-semibold uppercase">
                  <span>Sound familiar?</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Impact Statement */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/10 to-transparent blur-xl"></div>
          <div className="relative bg-gradient-to-br from-brand-charcoal to-brand-black border border-brand-red/30 p-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-brand-red"></div>
                <XCircle size={24} className="text-brand-red" />
                <div className="h-px w-12 bg-brand-red"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase">
                The Result? <span className="text-brand-red">Missed Revenue</span> Every Single Month.
              </h3>
              
              <p className="text-brand-gray text-lg mb-6 leading-relaxed">
                While your competitors are booking 30-50 meetings per month with <span className="text-white font-semibold">predictable outbound systems</span>, you're waiting for the phone to ring.
              </p>
              
              <button 
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-brand-redDark transition-all hover:shadow-[0_0_40px_rgba(255,0,0,0.4)] group"
              >
                See The Solution
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;