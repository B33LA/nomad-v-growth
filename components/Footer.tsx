import React from 'react';
import { COMPANY_NAME, COMPANY_PARENT } from '../constants';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-charcoal pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
              Nomad <span className="text-brand-red">V</span> Growth
            </h3>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
              Performance-driven sales & lead generation. Part of the {COMPANY_PARENT} holding.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li>LinkedIn Outreach</li>
              <li>Cold Email Infrastructure</li>
              <li>SDR-as-a-Service</li>
              <li>B2B Data Building</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-gray">
              <li className="flex items-center gap-2 hover:text-brand-red transition-colors cursor-pointer">
                <Mail size={16} /> growth@nomadv.com
              </li>
              <li className="flex items-center gap-4">
                <a href="#" className="p-2 bg-brand-charcoal hover:bg-brand-red text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-brand-charcoal hover:bg-brand-red text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-charcoal pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-gray">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;