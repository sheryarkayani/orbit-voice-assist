
import React from 'react';
import Button from '@/components/Button';
import HeroAnimation from '@/components/HeroAnimation';
import { Mic, Phone, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="glow-effect glow-purple"></div>
      <div className="glow-effect glow-blue"></div>
      
      <div className="orbit-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-purple/10 text-orbit-purple text-sm font-medium mb-4 animate-fade-in">
              <Mic size={14} className="mr-2" />
              AI Voice Assistant for Shopify Stores
            </div>
            <h1 className="orbit-heading mb-6 opacity-0 animate-fade-in">
              <span className="text-gradient">Voice AI</span> That Handles 80% of Customer Queries
            </h1>
            <p className="orbit-subheading opacity-0 animate-fade-in stagger-1">
              Orbit's voice AI answers calls 24/7, handling order tracking, returns, and FAQs—letting your Shopify store scale support without scaling costs.
            </p>
            
            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap gap-3 opacity-0 animate-fade-in stagger-1">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <ShoppingBag size={16} className="mr-2 text-green-500" />
                <span className="text-sm">Shopify Integration</span>
              </div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <Phone size={16} className="mr-2 text-blue-400" />
                <span className="text-sm">24/7 Phone Support</span>
              </div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <Mic size={16} className="mr-2 text-purple-400" />
                <span className="text-sm">Order Tracking</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-in stagger-2">
              <Button variant="primary" size="lg" icon>Start Free Trial</Button>
              <Button variant="outline" size="lg">Book a Demo</Button>
            </div>
            <div className="mt-8 opacity-0 animate-fade-in stagger-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex items-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  No credit card required
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center text-green-600">
                  <ShoppingBag size={16} className="mr-1" />
                  Works with any Shopify store
                </span>
              </div>
            </div>
          </div>
          <div className="opacity-0 animate-fade-in stagger-3 relative">
            <HeroAnimation />
            
            {/* Floating Voice Wave Effect */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-orbit-purple/20 rounded-full flex items-center justify-center animate-pulse z-10">
              <Mic size={24} className="text-orbit-purple" />
              <div className="absolute inset-0 border-2 border-orbit-purple/30 rounded-full animate-ping"></div>
            </div>
            
            {/* Call Stats */}
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg py-2 px-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Phone size={18} className="text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">Calls Handled</div>
                <div className="text-2xl font-bold text-green-600">258/day</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
