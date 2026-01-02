import React from 'react';
import { Check, X } from 'lucide-react';

const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black border-b border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16 uppercase tracking-tight">
          Are We A <span className="text-brand-red">Match?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* FOR YOU */}
          <div className="bg-[#0F1115] border border-neutral-800 p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand-white"></div>
             <h3 className="text-2xl font-black text-white mb-8 uppercase flex items-center gap-3">
               <span className="bg-brand-white text-black p-1"><Check size={20} strokeWidth={4} /></span>
               Who This Is For
             </h3>
             <ul className="space-y-6">
                {[
                  "B2B Agencies & Consultants ready to scale",
                  "SaaS Companies with Product-Market Fit",
                  "Offers with High LTV ($3k+ or $2k/mo+)",
                  "Founders tired of relying on referrals"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className="text-brand-gray shrink-0 mt-1" size={20} />
                    <span className="text-lg text-brand-white">{item}</span>
                  </li>
                ))}
             </ul>
          </div>

          {/* NOT FOR YOU */}
          <div className="bg-[#0F1115] border border-neutral-800 p-8 md:p-12 relative overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
             <h3 className="text-2xl font-black text-brand-red mb-8 uppercase flex items-center gap-3">
               <span className="bg-brand-red text-white p-1"><X size={20} strokeWidth={4} /></span>
               Who This Is NOT For
             </h3>
             <ul className="space-y-6">
                {[
                  "eCommerce or B2C businesses",
                  "Companies with no proven case studies",
                  "Low-ticket offers (< $1k)",
                  "Micromanagers who don't trust the process"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <X className="text-brand-red shrink-0 mt-1" size={20} />
                    <span className="text-brand-gray">{item}</span>
                  </li>
                ))}
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Audience;