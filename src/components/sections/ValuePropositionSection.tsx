
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import BenefitCard from '@/components/BenefitCard';
import FlowChartAnimation from '@/components/FlowChartAnimation';
import { DollarSign, Phone, ShoppingBag } from 'lucide-react';

const ValuePropositionSection = () => {
  return (
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
  );
};

export default ValuePropositionSection;
