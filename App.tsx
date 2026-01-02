import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Results from './components/Results';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Button from './components/Button';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-brand-black text-brand-white font-sans min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <Process />
        <Results />
        <Audience />
        <Pricing />
        <CTA />
        {/* Final CTA Section */}
        <section id="cta" className="py-32 bg-brand-red relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
              Let's Build Your <br/><span className="text-black">Pipeline</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
              Stop guessing. Start closing. Book your strategy call today to see if your offer qualifies for our partner program.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button variant="secondary" className="bg-black text-white hover:bg-neutral-900 border-none text-lg px-12 py-5 shadow-2xl">
                Book Strategy Call
              </Button>
            </div>
            <p className="mt-8 text-white/60 text-sm uppercase tracking-widest font-bold">
              No Obligation. 100% Free Strategy Session.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;