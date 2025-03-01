
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BenefitCard from '@/components/BenefitCard';
import StepCard from '@/components/StepCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionHeading from '@/components/SectionHeading';
import IntegrationLogos from '@/components/IntegrationLogos';
import HeroAnimation from '@/components/HeroAnimation';
import FlowChartAnimation from '@/components/FlowChartAnimation';
import IntegrationAnimation from '@/components/IntegrationAnimation';
import Button from '@/components/Button';
import { 
  ArrowRight, 
  ChevronRight, 
  DollarSign, 
  Mic, 
  ShoppingBag, 
  Phone, 
  Headphones, 
  Speech, 
  Package,
  Zap,
  MessageSquare,
  HeadphonesIcon, 
  Bot
} from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Set up scroll reveal animations using Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
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
                  <Headphones size={16} className="mr-2 text-blue-400" />
                  <span className="text-sm">24/7 Phone Support</span>
                </div>
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                  <MessageSquare size={16} className="mr-2 text-purple-400" />
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

      {/* Logos Section */}
      <section className="py-12 border-t border-gray-100">
        <div className="orbit-container">
          <IntegrationLogos />
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="features" className="orbit-section relative">
        <div className="orbit-container">
          <SectionHeading 
            title="AI Voice Support That Never Sleeps"
            subtitle="Replace repetitive support calls with an AI voice assistant that understands your products, policies, and customers—all integrated with your Shopify store."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <BenefitCard 
              icon={DollarSign}
              title="Cut support costs by 40%"
              description="Automate phone support for common queries like order status, shipping details, and returns—saving thousands monthly."
              delay={100}
            />
            <BenefitCard 
              icon={Phone}
              title="Handle 500+ daily calls"
              description="Our AI voice assistant answers customer calls 24/7, providing Shopify order information in real-time without human intervention."
              delay={200}
            />
            <BenefitCard 
              icon={ShoppingBag}
              title="2-click Shopify integration"
              description="Connect to your Shopify store instantly with our official app. All product, order, and customer data syncs automatically."
              delay={300}
            />
          </div>
          
          <div className="mt-20 opacity-0 reveal-on-scroll">
            <FlowChartAnimation />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="orbit-section bg-gray-50">
        <div className="orbit-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Shopify Voice AI in 3 Simple Steps"
                subtitle="Deploy your AI voice assistant in under an hour. No technical knowledge required—just connect your Shopify store and go live."
              />
              
              <div className="mt-8 space-y-6">
                <StepCard 
                  number={1}
                  title="Connect your Shopify store"
                  description="One-click OAuth integration imports all your products, orders, customers, and policies."
                  delay={100}
                />
                <StepCard 
                  number={2}
                  title="Train your voice AI assistant"
                  description="Upload your return policy, FAQs, or let Orbit automatically learn from your Shopify store data."
                  delay={200}
                />
                <StepCard 
                  number={3}
                  title="Deploy your phone number"
                  description="Get a dedicated phone line for your AI, or integrate with your existing Shopify store phone system."
                  delay={300}
                />
              </div>
              
              <div className="mt-10 opacity-0 animate-fade-in stagger-4">
                <Button variant="primary" size="lg" icon>
                  Get Started Now
                </Button>
              </div>
            </div>
            
            <div className="opacity-0 reveal-on-scroll">
              <IntegrationAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="orbit-section">
        <div className="orbit-container">
          <SectionHeading 
            title="Trusted by Shopify Store Owners"
            subtitle="See how Orbit's voice AI is helping ecommerce businesses scale their customer support without increasing headcount."
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Orbit's voice AI handled 70% of our Black Friday support calls automatically. Customers got instant answers while my team focused on complex issues."
              author="Sarah Johnson"
              role="CEO"
              company="Fashion Outlet (Shopify Plus)"
              delay={100}
            />
            <TestimonialCard 
              quote="We're a small Shopify store that can now offer 24/7 phone support without hiring night staff. Our customers love getting instant answers at any hour."
              author="Michael Chen"
              role="Operations Director"
              company="Home Goods Co."
              delay={200}
            />
            <TestimonialCard 
              quote="The Shopify integration was seamless. Within a day, Orbit's voice AI knew all our products, shipping policies, and could answer complex customer questions."
              author="Jessica Williams"
              role="Customer Service Manager"
              company="Beauty Essentials"
              delay={300}
            />
          </div>
          
          <div className="mt-16 text-center opacity-0 reveal-on-scroll">
            <a href="#case-studies" className="inline-flex items-center text-orbit-purple font-medium hover:text-orbit-darkPurple transition-colors">
              Read Shopify success stories
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      <Footer />
    </div>
  );
};

export default Index;
