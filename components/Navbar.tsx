import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-black/98 backdrop-blur-xl border-b border-brand-red/20 py-3 shadow-[0_4px_30px_rgba(255,0,0,0.1)]' 
          : 'bg-transparent border-b border-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo - Enhanced */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center group-hover:bg-brand-redDark transition-all duration-300 group-hover:rotate-180">
                <Zap className="text-white" size={20} fill="white" />
              </div>
              <div className="absolute inset-0 bg-brand-red blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white group-hover:text-brand-red transition-colors duration-300">
                Nomad<span className="text-brand-red group-hover:text-white">V</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-gray">
                Growth
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('process')} 
              className="relative text-brand-gray hover:text-white uppercase text-xs font-bold tracking-widest transition-colors group"
            >
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('results')} 
              className="relative text-brand-gray hover:text-white uppercase text-xs font-bold tracking-widest transition-colors group"
            >
              Results
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="relative text-brand-gray hover:text-white uppercase text-xs font-bold tracking-widest transition-colors group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* CTA Button - Enhanced */}
            <div className="pl-4 border-l border-brand-red/20">
              <Button 
                variant="primary" 
                className="py-3 px-6 text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all duration-300 flex items-center gap-2" 
                onClick={() => scrollToSection('cta')}
              >
                <Zap size={14} fill="white" />
                Book Strategy Call
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white hover:text-brand-red transition-colors relative group"
            >
              {mobileMenuOpen ? (
                <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Redesigned */}
      <div 
        className={`lg:hidden fixed top-[73px] left-0 w-full bg-brand-black border-b border-brand-red/20 z-40 transition-all duration-300 ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-1 max-w-7xl mx-auto">
          <button 
            onClick={() => scrollToSection('process')} 
            className="w-full text-left text-brand-gray hover:text-white hover:bg-brand-charcoal py-4 px-4 font-bold uppercase text-sm tracking-wider transition-all border-l-2 border-transparent hover:border-brand-red"
          >
            Our Process
          </button>
          <button 
            onClick={() => scrollToSection('results')} 
            className="w-full text-left text-brand-gray hover:text-white hover:bg-brand-charcoal py-4 px-4 font-bold uppercase text-sm tracking-wider transition-all border-l-2 border-transparent hover:border-brand-red"
          >
            Proven Results
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="w-full text-left text-brand-gray hover:text-white hover:bg-brand-charcoal py-4 px-4 font-bold uppercase text-sm tracking-wider transition-all border-l-2 border-transparent hover:border-brand-red"
          >
            Services & Pricing
          </button>
          
          <div className="pt-4 px-4">
            <Button 
              variant="primary" 
              fullWidth 
              onClick={() => scrollToSection('cta')}
              className="py-4 font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,0,0,0.4)] flex items-center justify-center gap-2"
            >
              <Zap size={16} fill="white" />
              Book Your Strategy Call
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 top-[73px]"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;