
import React from 'react';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import StepCard from '@/components/StepCard';
import IntegrationAnimation from '@/components/IntegrationAnimation';

const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
