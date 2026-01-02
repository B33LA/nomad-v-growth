import React from 'react';
import { SERVICES } from '../constants';

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-brand-charcoal border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            The <span className="text-brand-red">Solution</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl">
            We don't just send emails. We build a multi-channel acquisition ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="relative group overflow-hidden bg-brand-black border border-neutral-800 hover:border-brand-red transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={120} className="text-white" />
              </div>
              
              <div className="p-10 relative z-10">
                <div className="mb-6">
                  <service.icon className="text-brand-red h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">{service.title}</h3>
                <p className="text-brand-gray text-lg leading-relaxed border-l-2 border-brand-charcoal pl-4 group-hover:border-brand-red transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 bg-brand-red w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;