
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orbit-purple to-orbit-blue opacity-95"></div>
      <div className="glow-effect glow-purple opacity-20 top-20 right-10"></div>
      <div className="glow-effect glow-blue opacity-20 bottom-20 left-10"></div>
      
      <div className="orbit-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 opacity-0 animate-fade-in">
            Give Your Shopify Store a Voice
          </h2>
          <p className="text-xl text-white/80 mb-10 opacity-0 animate-fade-in stagger-1">
            Join hundreds of Shopify brands using AI voice automation to deliver 24/7 customer support while saving $15,000+ per month.
          </p>
          <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in stagger-2">
            <button className="rounded-lg font-medium transition-all duration-300 py-4 px-8 inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-orbit-purple shadow-lg hover:shadow-xl">
              Start Free Trial
              <ArrowRight size={18} />
            </button>
            <button className="rounded-lg font-medium transition-all duration-300 py-4 px-8 inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
