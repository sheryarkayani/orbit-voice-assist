
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
import { ArrowRight, ChevronRight, DollarSign, HeadphonesIcon, Headset, Zap } from 'lucide-react';

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
              <div className="inline-block px-3 py-1 rounded-full bg-orbit-purple/10 text-orbit-purple text-sm font-medium mb-4 animate-fade-in">
                AI Voice Automation for Shopify
              </div>
              <h1 className="orbit-heading mb-6 opacity-0 animate-fade-in">
                Automate 80% of Customer Queries. <span className="text-gradient">Focus on Growth.</span>
              </h1>
              <p className="orbit-subheading opacity-0 animate-fade-in stagger-1">
                Orbit's AI voice assistant handles returns, order tracking, and FAQs for Shopify brands—24/7.
              </p>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Set up in minutes
                  </span>
                </div>
              </div>
            </div>
            <div className="opacity-0 animate-fade-in stagger-3">
              <HeroAnimation />
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
            title="Cut Costs. Boost Satisfaction."
            subtitle="Replace repetitive support tasks with an AI assistant that gets smarter over time while you focus on growing your business."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <BenefitCard 
              icon={DollarSign}
              title="Cut support costs by 40%"
              description="Reduce your customer service team's workload by automating routine inquiries and support requests."
              delay={100}
            />
            <BenefitCard 
              icon={Headset}
              title="Answer 500+ daily queries"
              description="Handle high volumes of customer questions without hiring additional support staff or burning out your team."
              delay={200}
            />
            <BenefitCard 
              icon={Zap}
              title="Integrate with Shopify in 2 clicks"
              description="Seamlessly connects with your Shopify store, automatically importing products, orders, and customer data."
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
                title="Up and Running in One Hour"
                subtitle="No technical knowledge required. Set up Orbit in three simple steps and start providing automated customer support immediately."
              />
              
              <div className="mt-8 space-y-6">
                <StepCard 
                  number={1}
                  title="Connect Orbit to Shopify"
                  description="One-click integration imports all your products, orders, and policies."
                  delay={100}
                />
                <StepCard 
                  number={2}
                  title="Train AI with your FAQs"
                  description="Upload your return policy, FAQs, or let Orbit automatically learn from your store."
                  delay={200}
                />
                <StepCard 
                  number={3}
                  title="Go live in under an hour"
                  description="Implement on your website and phone system with no coding required."
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
            title="Trusted by Growing Brands"
            subtitle="See how Orbit is helping ecommerce businesses scale their customer support operations efficiently."
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Orbit reduced our support tickets by 70% during Black Friday. Our team could focus on complex issues while the AI handled routine questions."
              author="Sarah Johnson"
              role="CEO"
              company="Fashion Brand"
              delay={100}
            />
            <TestimonialCard 
              quote="We've been able to provide 24/7 support without hiring night shift staff. Our customers love getting instant answers at any hour."
              author="Michael Chen"
              role="Operations Director"
              company="Home Goods Co."
              delay={200}
            />
            <TestimonialCard 
              quote="The ROI was immediate. We saw a 40% reduction in support costs within the first month while improving our customer satisfaction scores."
              author="Jessica Williams"
              role="Customer Service Manager"
              company="Beauty Essentials"
              delay={300}
            />
          </div>
          
          <div className="mt-16 text-center opacity-0 reveal-on-scroll">
            <a href="#case-studies" className="inline-flex items-center text-orbit-purple font-medium hover:text-orbit-darkPurple transition-colors">
              Read customer case studies
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
              Scale Support. Save $15k/month.
            </h2>
            <p className="text-xl text-white/80 mb-10 opacity-0 animate-fade-in stagger-1">
              Join hundreds of Shopify brands automating their customer service and focusing on what matters most—growing their business.
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
